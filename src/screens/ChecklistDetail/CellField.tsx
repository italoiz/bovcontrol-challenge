import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Box, Text } from '@/components';

type CellFieldProps = {
  label: string;
  fillContainer?: boolean;
  loading?: boolean;
};

export const CellField = ({
  label,
  children,
  fillContainer,
  loading,
}: React.PropsWithChildren<CellFieldProps>) => {
  const theme = useTheme();
  return (
    <Box flex={fillContainer ? 1 : undefined} justifyContent="flex-start">
      <Text variant="small" bold color="grey.light">
        {label}
      </Text>
      {loading && (
        <Text>
          <ActivityIndicator
            color={theme.colors.primary.main}
            size="small"
            style={{ marginTop: 8 }}
          />
        </Text>
      )}
      {!loading && (
        <Text bold color="primary">
          {children}
        </Text>
      )}
    </Box>
  );
};
