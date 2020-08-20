import { Component, ElementRef, OnInit } from '@angular/core';
import * as DB from '../../controllers/db';

type Note = {
  done: boolean,
  text: string,
  i: number,
}[]

function sortNote(arr: Note){
  return arr.filter(a => !a.done).concat(arr.filter(a => a.done))
}

@Component({
  selector: 'note-single',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export default class NoteSingle implements OnInit{
  id: string = ''
  element: Element
  noteData: Note = []
  count: number = 0
  constructor(elm: ElementRef){
    this.element = elm.nativeElement;
  }
  ngOnInit(){
    const id = this.element.getAttribute('data-id')!;
    const full = this.element.getAttribute('data-full') !== null;
    this.id = id;
    this.count = +DB.get('note' + id);
    this.noteData = new Array(this.count).fill(void 0).map((_, i) => ({
      done: DB.get(`note${id}.${i}done`) || false,
      text: DB.get(`note${id}.${i}text`) || '',
      i,
    }));
    if(!full) this.noteData = sortNote(this.noteData).slice(0, 2);
    this.addNext();
  }
  addNext(){
    this.noteData.push({
      i: this.noteData.length,
      done: false,
      text: '',
    })
  }
  setDone(i: number, { checked }: any){
    DB.set(`note${this.id}.${i}done`, checked);
    this.noteData.filter(v => v.i === i)[0].done = checked;
  }
  setText(i: number, { value }: any){
    if(this.count === i){
      DB.set('note' + this.id, ++this.count);
      this.addNext();
    }
    DB.set(`note${this.id}.${i}text`, value);
    this.noteData.filter(v => v.i === i)[0].text = value;
    while(i !== -1 && !value && this.count === i + 1){
      this.noteData = this.noteData.slice(0, -1);
      DB.set('note' + this.id, --this.count);
      value = DB.get(`note${this.id}.${--i}text`);
    }
  }
}
