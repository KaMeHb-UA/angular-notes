import { Component, ElementRef, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import * as DB from '../../controllers/db';

type Note = {
  done: boolean,
  text: string,
  i: number,
}[]

function sortNote(arr: Note){
  return arr.filter(a => !a.done).concat(arr.filter(a => a.done))
}

function getNoteList(element: Element): Element{
  return element.nodeName === 'NOTE-LIST' ? element : getNoteList(element.parentElement!)
}

@Component({
  selector: 'note-single',
  templateUrl: './component.html',
  styleUrls: [ './component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export default class NoteSingle implements OnInit{
  id: string = ''
  element: Element
  noteData: Note = []
  sortedNotes: Note = []
  count: number = 0
  active: boolean = false
  renderer: Renderer2
  name: string = ''
  unnamed_text = 'Unnamed note'
  constructor(elm: ElementRef, renderer: Renderer2){
    this.element = elm.nativeElement;
    this.renderer = renderer;
  }
  ngOnInit(){
    const id = this.element.getAttribute('data-id')!;
    this.id = id;
    this.name = DB.get(`note${id}.name`);
    this.count = +DB.get('note' + id);
    this.noteData = new Array(this.count).fill(void 0).map((_, i) => ({
      done: DB.get(`note${id}.${i}done`) || false,
      text: DB.get(`note${id}.${i}text`) || '',
      i,
    }));
    this.addNext();
    this.sortNotes();
    this.renderer.listen(this.element, 'click', () => {
      if(this.active) return;
      this.active = true;
      this.renderer.addClass(this.element, 'active');
      this.renderer.addClass(getNoteList(this.element), 'has-active');
    });
  }
  sortNotes(){
    this.sortedNotes = sortNote(this.noteData).filter(v => v.text).slice(0, 3)
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
    this.sortNotes();
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
    this.sortNotes();
  }
  setName({ value }: any){
    this.name = value;
    DB.set(`note${this.id}.name`, value)
  }
  clickCancel(e: any){
    e.stopPropagation();
    this.active = false;
    this.renderer.removeClass(this.element, 'active');
    this.renderer.removeClass(getNoteList(this.element), 'has-active');
  }
}
