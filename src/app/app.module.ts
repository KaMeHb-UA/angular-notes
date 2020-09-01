import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import NoteList from './components/note-list/component';
import NoteSingle from './components/note-single/component';
import AddButton from './components/add-button/component';
import SyncButton from './components/sync-button/component';

@NgModule({
  declarations: [
    AppComponent,
    NoteList,
    NoteSingle,
    AddButton,
    SyncButton,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
