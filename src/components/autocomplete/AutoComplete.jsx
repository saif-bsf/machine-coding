import React, { useEffect, useState } from "react";

const AutoComplete = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const s = setTimeout(() => {
      fetchData();
    }, 400);
    return () => clearTimeout(s);
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      const data = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + searchText
      );
      const json = await data.json();
      cache[searchText] = json[1];
      setSearchResults(json[1]);
    }
  };

  return (
    <div className="m-10 flex flex-col">
      <input
        type="text"
        className="border border-black p-2 w-96 shadow-md"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsResultVisible(true)}
        onBlur={() => setIsResultVisible(false)}
      />
      {searchResults.length > 1 && isResultVisible && (
        <ul className="border p-2 border-black w-96  shadow-md">
          {searchResults.map((result, i) => (
            <li className="hover:bg-gray-100 cursor-pointer" key={i}>
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
