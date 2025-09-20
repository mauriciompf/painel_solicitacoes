import clsx from "clsx";
import type { DropDownType } from "../types";
import { firstLetterCapitalize } from "../utils/firstLetterCapitalize";
import { firstLetterUppercaseArray } from "../utils/firstLetterUppercaseArray";

function DropDown({ label, options }: DropDownType) {
  const handleOnClick = () => {};

  return (
    <label
      onClick={handleOnClick}
      htmlFor="status"
      className={clsx(
        "relative flex w-[300px] justify-between rounded-[5px] bg-white p-2 text-[18px] text-black select-none",
      )}
    >
      <>
        <span className="font-semibold">{firstLetterCapitalize(label)}: </span>
        <select
          id="status"
          className={clsx(
            "p-none cursor-pointer bg-none font-bold focus-visible:outline-none",
          )}
        >
          {firstLetterUppercaseArray(options).map(
            (option: string, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ),
          )}
        </select>
      </>
    </label>
  );
}

export default DropDown;
