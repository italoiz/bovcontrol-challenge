import { parseISO } from 'date-fns';

import { Checklist as LocalChecklist, getRealm } from '@/services/realm';

import {
  Checklist,
  ChecklistAPIResponse,
  ChecklistRequestData,
} from './typings';

export const parseChecklist = (checklist: ChecklistAPIResponse): Checklist => {
  return {
    _id: checklist._id,
    cows_head: Number(checklist.number_of_cows_head),
    created_at: parseISO(checklist.created_at),
    farm_city: checklist.farmer.city,
    farm_name: checklist.farmer.name,
    farmer: checklist.to.name,
    had_supervision: checklist.had_supervision,
    milk_produced: Number(checklist.amount_of_milk_produced),
    supervisor: checklist.from.name,
    type: checklist.type,
    updated_at: checklist.updated_at ? parseISO(checklist.updated_at) : null,
  };
};

export const parseChecklistRequestData = (data: ChecklistRequestData) => {
  return {
    _id: new Date().getTime().toString(),
    type: data.type,
    amount_of_milk_produced: Number(data.milk_produced),
    number_of_cows_head: Number(data.cows_head),
    had_supervision: data.had_supervision,
    farmer: {
      name: data.farm_name,
      city: data.farm_city,
    },
    from: {
      name: data.supervisor,
    },
    to: {
      name: data.farmer,
    },
    created_at: new Date(),
    updated_at: new Date(),
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
  };
};

export const downloadToLocalDatabase = async (
  data: ChecklistAPIResponse[],
): Promise<void> => {
  const realm = await getRealm();
  const localItems = [
    ...realm.objects<LocalChecklist>('Checklist').toJSON(),
  ].map(item => String(item._id));
  const dataToDownload = data.filter(
    item => !localItems.includes(String(item._id)),
  );
  if (dataToDownload.length) {
    realm.write(() => {
      dataToDownload.forEach(itemData => {
        const parsedData = {
          ...parseChecklist(itemData),
          _id: String(itemData._id),
          synced: true,
        };
        realm.create('Checklist', parsedData);
      });
    });
  }
};
