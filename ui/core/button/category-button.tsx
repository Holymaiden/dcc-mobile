import React from 'react';

import { Button } from './button';

export type CategoryButtonProps = {
  title: string;
  active?: boolean;
  onPress?: () => void;
};

export const CategoryButton = ({
  title,
  active,
  onPress,
}: CategoryButtonProps) => {
  return (
    <Button
      backgroundColor={active ? '$blue' : '$primary50'}
      color={active ? '$white' : '$blue'}
      size="$4"
      onPress={onPress}
    >
      {title}
    </Button>
  );
};
