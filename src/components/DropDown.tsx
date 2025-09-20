import clsx from "clsx";
import type { DropDownType } from "../types";
import { firstLetterCapitalize } from "../utils/firstLetterCapitalize";
import { firstLetterCapitalizeArray } from "../utils/firstLetterCapitalizeArray";
import { useState, type ChangeEvent } from "react";
import { dropDownsData, subOptions } from "../data";

function DropDown({ label, options }: DropDownType) {
  const [currentOption, setCurrentOption] = useState("padrão");

  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isMouseEnterOption, setMouseEnterOption] = useState(false);

  // console.log(dropDownsData.map((e) => e.label));

  const handleOnClick = (e: Event) => {
    // const value =  e.current.value
  };

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setIsMouseEnter(false);
  };

  const handleOnMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setIsMouseEnter(true);
  };

  const handleOnMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // console.log(e);
  };
  const onMouseEnterOption = (
    e: React.MouseEvent<HTMLElement>,
    option: any,
  ) => {
    if (option === "Padrão") {
      setMouseEnterOption(true);
    }
  };

  function SubOptions() {
    return (
      <div className="absolute left-3 bg-black p-2 text-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        consequuntur vitae incidunt? Mollitia, nostrum ipsa rerum iste fugiat
        sequi et adipisci? Numquam, sunt? Cupiditate soluta nulla veniam
        voluptates tenetur. Voluptatem!
      </div>
    );
  }

  return (
    <>
      <div
        className={clsx(
          "relative flex w-full justify-between rounded-[5px] bg-white p-2 text-[18px] text-black select-none",
        )}
      >
        <span className="font-semibold">{firstLetterCapitalize(label)}: </span>

        <div
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          onMouseOver={handleOnMouseOver}
          className="absolute top-1 right-2 w-[160px] text-right"
        >
          <button
            role="select"
            className="w-full cursor-pointer rounded-sm bg-red-400 p-1 text-right font-bold"
          >
            {firstLetterCapitalize(options[0])}
          </button>

          <ul className="relative">
            {firstLetterCapitalizeArray(options).map(
              (option: string, index: number) => (
                <li
                  onMouseEnter={(e) => onMouseEnterOption(e, option)}
                  role="option"
                  className={clsx(
                    { hidden: !isMouseEnter },
                    "w-full cursor-pointer bg-red-300 p-1 font-bold",
                  )}
                  key={index}
                  value={option}
                >
                  <button className="cursor-pointer">{option}</button>

                  {isMouseEnterOption && (
                    <ul className="absolute top-0 -right-100 bg-amber-400 p-2">
                      {subOptions.map((subOption) => (
                        <li className="w-fit" key={subOption.id}>
                          {subOption.subOptions.map((subOptionName, index) => (
                            <span key={index}>{subOptionName}</span>
                          ))}
                        </li>
                      ))}
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
