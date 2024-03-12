import { useState } from "react";
import SearchCard from "./SearchCard.jsx";
import Button from "./react-ui/Button.jsx";
import { topics } from "../data/searchTopics";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const [currentSearch, setCurrentSearch] = useState(topics);

  function handleChange(e) {
    const target = e.target.value;
    setSearchQuery(target);

    const filteredList = topics.filter((topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (target === "") {
      setCurrentSearch(topics);
      return;
    }
    setCurrentSearch(filteredList);
  }
  function handleReset() {
    setSearchQuery("");
    setCurrentSearch(topics);
  }
  return (
    <section className="px-4">
      <div className="flex justify-center mb-8">
        <label htmlFor="search-query">input</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleChange(e)}
          id="search-query"
        />
        <Button onClick={handleReset} type="primary" />
      </div>

      <div className="sm:flex justify-center align-center w-full ">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-10 sm:mx-0 ">
          {currentSearch &&
            currentSearch.map((topic) => {
              return <SearchCard topic={topic} key={topic.title} />;
            })}
        </ul>
      </div>
    </section>
  );
}
