import { ScrollView, XStack } from "tamagui";

import { ActivityHeader } from "@/ui/core/header";
import { ActivityTabs, DatesCard } from "@/ui/services";
import { Container, SafeAreaBackground, View } from "@core";

const Activity = () => {
  return (
    <SafeAreaBackground backgroundColor="white">
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
    </SafeAreaBackground>
  );
};

export default Activity;
