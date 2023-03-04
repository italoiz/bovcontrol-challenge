import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Box, Button, Text } from '@/components';

export const HomeHeader = () => {
  const navigation = useNavigation();
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
        onPress={() => navigation.navigate('NewChecklist')}
        leftElement={({ color, size }) => (
          <Icon name="plus" {...{ color, size }} />
        )}
      />
    </Box>
  );
};
