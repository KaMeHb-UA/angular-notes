import { Component } from '@angular/core';
import * as DB from '../../controllers/db';

@Component({
  selector: 'note-list',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export default class NoteList {
  notes: number[] = []
  constructor(){
    DB.onChange('noteCount', this.updateNotes.bind(this));
    this.updateNotes(DB.get('noteCount'))
  }
  updateNotes(count: number | null){
    this.notes = new Array(+count!).fill(void 0).map((_, i) => i)
  }
}
