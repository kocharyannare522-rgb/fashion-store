# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



My project is a high-performance, multi-functional platform built with React.js, integrating modern web development solutions to provide a seamless shopping and lifestyle experience. Below are the core features:

1. Advanced Routing & Seamless Navigation
Using React Router Dom, I implemented a Single Page Application (SPA) architecture. The website functions as a comprehensive system with multiple integrated pages, allowing users to navigate between sections (Home, Explore, Wishlist, Apps) instantly without any page reload. This ensures a fluid, app-like feeling.

2. FashionAI: The Intersection of Tech & Style
This is one of the most innovative sections of the platform. FashionAI leverages modern concepts to bring artificial intelligence into the world of fashion. It’s designed to provide personalized style advice or trend analysis, showing how cutting-edge technology can enhance the traditional shopping experience.

3. Dynamic Explore & Wishlist System
Explore: A powerful product discovery module where users can browse collections. I implemented sophisticated filtering logic, allowing users to sort products by country of origin, quality, and price range.

Favourites (Wishlist): Using the React Context API, I built a global state management system for the Wishlist. Users can save their favorite items with a single click, and these choices persist across the entire site, ensuring they never lose track of what they love.

4. Optimized User Experience (UX) & Personalization
Authentication Flow: A built-in Sign-in system provides a gateway for personalized user interaction.

Theme Customization (Dark/Light Mode): To prioritize user comfort and accessibility, I developed a theme-switching feature. This allows users to toggle between Dark and Light modes depending on their environment or preference. The preference is handled via CSS variables and React state to ensure a smooth transition without visual glitches.

Toast Notifications: Integrated React-Toastify to provide instant visual feedback for user actions (e.g., adding an item to the cart or wishlist), making the interface feel responsive and alive.

5. Integrated Micro-Apps Ecosystem
Beyond the store, the platform includes a suite of utility tools designed for the modern fashion consumer:

Currency Converter: Real-time price adjustments for international shoppers.

Size Assistant: Helping users find their perfect fit.

Expense Tracker: A tool for users to manage their fashion budget effectively.