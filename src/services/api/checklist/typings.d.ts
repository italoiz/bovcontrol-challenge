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
  _id: number;
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
  type: string;
  amount_of_milk_produced: number;
  farmer: Farmer;
  from: Person;
  to: Person;
  number_of_cows_head: number;
  had_supervision: boolean;
  location: Location;
  created_at: Date;
  updated_at: Date;
};
