import { Component, NgZone, ElementRef } from '@angular/core';
import { auth } from '../../controllers/firebase/firestore'

@Component({
  selector: 'sync-button',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export default class SyncButton {
  sync_active = false
  display_name = ''
  constructor(ngZone: NgZone, private eRef: ElementRef){
    auth.onAuthStateChanged(next => {
      ngZone.run(() => {
        if(next){
          this.sync_active = true;
          this.display_name = next.displayName || next.email || ''
        } else {
          this.sync_active = false;
          this.display_name = ''
        }
      })
    })
  }
  signOut(){
    auth.signOut();
    this.eRef.nativeElement.querySelector('label').click()
  }
}
