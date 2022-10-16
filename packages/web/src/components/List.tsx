import React, { useState } from "react";
import tw from "clsx";
import Syntax from "./Syntax";
import Icons from "react-icons/io5/index";
import { useStyle } from "../stores";
import { stringifyList } from "../utils";

export interface ListProps {
  name: string;
  values: string[];
  description?: string;
}

export const List: React.FC<ListProps> = ({
  name,
  values,
  description,
}: ListProps) => {
  const { style } = useStyle((state) => state);
  const [collapsed, setCollapsed] = useState(false);
  const list = stringifyList(style, values);

  return (
    <section className={tw(`flex flex-col gap-y-2`, `w-full max-w-3xl`)}>
      <div className={tw(`flex gap-x-4 items-center text-center`)}>
        <button
          aria-label={collapsed ? "expand list" : "collapse list"}
          className={tw(`focus:outline-none opacity-50 hover:opacity-100`)}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <Icons.IoAdd size="1.5rem" />
          ) : (
            <Icons.IoRemove size="1.5rem" />
          )}
        </button>

        <div className={tw(`flex-1`)}>
          <a href={`/list/${name}`} className={tw(`lg:text-xl font-bold`)}>
            {name}
          </a>

          {description && description.trim().length > 0 && (
            <p className={tw(`opacity-60 text-sm italic`)}>{description}</p>
          )}

          <p className={tw(`opacity-60 text-sm`)}>
            {values.length} element{values.length > 1 ? "s" : ""}
          </p>
        </div>

        <button
          aria-label="copy list"
          className={tw(`focus:outline-none opacity-50 hover:opacity-100`)}
          onClick={async () => await navigator.clipboard.writeText(list)}
        >
          <Icons.IoCopy size="1.5rem" />
        </button>
      </div>

      {!collapsed && <Syntax values={values} clamp />}
    </section>
  );
};

export default List;
