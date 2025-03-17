# CineApp Frontend

CineApp is a frontend application developed in React that allows users to view movies currently in theaters, upcoming movies, purchase tickets, and process refunds. It also includes an administration system for managing movies.

## 🚀 Features

- 📌 **View movies currently in theaters**
- 🔜 **Check upcoming movie releases**
- 🛠 **Manage movies (CRUD for administrators)**
- 🎟 **Purchase tickets**
- 🔄 **Refund tickets**

## 📁 Project Structure

```
cineApp-frontend/
│-- src/
│   ├── actions/        # Redux actions
│   ├── components/     # Reusable components
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Main pages
│   ├── reducers/       # Redux reducers
│   ├── routers/        # Route configuration
│   ├── store/          # Redux store configuration
│   ├── styles/         # Styles and themes
│   ├── types/          # Type definitions for Redux
│   ├── utils/          # Utility functions
```

## 🛠 Technologies Used

- **React 17**
- **React Router DOM 5.3.0** (Navigation routes)
- **Redux & Redux Thunk** (State management)
- **Reactstrap & Bootstrap Icons** (UI styles and components)
- **Vite** (Bundler and development server)
- **Testing Library** (Unit and integration testing)

## ▶️ Installation & Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/DamianBarzola/cineApp-frontend.git
   cd cineApp-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development environment:
   ```sh
   npm run dev
   ```
4. Build the application for production:
   ```sh
   npm run build
   ```
5. Preview the production version:
   ```sh
   npm run serve
   ```

## 📌 Configuration

- The application connects by default to a backend at `http://localhost:8080` (defined in the `proxy` setting in `package.json`).
- You can modify this configuration in `vite.config.js` if needed.
- The backend repository is available at: [cineApp Backend](https://github.com/giovamarr/cineApp)

## 🧪 Testing

Run tests:

```sh
npm test
```

---

Enjoy developing with cineApp-frontend! 🎬🍿
