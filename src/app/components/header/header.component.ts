import { Component, Input } from '@angular/core';

interface NavLink {
  href: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  /** Имя разработчика, передаётся из AppComponent. */
  @Input() name = '';

  readonly links: NavLink[] = [
    { href: '#projects', label: 'Проекты' },
    { href: '#top', label: 'Обо мне' },
  ];
}
