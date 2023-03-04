import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

// Estilos globais
export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #212121;
  margin: 20px 0px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #212121;
  margin-right: 10px;
`;

// Tela inicial
export const ChecklistItem = styled.TouchableOpacity`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ChecklistItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #212121;
`;

export const ChecklistItemSubtitle = styled.Text`
  font-size: 16px;
  color: #212121;
`;

export const ChecklistItemDate = styled.Text`
  font-size: 14px;
  color: #9e9e9e;
`;

export const AddButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
