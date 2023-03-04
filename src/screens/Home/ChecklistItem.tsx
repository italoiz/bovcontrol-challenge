import React from 'react';
import styled from 'styled-components/native';

import { Box, Text } from '@/components';

const Container = styled(Box).attrs({ row: true })`
  padding: 12px;
  background-color: #f4f4f4;
  border-radius: 4px;
`;

export const ChecklistItem = () => {
  return (
    <Container>
      <Box flex={1}>
        <Text color="primary" bold>
          Italo Andrade
        </Text>
        <Text color="primary" variant="small">
          Minha fazendinha - São Paulo
        </Text>
      </Box>
      <Box>
        <Text variant="tiny" color="grey" textAlign="center" bold>
          criado em
        </Text>
        <Text variant="small" color="grey" textAlign="center" bold>
          03/03/2022
        </Text>
      </Box>
    </Container>
  );
};
