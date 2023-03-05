import { parseISO } from 'date-fns';

import {
  Checklist,
  ChecklistAPIResponse,
  NewChecklistRequestData,
} from './typings';

export const parseChecklist = (checklist: ChecklistAPIResponse): Checklist => {
  return {
    ...checklist,
    created_at: parseISO(checklist.created_at),
    updated_at: checklist.updated_at ? parseISO(checklist.updated_at) : null,
    number_of_cows_head: Number(checklist.number_of_cows_head),
    amount_of_milk_produced: Number(checklist.amount_of_milk_produced),
  };
};

export const parseChecklistRequestData = (data: NewChecklistRequestData) => {
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
      name: data.supervisor_name,
    },
    to: {
      name: data.farmer_name,
    },
    created_at: new Date(),
    updated_at: new Date(),
    location: {
      latitude: -23.5,
      longitude: -46.6,
    },
  };
};
