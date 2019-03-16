import React from "react";

/* 
  Allows you to change the title of the note,
  save, and create a new note.
*/

export default function EditorFunctions(props) {

  function handleClick(event) {
    event.preventDefault()
    if (props.title === "") {
      alert("You need to add a title!")
    } else {
      props.handleClick(event)
    }
  }

  function newNote(event) {
    event.preventDefault()
    props.handleClick(event)
  }

  return (
    <div className="editor-functions">
      <input
        name="title"
        value={props.title}
        onChange={props.handleChange}
        placeholder="New Note Title"
        className="note-title"
        maxLength="20"
        tabIndex="1"
      />
      <div>
        <button name="save" onClick={handleClick} tabIndex="3">
          <i class="fas fa-save"></i> Save
        </button>
        <button name="new" onClick={newNote} tabIndex="4">
          <i class="fas fa-plus"></i> New
        </button>
      </div>
    </div>
  );
}
