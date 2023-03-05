import { Alert } from 'react-native';

import { isNetworkConnected } from '@/helpers';
import {
  createNewChecklist as createLocalChecklist,
  fetchAllChecklist as fetchAllLocalChecklist,
  fetchAllUnsyncedChecklist,
  fetchChecklistById as fetchLocalChecklistById,
  updateChecklist as updateLocalChecklist,
} from '@/services/realm';

import api from '../instance';
import {
  downloadToLocalDatabase,
  parseChecklist,
  parseChecklistRequestData,
} from './helpers';
import { Checklist, ChecklistRequestData } from './typings';

export const fetchChecklists = async (): Promise<Checklist[]> => {
  if (!(await isNetworkConnected())) {
    return fetchAllLocalChecklist();
  }
  const unsyncedChecklists = await fetchAllUnsyncedChecklist();
  return api.get('/checkList').then(response => {
    downloadToLocalDatabase(response.data);
    return unsyncedChecklists.concat(response.data.map(parseChecklist));
  });
};

export const fetchChecklistById = async (
  id: string,
  synced?: boolean,
): Promise<Checklist> => {
  if (!(await isNetworkConnected()) || synced === false) {
    return fetchLocalChecklistById(id);
  }
  return api
    .get('/checkList/' + id)
    .then(response => parseChecklist(response.data));
};

export const createNewChecklist = async (
  farmData: ChecklistRequestData,
): Promise<void> => {
  const parsedData = parseChecklistRequestData(farmData);
  try {
    if (!(await isNetworkConnected())) {
      throw new Error('Unable to save without network connection!');
    }
    await api.post('/checkList', {
      checklists: [parsedData],
    });
  } catch (err) {
    // try to report to some log platform like Sentry.
    // do something to report here...

    // save to local data base to avoid lost data.
    await createLocalChecklist({
      ...farmData,
      cows_head: parsedData.number_of_cows_head,
      milk_produced: parsedData.amount_of_milk_produced,
      created_at: parsedData.created_at,
      updated_at: parsedData.updated_at,
      synced: false,
    });
  }
};

export const updateChecklist = async (
  id: number | string,
  farmData: ChecklistRequestData,
): Promise<void> => {
  const parsedData = { ...parseChecklistRequestData(farmData), _id: undefined };
  try {
    if (!(await isNetworkConnected())) {
      throw new Error('Unable to save without network connection!');
    }
    await api.put('/checkList/' + String(id), parsedData);
  } catch (err) {
    const statusCode = err?.response?.status || 0;
    const errorMessage =
      err?.response?.data?.['message']?.[0]?.message ||
      err?.response?.data?.message;

    // just warning the user.
    if (statusCode >= 400 && statusCode < 500)
      Alert.alert('Error', errorMessage);

    // save to local data base to avoid lost data.
    if (statusCode >= 500 || !err?.response)
      await updateLocalChecklist(String(id), {
        ...farmData,
        cows_head: parsedData.number_of_cows_head,
        milk_produced: parsedData.amount_of_milk_produced,
        created_at: parsedData.created_at,
        updated_at: parsedData.updated_at,
        synced: false,
      });
  }
};
