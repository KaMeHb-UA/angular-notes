import { Component } from '@angular/core';
import * as DB from '../../controllers/db';

@Component({
  selector: 'add-button',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export default class AddButton {
  async onClick(){
    const count = await DB.get('general', 'noteCount') || 0;
    DB.set('general', 'noteCount', count + 1)
  }
}
