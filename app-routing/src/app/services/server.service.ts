import { EventEmitter } from '@angular/core';

export class serverService {
  emitServer = new EventEmitter<any>();
  serversMain: { id: number; name: string; status: string }[] = [
    { id: 1, name: 'Productionserver', status: 'online' },
    { id: 2, name: 'Testserver', status: 'online' },
    { id: 3, name: 'Devserver', status: 'online' },
  ];

  attStatus(status: string, name: string) {
    for (let server of this.serversMain) {
      if (name === server.name) {
        server.status = status;
      }
    }
  }
}
