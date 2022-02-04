import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { serverService } from 'src/app/services/server.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditComponent implements OnInit {
  serverName: { id: number; name: string; status: string };
  serverStatus = '';
  constructor(private serverN: serverService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.fragment.subscribe();
    this.route.queryParams.subscribe();
    console.log(this.serverStatus);
    this.serverName = this.serverN.serverSelected;
  }

  attServer() {
    this.serverN.attStatus(this.serverStatus, this.serverName.name);
  }
}
