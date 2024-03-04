import React, { useState } from "react";
import { AnimatePresence } from "@tamagui/animate-presence";
import { Circle } from "@tamagui/lucide-icons";
import { XStack, YStack, styled } from "tamagui";
import { Image } from "expo-image";

import { Button } from "./button/button";
import { Text } from "./text";

const GalleryItem = styled(YStack, {
  zIndex: 1,
  x: 0,
  opacity: 1,
  fullscreen: true,
  variants: {
    going: {
      ":number": (going) => ({
        enterStyle: {
          x: going > 0 ? 1000 : -1000,

          opacity: 0,
        },

        exitStyle: {
          zIndex: 0,

          x: going < 0 ? 1000 : -1000,

          opacity: 0,
        },
      }),
    },
  } as const,
});

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;

  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

type CarouselProps = {
  data: Array<any>;
};

export const Carousel = ({ data }: CarouselProps) => {
  const [[page, going], setPage] = useState([0, 0]);
  const images = data.map((x) => x.img.src || x);
  const imageIndex = wrap(0, images.length, page);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => [wrap(0, images.length, prev[0] + 1), 1]);
    }, 3000); // Carousel akan bergerak setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <XStack flex={1} overflow="hidden" alignItems="center" margin="$5">
      <AnimatePresence initial={false} custom={{ going }}>
        <GalleryItem key={page} animation="lazy" going={going}>
          <YStack>
            <Image
              source={images[imageIndex].img}
              contentFit="contain"
              style={{ height: "80%" }}
            />
            <Text
              textAlign="center"
              color="$primary"
              fontWeight="bold"
              fontSize="$5"
            >
              {images[imageIndex].desc}
            </Text>
          </YStack>
        </GalleryItem>
      </AnimatePresence>
      <XStack flex={1} justifyContent="center" alignSelf="flex-end">
        {images.map((_, idx) => (
          <Button
            key={idx}
            accessibilityLabel="circle"
            icon={<Circle fill={idx === imageIndex ? "#2445CD" : "white"} />}
            scaleIcon={1}
            size="$1"
            color={imageIndex === idx ? "$primary" : "gray"}
            backgroundColor="transparent"
            onPress={() => setPage([idx, idx > imageIndex ? 1 : -1])}
          />
        ))}
      </XStack>
    </XStack>
  );
};
