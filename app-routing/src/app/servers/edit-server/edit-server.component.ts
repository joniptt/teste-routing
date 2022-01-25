import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditComponent {
  serverName =""
  serverData = {name:'',status:''}
  selectedStatus= ""
  online = false
  showStatus = false
  updateServer(){
  this.showStatus = true
  this.serverData.name = this.serverName
  this.serverData.status = this.selectedStatus
  }
}
