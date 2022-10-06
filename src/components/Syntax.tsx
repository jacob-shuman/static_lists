import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import SyntaxHighlighterStyle from "react-syntax-highlighter/dist/cjs/styles/prism/funky";
import { useStyle } from "../stores";
import { stringifyList } from "../utils";
import tw from "clsx";

// TODO: consider adding a theme selector and use the duotone themes
export const Syntax: React.FC<{
  values: string[];
  clamp?: boolean;
  max?: number;
}> = ({ values, clamp = false, max = 10 }) => {
  const { style } = useStyle((state) => state);
  const list = stringifyList(style, values);
  const shortenedList = stringifyList(
    style,
    [...values.slice(0, max), `// +${values.length - max} more`],
    true
  );

  return (
    <div className={tw(`w-full max-w-3xl`)}>
      <SyntaxHighlighter
        language="javascript"
        style={SyntaxHighlighterStyle}
        wrapLongLines
      >
        {clamp && values.length > max ? shortenedList : list}
      </SyntaxHighlighter>
    </div>
  );
};

export default Syntax;
