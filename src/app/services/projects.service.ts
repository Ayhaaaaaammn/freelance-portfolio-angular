import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

/**
 * Сервис данных проектов.
 * providedIn: 'root' — один экземпляр (синглтон) на всё приложение.
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      id: 1,
      title: 'Интернет-магазин электроники',
      description:
        'Каталог товаров с фильтрами, корзиной и оформлением заказа. Адаптивная вёрстка и личный кабинет покупателя.',
      imageUrl: 'assets/images/shop.svg',
      tags: ['Angular', 'RxJS', 'REST API'],
      year: 2026,
    },
    {
      id: 2,
      title: 'Дашборд аналитики продаж',
      description:
        'Панель с ключевыми показателями, интерактивными графиками и выгрузкой отчётов для отдела продаж.',
      imageUrl: 'assets/images/dashboard.svg',
      tags: ['Angular', 'Chart.js', 'ASP.NET Core'],
      year: 2025,
    },
    {
      id: 3,
      title: 'Мобильное приложение доставки',
      description:
        'Заказ еды из ресторанов, отслеживание курьера на карте и push-уведомления о статусе заказа.',
      imageUrl: 'assets/images/mobile.svg',
      tags: ['Ionic', 'Firebase'],
      year: 2025,
    },
    {
      id: 4,
      title: 'Лендинг студии дизайна',
      description:
        'Одностраничный сайт с анимациями, портфолио работ и формой заявки, оптимизированный под SEO.',
      imageUrl: 'assets/images/landing.svg',
      tags: ['HTML', 'CSS', 'TypeScript'],
      year: 2024,
    },
  ];

  /** Возвращает массив имитационных (mock) данных. */
  getData(): Project[] {
    return this.projects;
  }
}
