/** Модель проекта портфолио. */
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: number;
}
