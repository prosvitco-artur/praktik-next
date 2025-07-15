# Практик Next.js з WordPress GraphQL

Цей проект демонструє інтеграцію Next.js з WordPress через GraphQL API.

## 🚀 Технології

- **Next.js 15** - React framework
- **TypeScript** - типізація
- **Tailwind CSS** - стилізація
- **Apollo Client** - GraphQL клієнт
- **WordPress GraphQL** - API для WordPress

## 📋 Вимоги

- Node.js 18+ 
- WordPress сайт з встановленим GraphQL плагіном

## 🛠️ Встановлення

1. **Клонуйте проект:**
```bash
git clone <repository-url>
cd praktik-next
```

2. **Встановіть залежності:**
```bash
npm install
```

3. **Налаштуйте змінні середовища:**
```bash
cp .env.local.example .env.local
```

Відредагуйте `.env.local`:
```env
NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL=http://your-wordpress-site.com/graphql
```

4. **Запустіть проект:**
```bash
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

## 🔧 Налаштування WordPress

### 1. Встановлення GraphQL плагіну

Встановіть один з цих плагінів у WordPress:

- **WPGraphQL** (рекомендовано): https://wordpress.org/plugins/wp-graphql/
- **GraphQL for WordPress**: https://wordpress.org/plugins/graphql/

### 2. Налаштування WPGraphQL

1. Перейдіть до **GraphQL > Settings** у адмін-панелі
2. Увімкніть **Public Introspection Enabled**
3. Налаштуйте **GraphQL Endpoint** (зазвичай `/graphql`)

### 3. Тестування GraphQL

Відкрийте GraphQL Playground:
```
http://your-wordpress-site.com/graphql
```

Спробуйте запит:
```graphql
query {
  posts {
    nodes {
      id
      title
      excerpt
    }
  }
}
```

## 📁 Структура проекту

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Глобальні стилі
│   ├── layout.tsx      # Кореневий layout
│   └── page.tsx        # Головна сторінка
├── components/          # React компоненти
├── lib/                # Утиліти та конфігурація
│   ├── graphql-client.ts  # Apollo Client
│   └── queries.ts      # GraphQL запити
└── types/              # TypeScript типи
    └── wordpress.ts    # WordPress типи
```

## 🔍 Основні функції

- ✅ Отримання постів з WordPress
- ✅ Відображення зображень
- ✅ Пагінація (готово до реалізації)
- ✅ TypeScript підтримка
- ✅ Responsive дизайн
- ✅ Темна тема

## 📝 GraphQL Запити

### Отримання постів
```graphql
query GetPosts {
  posts {
    nodes {
      id
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}
```

### Отримання конкретного посту
```graphql
query GetPostBySlug($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
    title
    content
    excerpt
    slug
  }
}
```

## 🎨 Кастомізація

### Додавання нових компонентів

Створіть компонент у `src/components/`:

```tsx
// src/components/PostCard.tsx
import { WordPressPost } from '@/types/wordpress'

interface PostCardProps {
  post: WordPressPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md">
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </article>
  )
}
```

### Додавання нових GraphQL запитів

Додайте запит у `src/lib/queries.ts`:

```tsx
export const GET_CUSTOM_DATA = gql`
  query GetCustomData {
    // ваш GraphQL запит
  }
`
```

## 🚀 Деплой

### GitHub Pages

1. **Підготуйте репозиторій:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Налаштуйте GitHub Pages:**
   - Перейдіть до Settings > Pages у вашому репозиторії
   - У Source виберіть "GitHub Actions"
   - Збережіть налаштування

3. **Додайте змінні середовища (опціонально):**
   - Перейдіть до Settings > Secrets and variables > Actions
   - Додайте `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL` як repository variable

4. **Автоматичний деплой:**
   - При кожному push до main гілки проект автоматично збудується та розміститься
   - URL буде: `https://username.github.io/repository-name`

### Vercel (альтернатива)

1. Підключіть репозиторій до Vercel
2. Додайте змінні середовища у налаштуваннях
3. Деплой відбудеться автоматично

### Інші платформи

Проект можна деплоїти на будь-яку платформу, що підтримує Next.js.

## 🤝 Внесок

1. Форкніть репозиторій
2. Створіть feature branch
3. Зробіть коміт змін
4. Створіть Pull Request

## 📄 Ліцензія

MIT License

## 🆘 Підтримка

Якщо виникли питання або проблеми:

1. Перевірте налаштування GraphQL у WordPress
2. Переконайтеся, що URL у `.env.local` правильний
3. Перевірте консоль браузера на помилки
4. Створіть issue у репозиторії

---

**Приємного кодування! 🎉** 