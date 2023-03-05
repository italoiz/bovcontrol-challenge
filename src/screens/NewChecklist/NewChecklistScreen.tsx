import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components/native';

import { Box, PageWrapper } from '@/components';
import { createNewChecklist } from '@/services';

import { FarmDataForm } from './FarmDataForm';
import { FarmerDataForm } from './FarmerDataForm';
import { PageHeader } from './PageHeader';
import { SaveButton } from './SaveButton';
import * as S from './styles';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

export const NewChecklistScreen = () => {
  const navigation = useNavigation();

  const form = useForm({
    defaultValues: { had_supervision: 'yes', type: 'bpa' },
  });

  const submitHandler = useCallback(async formData => {
    await createNewChecklist({
      ...formData,
      had_supervision: formData.had_supervision === 'yes',
    });
    navigation.navigate('Home');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FormProvider {...form}>
      <Container showsVerticalScrollIndicator={false}>
        <PageWrapper>
          <PageHeader />

          <S.SectionTitle>Dados do fazendeiro</S.SectionTitle>
          <FarmerDataForm />

          <Box marginTop={32} />

          <S.SectionTitle>Dados da fazenda</S.SectionTitle>
          <FarmDataForm />

          <Box height={32} />

          <SaveButton onSave={form.handleSubmit(submitHandler)} />
        </PageWrapper>
      </Container>
    </FormProvider>
  );
};
