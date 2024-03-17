import { CategoryButton, TaskCard, View } from '@core';
import React from 'react';
import { useMemo, useState } from 'react';
import { H5, ScrollView, XStack, YStack } from 'tamagui';

import type { Task, TaskStatus } from '@/core/types';

const status: (TaskStatus | 'All')[] = [
  'All',
  'To do',
  'In Progress',
  'Review',
  'Done',
  'Failed',
];

const tasks: Task[] = [
  {
    id: '1',
    title: 'UI Design',
    description:
      'User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms e.g., voice-controlled interfaces.',
    priority: 'High',
    dateFrom: '2022-01-01',
    dateTo: '2022-02-03',
    status: 'Done',
    category: 'Design',
  },
  {
    id: '2',
    title: 'Laravel Task',
    description:
      'Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of developmentby easing common tasks used in the majority of web projects, such as authentication.',
    priority: 'Medium',
    dateFrom: '2022-01-01',
    dateTo: '2022-02-03',
    status: 'In Progress',
    category: 'Program',
  },
];

export const TaskPriority = () => {
  const [active, setActive] = useState<TaskStatus | 'All'>('All');

  const handleActive = (data: TaskStatus | 'All') => {
    setActive(data);
  };

  const getTasks = useMemo(() => {
    if (active === 'All') return tasks;
    return tasks.filter((data) => data.status === active);
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
        {getTasks.length > 0 ? (
          getTasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <View alignItems="center">
            <H5 color="$grayscale700">There is no task</H5>
          </View>
        )}
      </YStack>
    </YStack>
  );
};
