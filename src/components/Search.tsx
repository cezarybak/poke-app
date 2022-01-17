import { Dispatch, SetStateAction } from "react";
import { ReactComponent as SearchIcon } from "./../assets/search.svg";

type Props = {
  setSearch: Dispatch<SetStateAction<string>>;
};

const Search = ({ setSearch }: Props) => (
  <div className="flex justify-center w-full mb-4 ">
    <SearchIcon className="relative w-5 h-5 stroke-current left-8 top-3" />
    <input
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search pokemon.."
      className="w-1/4 px-10 py-2 border-2 border-blue-800 rounded-lg outline-none :border-blue-800"
    ></input>
  </div>
);

export default Search;
