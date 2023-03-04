import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Screens from '@/screens';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: '#fff' },
    }}
  >
    <Stack.Screen name="Home" component={Screens.HomeScreen} />
    <Stack.Screen
      name="ChecklistDetail"
      component={Screens.ChecklistDetailScreen}
    />
    <Stack.Screen name="NewChecklist" component={Screens.NewChecklistScreen} />
  </Stack.Navigator>
);
