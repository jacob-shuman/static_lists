import React from "react";
import { useStyle } from "../stores";
import { styleValues } from "../utils";
import tw from "clsx";

// TODO: replace "" with \"\"
// TODO: fix issue with style selector not working when there is a space in a value name
// TODO: consider adding a theme selector and use the duotone themes
export const Syntax: React.FC<{
  values: string[];
  clamp?: boolean;
  max?: number;
}> = ({ values, clamp = false, max = 10 }) => {
  const { style } = useStyle((state) => state);
  const shorten = clamp && values.length > max;
  const list = shorten ? values.slice(0, 10) : values;

  return (
    <div className={tw(`w-full max-w-3xl`)}>
      <pre className="bg-gray-200 px-4 py-2">
        <code className="font-tabular bg-black shadow-[black_-0.3em_0px_0px_0.3em,black_0.3em_0px_0px_0.3em]">
          <span className="text-gray-400">[</span>
          {styleValues(style, list).map((v, i) => (
            <div key={`${v}-${i}-${list.length}`} className={tw(`inline`)}>
              <span className="text-[yellow]">{`\n\t"${v}"`}</span>
              {i < list.length - 1 && <span className="text-gray-400">,</span>}
            </div>
          ))}

          {shorten && (
            <>
              <span className="text-gray-400">{`\n\t// +${
                values.length - 10
              } more`}</span>
            </>
          )}

          <span className="text-gray-400">{"\n]"}</span>
        </code>
      </pre>
    </div>
  );
};

export default Syntax;
