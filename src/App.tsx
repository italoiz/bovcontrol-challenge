import styled from 'styled-components/native';

import { Box } from '@/components';
import { HomeScreen } from '@/screens';
import { ThemeProvider } from '@/themes';

import useFontResources from './hooks/useFontResources';

const MainContainer = styled(Box)`
  flex: 1;
  background-color: #ffffff;
`;

export const App = () => {
  const isFontsLoaded = useFontResources();
  if (!isFontsLoaded) return null;
  return (
    <ThemeProvider>
      <MainContainer>
        <HomeScreen />
      </MainContainer>
    </ThemeProvider>
  );
};
