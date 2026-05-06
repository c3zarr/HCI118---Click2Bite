# Click2Bite Repository Audit and Fix Report

## Major issues found

1. Several HTML pages were saved without `.html` extensions, so links such as `menu.html`, `orders.html`, and `admin-login.html` could fail.
2. The project had multiple homepage and CSS variants, which made the intended entry point unclear.
3. Menu and order pages lacked a complete shared data model.
4. The admin page originally depended on placeholder Firebase configuration values, so it could not connect to a real database.
5. Some login redirects and page filenames did not match.
6. Images were missing, generic, or placeholder-only.
7. Student registration did not produce an admin-visible account record.
8. Buttons existed across pages but several flows needed shared JavaScript behavior to be consistently functional.

## Fixes applied in this package

1. Normalized main pages to clean `.html` filenames while keeping legacy redirect files.
2. Reworked the visual theme to crimson using shared CSS variables in `css/styles.css`.
3. Added accurate bundled food photos for all default menu items and kept vendor support for custom local paths or online image URLs.
4. Added local image fallback handling for failed online food image loads.
5. Added student account registration and login using browser `localStorage`.
6. Added admin account records for new registrations.
7. Added admin account actions: view related orders, export account records, activate/deactivate, and delete account records.
8. Added admin order filtering and status updates.
9. Kept order, account, and menu data in one shared `js/app.js` controller.
10. Improved menu browsing, cart quantity controls, stock checks, Cash/GCash selection, and order placement.
11. Improved vendor add/update/delete flows with editable local or online image URLs.
12. Kept cashier payment verification/rejection functional.
13. Added documentation and image credits.

## Remaining production work

1. Replace localStorage with a real backend such as Firebase Firestore, Supabase, or a custom server.
2. Add secure password hashing and authentication sessions.
3. Add real role-based access for students, vendors, cashiers, and admins.
4. Add server-side validation for stock and order totals.
5. Add real GCash payment proof or payment gateway integration.
6. Add accessibility, usability, and mobile QA testing.
7. Configure deployment for GitHub Pages, Netlify, Vercel, or Firebase Hosting.

## Compatibility shims added

Legacy redirect files remain for the original extensionless page names. Legacy CSS filenames now import `css/styles.css` so older references continue to load the cleaned stylesheet.
