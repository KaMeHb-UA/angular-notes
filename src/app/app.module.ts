import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import NoteList from './components/note-list/component';
import NoteSingle from './components/note-single/component';

@NgModule({
  declarations: [
    AppComponent,
    NoteList,
    NoteSingle,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent, NoteList ]
})
export class AppModule { }
