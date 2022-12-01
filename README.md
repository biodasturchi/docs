<div align="center">
  <h1>Biodasturchi</h1>
  <p>A docs template built using <a href="https://vitepress.vuejs.org">VitePress</a></p>
</div>

## Run project locally

Use this command below to boot this project locally.

```bash
git clone https://github.com/biodasturchi/docs.git

cd docs

npm install

npm run docs:dev
```

Visit [https://localhost:5173](https://localhost:5173) to see your site

## Build
You may run this command to build the docs

```bash
npm run docs:build
```

## Folder Structure

```
docs/
├── .vitepress/
│   ├── config.js
│   └── theme/
│       ├── index.js
│       └── custom.css
├── components/
|   └── BlogCard.vue
├── posts/
|   ├── bio/
|   ├── dev/
|   └── index.md
├── public/
│   ├── logo.svg
│   └── logo-big.svg
├── about.md
├── contact.md
├── index.md
├── package.json
└── README.md
```