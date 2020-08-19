import { Component, ElementRef, OnInit } from '@angular/core';
import * as DB from '../../controllers/db';

type Note = {
  done: boolean,
  text: string,
  i: number,
}[]

function sortNote(arr: Note){
  const res = arr.filter(a => !a.done).concat(arr.filter(a => a.done));
  res.push({
    i: res.length,
    done: false,
    text: '',
  });
  return res
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
  constructor(elm: ElementRef){
    this.element = elm.nativeElement;
  }
  ngOnInit(){
    const id = this.element.getAttribute('data-id')!;
    this.id = id;
    const count = +DB.get('note' + id);
    this.noteData = sortNote(new Array(count).fill(void 0).map((_, i) => ({
      done: DB.get(`note${id}.${i}done`) || false,
      text: DB.get(`note${id}.${i}text`) || '',
      i,
    })));
  }
}
