import api from '../instance';
import { parseChecklist } from './helpers';
import { Checklist } from './typings';

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
