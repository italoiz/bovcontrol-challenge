export type RootStackParamList = {
  Home: undefined;
  ChecklistDetail: undefined;
  NewChecklist: undefined;
};

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}
