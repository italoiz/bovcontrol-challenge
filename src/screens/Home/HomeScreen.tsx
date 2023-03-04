import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Box, PageWrapper } from '@/components';
import { useChecklists } from '@/hooks';
import { Checklist } from '@/services/api/checklist';

import { ChecklistItem } from './ChecklistItem';
import { HomeHeader } from './HomeHeader';

const renderChecklistItem: ListRenderItem<Checklist> = ({
  item: {
    _id: id,
    farmer: { name: farm_name, city: farm_city },
    to: { name: farmer_name },
    created_at,
  },
}) => (
  <ChecklistItem {...{ id, farmer_name, farm_city, farm_name, created_at }} />
);

export const HomeScreen = () => {
  const { checklists } = useChecklists();
  return (
    <PageWrapper removeVertical>
      <FlatList
        data={checklists}
        renderItem={renderChecklistItem}
        ItemSeparatorComponent={() => <Box height={8} />}
        ListHeaderComponent={<HomeHeader />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 24 }}
      />
    </PageWrapper>
  );
};
