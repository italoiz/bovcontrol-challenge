import styled from 'styled-components/native';

import { Text } from '@/components';

export const SectionTitle = styled(Text).attrs({
  variant: 'subtitle',
})`
  margin-bottom: 12px;
  text-decoration: underline;
`;
