import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (fullNote) => {
    setNotes((prevNotes) => [...prevNotes, fullNote]);
    return (fullNote = { title: '', body: '' });
  };

  const deleteNote = (id) =>
    setNotes((prevNotes) =>
      prevNotes.filter((prevNote, index) => index !== id)
    );

  const clearNotes = () => setNotes([]);

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} clearNotes={clearNotes} />
      {notes.length ? (
        <button
          type='button'
          onClick={() => clearNotes()}
          className='clear-notes'
        >
          Clear All
        </button>
      ) : null}
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
