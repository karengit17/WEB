import { Code, Database, Layout, Server, GitGraph, Terminal } from 'lucide-react';
import './About.css';

const skills = [
  { name: 'Frontend', icon: <Layout size={24} />, items: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Three.js'] },
  { name: 'Backend', icon: <Server size={24} />, items: ['Node.js', 'Express', 'Python', 'REST API', 'GraphQL'] },
  { name: 'Базы данных', icon: <Database size={24} />, items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'] },
  { name: 'Инструменты', icon: <Terminal size={24} />, items: ['Git', 'Docker', 'Webpack', 'Vite', 'Linux'] },
];

const experience = [
  {
    period: '2023 — Настоящее время',
    company: 'Tech Company',
    position: 'Senior Frontend разработчик',
    description: 'Разработка масштабируемых веб-приложений, менторство junior разработчиков, код ревью.',
  },
  {
    period: '2021 — 2023',
    company: 'Web Studio',
    position: 'Middle Full-Stack разработчик',
    description: 'Создание сайтов под ключ, интеграция с API, оптимизация производительности.',
  },
  {
    period: '2019 — 2021',
    company: 'StartUp',
    position: 'Junior разработчик',
    description: 'Разработка frontend части приложений, работа с React и Redux.',
  },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Обо мне</h2>
        <p className="section-subtitle">Мой профессиональный путь и навыки</p>

        <div className="about__content">
          <div className="about__intro">
            <h3>Привет! Я Евгений — passionate разработчик</h3>
            <p>
              Более 4 лет создаю современные веб-приложения. Люблю решать сложные задачи 
              и постоянно изучаю новые технологии. Специализируюсь на Full-Stack разработке 
              с упором на React экосистему.
            </p>
            <p>
              Всегда стремлюсь писать чистый, поддерживаемый код и следовать best practices. 
              В свободное время contributing в open-source проекты и изучаю новые фреймворки.
            </p>
          </div>

          <div className="about__skills">
            <h3>Навыки и технологии</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-card__icon">{skill.icon}</div>
                  <h4 className="skill-card__title">{skill.name}</h4>
                  <ul className="skill-card__list">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about__experience">
          <h3>Опыт работы</h3>
          <div className="experience-timeline">
            {experience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="experience-item__marker"></div>
                <div className="experience-item__content">
                  <span className="experience-item__period">{job.period}</span>
                  <h4 className="experience-item__position">{job.position}</h4>
                  <p className="experience-item__company">{job.company}</p>
                  <p className="experience-item__description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
