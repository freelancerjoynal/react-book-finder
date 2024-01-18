import { useState } from "react";

function Filter({ onfilter }) {
  const [sortBy, setSortBy] = useState("");

  const getFilter = (event) => {
    onfilter(event.target.value);
  };

  return (
    <>
      <select
        onChange={getFilter}
        className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
        name="sortBy"
        id="sortBy"
      >
        <option value="">Sort</option>
        <option value="name_asc">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        <option value="year_asc">Publication Year (Oldest)</option>
        <option value="year_desc">Publication Year (Newest)</option>
      </select>
    </>
  );
}

export default Filter;
