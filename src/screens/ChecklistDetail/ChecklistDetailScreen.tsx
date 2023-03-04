import React from 'react';
import styled from 'styled-components/native';

import { Box, Header, PageWrapper } from '@/components';

import { CellField } from './CellField';
import { PageHeader } from './PageHeader';
import * as S from './styles';

// Estilos globais
const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

export const ChecklistDetailScreen = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header />
      <PageWrapper>
        <PageHeader />
        <S.SectionTitle>Dados do fazendeiro</S.SectionTitle>

        <CellField label="Nome do Fazendeiro">Italo Andrade</CellField>

        <Box height={32} />
        <S.SectionTitle>Dados da fazenda</S.SectionTitle>

        <Box row>
          <CellField label="Nome da fazena" fillContainer>
            Minha fazendinha
          </CellField>
          <Box width={12} />
          <CellField label="Cidade" fillContainer>
            São Paulo
          </CellField>
        </Box>
        <Box height={12} />
        <CellField label="Supervisor responsável" fillContainer>
          Jonh Doe
        </CellField>
        <Box height={12} />
        <CellField label="Tipo de checklist" fillContainer>
          Antibiótico
        </CellField>
        <Box height={12} />
        <Box row>
          <CellField label="Leite produzido" fillContainer>
            400 L
          </CellField>
          <Box width={12} />
          <CellField label="Cabeças de Gado" fillContainer>
            1200
          </CellField>
        </Box>
        <Box height={12} />
        <CellField label="Houve supervisão no mês atual?" fillContainer>
          Sim
        </CellField>
        <Box height={12} />
        <Box row>
          <CellField label="Data de criação" fillContainer>
            03/03/2023
          </CellField>
          <Box width={12} />
          <CellField label="Ultima atualização" fillContainer>
            04/03/2023
          </CellField>
        </Box>
      </PageWrapper>
    </Container>
  );
};
