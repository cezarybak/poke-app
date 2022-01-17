import { useEffect, useState } from "react";
import { usesamplePokeAPIqueryLazyQuery } from "./graphql/generated";
import Logo from "./assets/images/logo.png";
import Pokeball from "./components/Pokeball";
import Search from "./components/Search";
import { Element } from "./components/index";
import PokemonList from "./components/PokemonList";

const App = () => {
  const storageData = JSON.parse(localStorage.getItem("data") || "[]");

  const [search, setSearch] = useState("");
  const [localStorageData, setLocalStorageData] = useState(storageData);

  const addToStorageData = (item: Element) => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", "[]");
    }

    localStorageData.push(item);

    localStorage.setItem("data", JSON.stringify(localStorageData));
    setLocalStorageData(item);
  };

  const removeStorageData = (item: Element) => {
    localStorage.setItem(
      "data",
      JSON.stringify(localStorageData.filter((e: Element) => e.id !== item.id))
    );
    setLocalStorageData(item);
  };

  const [getPokeData, { data, loading }] = usesamplePokeAPIqueryLazyQuery({
    variables: { limit: 9 },
  });

  useEffect(() => {
    setLocalStorageData(storageData);
  }, [localStorageData]);

  useEffect(() => {
    getPokeData({
      variables: { where: { name: { _iregex: search } }, limit: 9 },
    });
  }, [search]);

  return (
    <div className="w-full h-screen ">
      <div className="flex justify-center ">
        <img src={Logo} alt="logo" className="absolute w-1/5 -top-4 " />
      </div>

      <div className="relative w-3/4 m-auto mt-28 ">
        <div className="w-full p-6 bg-white border-2 border-blue-800 shadow-2xl rounded-xl">
          <Pokeball
            localStorageData={localStorageData}
            removeStorageData={removeStorageData}
          />
          <Search setSearch={setSearch} />
          <PokemonList
            data={data}
            loading={loading}
            addToStorageData={addToStorageData}
            storageData={storageData}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
