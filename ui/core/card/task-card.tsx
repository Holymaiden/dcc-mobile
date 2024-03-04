import {
  Check,
  Code2,
  Eye,
  Figma,
  Globe,
  Loader,
  Network,
  XCircle,
} from "@tamagui/lucide-icons";
import { useCallback } from "react";
import { Card, H5, Separator, XStack, YStack } from "tamagui";
import { Text } from "../text";
import { taskDate } from "@/core";
import { Task, TaskCategory, TaskStatus } from "@/core/types";

export const TaskCard = ({ data }: { data: Task }) => {
  const taskStatus = useCallback((status: TaskStatus) => {
    switch (status) {
      case "Done":
        return <Check color="$successLight" size="$1.5" />;
      case "In Progress":
        return <Loader color="$blue" size="$1.5" />;
      case "Failed":
        return <XCircle color="$alertLight" size="$1.5" />;
      case "Review":
        return <Eye color="$warningLight" size="$1.5" />;
    }
  }, []);

  const taskCategory = useCallback((category: TaskCategory) => {
    switch (category) {
      case "Design":
        return <Figma color="$blue" size="$1" />;
      case "Program":
        return <Code2 color="$blue" size="$1" />;
      case "Networking":
        return <Network color="$blue" size="$1" />;
      default:
        return <Globe color="$blue" size="$1" />;
    }
  }, []);
  return (
    <XStack>
      <Separator
        vertical
        borderWidth="$0.75"
        borderColor="$blue"
        marginVertical="$10"
      />

      <Card flex={1} borderWidth="$0.25" borderColor="$grayscale100">
        <Card.Header>
          <YStack gap="$2">
            <XStack alignItems="center" justifyContent="space-between">
              <XStack gap="$2" alignItems="center">
                {taskCategory(data.category)}
                <H5 color="$blue">{data.title}</H5>
              </XStack>
              {taskStatus(data.status)}
            </XStack>
            <Text fontSize="$2">{data.description}</Text>
          </YStack>
        </Card.Header>
        <Card.Footer
          paddingHorizontal="$4"
          paddingBottom="$4"
          justifyContent="space-between"
        >
          <Text
            color="$blue"
            fontSize="$2"
            style={{ fontFamily: "ManropeSemiBold" }}
          >
            Priority {data.priority}
          </Text>
          <Text color="$blue" fontSize="$2">{`${taskDate(
            data.dateFrom
          )} - ${taskDate(data.dateTo)}`}</Text>
        </Card.Footer>
      </Card>
    </XStack>
  );
};
