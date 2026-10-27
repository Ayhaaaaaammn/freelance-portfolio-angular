# Портфолио фриланс-разработчика (Angular)

Лабораторная работа № 20 «Разработка структуры веб-приложения на Angular с использованием модулей, компонентов и сервисов».
Вариант 1 — «Портфолио фриланс-разработчика». Выполнил: Рахманкулов А., гр. 310101.

## Стек

- Angular 19 (модульная архитектура: `@NgModule`, компоненты с `standalone: false`)
- TypeScript
- Сервис данных `ProjectsService` с `@Injectable({ providedIn: 'root' })`
- Инкапсулированные стили компонентов (`*.component.css`)

## Запуск

Требуется Node.js 18.19+ / 20 LTS и npm.

```bash
git clone https://github.com/Ayhaaaaaammn/freelance-portfolio-angular.git
cd freelance-portfolio-angular
npm install
npm start
```

Приложение откроется по адресу http://localhost:4200.
Сборка production-версии: `npm run build` (результат в `dist/`).

Если Angular CLI установлен глобально (`npm install -g @angular/cli`), можно использовать `ng serve` и `ng build`.

## Архитектура

```
src/
├── index.html
├── main.ts                       # bootstrapModule(AppModule)
├── styles.css                    # глобальные стили, CSS-переменные
├── assets/
│   ├── icons/                    # SVG-иконки
│   └── images/                   # SVG-изображения проектов
└── app/
    ├── app.module.ts             # корневой модуль @NgModule
    ├── app.component.*           # корневой компонент
    ├── models/project.model.ts   # интерфейс Project
    ├── services/projects.service.ts
    └── components/
        ├── header/               # HeaderComponent
        ├── project-list/         # ProjectListComponent
        └── project-card/         # ProjectCardComponent
```

| Сущность | Назначение |
|---|---|
| `AppModule` | Корневой модуль: объявляет компоненты, импортирует `BrowserModule`, запускает `AppComponent` |
| `ProjectsService` | Синглтон-сервис, метод `getData()` возвращает массив из 4 проектов (`id`, `title`, `description`, `imageUrl`, `tags`, `year`) |
| `HeaderComponent` | Шапка с именем разработчика (`@Input() name`) и навигацией (`*ngFor`) |
| `ProjectListComponent` | Получает `ProjectsService` через конструктор, в `ngOnInit` сохраняет данные в `projects`, выводит карточки через `*ngFor` |
| `ProjectCardComponent` | Отображает один проект, получает его через `@Input() item` (`[item]="project"`), кнопка «Нравится» |

Компоненты и сервис соответствуют командам Angular CLI:

```bash
ng generate component components/header
ng generate component components/project-list
ng generate component components/project-card
ng generate service services/projects
```
