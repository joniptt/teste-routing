import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditComponent {
  serverName =""
  showStatus = false
  updateServer(){
    this.showStatus = true
  }
}
