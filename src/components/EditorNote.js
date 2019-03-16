import React from 'react'

/* 
	Allows for editing of text from a note
*/
export default function EditorNote(props) {
  return (
    <textarea
      name="text"
      value={props.text}
      onChange={props.handleChange}
      placeholder="Enter new note here..."
      tabIndex="2"
    />
  )
}
