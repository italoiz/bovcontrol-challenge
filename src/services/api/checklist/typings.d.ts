type Farmer = {
  name: string;
  city: string;
};

type Person = {
  name: string;
};

type Location = {
  latitude: number;
  longitude: number;
};

export type ChecklistAPIResponse = {
  id: number;
  type: string;
  amount_of_milk_produced: number;
  farmer: Farmer;
  from: Person;
  to: Person;
  number_of_cows_head: string;
  had_supervision: boolean;
  location: Location;
  created_at: string;
  updated_at: string;
};

export type Checklist = {
  _id: number;
  cows_head: number;
  created_at: Date;
  farm_city: string;
  farm_name: string;
  farmer: string;
  had_supervision: boolean;
  milk_produced: number;
  supervisor: string;
  type: string;
  updated_at: Date;
  synced?: boolean;
};

export type ChecklistRequestData = {
  farmer: string;
  farm_city: string;
  farm_name: string;
  supervisor: string;
  type: string;
  milk_produced: string;
  cows_head: string;
  had_supervision: boolean;
};
