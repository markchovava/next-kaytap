export function formatNumber(num: number) {
    return num.toLocaleString('en-US');
}


export const listNumbers = (limit: number): number[] => {
    let a: number[] = []
  for (let i = 1; i <= limit; i++) {
    a = [...a, i]
  }
  return a
};