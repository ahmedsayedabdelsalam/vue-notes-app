import * as types from './mutation-types'
import { defaultNoteState } from './defaults'

export default {
  [types.SET_CURRENT_NOTE_ID] (state, id) {
    state.note.id = id
  },
  [types.PREPEND_TO_NOTES] (state, note) {
    state.notes.unshift(note)
  },
  [types.TOUCH_LAST_SAVED] (state) {
    state.note.lastSaved = Date.now()
  },
  [types.SET_SAVE_TIMEOUT] (state, { callback, delay }) {
    state.saveTimeout = setTimeout(callback, delay)
  },
  [types.CLEAR_SAVE_TIMEOUT] (state) {
    clearInterval(state.saveTimeout)
    state.saveTimeout = null
  },
  [types.SET_CURRENT_NOTE] (state, note) {
    if (note === null) {
      state.note = {...defaultNoteState}
      return
    }
    state.note = note
  },
  [types.DELETE_NOTE] (state, note) {
    const noteIndex = state.notes.findIndex(item => item.id === note.id)
    state.notes.splice(noteIndex, 1)
  }
}
