import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import BookDeletion from "./components/BookDeletion";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ MOVE BOOKS HERE (GLOBAL STATE)
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Java Programming",
      author: "James Gosling",
      category: "Programming",
      price: 450,
      quantity: 10,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Python Fundamentals",
      author: "Guido van Rossum",
      category: "Programming",
      price: 550,
      quantity: 8,
      rating: 4.8,
    },
    {
      id: 3,
      title: "React Development",
      author: "Jordan Walke",
      category: "Web Development",
      price: 650,
      quantity: 5,
      rating: 4.7,
    },
  ]);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <h1>📚 Library Management System</h1>

      <Routes>
        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard
                books={books}
                logoutHandler={logoutHandler}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/deletebook"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <BookDeletion
                books={books}
                setBooks={setBooks}
              />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
