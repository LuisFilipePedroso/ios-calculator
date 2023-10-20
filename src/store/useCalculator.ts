import { create } from 'zustand';
import { isSignal, isEqualSign, isClearSign } from '../utils';

const calculate = {
  '+': (currentValue: number, previousValue: number) =>
    currentValue + previousValue,
  '-': (currentValue: number, previousValue: number) =>
    currentValue - previousValue,
  '*': (currentValue: number, previousValue: number) =>
    currentValue * previousValue,
  '/': (currentValue: number, previousValue: number) =>
    currentValue / previousValue,
};

interface CalculatorType {
  currentValue: number;
  previousValue: number;
  signal: string;
  onKeyPress: (key: string) => void;
}

const useCalculator = create<CalculatorType>((set) => ({
  currentValue: 0,
  previousValue: 0,
  signal: '',

  onKeyPress: (key: string) => {
    if (isSignal(key)) {
      set((state) => ({
        signal: key,
        previousValue: state.currentValue,
        currentValue: 0,
      }));

      return;
    }

    if (isEqualSign(key)) {
      set((state) => ({
        currentValue: state.signal
          ? calculate[state.signal](state.currentValue, state.previousValue)
          : state.currentValue,
      }));
      return;
    }

    if (isClearSign(key)) {
      set({
        signal: '',
        previousValue: 0,
        currentValue: 0,
      });

      return;
    }

    set((state) => ({
      ...state,
      currentValue:
        state.currentValue === 0
          ? Number(key)
          : parseFloat(state.currentValue.toString() + key),
    }));
  },
}));

export default useCalculator;
