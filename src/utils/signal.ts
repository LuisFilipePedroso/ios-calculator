export function isSignal(key: string) {
  return ['+', '-', '*', '/'].includes(key);
}

export function isEqualSign(key: string) {
  return key === '=';
}

export function isZero(key: string) {
  return key === '0';
}

export function isClearSign(key: string) {
  return key.toLowerCase() === 'ac';
}
