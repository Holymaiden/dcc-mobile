import { useEffect, useState } from "react";
import { Button, Form, Spinner, XStack, YStack } from "tamagui";
import { AtSign, Lock } from "@tamagui/lucide-icons";

import { TextInput } from "@core";

type EmailFormProps = {
  onSubmit: () => void;
};

export const EmailForm = ({ onSubmit }: EmailFormProps) => {
  const [status, setStatus] = useState<"off" | "submitting" | "submitted">(
    "off"
  );

  useEffect(() => {
    if (status === "submitting") {
      const timer = setTimeout(() => setStatus("off"), 2000);
      onSubmit();
      return () => {
        clearTimeout(timer);
      };
    }
  }, [status]);

  return (
    <Form onSubmit={() => setStatus("submitting")}>
      <YStack gap="$6">
        <XStack alignItems="center">
          <AtSign />
          <TextInput
            placeholder="Email ID"
            inputMode="email"
            autoFocus={true}
            width="100%"
          />
        </XStack>
        <XStack alignItems="center">
          <Lock />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            width="100%"
          />
        </XStack>

        <Form.Trigger asChild disabled={status !== "off"}>
          <Button
            backgroundColor="$blue"
            color="$white"
            borderRadius="$5"
            size="$5"
            icon={
              status === "submitting"
                ? () => <Spinner color="$white" />
                : undefined
            }
          >
            Login
          </Button>
        </Form.Trigger>
      </YStack>
    </Form>
  );
};
