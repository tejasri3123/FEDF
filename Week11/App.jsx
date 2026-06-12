import { useState, useEffect } from "react";
import BookingForm from "./components/BookingForm";
import BookingHistory from "./components/BookingHistory";
import "./App.css";

function App() {
  const [bookings, setBookings] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (booking) => {
    setBookings([booking, ...bookings]);
  };

  const deleteBooking = (id) => {
    setBookings(bookings.filter((b) => b.id !== id));
  };

  return (
    <div className="app">
      <h1 className="title">✈️ SkyJet Airlines</h1>

      <BookingForm addBooking={addBooking} />

      <BookingHistory bookings={bookings} deleteBooking={deleteBooking} />
    </div>
  );
}

export default App;
