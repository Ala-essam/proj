
import React from 'react';

const Note = ({ note, onRemove }) => {
  return (
    <div style={{ backgroundColor: note.color }}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      {note.reminder && <p>Reminder: {note.reminder}</p>}
      <button onClick={() => onRemove(note.id)}>Remove Me</button>
    </div>
  );
};

export default Note;


