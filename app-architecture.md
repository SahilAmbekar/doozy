# 📝 DOOZY – Project Structure & Architecture

DOOZY is a modern, multi-functional task management application built using **Next.js 14 (App Router)**. It supports features such as drag-and-drop task operations, authentication, persistent user sessions, and visual task summaries via a pie chart.

## 📁 Folder Structure

```
/doozy-app
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── signin/page.tsx
│   ├── signup/page.tsx
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── components/
│   │       ├── TaskBoard.tsx
│   │       ├── UserMenu.tsx
│   │       └── TaskChart.tsx
│   └── api/
│       └── auth/
│           ├── route.ts
│           └── [...nextauth]/route.ts
│
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   ├── molecules/
│   │   ├── TaskItem.tsx
│   │   ├── AuthForm.tsx
│   │   └── TaskColumn.tsx
│   └── organisms/
│       ├── DragDropBoard.tsx
│       └── AuthWrapper.tsx
│
├── lib/
│   ├── utils.ts
│   ├── auth.ts
│   └── constants.ts
│
├── hooks/
│   ├── useAuth.ts
│   └── useTasks.ts
│
├── context/
│   └── AuthContext.tsx
│
├── styles/
│   ├── globals.css
│   └── tailwind.config.ts
│
├── public/
│   └── assets/
│       └── logo.svg
│
├── types/
│   └── index.ts
│
├── middleware.ts
├── next.config.js
└── package.json
```

---

## 🧱 Atomic Design Principles

The DOOZY project uses the **Atomic Design Architecture** to organize UI components.

### 🔹 Atoms
Basic, stateless UI elements like buttons, inputs, and cards.
- Location: `components/atoms`
- Examples: `Button.tsx`, `Input.tsx`, `Card.tsx`

### 🔹 Molecules
Combos of atoms forming functional elements.
- Location: `components/molecules`
- Examples: `TaskItem.tsx`, `TaskColumn.tsx`, `AuthForm.tsx`

### 🔹 Organisms
Complex UI compositions using molecules and atoms.
- Location: `components/organisms`
- Examples: `DragDropBoard.tsx`, `AuthWrapper.tsx`

---

## 🧭 Architecture Highlights

### `/app`
- Next.js App Router structure.
- Nested layouts: `dashboard/layout.tsx`
- Authentication and dashboard routes.

### `/components`
- Atomic component structure for modularity and reuse.

### `/lib`
- Utility functions and shared logic.

### `/hooks`
- Custom hooks like `useTasks`, `useAuth`.

### `/context`
- Auth context and global state.

### `/types`
- TypeScript interfaces and types.

### `/styles`
- Tailwind CSS configurations.

### `/api`
- Serverless API routes for authentication.

---

## ✅ Best Practices

- ✅ Modular atomic design pattern.
- ✅ Clear separation of UI, logic, and data.
- ✅ Future support for 3rd-party auth providers.
- ✅ Pie chart & drag-drop components are decoupled.
- ✅ Scalable folder conventions for growth.

---

> This structure provides a solid foundation for maintaining, scaling, and testing the DOOZY app effectively.