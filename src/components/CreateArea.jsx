import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = ({ addNote }) => {
  const [fullNote, setFullNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFullNote({ ...fullNote, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFullNote({
      title: '',
      content: '',
    });
  };

  const [isClicked, setIsClicked] = useState(false);

  const toggle = () => setIsClicked(true);

  const { noteTitle, noteContent } = fullNote;

  return (
    <div className='form'>
      <form className='create-note' onSubmit={handleSubmit}>
        {isClicked ? (
          <input
            type='text'
            name='title'
            placeholder='Title'
            onChange={handleChange}
            value={noteTitle}
            spellCheck='false'
            autoComplete='off'
          />
        ) : null}
        <textarea
          type='text'
          name='content'
          placeholder='Take a note...'
          rows={isClicked ? 3 : 1}
          onClick={toggle}
          onChange={handleChange}
          value={noteContent}
          spellCheck='false'
          autoComplete='off'
        />
        <Zoom in={isClicked}>
          <Fab
            onClick={() => {
              addNote(fullNote);
              setFullNote({
                title: '',
                content: '',
              });
            }}
            type='submit'
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
