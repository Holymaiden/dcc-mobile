import { Building, ChevronDown, Subtitles } from '@tamagui/lucide-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Accordion, H6, Square, XStack } from 'tamagui';

import { taskDate } from '@/core';
import type { Committe } from '@/core/types';

import { Text } from '../text';

type AccordionCommitteProps = {
  committes: Committe[];
};

export const AccordionCommitte = ({ committes }: AccordionCommitteProps) => {
  return (
    <XStack>
      <Accordion flex={1} overflow="hidden" type="multiple" gap="$4">
        {committes.length > 0
          ? committes.map((committe) => (
              <Accordion.Item key={committe.id} value={committe.id}>
                <Accordion.Trigger
                  flexDirection="row"
                  justifyContent="space-between"
                  borderWidth="$0.25"
                  borderColor="$grayscale100"
                  borderTopLeftRadius="$4"
                  borderTopRightRadius="$4"
                >
                  {({ open }: { open: boolean }) => (
                    <>
                      <XStack gap="$2" alignItems="center">
                        <Building color="$blue" size="$1" />
                        <H6 color="$blue">{committe.name}</H6>
                      </XStack>
                      <Square
                        animation="quick"
                        rotate={open ? '180deg' : '0deg'}
                      >
                        <ChevronDown size="$1" color="$blue" />
                      </Square>
                    </>
                  )}
                </Accordion.Trigger>
                <Accordion.Content
                  borderLeftWidth="$0.25"
                  borderRightWidth="$0.25"
                  borderBottomWidth="$0.25"
                  borderBottomLeftRadius="$4"
                  borderBottomRightRadius="$4"
                  borderColor="$grayscale100"
                  onPress={() => console.log('press')}
                >
                  {committe.theme && (
                    <XStack gap="$2" alignItems="center" marginBottom="$2">
                      <Subtitles color="$blue" size="$1" />
                      <Text fontSize="$3">{committe.theme}</Text>
                    </XStack>
                  )}
                  <Text fontSize="$2">{committe.description}</Text>
                  <XStack justifyContent="space-between" marginTop="$2">
                    <Text
                      color={
                        committe.status === 'In Progress'
                          ? '$blue'
                          : '$successLight'
                      }
                      fontSize="$2"
                      style={styles.text}
                    >
                      {committe.status}
                    </Text>
                    <Text color="$blue" fontSize="$2">{`${taskDate(
                      committe.date_start,
                    )} - ${taskDate(committe.date_end)}`}</Text>
                  </XStack>
                </Accordion.Content>
              </Accordion.Item>
            ))
          : null}
      </Accordion>
    </XStack>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'ManropeSemiBold',
  },
});
