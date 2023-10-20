import { FlatList } from 'react-native';
import { CALCULATOR_KEYS, GRID_GAP, NUMBER_OF_COLUMNS } from '../constants';
import NumberKey from './NumberKey';

function Grid() {
  return (
    <FlatList
      style={{ flex: 1 }}
      numColumns={NUMBER_OF_COLUMNS}
      data={CALCULATOR_KEYS}
      renderItem={({ item }) => <NumberKey item={item} />}
      keyExtractor={(item) => item.label}
      scrollEnabled={false}
      contentContainerStyle={{ gap: GRID_GAP }}
      columnWrapperStyle={{ gap: GRID_GAP }}
    />
  );
}

export default Grid;
