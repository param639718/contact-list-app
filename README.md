# contact-list-app

A simple **Contact Manager web app** built with **Vite + TypeScript + React**.
Manage and organize personal or professional contacts in a clean, responsive UI.

---

## 🚀 Live demo

**Production (Vercel):** [https://contact-list-app-tawny.vercel.app](https://contact-list-app-tawny.vercel.app)
**Source (GitHub):** [https://github.com/param639718/contact-list-app.git](https://github.com/param639718/contact-list-app.git)

---

## ✨ Key features

* Add, edit, and delete contacts
* Search and filter by name
* Responsive design for mobile and desktop
* Local storage for persistence
* Built with **React + TypeScript + Tailwind CSS + shadcn/ui**

---

## 📂 Project structure

```
/src
  /components    # Reusable UI components
  /pages         # Page-level components or views
  /hooks         # Custom React hooks
  /lib           # Utility functions (API, storage)
  App.tsx
  main.tsx
/public
  index.html
package.json
vite.config.ts
README.md
```

---

## ⚙️ Getting started

### Prerequisites

* Node.js (latest LTS)
* npm (comes with Node) or yarn

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/param639718/contact-list-app.git
cd contact-list-app

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

Now open your browser at [http://localhost:5173](http://localhost:5173).

---

## ⚡ Environment variables

If you use an external API or backend, create a `.env` file (not committed to GitHub):

```
VITE_API_BASE_URL=https://api.example.com
```

For deployment on Vercel:
Go to **Project → Settings → Environment Variables** and add the same keys.

---

## 🧠 Design choices & assumptions

* **Storage:** Uses browser `localStorage` for simplicity — backend API optional.
* **Validation:** Basic validation for required fields (name, phone, email).
* **Routing:** SPA routing with client-side navigation.
* **UI:** Tailwind + shadcn/ui for rapid, clean design.
* **Accessibility:** Uses semantic HTML and keyboard-focus friendly inputs.

---

## 🤔 Handling ambiguity

Some behaviors (sorting, duplicate handling, advanced filters) are intentionally open-ended.
If you extend functionality, document decisions under **Assumptions** here.

Example:

* Duplicate contacts overwrite existing entry by name.
* Search is case-insensitive and debounced by 300ms.

---

## 🧩 Libraries & why

| Library      | Purpose                     |
| ------------ | --------------------------- |
| React        | UI framework                |
| TypeScript   | Static typing               |
| Vite         | Build tool & dev server     |
| Tailwind CSS | Utility-first CSS framework |
| shadcn/ui    | Styled component primitives |

---

## 🧪 Testing & debugging

* Check console and build logs if app doesn’t load.
* Run `npm run build && npm run preview` to test production build locally.
* On Vercel, view **Deployments → Logs** for build/runtime errors.

---

## 🌐 Deployment

Deployed automatically via **Vercel GitHub Integration**:

**Build command:** `npm run build`
**Output directory:** `dist`

Each commit to `main` triggers a redeployment.

**Production URL:** [https://contact-list-app-tawny.vercel.app](https://contact-list-app-tawny.vercel.app)

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch

   ```bash
   git checkout -b feat/your-feature
   ```
3. Commit and push

   ```bash
   git push origin feat/your-feature
   ```
4. Create a Pull Request

---

## 🔮 Future improvements

* Add authentication (per-user data)
* Contact import/export (CSV/vCard)
* Avatar upload (image or Gravatar)
* Advanced filters and sorting

---

