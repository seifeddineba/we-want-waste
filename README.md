# Skip Size Selector

A React-based UI that allows users to select a skip size from available options, view pricing (including VAT), and proceed with booking. Built as part of a challenge for **We Want Waste** using best practices in component architecture, TypeScript, and UI feedback.

---

## 🔧 Tech Stack
- **React 18+**
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **Vite**
---

## 📁 Project Structure
src/

├── api/

│   └── skips.ts             # API calls for skip data

├── components/

│   ├── SkipCard.tsx         # Reusable card component for each skip

│   ├── FooterSummary.tsx    # Sticky footer showing selection summary

│   ├── Stepper.tsx          # Progress indicator component

│   ├── CardSkeleton.tsx     # Placeholder loading card

│   ├── ErrorBoundray.tsx    # Placeholder loading card

├── interfaces/

│   └── skipsInterface.ts    # TypeScript interfaces

├── layouts/

│   └── MainLayout.tsx       # Shared layout component

├── pages/

│   └── SkipSelectorPage.tsx # Main page implementation

└── main.tsx

💡 Features & Design Decisions

✅ 1. Separation of Concerns
Data fetching is abstracted to api/skips.ts.

UI components are reusable and composable.

State logic lives in the page file (SkipSelectorPage.tsx).

✅ 2. Type Safety
All API data is typed with interfaces in interfaces/skipsInterface.ts.

Props passed to components are strongly typed.

✅ 3. User Feedback
Loading state handled with skeleton placeholders.

Disabled button and summary footer only appear when skip is selected.

Stepper component provides visual navigation context.

✅ 4. Memoization
useMemo used to compute total price only when dependencies change.

useCallback for stable reference functions (like step and skip selection).

✅ 5. Error Handling
All API calls wrapped with try-catch in fetchSkips().

Errors are logged and can be extended to display user notifications.

✅ 6. Accessibility & Responsiveness
Fully responsive layout using Tailwind's grid and flex utilities.

Icons and text are styled for readability.

Make sure to set the environment variable:
VITE_API_BASE_URL=https://app.wewantwaste.co.uk/api

📦 Install & Run
npm install
npm run dev