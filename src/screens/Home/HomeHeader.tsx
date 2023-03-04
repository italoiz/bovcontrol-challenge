import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';

import { Box, Button, Text } from '@/components';

export const HomeHeader = () => {
  return (
    <Box
      row
      justifyContent="space-between"
      alignSelf="stretch"
      marginBottom={32}
    >
      <Text variant="title">Checklists</Text>
      <Button
        title="Adicionar"
        color="secondary"
        leftElement={({ color, size }) => (
          <Icon name="plus" {...{ color, size }} />
        )}
      />
    </Box>
  );
};
