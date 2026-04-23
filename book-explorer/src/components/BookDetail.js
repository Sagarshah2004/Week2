import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books";

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="container">
      <h2>{book.title}</h2>
      <h4>Author: {book.author}</h4>
      <p>{book.description}</p>

      {book.imageUrl && (
        <img className="book-img" src={book.imageUrl} alt={book.title} />
      )}

      <br />
      <Link to="/">
        <button className="btn">⬅ Back</button>
      </Link>
      {book.link && (
        <a href={book.link} target="_blank" rel="noopener noreferrer">
            <button className="btn">🔗 Buy / View Book</button>
        </a>
        )}
    </div>
  );
};

export default BookDetail;