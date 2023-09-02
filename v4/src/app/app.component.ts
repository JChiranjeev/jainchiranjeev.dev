import { Component } from '@angular/core';
import Typed from 'typed.js';

declare let AOS : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jainchiranjeev-dev';

  ngOnInit() {
    AOS.init();
  }
}
