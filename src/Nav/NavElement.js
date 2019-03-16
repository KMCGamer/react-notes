import React from "react";
import Utils from '../Utils'

/* 
  Represents a note in the nav bar
*/

export default function NavElement(props) {
  function handleClick() {
    props.handleClick(props.note.id);
  }

  return (
    <div
      onClick={handleClick}
      className={`nav-element ${props.active ? "nav-element-active" : ""}`}
    >
      <div className="nav-element-title">{props.note.title}</div>
      <div className="nav-element-text">{Utils.truncate(props.note.text, 20)}</div>
    </div>
  );
}
