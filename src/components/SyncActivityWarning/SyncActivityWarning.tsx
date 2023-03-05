import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, Animated } from 'react-native';
import styled from 'styled-components/native';

import {
  createNewChecklist,
  fetchChecklistById,
  updateChecklist,
} from '@/services';
import { fetchAllUnsyncedChecklist, syncRecordById } from '@/services/realm';

import { Text } from '../Text';

const Container = styled(Animated.View)`
  background-color: ${props => props.theme.colors.secondary.main};
  padding: 8px;
  position: absolute;
  width: 100%;
  bottom: 0px;
`;

const APPEAR_WARNING_OPTIONS = { toValue: 0, useNativeDriver: true };
const DISAPPEAR_WARNING_OPTIONS = { toValue: 50, useNativeDriver: true };

export const SyncActivityWarning = () => {
  const offset = useRef(new Animated.Value(50)).current;
  const netInfo = useNetInfo();

  useEffect(() => {
    function hideWarning() {
      Animated.timing(offset, DISAPPEAR_WARNING_OPTIONS).start();
    }

    function showWarning() {
      Animated.timing(offset, APPEAR_WARNING_OPTIONS).start();
    }

    async function syncHandler() {
      const checklist = await fetchAllUnsyncedChecklist();
      const hasNetwork = netInfo.isConnected;

      if (hasNetwork && !!checklist.length) {
        showWarning();

        for (const item of checklist) {
          console.log({ item });
          const itemId = String(item._id);
          const onlineResource = await fetchChecklistById(itemId);

          if (onlineResource?._id) {
            await updateChecklist(itemId, {
              ...item,
              milk_produced: String(item.milk_produced),
              cows_head: String(item.milk_produced),
            });
            syncRecordById(itemId);
          } else {
            await createNewChecklist({
              ...item,
              milk_produced: String(item.milk_produced),
              cows_head: String(item.milk_produced),
            });
            syncRecordById(itemId);
          }
        }

        hideWarning();
      }
    }

    syncHandler();
  }, [netInfo.isConnected, offset]);

  return (
    <Container
      style={{
        transform: [{ translateY: offset }],
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator
        size="small"
        color="white"
        style={{ marginRight: 8 }}
      />
      <Text variant="tiny" textAlign="center" color="white">
        Sincronizando dados
      </Text>
    </Container>
  );
};
