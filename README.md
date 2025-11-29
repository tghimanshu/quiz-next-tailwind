# Food Tracker Quiz

A Next.js application designed to track food preferences and suggest delicious recipe ideas.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Learn More](#learn-more)

## Overview

"Your Best Food Tracker Ever!"

This application aims to provide users with recipe suggestions based on their food preferences. Currently, it serves as a starting point (Phase 1) with a landing page and a placeholder login page.

## Technologies

- **[Next.js](https://nextjs.org/)**: The React Framework for the Web.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework.
- **[ESLint](https://eslint.org/)**: Pluggable JavaScript linter.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd quiz
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/`: Contains the application's pages and API routes.
  - `_app.tsx`: Main App component.
  - `_document.tsx`: Custom Document component.
  - `index.tsx`: Home/Landing page.
  - `login.tsx`: Login page (placeholder).
  - `api/hello.ts`: Example API route.
- `public/`: Static assets like images.
- `styles/`: CSS stylesheets including Tailwind directives.

## Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase using ESLint.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
