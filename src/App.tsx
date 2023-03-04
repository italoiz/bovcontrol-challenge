import styled from 'styled-components/native';

import { Box } from '@/components';
import { ThemeProvider } from '@/themes';

const MainContainer = styled(Box)`
  flex: 1;
  background-color: #ffffff;
`;

export const App = () => (
  <ThemeProvider>
    <MainContainer>{/* TODO */}</MainContainer>
  </ThemeProvider>
);
