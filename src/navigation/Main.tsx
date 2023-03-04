import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from '@/components';
import * as Screens from '@/screens';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: { backgroundColor: '#fff' },
      presentation: 'card',
      header: ({ back }) => <Header displayBackArrow={!!back} />,
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
