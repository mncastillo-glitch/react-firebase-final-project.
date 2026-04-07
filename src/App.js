import { useState } from "react";
import { db } from "./firebase"; 
import { collection, addDoc } from "firebase/firestore";
import "./App.css"; 

function App() {
  const [note, setNote] = useState("");

  const saveNote = async () => {
    if (!note.trim()) {
      return alert("Please write something first!");
    }

    try {
      // Saving to the 'notes' collection
      await addDoc(collection(db, "notes"), {
        content: note,
        timestamp: new Date()
      });

      alert("Note saved successfully! 📝");
      setNote(""); // Clear the input
    } catch (e) {
      console.error("Error: ", e);
      alert("Error saving note. Check Firebase rules!");
    }
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Cloud Notes</h1>
        <p>Your thoughts, synced to the backend</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Write a note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button onClick={saveNote}>
          Save Note
        </button>
      </div>
    </div>
  );
}

export default App;