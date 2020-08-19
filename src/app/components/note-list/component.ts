import { Component } from '@angular/core';

@Component({
  selector: 'note-list',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export default class NoteList {
  noteCount = +localStorage.getItem('noteCount')!
  notes: number[] = new Array(this.noteCount).fill(void 0).map((_, i) => i)
  addNote(){
    localStorage.setItem('noteCount', '' + ++this.noteCount);
    this.notes.push(this.notes.length)
  }
}
