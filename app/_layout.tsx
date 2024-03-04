import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { PortalProvider, TamaguiProvider } from "tamagui";
import config from "@/tamagui.config";
import { SafeAreaProvider } from "react-native-safe-area-context";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ManropeBold: require("../assets/fonts/Manrope-Bold.ttf"),
    ManropeSemiBold: require("../assets/fonts/Manrope-SemiBold.ttf"),
    ManropeMedium: require("../assets/fonts/Manrope-Medium.ttf"),
    Manrope: require("../assets/fonts/Manrope-Regular.ttf"),
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <SafeAreaProvider>
        <PortalProvider>
          <Stack initialRouteName="(home)">
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(home)" options={{ headerShown: false }} />
          </Stack>
        </PortalProvider>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
