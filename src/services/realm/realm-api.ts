import { RealmDB } from './realm-connection';

export const getRealm = async () => RealmDB.open();
