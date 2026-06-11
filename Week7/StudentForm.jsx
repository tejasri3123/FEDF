import { useState, useContext } from "react";
import StudentContext from "../StudentContext";

function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { students, setStudents } = useContext(StudentContext);

  const addStudent = () => {
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "")
      return;

    const newStudent = {
      name,
      email,
      phone,
    };

    setStudents([...students, newStudent]);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h3>Add Student</h3>

      <input
        type="text"
        value={name}
        placeholder="Enter Student Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="tel"
        value={phone}
        placeholder="Enter Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />

      <br /><br />

      <button onClick={addStudent}>Add</button>
    </div>
  );
}

export default StudentForm;
