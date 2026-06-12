import { useState } from "react";

function BookingForm({ addBooking }) {
  const [form, setForm] = useState({
    name: "",
    source: "",
    destination: "",
    date: "",
    seatClass: "Economy",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.source === form.destination) {
      setError("Source and Destination cannot be same!");
      return;
    }

    if (!form.name) {
      setError("Please enter passenger name!");
      return;
    }

    const price = form.seatClass === "Business" ? 8000 : 4000;

    const booking = {
      id: Date.now(),
      ...form,
      price,
    };

    addBooking(booking);

    setForm({
      name: "",
      source: "",
      destination: "",
      date: "",
      seatClass: "Economy",
    });

    setError("");
  };

  return (
    <div className="card">
      <h2>Flight Booking</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Passenger Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="source"
          placeholder="Source City"
          value={form.source}
          onChange={handleChange}
          required
        />

        <input
          name="destination"
          placeholder="Destination City"
          value={form.destination}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <select
          name="seatClass"
          value={form.seatClass}
          onChange={handleChange}
        >
          <option>Economy</option>
          <option>Business</option>
        </select>

        <button type="submit">Book Ticket</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default BookingForm;
