import React, { useState } from "react";
import tw from "clsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import funky from "react-syntax-highlighter/dist/cjs/styles/prism/funky";
import { IoRemove, IoAdd, IoCopy } from "react-icons/io5";
import { Style, useStyle } from "../stores";

interface ListProps {
  name: string;
  values: string[];
}

const styleValue = (
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

const stringifyList = (style: Style, list: string[], short = false) =>
  "[" +
  list.map(
    (v, i) =>
      "\n\t" +
      `${styleValue(style, v, (short && i < list.length - 1) || !short)}`
  ) +
  "\n]";

export const List: React.FC<ListProps> = ({ name, values }: ListProps) => {
  const { style } = useStyle((state) => state);
  const [minimized, setMinimized] = useState(false);
  const maxElements = 10;
  const list = stringifyList(style, values);
  const shortList = stringifyList(
    style,
    [...values.slice(0, maxElements), "..."],
    true
  );

  return (
    <section className={tw(`flex flex-col gap-y-2`, `w-1/2 max-w-4xl`)}>
      <div className={tw(`flex gap-x-4 items-center text-center`)}>
        <button
          className={tw(`focus:outline-none opacity-50 hover:opacity-100`)}
          onClick={() => setMinimized(!minimized)}
        >
          {minimized ? <IoAdd size="1.5rem" /> : <IoRemove size="1.5rem" />}
        </button>

        <h2 className={tw(`text-2xl font-bold`)}>{name}</h2>

        <p className={tw(`opacity-50 text-sm text-left`, `flex-1`)}>
          {values.length} elements
        </p>

        <button
          className={tw(`focus:outline-none opacity-50 hover:opacity-100`)}
          onClick={() => navigator.clipboard.writeText(list)}
        >
          <IoCopy size="1.5rem" />
        </button>
      </div>

      {!minimized && (
        <SyntaxHighlighter language="javascript" style={funky} wrapLongLines>
          {values.length > maxElements ? shortList : list}
        </SyntaxHighlighter>
      )}
    </section>
  );
};

export default List;
