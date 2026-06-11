import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import BookContext from "./BookContext";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      <BrowserRouter>
        <nav className="navbar">
          <div className="logo">
            📚 Library Management System
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/addbook">Add Book</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </BookContext.Provider>
  );
}

export default App;
