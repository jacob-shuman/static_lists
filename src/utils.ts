import { Style } from "./stores";

export const styleValue = (
  style: Style,
  value: string | number,
  quotes: boolean
): string | number => {
  if (typeof value === "number") {
    return value;
  }

  let formattedValue = value;

  switch (style) {
    case "upper":
      formattedValue = value.toUpperCase();
      break;
    case "title":
      formattedValue = value
        .toLowerCase()
        .split(" ")
        .map((w) => w.at(0).toUpperCase() + w.slice(1))
        .join(" ");
      break;
  }

  return quotes ? `"${formattedValue}"` : formattedValue;
};

export const stringifyList = (style: Style, list: string[], short = false) =>
  "[" +
  list.map(
    (v, i) =>
      "\n\t" +
      `${styleValue(style, v, (short && i < list.length - 1) || !short)}`
  ) +
  "\n]";
