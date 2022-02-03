import { EventEmitter } from '@angular/core';

export class serverService {
  emitServer = new EventEmitter<any>();
  serversMain: { name: string; status: string }[] = [
    { name: 'Productionserver', status: '' },
    { name: 'Testserver', status: '' },
    { name: 'Devserver', status: '' },
  ];

  attStatus(status: any, name: any) {
    for (let server of this.serversMain) {
      if (name === server.name) {
        server.status = status;
      }
    }
  }
}
