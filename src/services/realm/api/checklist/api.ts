import { getRealm } from '@/services/realm/realm-api';

import { ChecklistSchema } from '../../schemas';
import { Checklist, NewChecklistData } from './typings';

export const createNewChecklist = async (
  data: NewChecklistData | NewChecklistData[],
) => {
  const realm = await getRealm();
  try {
    realm.write(() => realm.create(ChecklistSchema, data));
  } catch (err) {
    console.log(err);
  }
};

export const fetchAllUnsyncedChecklist = async (): Promise<Checklist[]> => {
  const realm = await getRealm();
  // realm.write(() => realm.deleteAll());
  const result = [
    ...(realm
      .objects<Checklist>('Checklist')
      .filtered('synced != true')
      .toJSON() as Checklist[]),
  ];
  return result;
};

export const fetchAllChecklist = async (): Promise<Checklist[]> => {
  const realm = await getRealm();
  return [
    ...(realm
      .objects<Checklist>('Checklist')
      .sorted('synced', false)
      .toJSON() as Checklist[]),
  ];
};

export const fetchChecklistById = async (id: string): Promise<Checklist> => {
  const realm = await getRealm();
  return realm
    .objectForPrimaryKey('Checklist', String(id))
    .toJSON() as Checklist;
};

export const updateChecklist = async (
  id: string,
  data: NewChecklistData,
): Promise<void> => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      const checklist = realm.objectForPrimaryKey('Checklist', String(id));
      if (checklist) Object.assign(checklist, { ...data, _id: String(id) });
    });
  } catch (err) {
    console.log(err);
  }
};

export const syncRecordById = async (id: string): Promise<void> => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      const checklist = realm.objectForPrimaryKey('Checklist', String(id));
      if (checklist) Object.assign(checklist, { synced: true });
    });
  } catch (err) {
    console.log(err);
  }
};
