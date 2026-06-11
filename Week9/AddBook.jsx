import { useState, useContext } from "react";
import BookContext from "../BookContext";

function AddBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rating, setRating] = useState("");

  const { books, setBooks } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title: bookTitle,
      author,
      isbn,
      category,
      language,
      price,
      quantity,
      rating,
    };

    setBooks([...books, newBook]);

    setBookTitle("");
    setAuthor("");
    setIsbn("");
    setCategory("");
    setLanguage("");
    setPrice("");
    setQuantity("");
    setRating("");
  };

  return (
    <div className="book-container">
      <h2>📚 Add New Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
