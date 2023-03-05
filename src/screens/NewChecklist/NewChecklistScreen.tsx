import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components/native';

import { Box, PageWrapper } from '@/components';
import { RootStackParamList } from '@/navigation';
import {
  createNewChecklist,
  fetchChecklistById,
  updateChecklist,
} from '@/services';

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
  const route = useRoute<RouteProp<RootStackParamList, 'NewChecklist'>>();

  const form = useForm();

  const submitHandler = useCallback(
    async formData => {
      const shouldPerformEditAction = !!route.params?.checklistId;

      // register new checklist
      if (!shouldPerformEditAction)
        await createNewChecklist({
          ...formData,
          had_supervision: formData.had_supervision === 'yes',
        });

      // edit the checklist
      if (shouldPerformEditAction)
        await updateChecklist(route.params.checklistId, {
          ...formData,
          had_supervision: formData.had_supervision === 'yes',
        });

      navigation.navigate('Home');
    },
    [route.params?.checklistId], // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    (async () => {
      if (!route?.params?.checklistId) return;
      try {
        const checklistData = await fetchChecklistById(
          String(route.params.checklistId),
          route.params.synced,
        );
        const { milk_produced, cows_head, had_supervision, type, ...restData } =
          checklistData;
        form.reset({
          ...restData,
          milk_produced: String(milk_produced),
          cows_head: String(cows_head),
          type: type.toUpperCase(),
          had_supervision: had_supervision ? 'yes' : 'no',
        });
      } catch (err) {
        // TODO
      }
    })();
  }, [route?.params?.checklistId]); // eslint-disable-line react-hooks/exhaustive-deps

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
