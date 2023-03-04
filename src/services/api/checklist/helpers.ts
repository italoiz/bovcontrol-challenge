import { parseISO } from 'date-fns';

import { Checklist, ChecklistAPIResponse } from './typings';

export const parseChecklist = (checklist: ChecklistAPIResponse): Checklist => {
  return {
    ...checklist,
    created_at: parseISO(checklist.created_at),
    updated_at: checklist.updated_at ? parseISO(checklist.updated_at) : null,
    number_of_cows_head: Number(checklist.number_of_cows_head),
    amount_of_milk_produced: Number(checklist.amount_of_milk_produced),
  };
};
