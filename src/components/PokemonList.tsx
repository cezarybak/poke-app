import { Loader } from "./Loader";
import PokebalIcon from "./../assets/images/pokeball.png";
import SnarfloxIcon from "./../assets/images/snarlox.png";
import { samplePokeAPIqueryQuery } from "../graphql/generated";
import { Element } from "./index";

type Props = {
  data: samplePokeAPIqueryQuery | undefined;
  loading: boolean;
  addToStorageData: (item: Element) => void;
  storageData: any;
};

const colorMap: Record<string, string> = {
  hp: "text-red-800",
  defense: "text-green-400",
  "special-defense": "text-blue-400",
  attack: "text-red-400",
  "special-attack": "text-red-500",
  speed: "text-blue-200",
};

const PokemonList = ({
  data,
  loading,
  addToStorageData,
  storageData,
}: Props) => {
  const avabilityItem = (item: Element) => {
    return Boolean(storageData.find((e: Element) => item.id === e.id));
  };

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center w-full my-52 gap-y-12">
          <Loader size="xl" color="gray" />
        </div>
      ) : (
        <>
          {(data?.pokemon_v2_pokemon.length || 0) > 0 ? (
            <div className="static grid w-full h-full grid-cols-3 gap-6 bg-white ">
              {data?.pokemon_v2_pokemon.map((e) => (
                <>
                  <div
                    key={e.id}
                    className={` flex flex-col items-center ${
                      avabilityItem(e)
                        ? "opacity-40 cursor-not-allowed "
                        : " hover:bg-yellow-300  hover:shadow-2xl"
                    } w-full bg-yellow-200 gap-4 p-4 text-sm rounded-lg shadow-lg gap-x-2`}
                  >
                    <span className="p-2 text-base font-semibold text-blue-800 uppercase">
                      {e.name}
                    </span>
                    <div className="grid grid-cols-2 p-4 bg-white rounded-lg gap-x-6 gap-y-3">
                      {e.pokemon_v2_pokemonstats.map((e) => (
                        <div className="flex w-full space-x-2 ">
                          <span
                            className={`capitalize w-full
                           ${
                             colorMap[e?.pokemon_v2_stat?.name || ""]
                           } font-medium `}
                          >
                            {e.pokemon_v2_stat?.name}
                          </span>

                          <span className="flex justify-end w-1/12 font-medium ">
                            {e.base_stat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {!avabilityItem(e) ? (
                      <div
                        className="relative cursor-pointer "
                        onClick={() => {
                          addToStorageData(e);
                        }}
                      >
                        <img
                          className="relative flex justify-end object-cover w-6 h-6 bg-none "
                          src={PokebalIcon}
                          alt="pokeball-add"
                        />
                        <div className="relative flex items-center justify-center w-4 h-4 font-semibold text-center text-gray-800 align-middle bg-white border border-gray-800 rounded-full -top-2 left-3 ">
                          +
                        </div>
                      </div>
                    ) : (
                      <div className="p-1 text-sm font-semibold">
                        Check pakeball
                      </div>
                    )}
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full gap-y-12 my-28">
              <img
                className="relative bg-white h-30 w-60 bg-none "
                src={SnarfloxIcon}
                alt="snarflox"
              />
              <span className="text-sm font-semibold">Nothing finded.</span>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PokemonList;
