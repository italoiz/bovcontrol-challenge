export type NewChecklistData = {
  farm_name: string;
  farm_city: string;
  farmer: string;
  supervisor: string;
  milk_produced: number;
  cows_head: number;
  had_supervision: boolean;
  created_at: Date;
  updated_at?: Date;
  type: string;
  synced?: boolean;
};

export type Checklist = {
  id: string;
  _id: number;
  farm_name: string;
  farm_city: string;
  farmer: string;
  supervisor: string;
  milk_produced: number;
  cows_head: number;
  had_supervision: boolean;
  created_at: Date;
  updated_at: Date;
  type: string;
};
