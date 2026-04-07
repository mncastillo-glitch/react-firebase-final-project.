import { useState } from "react";
import { db } from "./firebase"; 
import { collection, addDoc } from "firebase/firestore";
import "./App.css"; // We'll move styles here for a cleaner look

function App() {
  // 1. Unified state for the activity fields
  const [student, setStudent] = useState({
    name: "",
    course: "",
    year: ""
  });

  const saveToFirebase = async () => {
    // Validation: Ensure all fields are filled
    if (!student.name || !student.course || !student.year) {
      return alert("Please fill in all fields!");
    }

    try {
      // 2. Saving to a "students" collection instead of "notes"
      await addDoc(collection(db, "students"), {
        ...student,
        timestamp: new Date()
      });

      alert("Student Record Saved! 🎓");
      
      // 3. Reset form
      setStudent({ name: "", course: "", year: "" });
    } catch (e) {
      console.error("Error: ", e);
      alert("Error saving. Make sure Firestore rules are set to Test Mode.");
    }
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Student Registry</h1>
        <p>Enter details for the Firebase activity</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Full Name"
            value={student.name}
            onChange={(e) => setStudent({...student, name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Course (e.g. BSIT)"
            value={student.course}
            onChange={(e) => setStudent({...student, course: e.target.value})}
          />
          <input
            type="text"
            placeholder="Year Level"
            value={student.year}
            onChange={(e) => setStudent({...student, year: e.target.value})}
          />
        </div>

        <button onClick={saveToFirebase}>
          Save to Backend
        </button>
      </div>
    </div>
  );
}

export default App;