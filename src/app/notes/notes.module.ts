import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteListComponent } from './note-list/note-list.component';

@NgModule({
  declarations: [
    AddNoteComponent,
    NoteListComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule
  ]
})
export class NotesModule { }
