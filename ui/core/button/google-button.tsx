import { Button } from "tamagui";

import { Alert } from "../alert";
import { GoogleIcon } from "@/ui/icons";

export const GoogleButton = () => (
  <Alert title="Login with Google" description="Please login with Google">
    <Button
      backgroundColor="white"
      color="$grayscale900"
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={0.22}
      shadowRadius={2.22}
      elevation={3}
      size="$5"
      marginHorizontal="$1"
    >
      <GoogleIcon />
      Login with Google
    </Button>
  </Alert>
);
