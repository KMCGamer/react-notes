import { ADD_NOTE, EDIT_NOTE } from '../actions/actionTypes'

let id = 0

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, { text: action.text, id: id++ }]
    case EDIT_NOTE:
      return state.map(todo =>
        todo.id === action.todo.id ? action.todo : todo
      )
    default:
      return state
  }
}
