import tw from "clsx";
import { useStyle } from "../stores";

export const Nav = () => {
  const { style, update } = useStyle((state) => state);

  return (
    <nav
      className={tw(
        `p-8 pb-0 flex flex-col justify-center items-center gap-y-4`
      )}
    >
      <a href="/" className={tw(`text-2xl font-bold`)}>
        static_lists
      </a>

      <ul className={tw(`flex justify-center`)}>
        <li>
          <button
            className={tw(
              `focus:outline-none px-4 py-2`,
              style === "lower" && tw`font-bold text-white bg-black`
            )}
            onClick={() => update("lower")}
          >
            lowercase
          </button>
        </li>

        <li>
          <button
            className={tw(
              `focus:outline-none px-4 py-2`,
              style === "title" && tw`font-bold text-white bg-black`
            )}
            onClick={() => update("title")}
          >
            TitleCase
          </button>
        </li>

        <li>
          <button
            className={tw(
              `focus:outline-none px-4 py-2`,
              style === "upper" && tw`font-bold text-white bg-black`
            )}
            onClick={() => update("upper")}
          >
            UPPERCASE
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
