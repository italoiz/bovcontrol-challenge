import { RouteProp, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components/native';

import { Box, PageWrapper } from '@/components';
import { useChecklistDetail } from '@/hooks';

import { CellField } from './CellField';
import { PageHeader } from './PageHeader';
import * as S from './styles';

// Estilos globais
const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

export const ChecklistDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ChecklistDetail'>>();
  const { checklist, loading } = useChecklistDetail(route.params.checklistId);
  const {
    farmer,
    to,
    from,
    amount_of_milk_produced,
    number_of_cows_head,
    type,
    had_supervision,
    created_at,
    updated_at,
  } = checklist || {};
  const { name: farm_name, city: farm_city } = farmer || {};
  const { name: farmer_name } = to || {};
  const { name: supervisor_name } = from || {};
  return (
    <Container showsVerticalScrollIndicator={false}>
      <PageWrapper>
        <PageHeader />
        <S.SectionTitle>Dados do fazendeiro</S.SectionTitle>

        <CellField {...{ loading }} label="Nome do Fazendeiro">
          {farmer_name}
        </CellField>

        <Box height={32} />
        <S.SectionTitle>Dados da fazenda</S.SectionTitle>

        <Box row>
          <CellField {...{ loading }} label="Nome da fazena" fillContainer>
            {farm_name}
          </CellField>
          <Box width={12} />
          <CellField {...{ loading }} label="Cidade" fillContainer>
            {farm_city}
          </CellField>
        </Box>
        <Box height={12} />
        <CellField
          {...{ loading }}
          label="Supervisor responsável"
          fillContainer
        >
          {supervisor_name}
        </CellField>
        <Box height={12} />
        <CellField {...{ loading }} label="Tipo de checklist" fillContainer>
          {type}
        </CellField>
        <Box height={12} />
        <Box row>
          <CellField {...{ loading }} label="Leite produzido" fillContainer>
            {amount_of_milk_produced} L
          </CellField>
          <Box width={12} />
          <CellField {...{ loading }} label="Cabeças de Gado" fillContainer>
            {number_of_cows_head}
          </CellField>
        </Box>
        <Box height={12} />
        <CellField
          {...{ loading }}
          label="Houve supervisão no mês atual?"
          fillContainer
        >
          {had_supervision ? 'Sim' : 'Não'}
        </CellField>
        <Box height={12} />
        <Box row>
          {!!created_at && (
            <CellField {...{ loading }} label="Data de criação" fillContainer>
              {format(created_at, 'dd/MM/yyyy')}
            </CellField>
          )}
          {!!updated_at && (
            <React.Fragment>
              <Box width={12} />
              <CellField
                {...{ loading }}
                label="Ultima atualização"
                fillContainer
              >
                {format(updated_at, 'dd/MM/yyyy')}
              </CellField>
            </React.Fragment>
          )}
        </Box>
      </PageWrapper>
    </Container>
  );
};
