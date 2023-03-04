import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Box, Header, PageWrapper } from '@/components';

import { ChecklistItem } from './ChecklistItem';
import { HomeHeader } from './HomeHeader';

// Estilos globais
const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const HomeScreen = () => {
  return (
    <Container>
      <Header />
      <PageWrapper>
        <HomeHeader />
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={() => <ChecklistItem />}
          ItemSeparatorComponent={() => <Box height={8} />}
        />
      </PageWrapper>
    </Container>
  );
};
