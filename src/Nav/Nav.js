import React from 'react'
import NavElement from './NavElement'

/* 
  Allows you to browse created notes
*/

export default function Nav(props) {
  return (
    <div className="nav">
      {props.notes.length === 0 ? (
        <div className="nav-element-placeholder">
          New notes will appear here upon save...
        </div>
      ) : (
        props.notes.map(note => (
          <NavElement
            key={note.id}
            note={{ ...note }}
            handleClick={props.handleClick}
            active={note.id === props.currentId}
          />
        ))
      )}
    </div>
  )
}
