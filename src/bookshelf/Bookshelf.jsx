import Bookitem from "./Bookitem";
import Nobook from "./Nobook";

function Bookshelf({ books }) {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.length !== 0 ? (
          books.map((book) => <Bookitem key={book.id} book={book} />)
        ) : (
          <Nobook />
        )}
      </div>
    </>
  );
}

export default Bookshelf;
