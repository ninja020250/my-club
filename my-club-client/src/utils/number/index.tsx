export function formatNumberWithCommas(value: number | string) {
  let num = typeof value === 'number' ? value.toString() : value;
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
