import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { serverService } from 'src/app/services/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  constructor(
    private serverSend: serverService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serverSend.getServer(id);
    this.route.params.subscribe(
      (params: Params) =>
        (this.server = this.serverSend.getServer(+params['id']))
    );
  }
  onEdit() {
    this.router.navigate(['/servers', this.server.id, 'edit']);
  }
}
