import { Component, ElementRef, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core'
import getData, { remove, get, set, runPendingEvents } from '../../controllers/db'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

type Note = {
    name: string
    data: {
        done: boolean
        text: string
    }[]
}

function getNoteList(element: Element): Element{
    return element.nodeName === 'NOTE-LIST' ? element : getNoteList(element.parentElement!)
}

function removeEmpty(arr: Note['data']): any {
    for(let i = arr.length - 1; i >= 1; i--){
        if(arr[i - 1] && arr[i - 1].text) return arr;
        arr.length--;
        delete arr[i]
    }
}

@Component({
    selector: 'note-single',
    templateUrl: './component.html',
    styleUrls: [ './component.scss' ],
    encapsulation: ViewEncapsulation.None,
})
export default class NoteSingle implements OnInit{
    data: Observable<Note> | undefined
    unnamed_text = 'Unnamed note'
    text_here = 'Text here'
    id: string | undefined
    active = false
    note: Note | undefined

    constructor(private element: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        const id = this.element.nativeElement.getAttribute('data-id')!;
        this.id = id;
        this.data = getData('notes', id).pipe(map(v => {
            v = v || { name: '', data: [] };
            this.note = v;
            return v
        }));
        this.renderer.listen(this.element.nativeElement, 'click', () => {
            if(this.active) return;
            this.active = true;
            this.renderer.addClass(this.element.nativeElement, 'active');
            this.renderer.addClass(getNoteList(this.element.nativeElement), 'has-active');
        });
    }

    async remove(e: Event){
        e.stopPropagation();
        (document.activeElement as HTMLElement).blur();
        const noteCount = await get('general', 'noteCount');
        set('general', 'noteCount', noteCount - 1);
        for(let id = +this.id! + 1; id < noteCount; id++) get('notes', `${id}`).then((v: any) => set('notes', `${id - 1}`, v));
        remove('notes', `${noteCount - 1}`)
    }

    setText(i: number, { value }: any){
        this.note!.data[i].text = value;
        set('notes', this.id!, this.note!, true)
    }

    setDone(i: number, { checked }: any){
        this.note!.data[i].done = checked;
        set('notes', this.id!, this.note!, true)
    }

    setName({ value }: any){
        this.note!.name = value;
        set('notes', this.id!, this.note!, true)
    }

    sort(note: Note | null){
        if(!note) return note;
        note.data = note.data.filter(a => !a.done).concat(note.data.filter(a => a.done)).filter(v => v.text).slice(0, 3);
        return note
    }

    full(note: Note | null){
        if(!note) return note;
        removeEmpty(note.data);
        if(!note.data.length || note.data[note.data.length - 1].text) note.data.push({
            done: false,
            text: '',
        });
        return note
    }

    clickCancel(e: any){
        e.stopPropagation();
        this.active = false;
        this.renderer.removeClass(this.element.nativeElement, 'active');
        this.renderer.removeClass(getNoteList(this.element.nativeElement), 'has-active');
        runPendingEvents()
    }
}
