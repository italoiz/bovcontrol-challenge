import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';

import { defaultTheme } from './default';

export const ThemeProvider = ({ children }: React.PropsWithChildren) => (
  <SafeAreaProvider>
    <SCThemeProvider theme={defaultTheme}>{children}</SCThemeProvider>
  </SafeAreaProvider>
);
