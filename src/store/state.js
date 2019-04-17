import { defaultNoteState } from './defaults'

export default {
  note: {...defaultNoteState},
  notes: JSON.parse(localStorage.getItem('notes')) || [],
  saveTimeout: null
}
