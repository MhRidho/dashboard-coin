import { sizeFormatter } from "human-readable";

export const format = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: true,
  render: (literal, symbol) => `${literal} ${symbol}`,
});
