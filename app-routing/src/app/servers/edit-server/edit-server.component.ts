import { Component, OnInit } from '@angular/core';
import { serverService } from 'src/app/services/server.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditComponent implements OnInit {
  serverName: { name: string; status: string };
  serverStatus = '';
  constructor(private serverN: serverService) {
    this.serverN.emitServer.subscribe(
      (server: { name: string; status: string }) =>
        (this.serverName = { name: server.name, status: server.status })
    );
  }
  ngOnInit(): void {
    console.log(this.serverStatus);
  }

  attServer() {
    this.serverN.attStatus(this.serverStatus, this.serverName);
  }
}
