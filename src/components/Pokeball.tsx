import { Dispatch, useState } from "react";
import PokebalIcon from "./../assets/images/pokeball.png";

type Props = {
  localStorageData: any;
  removeStorageData: any;
};

export const Pokeball = ({ localStorageData, removeStorageData }: Props) => {
  const [window, setwindow] = useState(false);

  return (
    <div
      className="absolute -right-4 -top-8"
      onMouseEnter={() => setwindow(true)}
      onMouseLeave={() => setwindow(false)}
    >
      <div className="h-full w-max">
        <div className="cursor-pointer">
          <img
            className="relative flex justify-end object-cover bg-none w-14 h-14 "
            src={PokebalIcon}
            alt="pokeball"
          />
          <div className="absolute right-0 flex items-center justify-center w-8 h-8 font-semibold text-center text-gray-800 align-middle bg-white border border-gray-800 rounded-full top-10">
            {localStorageData.length || 0}
          </div>
        </div>
        {window && localStorageData.length > 0 && (
          <div className="absolute flex flex-col p-8 bg-yellow-200 rounded-lg shadow-2xl cursor gap-y-2 -right-44 top-14">
            {localStorageData.map((e: any, index: number) => (
              <div
                key={`${e.id}-${e.name}-${index}`}
                className="flex items-center px-8 align-middle bg-white rounded-lg "
              >
                <div className="w-4/5 text-sm font-medium text-blue-800 uppercase">
                  {e.name}
                </div>
                <div
                  className="relative cursor-pointer top-2 -right-6 "
                  onClick={() => {
                    removeStorageData(e);
                  }}
                >
                  <img
                    className="relative flex justify-end object-cover w-5 h-5 bg-none "
                    src={PokebalIcon}
                    alt="pokeball-add"
                  />
                  <div className="relative flex items-center justify-center w-3 h-3 font-semibold text-center text-gray-800 align-middle bg-white border border-gray-800 rounded-full -top-2 left-3 ">
                    -
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokeball;
