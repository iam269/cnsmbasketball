# CNSM Baschet - Website Oficial

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-blue.svg)](https://vitejs.dev/)

> Site-ul oficial al echipei de baschet CNSM Baschet. Vezi programul, jucătorii, rezultatele, noutățile și multe altele.

## 📋 Descriere

CNSM Baschet este site-ul oficial al echipei de baschet, construit cu tehnologii web moderne pentru a oferi fanilor o experiență modernă și responsive. Site-ul include informații despre jucători, antrenori, programul meciurilor, galerie foto/video, noutăți și sponsorii echipei.

## 🛠️ Tehnologii

- **Frontend Framework**: [React](https://react.dev/) 18.3
- **Limbaj**: [TypeScript](https://www.typescriptlang.org/) 5.8
- **Build Tool**: [Vite](https://vitejs.dev/) 5.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4 + [shadcn/ui](https://ui.shadcn.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/) 6.30
- **State Management**: [TanStack Query](https://tanstack.com/query) 5.83
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 12.35
- **Forms**: [React Hook Form](https://react-hook-form.com/) 7.61 + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) 0.462
- **Charts**: [Recharts](https://recharts.org/) 2.15

## 🚀getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (versiunea 18+)
- [Bun](https://bun.sh/) (optional, alternativă la npm)

### Installation

```bash
# Clonează repository-ul
git clone <repository-url>
cd cnsmbasketball

# Instalează dependențele
npm install
# sau dacă folosești Bun
bun install
```

### Development

```bash
# Pornește serverul de dezvoltare
npm run dev

# Rulează linter-ul
npm run lint

# Rulează testele
npm run test
```

### Build

```bash
# Build pentru producție
npm run build

# Build pentru dezvoltare
npm run build:dev

# Previzualizează build-ul
npm run preview
```

### Deployment

```bash
# Deploy pe GitHub Pages
npm run deploy
```

## 📁 Structura Proiectului

```
cnsmbasketball/
├── src/
│   ├── assets/              # Resurse statice (imagini, video)
│   │   └── games/          # Media din meciuri
│   ├── components/         # Componente React
│   │   ├── ui/             # Componente UI (shadcn)
│   │   └── *.tsx           # Componente specifice
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilități
│   ├── pages/              # Pagini principale
│   ├── test/               # Teste
│   ├── App.tsx             # Componenta principală
│   ├── main.tsx            # Entry point
│   └── index.css           # Stiluri globale
├── public/                 # Fișiere publice
├── index.html              # HTML principal
├── package.json            # Dependențe și scripturi
├── tailwind.config.ts      # Configurare Tailwind
├── vite.config.ts          # Configurare Vite
└── tsconfig.json          # Configurare TypeScript
```

## 🔗 Rute

| Ruta | Descriere |
|------|-----------|
| `/` | Pagina principală (Home) |
| `/team` | Pagina echipei |
| `/players` | Lista jucătorilor |
| `/player/:id` | Detalii jucător |
| `/schedule` | Programul meciurilor |
| `/gallery` | Galeria foto/video |
| `/news` | Noutăți |
| `/sponsors` | Sponsorii |
| `/contact` | Contact |
| `/coach/:id` | Detalii antrenor |

## 🎨 Caracteristici

- 🌙 Dark/Light Mode toggle
- 📱 Design responsive (mobile-first)
- 🎬 Galerie media cu video și foto
- 📊 Statistici și rezultate
- 🏆 Secțiune realizări
- 📰 Sistem de știri
- 👥 Pagini pentru jucători și antrenori
- 🎨 Animații fluidă cu Framer Motion

## 📝 Contribuire

1. Fork repository-ul
2. Creează un branch nou (`git checkout -b feature/nova-functionalitate`)
3. Commit modificările (`git commit -m 'Adaug nova functionalitate'`)
4. Push la branch (`git push origin feature/nova-functionalitate`)
5. Deschide un Pull Request

## 📄 Licență

Acest proiect este licențiat sub MIT License - vezi fișierul [LICENSE](LICENSE) pentru detalii.

## 📞 Contact

- **Email**: contact@cnsmbaschet.ro
- **Website**: www.cnsmbaschet.ro
- **Social Media**: [Facebook](https://facebook.com/cnsmbaschet) | [Instagram](https://instagram.com/cnsmbaschet)

---

Creat cu ❤️ de CNSM Baschet
