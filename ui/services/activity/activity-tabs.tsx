import {
  AnimatePresence,
  Separator,
  SizableText,
  Tabs,
  TabsContentProps,
  YStack,
} from "tamagui";
import { useState } from "react";

import { TaskCommitte } from "./task-committe";
import { TaskPriority } from "./task-priority";
import { Task } from "@/core/types";

type TabActiveProps = "task-priority" | "task-committe";

const datas: Task[] = [
  {
    id: "1",
    title: "UI Design",
    description:
      "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms e.g., voice-controlled interfaces.",
    priority: "High",
    dateFrom: "2022-01-01",
    dateTo: "2022-02-03",
    status: "Done",
    category: "Design",
  },
  {
    id: "2",
    title: "Laravel Task",
    description:
      "Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of developmentby easing common tasks used in the majority of web projects, such as authentication.",
    priority: "Medium",
    dateFrom: "2022-01-01",
    dateTo: "2022-02-03",
    status: "In Progress",
    category: "Program",
  },
];

export const ActivityTabs = () => {
  const [active, setActive] = useState<TabActiveProps>("task-priority");

  const getContent = (active: TabActiveProps) => {
    switch (active) {
      case "task-priority":
        return <TaskPriority task={datas} isLoading={false} isErorr={false} />;
      case "task-committe":
        return <TaskCommitte />;
    }
  };

  return (
    <Tabs
      defaultValue="phone-number"
      orientation="horizontal"
      flexDirection="column"
      overflow="hidden"
      justifyContent="flex-start"
      gap="$4"
      onValueChange={(v) => setActive(v as TabActiveProps)}
      value={active}
    >
      <Tabs.List
        disablePassBorderRadius="bottom"
        aria-label="Choose an option"
        padding="$1.5"
        gap="$2"
      >
        <Tabs.Tab
          flex={1}
          value="task-priority"
          backgroundColor={active === "task-priority" ? "$white" : "unset"}
        >
          <YStack alignItems="center">
            <SizableText
              fontFamily="$body"
              size="$5"
              color={active === "task-priority" ? "$blue" : "$grayscale900"}
            >
              Priority Task
            </SizableText>
            <Separator
              borderColor={active === "task-priority" ? "$blue" : "transparent"}
              width="$1"
              borderWidth="$0.5"
            />
          </YStack>
        </Tabs.Tab>
        <Tabs.Tab
          flex={1}
          value="task-committe"
          backgroundColor={active === "task-committe" ? "$white" : "unset"}
        >
          <YStack alignItems="center">
            <SizableText
              fontFamily="$body"
              size="$5"
              color={active === "task-committe" ? "$blue" : "$grayscale900"}
            >
              Committe Task
            </SizableText>
            <Separator
              borderColor={active === "task-committe" ? "$blue" : "transparent"}
              width="$1"
              borderWidth="$0.5"
            />
          </YStack>
        </Tabs.Tab>
      </Tabs.List>

      <AnimatePresence>
        <TabsContent
          value={active}
          forceMount
          justifyContent="flex-start"
          animation="lazy"
          enterStyle={{
            opacity: 0,
            scale: 0.9,
          }}
          exitStyle={{
            opacity: 0,
            scale: 0.9,
          }}
        >
          {getContent(active)}
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  );
};

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      key={props.value}
      justifyContent="center"
      borderColor="$white"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  );
};
