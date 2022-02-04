export class serverService {
  serverSelected: { id: number; name: string; status: string };
  serversMain: { id: number; name: string; status: string }[] = [
    { id: 1, name: 'Productionserver', status: 'online' },
    { id: 2, name: 'Testserver', status: 'online' },
    { id: 3, name: 'Devserver', status: 'online' },
  ];

  serverS(serverSelected: { id: number; name: string; status: string }) {
    this.serverSelected = serverSelected;
  }
  getServer(id: number) {
    const server = this.serversMain.find((s) => {
      return s.id === id;
    });
    return server;
  }
  attStatus(status: string, name: string) {
    for (let server of this.serversMain) {
      if (name === server.name) {
        server.status = status;
      }
    }
  }
}
