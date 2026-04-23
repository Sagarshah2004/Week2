import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <div className="content">
          <h1>📚 Book Explorer</h1>

          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail />} />
          </Routes>
        </div>  
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;