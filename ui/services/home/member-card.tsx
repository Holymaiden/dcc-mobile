import { Card, H5, XStack } from "tamagui";
import { Image } from "expo-image";
import { CreditCard, Eye, EyeOff } from "@tamagui/lucide-icons";
import { useState } from "react";

import { Text } from "@core";

export type MemberCardProps = {
  number: string;
  name: string;
  role: string;
};
export const MemberCard = ({ member }: { member: MemberCardProps }) => {
  const [showNumber, setShowNumber] = useState(false);

  const toggleShowNumber = () => {
    setShowNumber((prev) => !prev);
  };

  return (
    <Card
      animation="bouncy"
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      backgroundColor="$primary50"
      borderRadius="$8"
      borderColor="transparent"
    >
      <Card.Header padded flexDirection="row" gap="$2" alignItems="center">
        <CreditCard color="$white" size="$1" />
        <H5 color="$white" style={{ fontFamily: "ManropeSemiBold" }}>
          Member Card
        </H5>
      </Card.Header>
      <Card.Footer padded flexDirection="column">
        <XStack alignItems="center" gap="$2" marginVertical="$4">
          <H5  color="$white" fontSize="$8">
            {showNumber ? member.number : "**** **** ****"}
          </H5>
          {showNumber ? (
            <EyeOff color="$white" size="$1" onPress={toggleShowNumber} />
          ) : (
            <Eye color="$white" size="$1" onPress={toggleShowNumber} />
          )}
        </XStack>

        <XStack justifyContent="space-between">
          <Text color="$white">{member.name}</Text>
          <Text color="$white">{member.role}</Text>
        </XStack>
      </Card.Footer>
      <Card.Background>
        <Image
          contentFit="cover"
          style={{
            alignSelf: "center",
            width: "100%",
            height: "100%",
            borderRadius: 16,
          }}
          source={require("../../../assets/images/member-card.png")}
        />
      </Card.Background>
    </Card>
  );
};
