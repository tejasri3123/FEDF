import { Link } from "react-router-dom";

function Dashboard({ books, logoutHandler }) {
  return (
    <div className="dashboard-card">
      <h2>📖 Librarian Dashboard</h2>

      <div className="stats">
        <div className="stat-card">
          <h4>Total Books</h4>
          <p>{books.length}</p>
        </div>

        <div className="stat-card">
          <h4>Status</h4>
          <p>Active</p>
        </div>
      </div>

      <Link to="/deletebook">
        <button>🗑️ Manage Books</button>
      </Link>

      <br />
      <br />

      <button className="logout-btn" onClick={logoutHandler}>
        🚪 Logout
      </button>
    </div>
  );
}

export default Dashboard;
