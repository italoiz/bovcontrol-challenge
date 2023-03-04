import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from '../Box';
import * as S from './styles';

type HeaderProps = {
  displayBackArrow?: boolean;
};

export const Header = ({ displayBackArrow }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <S.Container paddingTop={insets.top + 12}>
      <Box row alignItems="center">
        {displayBackArrow && (
          <React.Fragment>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" color="#ffffff" size={24} />
            </TouchableOpacity>
            <Box width={8} />
          </React.Fragment>
        )}
        <S.LogoText>🐮 BovControl</S.LogoText>
      </Box>
      <Box width={40} height={40} borderRadius={40} overflow="hidden">
        <S.AvatarImage />
      </Box>
    </S.Container>
  );
};
