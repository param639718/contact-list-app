# 📇 Contact List Application

---

## 1️⃣ Overview

The **Contact List Application** is a responsive and user-friendly web app built using **React (Vite + TypeScript)**.
It enables users to manage their contacts efficiently by allowing them to **add**, **edit**, **delete**, and **search** contact information.
The goal of this project is to demonstrate clean UI design, modular component structure, and efficient state management.

---

## 2️⃣ Features

* ➕ Add new contacts (Name, Phone Number, Email)
* ✏️ Edit existing contact details
* ❌ Delete contacts instantly
* 🔍 Real-time search filtering
* 📱 Fully responsive layout for all screen sizes
* ⚡ Fast performance with **Vite** bundler

---

## 3️⃣ Requirements

Before running the project, ensure you have:

* **Node.js** v16+
* **npm** (comes with Node.js) or **yarn**

Check your versions:

```bash
node -v
npm -v
```

---

## 4️⃣ Setup

### Clone the repository

```bash
git clone https://github.com/param639718/contact-list-app.git
cd contact-list-app
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 5️⃣ Project Structure

```
contact-list-app/
│
├── public/              # Static assets (index.html, favicon, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main pages or views
│   ├── hooks/           # Custom hooks for reusable logic
│   ├── lib/             # Utility/helper functions
│   ├── App.tsx          # Root component
│   └── main.tsx         # Entry point
│
├── package.json         # Dependencies and npm scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

---

## 6️⃣ How It Works

1. When the app loads, it retrieves all contacts stored in **localStorage**.
2. The user can add a new contact via a form.
3. Contacts are displayed in a clean list with **Edit** and **Delete** options.
4. Changes are reflected immediately and persisted automatically in localStorage.
5. The **Search bar** filters results dynamically as the user types.

---

## 7️⃣ Design Choices & Assumptions

* **LocalStorage** was chosen for simplicity and offline persistence (no backend required).
* The **data model** assumes each contact has `name`, `email`, and `phone`.
* Focused on **minimalistic UI** using Tailwind CSS for clarity and responsiveness.
* Chose **React functional components with hooks** for simplicity and modern React patterns.
* App is optimized for quick setup, not large-scale contact management.

---

## 8️⃣ UI and Interaction

* Clean and intuitive interface built with **Tailwind CSS** and **shadcn-ui** components.
* Form validation prevents adding incomplete contacts.
* Interactive buttons with hover effects and feedback.
* Mobile-friendly layout adapts to different devices seamlessly.
* Instant search feedback using React state filtering.

---

## 9️⃣ Troubleshooting

| Issue               | Possible Cause                 | Solution                               |
| ------------------- | ------------------------------ | -------------------------------------- |
| App not starting    | Node not installed or outdated | Install latest Node.js (v16+)          |
| Port already in use | Another app running on 5173    | Change port in `vite.config.ts`        |
| Contacts not saving | Browser blocking localStorage  | Allow storage permissions              |
| Styles not loading  | Tailwind config missing        | Re-install dependencies: `npm install` |

---

## 🔟 Handling Ambiguity

This project intentionally leaves flexibility in:

* UI transitions (no strict animation rules)
* Error handling details
* Loading states and success indicators
* Possible backend integration (currently mocked by localStorage)

These areas were interpreted based on **practical UX principles** and **developer judgment** to create a smooth user experience without overcomplicating the design.

---

## 11️⃣ Libraries & Why

| Library          | Purpose       | Reason for Choice                              |
| ---------------- | ------------- | ---------------------------------------------- |
| **React**        | UI rendering  | Component-based, efficient, widely adopted     |
| **Vite**         | Build tool    | Extremely fast development and hot reload      |
| **TypeScript**   | Type safety   | Prevents runtime bugs, improves readability    |
| **Tailwind CSS** | Styling       | Utility-first, responsive design fast to build |
| **shadcn-ui**    | UI components | Prebuilt, accessible, modern UI elements       |

---

## 12️⃣ 🔮 Future Improvements

* 🌐 Add backend integration with a database (MongoDB/Firebase) for real persistence
* 👥 Support for multiple users with login/authentication
* ☁️ Sync contacts across devices
* 📱 PWA (Progressive Web App) support for offline access
* 🎨 Add themes and dark mode
* 🧩 Add sorting and grouping features
* 🧠 Integrate AI-based contact duplicate detection

---

## 13️⃣ 📜 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it, provided proper credit is given to the author.
See the [LICENSE](./LICENSE) file for full details.

---

✅ **Deployed Version:** [Visit the App on Vercel](#)
🧠 *Built with care by Paramjeet Saini*
