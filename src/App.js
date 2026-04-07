import { useState, useEffect } from "react";
import { db } from "./firebase"; 
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import "./App.css"; 

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]); // State to hold the list of notes

  // --- LIVE LISTENER ---
  useEffect(() => {
    // This looks at the 'notes' collection, sorted by time
    const q = query(collection(db, "notes"), orderBy("createdAt", "desc"));
    
    // This updates the 'notes' state automatically whenever the DB changes
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const saveNote = async () => {
    if (!note.trim()) return alert("Write something! ✍️");

    try {
      await addDoc(collection(db, "notes"), {
        content: note,
        createdAt: new Date()
      });
      setNote(""); 
    } catch (e) {
      alert("Error saving. Check Firebase Rules!");
    }
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Cloud Notes</h1>
        
        <div className="input-group">
          <input
            type="text"
            placeholder="What's on your mind?..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button onClick={saveNote}>Save Note</button>
        </div>

        <div className="notes-list">
          <h3>Recent Notes</h3>
          {notes.map((n) => (
            <div key={n.id} className="note-item">
              {n.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;