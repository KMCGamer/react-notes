import React, { Component } from "react";
import uuid from "uuid/v1";

import Nav from "./Nav/Nav";
import Editor from "./Editor/Editor";

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      title: "",
      text: "",
      id: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.navClick = this.navClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  saveNote(event) {
    const { notes, title, text, id } = this.state;

    if (id === '') {
      const newId = uuid();
      notes.push({
        title,
        text,
        id: newId
      });
      this.setState({
        notes,
        id: newId 
      });
    } else {
      this.setState(prevState => {
        return {
          notes: prevState.notes.map(note =>
            note.id === id ? { title, text, id } : note
          )
        };
      });
    }
  }

  newNote() {
    this.setState({
      title: "",
      text: "",
      id: ""
    });
  }

  handleClick(event) {
    const { name } = event.target;
    name === "save" ? this.saveNote() : this.newNote();
  }

  navClick(id) {
    const navNote = this.state.notes.find(note => note.id === id);

    this.setState({
      ...navNote
    });
  }

  render() {
    return (
      <div className="container">
        <Nav
          notes={this.state.notes}
          handleClick={this.navClick}
          currentId={this.state.id}
        />
        <Editor
          title={this.state.title}
          text={this.state.text}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
