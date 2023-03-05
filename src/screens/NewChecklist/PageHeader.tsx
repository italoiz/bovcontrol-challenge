import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Box, Button, Text } from '@/components';

export const PageHeader = () => {
  const navigation = useNavigation();
  return (
    <Box row justifyContent="space-between" marginBottom={32}>
      <Text variant="title">Novo Checklist</Text>
      <Button
        title="Cancelar"
        color="danger"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Box>
  );
};
