import { Stack, Text } from 'tamagui';
import { useCalculator } from '../store';

function DisplayScreen() {
  const currentValue = useCalculator((state) => state.currentValue);

  return (
    <Stack
      flex={1}
      maxHeight="25%"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <Text color="white" fontSize="$14">
        {currentValue}
      </Text>
    </Stack>
  );
}

export default DisplayScreen;
