function BookingHistory({ bookings, deleteBooking }) {
  return (
    <div className="history">
      <h2>📄 Booking History</h2>

      {bookings.length === 0 ? (
        <p className="empty">No bookings yet</p>
      ) : (
        bookings.map((b) => (
          <div className="ticket" key={b.id}>
            <h3>{b.name}</h3>
            <p>{b.source} ✈️ {b.destination}</p>
            <p>Date: {b.date}</p>
            <p>Class: {b.seatClass}</p>
            <p className="price">₹{b.price}</p>

            <button onClick={() => deleteBooking(b.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default BookingHistory;
