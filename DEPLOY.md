# Інструкції для деплою на GitHub Pages

## Кроки для розміщення проекту на GitHub Pages

### 1. Підготуйте репозиторій

```bash
# Ініціалізуйте git (якщо ще не зроблено)
git init

# Додайте всі файли
git add .

# Зробіть перший коміт
git commit -m "Initial commit: Next.js WordPress GraphQL project"

# Додайте віддалений репозиторій (замініть на ваш URL)
git remote add origin https://github.com/username/repository-name.git

# Завантажте код
git push -u origin main
```

### 2. Налаштуйте GitHub Pages

1. **Перейдіть до вашого репозиторію на GitHub**
2. **Відкрийте Settings > Pages**
3. **У розділі Source:**
   - Виберіть "GitHub Actions"
   - Збережіть налаштування

### 3. Налаштуйте змінні середовища (опціонально)

Якщо ваш WordPress GraphQL URL відрізняється від `https://backend.atrava.de/graphql`:

1. **Перейдіть до Settings > Secrets and variables > Actions**
2. **Натисніть "New repository variable"**
3. **Додайте:**
   - Name: `NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL`
   - Value: `https://your-wordpress-site.com/graphql`

### 4. Перевірте деплой

1. **Перейдіть до Actions** у вашому репозиторії
2. **Знайдіть workflow "Deploy static content to Pages"**
3. **Перевірте, що build пройшов успішно**
4. **URL вашого сайту буде:** `https://username.github.io/repository-name`

### 5. Локальне тестування

Для тестування перед деплоєм:

```bash
# Збудуйте проект
npm run build

# Запустіть локальний сервер для перегляду
npx serve out
```

### 6. Автоматичний деплой

Після налаштування:
- Кожен push до `main` гілки автоматично запустить деплой
- GitHub Actions збудує проект та розмістить його на GitHub Pages
- Оновлення з'являться через кілька хвилин

### 7. Перевірка роботи

1. **Відкрийте ваш сайт:** `https://username.github.io/repository-name`
2. **Перевірте консоль браузера** на помилки
3. **Переконайтеся, що GraphQL запити працюють**

### Вирішення проблем

#### Проблема: Сайт не завантажується
- Перевірте, що GitHub Actions workflow виконався успішно
- Перевірте налаштування Pages у Settings

#### Проблема: GraphQL запити не працюють
- Перевірте CORS налаштування вашого WordPress
- Переконайтеся, що GraphQL endpoint доступний
- Перевірте змінні середовища

#### Проблема: Зображення не завантажуються
- Перевірте налаштування `next.config.js` для `domains`
- Переконайтеся, що WordPress дозволяє CORS для зображень

### Корисні посилання

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages) 