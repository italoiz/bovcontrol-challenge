import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import styled from 'styled-components/native';

import { Box, Button, PageWrapper, RadioButton, TextField } from '@/components';

import { PageHeader } from './PageHeader';
import * as S from './styles';

// Estilos globais
const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

export const NewChecklistScreen = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <PageWrapper>
        <PageHeader />
        <S.SectionTitle>Dados do fazendeiro</S.SectionTitle>

        <TextField label="Nome do fazendeiro" placeholder="Nome completo" />

        <Box marginTop={32} />
        <S.SectionTitle>Dados da fazenda</S.SectionTitle>

        <Box row>
          <TextField
            label="Nome da fazenda"
            placeholder="Minha fazendinha"
            fillContainer
          />
          <Box width={12} />
          <TextField label="Cidade" placeholder="São Paulo" fillContainer />
        </Box>
        <Box height={12} />
        <TextField
          label="Nome do supervisor"
          placeholder="Digite o nome do supervisor da fazenda"
        />
        <Box height={12} />
        <RadioButton
          label="Tipo de checklist"
          options={[
            { label: 'BPA', value: 'bpa' },
            { label: 'Antibiótico', value: 'antibiotico' },
            { label: 'BPF', value: 'bpf' },
          ]}
        />
        <Box height={12} />
        <Box row>
          <TextField
            label="Leite produzido"
            placeholder="Total em litros"
            fillContainer
          />
          <Box width={12} />
          <TextField
            label="Cabeças de Gado atual"
            placeholder="1200"
            fillContainer
          />
        </Box>
        <Box height={12} />
        <RadioButton
          label="Houve supervisão no mês atual?"
          options={[
            { label: 'Sim', value: 'yes' },
            { label: 'Não', value: 'no' },
          ]}
        />
        <Box height={32} />
        <Button
          title="Salvar Checklist"
          color="secondary"
          size="large"
          leftElement={({ color, size }) => (
            <Icon name="content-save" {...{ color, size }} />
          )}
        />
      </PageWrapper>
    </Container>
  );
};
