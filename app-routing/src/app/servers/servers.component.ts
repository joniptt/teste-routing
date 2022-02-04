import { Component, OnInit } from '@angular/core';
import { serverService } from '../services/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serversList: { id: number; name: string; status: string }[] =
    this.serverSend.serversMain;

  constructor(private serverSend: serverService) {}
  sendServer(server: {}) {
    this.serverSend.emitServer.emit(server);
  }
  ngOnInit(): void {}
}
