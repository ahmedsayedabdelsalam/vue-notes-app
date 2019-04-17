import moment from 'moment'

export const note = state => {
  return state.note
}

export const notes = state => {
  return state.notes.sort((a, b) => {
    return b['lastSaved'] - a['lastSaved']
  })
}

export const lastSaved = state => {
  if (!state.note.lastSaved) return 'Never'

  return moment(state.note.lastSaved).calendar()
}

export const wordCount = state => {
  if (!state.note.body || state.note.body.trim() === '') {
    return 0
  }

  return state.note.body.trim().split(/\s+/).length
}
