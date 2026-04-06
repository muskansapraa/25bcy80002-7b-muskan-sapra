# Product Manager

A modern **Next.js 16** application that demonstrates a persistent product management system using **Zustand**, **shadcn/ui**, and **Tailwind CSS v4**.

Users can:

* View a list of products
* Add new products
* Edit name, category, price, and quantity
* Delete products
* Persist all data in **localStorage** (no backend required)

---

## Tech Stack

| Tool                       | Purpose                  |
| -------------------------- | ------------------------ |
| Next.js 16 (App Router)    | Framework                |
| React 19                   | UI library               |
| TypeScript                 | Type safety              |
| Tailwind CSS v4            | Styling                  |
| Zustand v5                 | State management         |
| Zustand Persist Middleware | localStorage persistence |
| shadcn/ui                  | UI components            |
| clsx + tailwind-merge      | Class utilities          |

---

##  Project Structure

```
app/
  globals.css        # Tailwind styles
  layout.tsx         # Root layout
  page.tsx           # Home page

components/
  ProductList.tsx    # Product list view
  ProductItem.tsx    # Editable product item
  ui/                # shadcn components
    button.tsx
    input.tsx
    spinner.tsx

store/
  useProductStore.ts # Zustand store

lib/
  utils.ts           # cn() helper
```
##  Features

*  Add new products
*  Edit product details (name, category, price, quantity)
*  Delete products
*  Persistent state using localStorage
*  No backend required
*  Hydration-safe (no UI mismatch issues)
*  Clean UI with shadcn components

---

## Store Actions

* `addProduct()` → Adds new product
* `deleteProduct(id)` → Removes product
* `updateProduct(id, data)` → Updates product fields

---

##  Important Concepts

### Hydration

There are two types of hydration:

1. **React Hydration**

   * Converts server HTML into interactive UI

2. **Zustand Hydration**

   * Loads saved data from localStorage into the store

A `hydrated` flag ensures UI renders only after data is loaded.

---

## Future Improvements

*  Authentication (Admin / User roles)
*  Backend integration (MySQL / API routes)
*  Dashboard analytics
*  Search & filtering
*  Categories management
*  Inventory tracking

---

