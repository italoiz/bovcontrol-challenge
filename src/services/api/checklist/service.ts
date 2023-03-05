import api from '../instance';
import { parseChecklist, parseChecklistRequestData } from './helpers';
import { Checklist, NewChecklistRequestData } from './typings';

export const fetchChecklists = (): Promise<Checklist[]> => {
  return api
    .get('/checkList')
    .then(response => response.data.map(parseChecklist));
};

export const fetchChecklistById = (id: string): Promise<Checklist> => {
  return api
    .get('/checkList/' + id)
    .then(response => parseChecklist(response.data));
};

export const createNewChecklist = async (
  farmData: NewChecklistRequestData,
): Promise<void> => {
  await api
    .post('/checkList', {
      checklists: [parseChecklistRequestData(farmData)],
    })
    .catch(err => {
      console.log(JSON.stringify(err?.response?.data, null, 2));
      throw err;
    });
};
