
import { writable } from 'svelte/store';

export const notes = writable([]);

export function addNote(note) {
  notes.update(n => [...n, note]);
}
export function deleteNote(noteX) {
    notes.update(n => n.filter(note => note.noteX !== noteX));
  }
