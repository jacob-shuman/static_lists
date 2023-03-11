import tw from "clsx";
import Icons from "react-icons/tb/index";
import { useStyle } from "../stores";
import { stringifyList } from "../utils";
import { ListProps } from "./List";
import toast from "react-hot-toast";

interface CopyButtonProps {
  list: ListProps;
}

const CopyButton: React.FC<CopyButtonProps> = ({ list }) => {
  const { style } = useStyle((state) => state);
  const copyValue = stringifyList(style, list.values);

  return (
    <button
      aria-label="copy list"
      className={tw(`focus:outline-none text-gray-500 hover:text-black`)}
      onClick={async () => {
        toast.promise(
          navigator.clipboard.writeText(copyValue),
          {
            loading: "Copying",
            success: "Copied to Clipboard",
            error: "Error copying to clipboard",
          },
          {
            id: "clipboard",
            position: "bottom-right",
          }
        );
      }}
    >
      <Icons.TbCopy size="1.5rem" />
    </button>
  );
};

export default CopyButton;
