# Click2Bite Fixed Static Prototype

This is a cleaned and improved static version of the HCI118 Click2Bite project.

## What is included

- Crimson-themed UI across all pages
- Student login and student registration
- New registered student accounts saved in `localStorage`
- Admin dashboard with registered account records, account export, order filtering, account activation/deactivation, and account deletion
- Canteen listing with search and open-only filtering
- Menu page with bundled food photos for all default menu items, cart quantity controls, Cash/GCash selection, stock checks, and order placement
- Student order tracker
- Cashier payment verification/rejection queue
- Vendor menu inventory management with add, update, delete, price, stock, and image path/URL editing
- Legacy redirect files for the original filenames

## Pages

- `index.html` - landing page, student login, student registration
- `homepage.html` - canteen listing and search
- `menu.html` - menu, cart, payment selection, place order
- `orders.html` - student order tracker
- `admin-login.html` - admin login
- `admin.html` - admin dashboard, registered accounts, and order status updates
- `cashier.html` - payment verification queue
- `vendor.html` - menu inventory management

## Demo credentials

Admin login:

- Username: `admin`
- Password: `1234`

Student login:

- Email: `student@wmsu.edu.ph`
- Password: `password`

New student registrations must use an email ending in `@wmsu.edu.ph`. After registration, the account is saved locally and displayed in the admin dashboard under **Registered Accounts**.

## Image notes

All default menu images are bundled in `assets/images/food/` so they display offline. Vendor-created items can still use local image paths or online image URLs. If an image fails to load, the local `assets/images/meal-placeholder.svg` fallback is used.

See `IMAGE_CREDITS.md` / `ATTRIBUTIONS.md` for bundled image filenames and source links.

## Storage notes

This prototype uses browser `localStorage`. Data persists in the same browser and device until localStorage is cleared or the demo reset buttons are used. It is not a real multi-user backend.

For production, replace localStorage with real authentication, database storage, role permissions, server-side stock validation, and real payment validation.

## Legacy compatibility files

The package includes redirect shims for original extensionless filenames such as `menu(ril)`, `orders`, `admin-login`, and `vendor(ril)`, plus CSS shims for `style.css`, `stylecss`, and `design.css`.
