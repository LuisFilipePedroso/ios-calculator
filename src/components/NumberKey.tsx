import { Dimensions } from 'react-native';
import { Button, Text } from 'tamagui';
import { GRID_GAP, NUMBER_OF_COLUMNS } from '../constants';
import { useCalculator } from '../store';
import { getNumberKeyBackgroundColor } from '../utils';
import { isZero } from '../utils/signal';

const screenWidth = Dimensions.get('window').width;

const availableSpace = screenWidth - (NUMBER_OF_COLUMNS - 1) * GRID_GAP;
const itemSize = availableSpace / NUMBER_OF_COLUMNS;

type NumberKeyProps = {
  item: any;
};

function NumberKey({ item }: NumberKeyProps) {
  const onKeyPress = useCalculator((state) => state.onKeyPress);

  return (
    <Button
      flex={isZero(item.label) ? 2 : 1}
      height={itemSize}
      backgroundColor={getNumberKeyBackgroundColor(item.label)}
      onPress={() => onKeyPress(item.label)}
      alignItems="center"
      justifyContent="center"
      circular
      unstyled
    >
      <Text color="white" fontSize="$8">
        {item.label}
      </Text>
    </Button>
  );
}

export default NumberKey;
