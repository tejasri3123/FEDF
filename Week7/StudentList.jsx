import { useContext } from "react";
import StudentContext from "../StudentContext";

function StudentList() {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h3>Student List</h3>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>Name:</strong> {student.name} <br />
            <strong>Email:</strong> {student.email} <br />
            <strong>Phone:</strong> {student.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
