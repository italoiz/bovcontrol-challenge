import Realm from 'realm';

import { ChecklistSchema } from './schemas';

export class RealmDB {
  static conn: Realm | null = null;
  static _timeout = null;

  static _config() {
    return {
      path: 'bovcontrol',
      schema: [ChecklistSchema],
      deleteRealmIfMigrationNeeded: true,
    };
  }

  static refreshInstance() {
    if (RealmDB._timeout) clearTimeout(RealmDB._timeout);
    RealmDB._timeout = setTimeout(() => {
      RealmDB.conn.close();
      console.log('Realm connection closed!');
      RealmDB.conn = null;
      RealmDB._timeout = null;
    }, 30 * 1000); // 30 seconds of idle connection
  }

  static async open() {
    if (RealmDB.conn) {
      RealmDB.refreshInstance();
      return RealmDB.conn;
    }
    try {
      console.log('Creating new connection of Realm!');
      RealmDB.conn = await Realm.open(this._config());
      RealmDB.refreshInstance();
      return this.conn;
    } catch (err) {
      console.log(err);
    }
  }
}
