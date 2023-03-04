import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { Text } from '../Text';

const Container = styled(Animated.View)`
  background-color: ${props => props.theme.colors.danger.main};
  padding: 4px;
  position: absolute;
  width: 100%;
  bottom: 0px;
`;

const APPEAR_WARNING_OPTIONS = { toValue: 0, useNativeDriver: true };
const DISAPPEAR_WARNING_OPTIONS = { toValue: 50, useNativeDriver: true };

export const NetworkActivityAlert = () => {
  const offset = useRef(new Animated.Value(50)).current;
  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.isConnected)
      Animated.timing(offset, DISAPPEAR_WARNING_OPTIONS).start();
    else Animated.timing(offset, APPEAR_WARNING_OPTIONS).start();
  }, [netInfo.isConnected, offset]);

  return (
    <Container style={{ transform: [{ translateY: offset }] }}>
      <Text variant="tiny" textAlign="center" color="white">
        Você está em modo offline
      </Text>
    </Container>
  );
};
