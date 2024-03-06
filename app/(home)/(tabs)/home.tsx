import { H4, H5, ScrollView, XStack } from "tamagui";
import { Image } from "expo-image";

import { Container, HomeHeader, SafeAreaBackground, Text, View } from "@core";
import { MemberCard, News } from "@/ui/services";
import { NewsType } from "@/core/types";

// @ts-ignore
import carousel3 from "../../../assets/images/carousel3.png";

const datas: NewsType[] = [
  {
    id: "1",
    title: "Title 1",
    description: "Description 1",
    image: "https://picsum.photos/200",
    date: "2022-01-01",
    url: "https://google.com",
    created_by: "fihaa",
  },
  {
    id: "2",
    title: "Title 2",
    description: "Description 2",
    image: "https://picsum.photos/200",
    date: "2022-01-01",
    url: "https://google.com",
    created_by: "fihaa",
  },
];

const memberCard = {
  number: "12I1-37H-306",
  name: "M. Fiqri Haikhar Anwar",
  role: "Program",
};

const Home = () => {
  return (
    <SafeAreaBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader user="fihaa" notifications={1} />
        <Container gap="$4" borderRadius="$10">
          <XStack justifyContent="space-between" alignItems="center">
            <H4
              flex={2}
              color="$grayscale900"
              style={{ fontFamily: "ManropeBold" }}
            >
              Do you have a meeting today?
            </H4>
            <Image
              source={carousel3}
              style={{ flex: 1, width: 80, height: 80, borderRadius: 10 }}
            />
          </XStack>
          <View>
            <MemberCard member={memberCard} />
          </View>
          <View gap="$3">
            <XStack justifyContent="space-between" alignItems="center">
              <H5>News</H5>
              <Text color="$blue">See all</Text>
            </XStack>
            <News datas={datas} isLoading={false} isErorr={false} />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaBackground>
  );
};

export default Home;
