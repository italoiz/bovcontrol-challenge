import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

import { Box } from '@/components';
import { useFontResources } from '@/hooks';
import { MainNavigation } from '@/navigation';
import { ThemeProvider } from '@/themes';

const MainContainer = styled(Box)`
  flex: 1;
  background-color: #ffffff;
`;

export const App = () => {
  const isFontsLoaded = useFontResources();
  if (!isFontsLoaded) return null;
  return (
    <NavigationContainer>
      <ThemeProvider>
        <MainContainer>
          <MainNavigation />
        </MainContainer>
      </ThemeProvider>
    </NavigationContainer>
  );
};
