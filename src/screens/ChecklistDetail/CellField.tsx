import React from 'react';

import { Box, Text } from '@/components';

type CellFieldProps = {
  label: string;
  fillContainer?: boolean;
};

export const CellField = ({
  label,
  children,
  fillContainer,
}: React.PropsWithChildren<CellFieldProps>) => (
  <Box flex={fillContainer ? 1 : undefined}>
    <Text variant="small" bold color="grey.light">
      {label}
    </Text>
    <Text bold color="primary">
      {children}
    </Text>
  </Box>
);
