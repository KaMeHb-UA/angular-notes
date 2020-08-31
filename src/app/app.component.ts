import { Component } from '@angular/core';
import lang from './etc/lang'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular-app'
  lang = lang
}
