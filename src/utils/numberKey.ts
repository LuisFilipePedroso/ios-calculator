import { isEqualSign, isSignal } from './signal';

export function getNumberKeyBackgroundColor(key: string) {
  if (isSignal(key) || isEqualSign(key)) {
    return '$orange9';
  }

  if (!isNaN(Number(key)) || key === '.') {
    return '$gray6Dark';
  }

  return '$gray9';
}
