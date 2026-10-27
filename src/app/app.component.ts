import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly developerName = 'Айхан Рахманкулов';
  readonly year = new Date().getFullYear();
}
