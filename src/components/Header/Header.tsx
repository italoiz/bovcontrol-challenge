import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from '../Box';
import * as S from './styles';

export const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <S.Container paddingTop={insets.top + 12}>
      <S.LogoText>🐮 BovControl</S.LogoText>
      <Box width={40} height={40} borderRadius={40} overflow="hidden">
        <S.AvatarImage />
      </Box>
    </S.Container>
  );
};
