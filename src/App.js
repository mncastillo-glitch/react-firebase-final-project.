import { useState } from "react";
import { db } from "./firebase"; 
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [note, setNote] = useState("");

  const saveNote = async () => {
    if (note.trim() === "") return alert("Type something first!");

    try {
      await addDoc(collection(db, "notes"), {
        text: note,
        created: new Date()
      });
      alert("Saved to Firebase! 🎉");
      setNote(""); // This clears the box after saving
    } catch (e) {
      console.error("Error: ", e);
      alert("Error saving! Check if Firestore is in 'Test Mode'.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#4A90E2" }}>Cloud Note Taker</h1>
      
      <input
        type="text"
        placeholder="What's on your mind?"
        style={{ padding: "12px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      
      <br /><br />
      
      <button 
        onClick={saveNote}
        style={{ 
          padding: "10px 25px", 
          backgroundColor: "#4CAF50", 
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Save to Backend
      </button>
    </div>
  );
}

export default App;