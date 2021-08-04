import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQueryState } from "next-usequerystate";

export default function Searchinput() {
  const [searchField, setSearchField] = useState<string>("name");
  const { query } = useRouter();

  console.log("query", query);

  const [searchValue, setSearchValue] = useState<string>(searchField);

  //   useEffect(() => {
  //     query[searchField] = searchValue;
  //   }, [searchValue, searchField, query]);

  function onInputChangeHandler(e) {
    setSearchValue(e.target.value);
  }

  function onCheckHandler(e) {
    setSearchField(e.target.value);
  }

  const searchFields = ["name", "status", "gender", "origin"];

  console.log("searchValue", searchValue);
  return (
    <div className="searchform">
      <input
        type="text"
        name="search"
        value={searchValue || ""}
        onChange={onInputChangeHandler}
        placeholder="search for name, gender, status"
        className="rounded-full text-center border-red-600 focus-within:border-red-700 hover:border-red-400 flex m-auto my-5 bg-gray-300 w-1/4 h-12"
      />
      <div className="searchfield flex items-center justify-evenly w-1/2 m-auto">
        <h4>Search for either name |</h4>
        {searchFields.map((searchField) => (
          <div key={searchField} className="flex items-center justify-center">
            <label htmlFor="search" className="mx-2">
              {searchField}
            </label>
            <input
              type="radio"
              value={searchField}
              onChange={onCheckHandler}
              name="search"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
