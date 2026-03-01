import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  noteContent: string = '';

  constructor(
    private noteService: NoteService,
    private router: Router
  ) { }

  addNote(): void {
    if (this.noteContent.trim()) {
      this.noteService.addNote(this.noteContent);
      this.noteContent = '';
this.router.navigate(['/notes/list']);
    }
  }
}
