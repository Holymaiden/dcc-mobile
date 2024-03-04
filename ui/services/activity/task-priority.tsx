import type { Task, TaskStatus } from "@/core/types";
import { CategoryButton, TaskCard, View } from "@core";
import { useState } from "react";
import { H5, ScrollView, XStack, YStack } from "tamagui";

const status: (TaskStatus | "All")[] = [
  "All",
  "To do",
  "In Progress",
  "Review",
  "Done",
  "Failed",
];

export const TaskPriority = ({
  task,
  isLoading,
  isErorr,
}: {
  task: Task[];
  isLoading: boolean;
  isErorr: boolean;
}) => {
  const [active, setActive] = useState<TaskStatus | "All">("All");

  const handleActive = (data: TaskStatus | "All") => {
    setActive(data);
  };

  if (isLoading) return <></>;
  if (isErorr) return <></>;

  task = task.filter((data) => {
    if (active === "All") return data;
    return data.status === active;
  });

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
        {task.length > 0 ? (
          task.map((data) => <TaskCard key={data.id} data={data} />)
        ) : (
          <View alignItems="center">
            <H5 color="$grayscale700">There is no task</H5>
          </View>
        )}
      </YStack>
    </YStack>
  );
};
