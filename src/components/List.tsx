import React, { useState } from 'react';
import { tw } from 'twind';
import slugify from 'slugify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import funky from 'react-syntax-highlighter/dist/cjs/styles/prism/funky';
import { IoRemove, IoAdd, IoCopy } from 'react-icons/io5';

interface ListProps {
  name: string;
  values: string[];
}

export const List: React.FC<ListProps> = ({ name, values }) => {
  const list = '[' + values.map((v) => '\n\t' + `"${v}"`) + '\n]';
  const [minimized, setMinimized] = useState(false);

  return (
    <section
      key={slugify(name)}
      className={tw(`flex flex-col space-y-2`, `w-1/2 max-w-4xl`)}
    >
      <div className={tw(`flex space-x-4 items-center text-center`)}>
        <button
          className={tw(`focus:outline-none opacity-50 hover:opacity-100`)}
          onClick={() => setMinimized(!minimized)}
        >
          {minimized ? (
            <IoAdd className={tw(`h-6 w-6`)} />
          ) : (
            <IoRemove className={tw(`h-6 w-6`)} />
          )}
        </button>

        <h2 className={tw(`text-2xl font-bold`)}>{name}</h2>

        <p className={tw(`opacity-50 text-sm text-left`, `flex-1`)}>
          {values.length} elements
        </p>

        <button
          className={tw(`focus:outline-none opacity-50 hover:opacity-100`)}
          onClick={() => navigator.clipboard.writeText(list)}
        >
          <IoCopy className={tw(`h-6 w-6`)} />
        </button>
      </div>

      {/* TODO: cap list size at x values */}
      {!minimized && (
        <SyntaxHighlighter language="javascript" style={funky} wrapLongLines>
          {list}
        </SyntaxHighlighter>
      )}
    </section>
  );
};

export default List;
