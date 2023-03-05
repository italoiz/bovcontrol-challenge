import Realm from 'realm';

export class ChecklistSchema extends Realm.Object {
  static schema = {
    name: 'Checklist',
    properties: {
      _id: { type: 'string', default: () => Date.now().toString() },
      type: 'string',
      farm_name: 'string',
      farm_city: 'string',
      farmer: 'string',
      supervisor: 'string',
      milk_produced: 'int',
      cows_head: 'int',
      had_supervision: 'bool',
      synced: 'bool?',
      created_at: 'date',
      updated_at: 'date',
    },
    primaryKey: '_id',
  };
}
