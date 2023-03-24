import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

interface Migration {
  version: string;
  description: string;
  cli: string;
  implementation?: string;
  package: string;
  name: string;
  factory?: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  migrations: Migration[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/migrations.json').subscribe((response) => {
      this.migrations = response.migrations;
    });
  }
}
