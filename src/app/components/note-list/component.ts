import { Component, ViewEncapsulation, NgZone } from '@angular/core'
import getData from '../../controllers/db'
import { map } from 'rxjs/operators'
import setImmediate from '../../etc/setImmediate'

@Component({
  selector: 'note-list',
  templateUrl: './component.html',
  styleUrls: [ './component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export default class NoteList {
  notes = getData('general', 'noteCount').pipe(map(v => new Array(v || 0)))
  constructor(ngZone: NgZone){
    this.notes.subscribe(() => {
      setImmediate(() => ngZone.run(() => void 0))
    })
  }
}
