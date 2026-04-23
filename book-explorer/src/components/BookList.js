import React from "react";
import books from "../data/books";
import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <div className="container">
      <h2>📚 Book List</h2>

      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <h3>{book.title}</h3>

          <Link to={`/books/${book.id}`}>
            <button className="btn">Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;