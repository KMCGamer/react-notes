import React from 'react'
import EditorNote from './EditorNote'
import EditorFunctions from './EditorFunctions'

/* 
  Holds the current note for editing
*/

export default function Editor(props) {
  return (
    <form className="editor">
      <EditorFunctions
        title={props.title}
        handleChange={props.handleChange}
        handleClick={props.handleClick}
      />
      <EditorNote text={props.text} handleChange={props.handleChange} />
    </form>
  )
}
