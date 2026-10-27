import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  /** Данные одного проекта, передаются из ProjectListComponent: [item]="project". */
  @Input({ required: true }) item!: Project;

  /** Отметка «Нравится» (локальное состояние карточки). */
  liked = false;

  toggleLike(): void {
    this.liked = !this.liked;
  }
}
