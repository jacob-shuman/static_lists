import tw from "clsx";
import { useStyle } from "../stores";
import { Toaster } from "react-hot-toast";

type ReactButtonProps = JSX.IntrinsicElements["button"];

interface ButtonProps extends ReactButtonProps {
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ active = false, ...props }) => (
  <button
    className={tw(
      `focus:outline-none px-4 py-2`,
      active && tw`font-bold text-white bg-black`
    )}
    {...props}
  />
);

const Nav = () => {
  const { style, update } = useStyle((state) => state);

  return (
    <>
      <nav
        className={tw(
          `p-8 pb-0`,
          `flex flex-col justify-center items-center gap-y-4`
        )}
      >
        <a href="/" className={tw(`text-2xl font-bold`)}>
          static_lists
        </a>

        <ul className={tw(`flex justify-center`)}>
          <li>
            <Button active={style === "lower"} onClick={() => update("lower")}>
              lowercase
            </Button>
          </li>

          <li>
            <Button active={style === "title"} onClick={() => update("title")}>
              TitleCase
            </Button>
          </li>

          <li>
            <Button active={style === "upper"} onClick={() => update("upper")}>
              UPPERCASE
            </Button>
          </li>
        </ul>
      </nav>

      <Toaster />
    </>
  );
};

export default Nav;
