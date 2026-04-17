'use client';

import { useState } from 'react';
import { Mail, Send, User, MessageSquare, Link as LinkIcon } from 'lucide-react';
import './Contacts.css';

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

function TelegramIcon({ size = 20 }) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
      <path d="m22 2-10 13 5 7" />
    </svg>
  );
}

function VkIcon({ size = 20 }) {
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
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 16V8h2.5c1.5 0 2.5 1 2.5 2.5S12 13 10.5 13H9v3H8z" />
      <path d="M13.5 16h2l1-3h2l1 3h2l-2.5-6h-2L13.5 16z" />
    </svg>
  );
}

const socialLinks = [
  { name: 'Email', icon: <Mail size={20} />, url: 'mailto:evgeny@example.com', label: 'evgeny@example.com' },
  { name: 'GitHub', icon: <GithubIcon size={20} />, url: 'https://github.com/username', label: '@username' },
  { name: 'Telegram', icon: <TelegramIcon size={20} />, url: 'https://t.me/username', label: '@username' },
  { name: 'MAX', icon: <MessageSquare size={20} />, url: '#', label: '@username' },
  { name: 'VK', icon: <VkIcon size={20} />, url: 'https://vk.com/username', label: 'Евгений Варваштян' },
  { name: 'YANDEXMUSIC', icon: <LinkIcon size={20} />, url: 'https://music.yandex.ru/users/username', label: '@username' },
  { name: 'KINOPOISK', icon: <User size={20} />, url: 'https://kinopoisk.ru/user/username', label: 'Евгений Варваштян' },
];

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contacts" className="section contacts">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        <p className="section-subtitle">Свяжитесь со мной любым удобным способом</p>

        <div className="contacts-wrapper">
          <div className="contacts-info">
            <h3>Давайте работать вместе</h3>
            <p>
              Я всегда открыт для обсуждения новых проектов и возможностей. 
              Если у вас есть вопрос или предложение — напишите мне!
            </p>

            <div className="contacts-list">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-link"
                >
                  <span className="contact-link__icon">{link.icon}</span>
                  <div className="contact-link__info">
                    <span className="contact-link__name">{link.name}</span>
                    <span className="contact-link__value">{link.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contacts-form" onSubmit={handleSubmit}>
            <h3>Напишите мне</h3>
            
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Как к вам обращаться"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажите о вашем проекте..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : (
                <>
                  Отправить <Send size={18} />
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <p className="form-success">Сообщение успешно отправлено!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
