import tw from "clsx";
import Icons from "react-icons/io5/index";
import { useStyle } from "../stores";
import { stringifyList } from "../utils";
import { ListProps } from "./List";

interface CopyButtonProps {
  list: ListProps;
}

const CopyButton: React.FC<CopyButtonProps> = ({ list }) => {
  const { style } = useStyle((state) => state);
  const copyValue = stringifyList(style, list.values);

  return (
    <button
      aria-label="copy list"
      className={tw(`focus:outline-none opacity-50 hover:opacity-100`)}
      onClick={async () => await navigator.clipboard.writeText(copyValue)}
    >
      <Icons.IoCopy size="1.5rem" />
    </button>
  );
};

export default CopyButton;
