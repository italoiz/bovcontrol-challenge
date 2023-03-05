import { fetch } from '@react-native-community/netinfo';

export const isNetworkConnected = async () => {
  const state = await fetch();
  return state.isConnected;
};
