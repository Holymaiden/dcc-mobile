import { createTamagui, createTokens } from "tamagui";
import { createAnimations } from "@tamagui/animations-react-native";
import { createMedia } from "@tamagui/react-native-media-driver";
import { tokens as defaultTokens } from "@tamagui/themes";
import { createInterFont } from "@tamagui/font-inter";

const interFont = createInterFont();

export const tokens = createTokens({
  size: { ...defaultTokens.size },
  space: { ...defaultTokens.space },
  radius: { ...defaultTokens.radius },
  zIndex: { ...defaultTokens.zIndex },
  color: {
    white: "#ffffff",
    gray: "#323045",
    blue: "#006EE9",
    primary: "#2445CD",
    primary400: "#8A9DF0",
    primary300: "#ACBBF3",
    primary200: "#D0D8F5",
    primary100: "#E3E7F7",
    primary50: "#EBF2FF",
    secondary: "#543AF8",
    secondary400: "#907FFA",
    secondary300: "#B2A6FC",
    secondary200: "#D0C9FD",
    secondary100: "#E1DDFE",
    secondary50: "#F0EEFE",
    alert: "#FB4E4E",
    alertLight: "#FF6262",
    alertDark: "#E93C3C",
    warning: "#F6A609",
    warningLight: "#FFBC1F",
    warningDark: "#E89806",
    success: "#2AC769",
    successLight: "#40DD7F",
    successDark: "#1AB759",
    grayscale900: "#15141F",
    grayscale800: "#211F32",
    grayscale700: "#52525C",
    grayscale600: "#A2A0A8",
    grayscale500: "#CCCBCD",
    grayscale400: "#CCCACF",
    grayscale300: "#E1E1E1",
    grayscale200: "#DCDBE0",
    grayscale100: "#E8E8E8",
  },
});

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

const config = createTamagui({
  fonts: {
    heading: interFont,
    body: interFont,
  },
  tokens,
  themes: {
    light: {
      bg: tokens.color.white,
      color: tokens.color.grayscale900,
    },
    dark: {
      bg: tokens.color.grayscale900,
      color: tokens.color.white,
    },
  },
  media: createMedia({
    sm: { maxWidth: 640 },
    md: { maxWidth: 768 },
    lg: { maxWidth: 1024 },
    xl: { maxWidth: 1280 },
    xxl: { maxWidth: 1536 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
  animations,
});

export default config;
export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
