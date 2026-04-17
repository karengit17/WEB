# Портфолио разработчика | Personal Portfolio

Персональное портфолио (визитная карточка) разработчика, созданное на **Next.js** с использованием современных технологий и практик.

## 🌐 Демо

[Ссылка на демо](https://username.github.io/portfolio) *(замените на вашу ссылку)*

## 🚀 Технологии

- **Framework:** [Next.js 16](https://nextjs.org/)
- **Язык:** JavaScript (ES6+)
- **3D графика:** [Three.js](https://threejs.org/) + [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- **Иконки:** [Lucide React](https://lucide.dev/)
- **Стили:** CSS3 с CSS переменными
- **Хостинг:** GitHub Pages

## ✨ Особенности

- 🎨 Современный дизайн с тёмной темой
- 🌐 Адаптивная вёрстка (Mobile, Tablet, Desktop)
- 🎯 Интерактивные 3D элементы на Three.js
- ⚡ Оптимизированная производительность
- 🔍 SEO оптимизация (метатеги, семантическая разметка)
- ♿ Доступность (WCAG базовый уровень)
- 📱 Мобильное меню
- ✉️ Форма обратной связи

## 📁 Структура проекта

```
portfolio/
├── app/
│   ├── components/          # React компоненты
│   │   ├── Header.jsx       # Шапка с навигацией
│   │   ├── Hero.jsx         # Главный экран с 3D сферой
│   │   ├── About.jsx        # Раздел "Обо мне"
│   │   ├── Projects.jsx     # Раздел "Проекты"
│   │   ├── Contacts.jsx     # Раздел "Контакты"
│   │   └── Footer.jsx       # Подвал сайта
│   ├── globals.css          # Глобальные стили
│   ├── layout.js            # Основной layout
│   └── page.js              # Главная страница
├── public/                  # Статические ресурсы
├── package.json             # Зависимости и скрипты
└── README.md                # Документация
```

## 🛠 Установка и запуск

### Требования

- Node.js 18+ 
- npm или yarn

### Локальная разработка

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/username/portfolio.git
   cd portfolio
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите dev сервер:**
   ```bash
   npm run dev
   ```

4. **Откройте браузер:**
   ```
   http://localhost:3000
   ```

### Сборка для продакшена

```bash
npm run build
npm start
```

## 📝 Настройка

### Изменение персональных данных

1. Откройте `app/layout.js` и измените метаданные:
   ```javascript
   export const metadata = {
     title: "Портфолио разработчика | Ваше Имя",
     description: "Ваше описание",
     // ...
   };
   ```

2. Обновите данные в компонентах:
   - `Hero.jsx` — имя, должность, приветствие
   - `About.jsx` — навыки, опыт работы
   - `Projects.jsx` — проекты и технологии
   - `Contacts.jsx` — контактная информация и ссылки

### Добавление проектов

Откройте `app/components/Projects.jsx` и добавьте новый проект в массив `projects`:

```javascript
{
  title: 'Название проекта',
  description: 'Описание проекта',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  image: '/projects/project-x.jpg',
  demoUrl: 'https://demo-url.com',
  githubUrl: 'https://github.com/username/project',
}
```

## 🚀 Деплой на GitHub Pages

### 1. Подготовка репозитория

```bash
# Инициализируйте git репозиторий (если ещё не создан)
git init
git add .
git commit -m "Initial commit"

# Создайте репозиторий на GitHub и добавьте remote
git remote add origin https://github.com/username/portfolio.git
git push -u origin main
```

### 2. Настройка Next.js для статического экспорта

Создайте/обновите файл `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 3. Сборка и деплой

```bash
# Создайте production сборку
npm run build

# Выходная папка: out/
```

### 4. Настройка GitHub Pages

1. Перейдите в настройки репозитория на GitHub
2. Выберите раздел **Pages**
3. В разделе **Source** выберите ветку `gh-pages` (или создайте её)
4. Сохраните настройки

### Альтернативно: использование gh-pages

```bash
npm install --save-dev gh-pages

# Добавьте в package.json скрипт:
# "deploy": "gh-pages -d out"

npm run deploy
```

## 🎨 Кастомизация стилей

Основные стили находятся в `app/globals.css`. Вы можете изменить:

- Цветовую схему (CSS переменные в `:root`)
- Шрифты
- Анимации
- Размеры и отступы

## 📊 Производительность

Проект оптимизирован для высокой производительности:

- ✅ Код сплиттинг (автоматически через Next.js)
- ✅ Оптимизация изображений
- ✅ Минимальный размер бандла
- ✅ Быстрая загрузка (< 2 секунд)

Проверьте с помощью [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/):

```bash
npm run build
npx serve out
```

## 📄 Лицензия

MIT License — см. файл [LICENSE](LICENSE) для подробностей.

## 👤 Автор

**Евгений Варваштян**

- GitHub: [@username](https://github.com/username)
- Email: evgeny@example.com
- Telegram: @username

## 🤝 Вклад

Pull Request приветствуются! Для основных изменений, пожалуйста, сначала создайте Issue для обсуждения.

---

⭐ Если вам понравился этот проект, поставьте звезду на GitHub!
