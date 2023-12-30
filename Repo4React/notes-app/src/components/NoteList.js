
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, removeNote }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} note={note} removeNote={removeNote} />
      ))}
    </div>
  );
};

export default NoteList;

