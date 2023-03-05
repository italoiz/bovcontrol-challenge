import React from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';

import { Box, PageWrapper } from '@/components';
import { useChecklists } from '@/hooks';
import { Checklist } from '@/services/api/checklist';

import { ChecklistItem } from './ChecklistItem';
import { HomeHeader } from './HomeHeader';

const renderChecklistItem: ListRenderItem<Checklist> = ({
  item: {
    _id: id,
    farm_name,
    farm_city,
    farmer: farmer_name,
    created_at,
    synced,
  },
}) => (
  <ChecklistItem
    {...{ id, farmer_name, farm_city, farm_name, created_at, synced }}
  />
);

export const HomeScreen = () => {
  const { checklists, loading, refresh } = useChecklists();
  return (
    <PageWrapper removeVertical>
      <FlatList
        data={checklists}
        renderItem={renderChecklistItem}
        ItemSeparatorComponent={() => <Box height={8} />}
        ListHeaderComponent={<HomeHeader />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 24 }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
      />
    </PageWrapper>
  );
};
