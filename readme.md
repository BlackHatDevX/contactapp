# Contacts App

## Tech Stack

> VITE, React, TS, Tailwind CSS, Heroicons

## Routes using (react-router-dom)

```
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

## To run this project locally

```
git clone https://github.com/BlackHatDevX/contactapp
cd contactapp
yarn install
yarn dev
```

## To build app for production

```
yarn build
(app will be available in dist)
```

## Project Structure

```
.
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── vite.svg
├── readme.md
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── ContactDataRenderer.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   └── home.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```
