import { XStack, YStack } from "tamagui";
import { Image } from "expo-image";
import { Bell, BellDot } from "@tamagui/lucide-icons";

import { Text } from "../text";
import { firstLatterUppercase } from "@/core";
import { View } from "../view";

export type HomeHeaderProps = {
  user: string;
  notifications?: number;
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const HomeHeader = ({ user, notifications }: HomeHeaderProps) => {
  return (
    <XStack
      paddingHorizontal="$4"
      paddingVertical="$5"
      backgroundColor="$blue"
      justifyContent="space-between"
    >
      <XStack gap="$2">
        <Image
          source={require("../../../assets/images/profile.png")}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
          style={{ width: 40, height: 40, borderRadius: 40 / 2 }}
        />
        <YStack gap="$2">
          <Text color="$white" fontWeight="bold" fontFamily="unset">
            Hi, {firstLatterUppercase(user)}
          </Text>
          <Text color="$white" fontSize="$1">
            What do you want to do today?
          </Text>
        </YStack>
      </XStack>
      <View justifyContent="center">
        {notifications ? (
          <BellDot color="$white" size="$1.5" />
        ) : (
          <Bell color="$white" size="$1.5" />
        )}
      </View>
    </XStack>
  );
};
