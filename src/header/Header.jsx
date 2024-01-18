import Filter from "./Filter";
import Intro from "./Intro";
import SearchForm from "./SearchForm";

function Header({ searchTerm, onfilter }) {
  return (
    <>
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <div>
            <Intro />
            <SearchForm searchTerm={searchTerm} />
          </div>
          <div className="flex items-stretch space-x-3">
            <Filter onfilter={onfilter} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
