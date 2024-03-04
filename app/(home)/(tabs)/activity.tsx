import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, XStack, YStack } from "tamagui";

import { ActivityHeader } from "@/ui/core/header";
import { ActivityTabs, DatesCard } from "@/ui/services";

import { Container, View } from "@core";

const Activity = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }}
      edges={["right", "top", "left"]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <ActivityHeader />
        <Container
          gap="$4"
          borderTopLeftRadius="$10"
          borderTopRightRadius="$10"
        >
          <XStack>
            <DatesCard />
          </XStack>
          <View>
            <ActivityTabs />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
