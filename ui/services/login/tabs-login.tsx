import { AnimatePresence, SizableText, Tabs, TabsContentProps } from "tamagui";
import { useState } from "react";

import { PhoneForm } from "./phone-form";
import { EmailForm } from "./email-form";
import { Alert } from "@core";
import { router } from "expo-router";

type TabActiveProps = "phone-number" | "email";

export const TabsLogin = () => {
  const [active, setActive] = useState<TabActiveProps>("phone-number");
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleSubmit = () => {
    router.push("/(home)/(tabs)/home");
  };

  const getContent = (active: TabActiveProps) => {
    switch (active) {
      case "phone-number":
        return <PhoneForm onSubmit={handleOpenModal} />;
      case "email":
        return <EmailForm onSubmit={handleOpenModal} />;
    }
  };

  return (
    <>
      <Tabs
        defaultValue="phone-number"
        orientation="horizontal"
        flexDirection="column"
        overflow="hidden"
        justifyContent="flex-start"
        gap="$6"
        onValueChange={(v) => setActive(v as TabActiveProps)}
        value={active}
      >
        <Tabs.List
          disablePassBorderRadius="bottom"
          aria-label="Choose an option"
          backgroundColor="$blue"
          padding="$1.5"
          gap="$2"
        >
          <Tabs.Tab
            flex={1}
            value="phone-number"
            backgroundColor={active === "phone-number" ? "$white" : "unset"}
            borderRadius="$5"
            shadowOffset={{ width: 0, height: 1 }}
            shadowOpacity={0.22}
            shadowRadius={2.22}
          >
            <SizableText
              fontFamily="$body"
              color={active === "phone-number" ? "$blue" : "$white"}
            >
              Phone Number
            </SizableText>
          </Tabs.Tab>
          <Tabs.Tab
            flex={1}
            value="email"
            backgroundColor={active === "email" ? "$white" : "unset"}
            borderRadius="$5"
            shadowOffset={{ width: 0, height: 1 }}
            shadowOpacity={0.22}
            shadowRadius={2.22}
          >
            <SizableText
              fontFamily="$body"
              color={active === "email" ? "$blue" : "$white"}
            >
              Email
            </SizableText>
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
      <Alert
        open={openModal}
        onOpenChange={setOpenModal}
        onSubmit={handleSubmit}
        title="Success!"
        description="Login Successful"
      />
    </>
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
