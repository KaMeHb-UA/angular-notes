import { Component } from '@angular/core';
import * as DB from '../../controllers/db';

@Component({
  selector: 'add-button',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export default class AddButton {
  onClick(){
    const count = DB.get('noteCount');
    DB.set('noteCount', count + 1)
  }
}
