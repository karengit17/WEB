import { ExternalLink } from 'lucide-react';
import './Projects.css';

function GithubIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projects = [
  {
    title: 'E-commerce платформа',
    description: 'Полнофункциональный интернет-магазин с корзиной, оплатой и админ-панелью. Интеграция с платежными системами.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
    image: '/projects/project-1.jpg',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/ecommerce',
  },
  {
    title: 'Task менеджер',
    description: 'Приложение для управления задачами с drag-and-drop, командной работой и уведомлениями в реальном времени.',
    technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
    image: '/projects/project-2.jpg',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/task-manager',
  },
  {
    title: 'Аналитическая панель',
    description: 'Dashboard для визуализации данных с графиками, таблицами и экспортными функциями.',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
    image: '/projects/project-3.jpg',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/analytics',
  },
  {
    title: 'Социальная сеть',
    description: 'Платформа для общения с лентами, сообщениями, уведомлениями и системой подписок.',
    technologies: ['React', 'GraphQL', 'PostgreSQL', 'Redis', 'WebSocket'],
    image: '/projects/project-4.jpg',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/social-network',
  },
  {
    title: 'Погодное приложение',
    description: 'Приложение для отслеживания погоды с прогнозом, картами и уведомлениями о неблагоприятных условиях.',
    technologies: ['Next.js', 'OpenWeather API', 'Mapbox', 'PWA'],
    image: '/projects/project-5.jpg',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/weather-app',
  },
  {
    title: 'Блог платформа',
    description: 'CMS для ведения блога с Markdown редактором, тегами и SEO оптимизацией.',
    technologies: ['Next.js', 'MDX', 'PostgreSQL', 'Vercel'],
    image: '/projects/project-6.jpg',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/blog-platform',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Проекты</h2>
        <p className="section-subtitle">Избранные работы, демонстрирующие мои навыки</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-card__image">
                <div className="project-card__placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
                <div className="project-card__overlay">
                  <div className="project-card__links">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label="Демо"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label="Код на GitHub"
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-card__tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
