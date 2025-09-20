import clsx from "clsx";
import { firstLetterCapitalize } from "../utils/firstLetterCapitalize";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <label htmlFor="text" className={"flex items-center gap-4 font-bold"}>
      <span className={"w-[11%] text-xl font-bold"}>
        {firstLetterCapitalize(label)}
      </span>

      <input
        {...props}
        type="text"
        id="text"
        className={clsx(
          "rounded-[5px] bg-[#D9D9D9] p-1 text-[16px] font-bold text-black select-none",
        )}
      />
    </label>
  );
}

export default Input;
