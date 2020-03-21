import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = fullNote => setNotes(prevNotes => [...prevNotes, fullNote]);

  const deleteNote = id =>
    setNotes(prevNotes => prevNotes.filter((prevNote, index) => index !== id));

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map(({ title, content }, index) => (
        <Note
          key={index}
          id={index}
          onDelete={deleteNote}
          title={title}
          content={content}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
