import React from 'react';
import { Stack, TamaguiProvider } from 'tamagui';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import config from '../tamagui.config';
import Grid from './components/Grid';
import DisplayScreen from './components/DisplayScreen';

function Calculator() {
  const insets = useSafeAreaInsets();

  return (
    <Stack
      backgroundColor="black"
      flex={1}
      paddingTop={insets.top}
      paddingHorizontal="$2"
      space="$3.5"
    >
      <DisplayScreen />
      <Grid />
    </Stack>
  );
}

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <Calculator />
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
