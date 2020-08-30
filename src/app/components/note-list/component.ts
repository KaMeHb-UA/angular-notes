import { Component, ViewEncapsulation } from '@angular/core'
import getData from '../../controllers/db'
import { map } from 'rxjs/operators'

@Component({
  selector: 'note-list',
  templateUrl: './component.html',
  styleUrls: [ './component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export default class NoteList {
  notes = getData('general', 'noteCount').pipe(map(v => new Array(v)))
}
