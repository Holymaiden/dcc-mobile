import { Timer } from "@tamagui/lucide-icons";
import { Card, Paragraph } from "tamagui";

type NotificationProps = {
  message: string | React.ReactNode;
  status: "success" | "warning" | "error" | "primary";
  size?: "$1" | "$2" | "$3" | "$4" | "$5";
  onPress: () => void;
};

export const Notification = ({
  message,
  status,
  size = "$3",
  onPress,
}: NotificationProps) => {
  const color = (status: string) => {
    switch (status) {
      case "success":
        return { background: "$successLight", color: "$white" };
      case "warning":
        return { background: "$warningLight", color: "$white" };
      case "error":
        return { background: "$alertLight", color: "$white" };
      case "primary":
        return { background: "$white", color: "$blue" };
    }
  };

  return (
    <Card
      backgroundColor={color(status)?.background}
      borderColor={color(status)?.background}
      borderWidth="$1"
      animation="bouncy"
      size={size}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      onPressOut={onPress}
    >
      <Card.Header padded flexDirection="row" gap="$2" alignItems="center">
        <Timer size="2" color={color(status)?.color} />
        <Paragraph
          color={color(status)?.color}
          size="$4"
          style={{ fontFamily: "ManropeSemiBold" }}
        >
          {message}
        </Paragraph>
      </Card.Header>
    </Card>
  );
};
