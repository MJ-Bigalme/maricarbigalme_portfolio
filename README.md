# Maricar Joy M. Bigalme — Digital Portfolio

A premium, responsive digital portfolio showcasing my work as an **IT Professional**, **Elementor Specialist**, and **Customer Experience & Technical Support Engineer**.

## ✨ Features

- **Glassmorphic UI** — Modern dark theme with aurora gradients and neon glow effects
- **Animated Interactions** — Smooth Framer Motion animations and particle effects
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Interactive Sections** — Hero, About, Experience, Skills, Projects, Certifications, Contact
- **Resume Modal** — View and download resume directly
- **Terminal Easter Egg** — Interactive command-line interface

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite 6** — Lightning-fast development
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Animations and transitions
- **GSAP** — Advanced scroll animations
- **Lucide React** — Beautiful icons

## 🎨 Color Palette

- **Void Black** — `#080808`
- **Deep Navy** — `#101725`
- **Electric Blue** — `#4CC9F0`
- **Cyan** — `#00F5FF`
- **Purple** — `#8B5CF6`

## 📁 Project Structure

```
src/
├── components/          # UI Components
│   ├── effects/         # Visual effects (particles, grids)
│   └── ui/              # Reusable UI elements
├── pages/               # Page components
├── integrations/        # External service integrations
└── theme.css            # Design tokens & theme
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📬 Contact

- **Email:** maricarbigalmeeee@gmail.com
- **LinkedIn:** [linkedin.com/in/maricar-bigalme-bba3332b0](https://www.linkedin.com/in/maricar-bigalme-bba3332b0)
- **GitHub:** [github.com/MJ-Bigalme](https://github.com/MJ-Bigalme)

---

© 2025 Maricar Joy M. Bigalme. All rights reserved.
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
