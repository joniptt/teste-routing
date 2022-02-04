import { Component, Input } from '@angular/core';
import { serverService } from 'src/app/services/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  constructor(private serverSend: serverService) {}
  @Input() serverS: { name: string; status: string };
}
