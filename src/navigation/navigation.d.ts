type ChecklistDetail = {
  checklistId: number;
  synced?: boolean;
};

export type RootStackParamList = {
  Home: undefined;
  ChecklistDetail: ChecklistDetail;
  NewChecklist: ChecklistDetail | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
