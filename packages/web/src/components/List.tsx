import React, { useState } from "react";
import tw from "clsx";
import Syntax from "./Syntax";
import Icons from "react-icons/io5/index";
import ListCopyButton from "./ListCopyButton";

export const isValidList = (list: ListProps): boolean =>
  list.name &&
  list.name.trim().length > 0 &&
  list.values &&
  list.values.length > 0;

export interface ListProps {
  name: string;
  values: string[];
  description?: string;
}

export const List: React.FC<ListProps> = (list) => {
  const { name, values, description } = list;
  const [collapsed, setCollapsed] = useState(false);

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

        <ListCopyButton list={list} />
      </div>

      {!collapsed && <Syntax values={values} clamp />}
    </section>
  );
};

export default List;
