import { useEffect, useState } from "react";
import { Form, Spinner, YStack, Button, XStack } from "tamagui";
import { Phone } from "@tamagui/lucide-icons";

import { TextInput } from "@core";

type PhoneFormProps = {
  onSubmit: () => void;
};

export const PhoneForm = ({ onSubmit }: PhoneFormProps) => {
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
          <Phone />
          <TextInput
            keyboardType="phone-pad"
            placeholder="Phone Number"
            width="100%"
            autoFocus={true}
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
            Request OTP
          </Button>
        </Form.Trigger>
      </YStack>
    </Form>
  );
};
