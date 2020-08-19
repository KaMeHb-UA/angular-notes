import { Component, ElementRef, OnInit } from '@angular/core';

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
    this.noteData = sortNote(new Array(+(localStorage.getItem('note' + id) || '')).fill(void 0).map((_, i) => ({
      done: Boolean(+localStorage.getItem(`note${id}.${i}done`)!),
      text: localStorage.getItem(`note${id}.${i}text`) || '',
      i,
    })));
    console.log({'this.noteData': this.noteData});
  }
}
