import { useState } from "react";
import Bookshelf from "./bookshelf/Bookshelf";
import Header from "./header/Header";
import Footer from "./layouts/Footer";
import Nav from "./layouts/Nav";
import { Booklist } from "./lib/Booklist";
function App() {
  const [books, setBooks] = useState(Booklist);

  const searchTerm = (input) => {
    const matchingBooks = books.filter((book) =>
      book.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    setBooks(matchingBooks);
  };

  const onfilter = (filter) => {
    if (filter === "year_desc") {
      const year_desc = [...books].sort((a, b) => b.publish - a.publish);
      setBooks(year_desc);
    } else if (filter === "year_asc") {
      const year_asc = [...books].sort((a, b) => a.publish - b.publish);
      setBooks(year_asc);
    } else if (filter === "name_asc") {
      const name_asc = [...books].sort((a, b) =>
        a.name.localeCompare(b.name, "en", { sensitivity: "base" })
      );
      setBooks(name_asc);
    } else if (filter === "name_desc") {
      const name_desc = [...books].sort((a, b) =>
        b.name.localeCompare(a.name, "en", { sensitivity: "base" })
      );
      setBooks(name_desc);
    }
  };

  return (
    <>
      <Nav />
      <main className="my-10 lg:my-14">
        <Header searchTerm={searchTerm} onfilter={onfilter} />
        <Bookshelf books={books} />
      </main>
      <Footer />
    </>
  );
}

export default App;
