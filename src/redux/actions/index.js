import * as ActionTypes from './ActionTypes'

export function addTodo(text) {
  return { type: ActionTypes.ADD_NOTE, text }
}

export function editTodo(note) {
  return { type: ActionTypes.EDIT_NOTE, note }
}
