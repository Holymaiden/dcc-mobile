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

type TabActiveProps = "task-priority" | "task-committe";

export const ActivityTabs = () => {
  const [active, setActive] = useState<TabActiveProps>("task-priority");

  const getContent = (active: TabActiveProps) => {
    switch (active) {
      case "task-priority":
        return <TaskPriority />;
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
