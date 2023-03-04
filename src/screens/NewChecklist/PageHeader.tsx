import React from 'react';

import { Box, Button, Text } from '@/components';

export const PageHeader = () => {
  return (
    <Box row justifyContent="space-between" marginBottom={32}>
      <Text variant="title">Novo Checklist</Text>
      <Button title="Cancelar" color="danger" />
    </Box>
  );
};
