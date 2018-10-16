import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exemplo-talk';
  menus = [
    { label: 'Hello World', link: './hello-world' },
  ];
}
