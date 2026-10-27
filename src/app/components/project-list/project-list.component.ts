import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent implements OnInit {
  /** Локальное свойство с данными, полученными из сервиса. */
  projects: Project[] = [];

  // Внедрение зависимости (Dependency Injection) через конструктор
  constructor(private dataService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.dataService.getData();
  }
}
