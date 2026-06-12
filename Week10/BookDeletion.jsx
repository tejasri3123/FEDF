function BookDeletion({ books, setBooks }) {

  const deleteBook = async (id, title) => {
    const confirmDelete = window.confirm(
      `Delete "${title}"?`
    );

    if (!confirmDelete) return;

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setBooks((prev) =>
      prev.filter((book) => book.id !== id)
    );
  };

  return (
    <div className="container">
      <h2>📚 Book Deletion System</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteBook(book.id, book.title)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookDeletion;
