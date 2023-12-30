import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuid } from 'uuid';
import './NoteForm.css';
import Note from './Note';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reminder, setReminder] = useState(null);
  const [color, setColor] = useState(generateRandomColor());
  const [notes, setNotes] = useState([]);

  const handleSubmit = () => {
    const newNote = {
      id: uuid(),
      title,
      body,
      reminder: reminder ? reminder.toLocaleString() : null,
      created_at: new Date().toLocaleString(),
      color,
    };

    setNotes([...notes, newNote]);

    setTitle('');
    setBody('');
    setReminder(null);
    setColor(generateRandomColor());
  };

  const handleRemoveNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  return (
    <div>
      <div style={{ backgroundColor: color }}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />

        <label>Reminder:</label>
        <DatePicker
          selected={reminder}
          onChange={(date) => setReminder(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select reminder date and time"
        />

        <button onClick={handleSubmit}>Add Note</button>
      </div>

      {notes.map((note) => (
        <Note key={note.id} note={note} onRemove={handleRemoveNote} />
      ))}
    </div>
  );
};

export default NoteForm;


