import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';

import { Button } from '@/components';

type SaveButtonProps = {
  onSave: () => Promise<void> | void;
};

export const SaveButton = ({ onSave }: SaveButtonProps) => {
  return (
    <Button
      title="Salvar Checklist"
      color="secondary"
      size="large"
      leftElement={({ color, size }) => (
        <Icon name="content-save" {...{ color, size }} />
      )}
      onPress={onSave}
    />
  );
};
