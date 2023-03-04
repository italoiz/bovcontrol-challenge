type RootStackParamList = {
  Home: undefined;
  ChecklistDetail: { checklistId: string };
  NewChecklist: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {} // eslint-disable-line
  }
}
