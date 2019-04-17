import * as mutations from './mutation-types'

export const saveNote = ({ commit, dispatch, state }) => {
  commit(mutations.TOUCH_LAST_SAVED)

  if (state.note.id === null) {
    commit(mutations.SET_CURRENT_NOTE_ID, Date.now())

    commit(mutations.PREPEND_TO_NOTES, state.note)
  }

  dispatch('storeNotes')
}

export const storeNotes = ({ state }) => {
  localStorage.setItem('notes', JSON.stringify(state.notes))
}

export const startSaveTimeout = ({ commit, dispatch, state }) => {
  if (state.saveTimeout !== null) {
    // eslint-disable-next-line no-useless-return
    return
  }

  commit(mutations.SET_SAVE_TIMEOUT, {
    callback () {
      dispatch('saveNote')
      dispatch('stopSaveTimeout')
    },
    delay: 1000
  })
}

export const stopSaveTimeout = ({ commit, dispatch, state }) => {
  state.saveTimeout = null
}

export const openNote = ({ commit }, note) => {
  commit(mutations.SET_CURRENT_NOTE, note)
}

export const clearNote = ({ commit }) => {
  commit(mutations.SET_CURRENT_NOTE, null)
}

export const deleteNote = ({ commit, dispatch, state }, note) => {
  if (note.id === state.note.id) {
    dispatch('clearNote')
  }
  commit(mutations.DELETE_NOTE, note)
  dispatch('storeNotes')
}
