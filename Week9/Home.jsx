import { useContext } from "react";
import BookContext from "../BookContext";

function Home() {
  const { books, setBooks } = useContext(BookContext);

  const removeBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="home">
      <h2>📚 Library Book Collection</h2>

      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Category</th>
              <th>Language</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.category}</td>
                <td>{book.language}</td>
                <td>₹{book.price}</td>
                <td>{book.quantity}</td>
                <td>⭐ {book.rating}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => removeBook(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
