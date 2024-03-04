import { ScrollView, Separator, XStack, YStack } from "tamagui";
import { Link } from "expo-router";

import { Container, GoogleButton, Text, View } from "@core";
import { RegisterForm } from "@/ui/services";

const Register = () => {
  return (
    <Container>
      <ScrollView>
        <View gap="$6">
          <YStack justifyContent="center" gap="$3">
            <Text fontWeight="bold" fontSize="$6">
              Register Account
            </Text>
            <Text>Hello, welcome to our account</Text>
          </YStack>
          <YStack>
            <RegisterForm />
          </YStack>

          <XStack justifyContent="center" alignItems="center" gap="$3">
            <Separator />
            <Text fontWeight="bold" fontSize="$3">
              OR
            </Text>
            <Separator />
          </XStack>

          <YStack gap="$6">
            <GoogleButton />
            <XStack gap="$1">
              <Text color="$gray" fontWeight="bold" fontSize="$3">
                Have an Account?
              </Text>
              <Link href="/login">
                <Text
                  color="$blue"
                  fontFamily="unset"
                  fontWeight="bold"
                  fontSize="$3"
                >
                  Login
                </Text>
              </Link>
            </XStack>
          </YStack>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Register;
