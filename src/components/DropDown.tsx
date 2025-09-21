import clsx from "clsx";
import type { DropDownType } from "../types";
import { firstLetterCapitalize } from "../utils/firstLetterCapitalize";
import { firstLetterCapitalizeArray } from "../utils/firstLetterCapitalizeArray";
import { useRef, useState, type ChangeEvent } from "react";
import { dropDownsData, subOptions } from "../data";

function DropDown({ label, options }: DropDownType) {
  const subOptionWrapRef = useRef<HTMLUListElement | null>(null);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isMouseEnterOption, setMouseEnterOption] = useState(false);

  const labels = dropDownsData.map((e) => e.label);

  const [dropDowns, setDropDowns] = useState({
    status: "Pendente",
    tipo: "Padrão",
    data: "Hoje",
  });

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setIsMouseEnter(false);
  };

  const handleOnMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setIsMouseEnter(true);
  };

  const handleOnMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const onMouseEnterOption = (
    e: React.MouseEvent<HTMLElement>,
    option: any,
  ) => {
    if (option === "Padrão") {
      setMouseEnterOption(true);
    }
  };

  const onMouseLeaveOption = (
    e: React.MouseEvent<HTMLElement>,
    option: any,
  ) => {
    if (option !== "Padrão") {
      setMouseEnterOption(false);
    }
  };

  const onMouseEnterSubOption = (e: React.MouseEvent<HTMLElement>) => {};

  const handleOnClickOption = (
    e: React.MouseEvent<HTMLButtonElement>,
    option: any,
  ) => {
    e.preventDefault();
    setIsMouseEnter(false);

    setDropDowns({ status: option });
  };

  return (
    <>
      <div
        className={clsx(
          "flex w-full items-center justify-between gap-2 rounded-[5px] bg-white p-2 text-[18px] text-black select-none",
        )}
      >
        <span className="font-semibold">{firstLetterCapitalize(label)}: </span>

        <div
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          className="relative w-[160px] text-right"
        >
          <button
            role="select"
            className="w-full cursor-pointer rounded-sm bg-black p-1 text-center font-bold text-white"
          >
            {dropDowns[label]}
          </button>

          <ul className="absolute top-8.5 left-7.5 z-10">
            {firstLetterCapitalizeArray(options).map(
              (option: string, index: number) => (
                <li
                  onMouseEnter={(e) => onMouseEnterOption(e, option)}
                  onMouseLeave={(e) => onMouseLeaveOption(e, option)}
                  onMouseOver={(e) => handleOnMouseOver(e)}
                  role="option"
                  className={clsx(
                    { hidden: !isMouseEnter },
                    "w-[170px] cursor-pointer border-b-2 bg-black p-2 text-left font-bold text-white hover:bg-gray-400",
                  )}
                  key={index}
                  value={option}
                >
                  <button
                    onClick={(e) => handleOnClickOption(e, option)}
                    className="w-full cursor-pointer text-left"
                  >
                    {option}
                  </button>

                  {/* Sub Option */}
                  {isMouseEnterOption && (
                    <ul
                      onMouseEnter={(e) => onMouseEnterSubOption(e)}
                      ref={subOptionWrapRef}
                      className="absolute top-0 -right-[242px] bg-black p-2 text-white"
                    >
                      {subOptions.map((subOptions) =>
                        subOptions.subOptions.map((subOption, index) => (
                          <li className="border-b-1 px-1 py-2" key={index}>
                            <button
                              // onClick={(e) => handleOnClickSubOption(e)}
                              className={"cursor-pointer"}
                            >
                              {firstLetterCapitalize(subOption)}
                            </button>
                          </li>
                        )),
                      )}
                    </ul>
                  )}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DropDown;
