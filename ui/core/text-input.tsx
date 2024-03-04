import { Input, InputProps } from "tamagui";

export const TextInput = ({ ...props }: InputProps) => {
  return (
    <Input
      borderWidth="$0"
      borderBottomWidth="$0.25"
      borderColor="$primary200"
      focusStyle={{ borderColor: "$primary" }}
      {...props}
    ></Input>
  );
};
