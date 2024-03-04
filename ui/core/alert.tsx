import {
  AlertDialog as AlertTamagui,
  AlertDialogProps,
  YStack,
  XStack,
  Button,
} from "tamagui";

type AlertProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  backgroundColor?: string;
  onSubmit?: () => void;
} & AlertDialogProps;

export const Alert = ({
  children,
  title,
  description,
  backgroundColor = "$white",
  onSubmit,
  ...props
}: AlertProps) => {
  return (
    <AlertTamagui {...props}>
      {children ? (
        <AlertTamagui.Trigger asChild>{children}</AlertTamagui.Trigger>
      ) : null}

      <AlertTamagui.Portal>
        <AlertTamagui.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertTamagui.Content
          backgroundColor={backgroundColor}
          bordered
          borderColor="$white"
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          width="80%"
        >
          <YStack gap="$6">
            <AlertTamagui.Title color="$grayscale900" textAlign="center">
              {title}
            </AlertTamagui.Title>
            <AlertTamagui.Description color="$grayscale900" textAlign="center">
              {description}
            </AlertTamagui.Description>

            <XStack justifyContent="center" borderRadius="$3" gap="$5">
              <AlertTamagui.Cancel
                asChild
                backgroundColor="$alert"
                aria-label="Cancel"
              >
                <Button color="$white">Cancel</Button>
              </AlertTamagui.Cancel>
              <AlertTamagui.Action
                asChild
                backgroundColor="$blue"
                aria-label="Submit"
                onPress={onSubmit}
              >
                <Button color="$white">Accept</Button>
              </AlertTamagui.Action>
            </XStack>
          </YStack>
        </AlertTamagui.Content>
      </AlertTamagui.Portal>
    </AlertTamagui>
  );
};
