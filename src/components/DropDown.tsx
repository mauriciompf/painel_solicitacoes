import clsx from "clsx";
import type { DropDownType } from "../types";

const firstLetterCapitalize = (word: string) => {};

function DropDown({ title, options }: DropDownType) {
  const handleOnClick = () => {};

  // ("Status", ["Pendente", "Ativa", "Desenvolvimento", "Aprovada", "Salvo Local"])

  return (
    <label
      onClick={handleOnClick}
      htmlFor="status"
      className={clsx(
        "relative rounded-[5px] bg-white p-2 font-bold text-black select-none",
      )}
    >
      <>
        <span className="">{title}: </span>
        <select
          id="status"
          className={clsx(
            "p-none cursor-pointer bg-none focus-visible:outline-none",
          )}
        >
          {options.map((option: string, index: number) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </>
    </label>
  );
}

export default DropDown;
