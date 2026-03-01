import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  // Array to store notes - data persists in memory during app session
  private notes: string[] = [];

  constructor() { }

  // Add a new note to the array
  addNote(note: string): void {
    this.notes.push(note);
  }

  // Get all notes from the array
  getNotes(): string[] {
    return this.notes;
  }

  // Delete a note by index
  deleteNote(index: number): void {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
    }
  }
}
