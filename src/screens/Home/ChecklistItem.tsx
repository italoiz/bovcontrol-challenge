import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components/native';

import { Box, Text } from '@/components';

type ChecklistItemProps = {
  farmer_name: string;
  farm_name: string;
  farm_city: string;
  created_at: Date;
};

const Container = styled(Box).attrs({ row: true })`
  padding: 12px;
  background-color: #f4f4f4;
  border-radius: 4px;
`;

export const ChecklistItem = ({
  farm_city,
  farmer_name,
  farm_name,
  created_at,
}: ChecklistItemProps) => {
  return (
    <Container>
      <Box flex={1}>
        <Text color="primary" bold>
          {farmer_name}
        </Text>
        <Text color="primary" variant="small">
          {farm_name} - {farm_city}
        </Text>
      </Box>
      <Box>
        <Text variant="tiny" color="grey" textAlign="center" bold>
          criado em
        </Text>
        <Text variant="small" color="grey" textAlign="center" bold>
          {format(created_at, 'dd/MM/yyyy')}
        </Text>
      </Box>
    </Container>
  );
};
