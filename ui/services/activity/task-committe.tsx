import { AccordionCommitte, CategoryButton, View } from '@core';
import React from 'react';
import { useMemo, useState } from 'react';
import { H5, ScrollView, XStack, YStack } from 'tamagui';

import type { Committe, CommitteTaskStatus } from '@/core/types';

const status: (CommitteTaskStatus | 'All')[] = ['All', 'In Progress', 'Done'];

const committes: Committe[] = [
  {
    id: '1',
    name: 'New Member 2024',
    description: 'This committe is for new members of the organization',
    theme: 'For New Member',
    date_start: '2023-10-01',
    date_end: '2024-03-10',
    status: 'In Progress',
  },
  {
    id: '2',
    name: 'Pelatihan Daerah',
    description:
      'Pelatihan Daerah untuk masyarakat umum dan masyarakat kabupaten',
    date_start: '2023-10-01',
    date_end: '2024-03-10',
    status: 'Done',
  },
];

export const TaskCommitte = () => {
  const [active, setActive] = useState<CommitteTaskStatus | 'All'>('All');

  const handleActive = (data: CommitteTaskStatus | 'All') => {
    setActive(data);
  };

  const getCommittes = useMemo(() => {
    if (active === 'All') return committes;
    return committes.filter((data) => data.status === active);
  }, [active]);

  return (
    <YStack gap="$4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <XStack gap="$4">
          {status.map((data) => (
            <CategoryButton
              key={data}
              title={data}
              active={active === data}
              onPress={() => handleActive(data)}
            />
          ))}
        </XStack>
      </ScrollView>
      <YStack gap="$4">
        {getCommittes.length > 0 ? (
          <AccordionCommitte committes={getCommittes} />
        ) : (
          <View alignItems="center">
            <H5 color="$grayscale700">There is no task</H5>
          </View>
        )}
      </YStack>
    </YStack>
  );
};
