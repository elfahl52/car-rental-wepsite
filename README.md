# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Technology Icons

<p>
	<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
	<img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
	<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
	<img src="https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript ES2022" />
	<img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router 7" />
	<img src="https://img.shields.io/badge/React_Icons-5-FF6B6B?style=for-the-badge&logo=react&logoColor=white" alt="React Icons 5" />
	<img src="https://img.shields.io/badge/AOS-2.3.4-FF4D4D?style=for-the-badge&logo=csswizardry&logoColor=white" alt="AOS animations" />
	<img src="https://img.shields.io/badge/npm-10-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm" />
	<img src="https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js 20" />
</p>

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)


## Preview

![Car Rental Website preview](public/banner-car.png)

## Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://car-rental-wepsite.vercel.app/)

## Built With

<p>
	<img src="https://skillicons.dev/icons?i=react,vite,tailwind,js,router,css,html" alt="React, Vite, Tailwind CSS, JavaScript, and supporting frontend tools" />
</p>

- React 19
- Vite 8
- Tailwind CSS 4
- JavaScript (ES2022)
- React Router
- React Icons
- AOS animations
- Node.js + npm

## Features

| Icon | Feature |
| --- | --- |
| &#128241; | Responsive layout for desktop and mobile screens |
| &#128506; | Dedicated routes for Home, Cars, About, and Booking |
| &#128663; | Fleet cards with vehicle details and booking links |
| &#9728; | Light and dark theme toggle |
| &#10024; | Animated sections powered by AOS |
| &#127912; | Car-themed browser favicon |

## Getting Started

### Requirements

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
	components/       Reusable page sections and navigation
	App.jsx           Application routes and page composition
	main.jsx          React entrypoint
public/
	favicon.svg       Browser tab icon
```

## Deployment

Deploy this Vite app with [Vercel](https://vercel.com/):

1. Import the repository into Vercel.
2. Keep the framework preset as **Vite**.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
