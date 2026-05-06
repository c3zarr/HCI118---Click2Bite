# Requested Update Changelog

## 1. Crimson theme

Updated the shared theme in `css/styles.css`.

Main variables:

- `--primary: #dc143c`
- `--primary-dark: #9f1239`
- `--accent: #ffb3c1`
- `--bg: #fff5f7`
- `--surface-2: #ffe4ea`

The crimson theme applies to the navigation brand mark, buttons, hover states, focus rings, cards, headers, badges, and page backgrounds.

## 2. Accurate menu images

Added real food photos in `assets/images/food/` and mapped them in `js/app.js` through `FOOD_IMAGES`, `IMAGE_OPTIONS`, and `DEFAULT_MENU`.

Bundled food images:

- `pastil.jpg` for Chicken Pastil Rice / Chicken Patir
- `cheeseburger.jpg` for Beef Burger / Cheese Burger
- `iced-lemon-tea.jpg` for Iced Tea / Lemon Tea
- `fries.jpg` for Loaded Fries
- `ham-sandwich.jpg` for Ham Sandwich
- `iced-coffee.jpg` for Iced Coffee
- `tuna-sandwich.jpg` for Tuna Sandwich
- `chocolate-cake.jpg` for Chocolate Cake Slice
- `pancit-canton.jpg` for Pancit Canton
- `spaghetti.jpg` for Spaghetti
- `grilled-chicken-rice.jpg` for Grilled Chicken Rice
- `pork-bbq.jpg` for Pork BBQ Stick
- `milk-tea.jpg` for Milk Tea
- `mango-float.jpg` for Mango Graham Cup
- `tinola.jpg` for Chicken Tinola
- `burger-steak.jpg` for Burger Steak Rice
- `siomai.jpg` for Siomai Rice
- `club-sandwich.jpg` for Club Sandwich
- `fruit-shake.jpg` for Fruit Shake

Also added `assets/images/meal-placeholder.svg` as the fallback image.

## 3. Account registration storage

Updated `index.html` and `js/app.js` so student registration now creates account records in browser `localStorage` under:

- `click2bite_accounts`

Saved fields:

- account ID
- full name
- WMSU email
- password for static-demo login only
- account status
- registration date
- last login date

The login form now checks registered accounts instead of accepting any password.

## 4. Admin account records

Updated `admin.html` and `js/app.js` with a Registered Accounts section.

Admin can now:

- view newly registered student accounts
- search accounts
- see account order count
- see total spending per account
- see registration date
- see last login date
- activate/deactivate accounts
- delete account records
- filter the order list by a selected account
- export registered accounts as JSON without passwords

## 5. Button functionality

Implemented behavior for:

- Student login
- Student registration
- Logout
- Canteen search
- Open-only canteen filter
- View menu buttons
- Add to cart buttons
- Cart quantity plus/minus buttons
- Cash / GCash selection
- Place order
- Clear my orders
- Admin login
- Admin logout
- Admin order status buttons
- Admin status filter
- Admin account search
- Admin account export
- Admin account activate/deactivate
- Admin account delete
- Admin view-orders-per-account
- Cashier verify payment
- Cashier reject order
- Vendor add item
- Vendor update item
- Vendor delete item
- Vendor reset menu/orders

## 6. Validation

See `VALIDATION.txt` for validation results.

Important limitation: this is still a static front-end prototype. Data is saved only on the same browser/device through `localStorage`. A real production version needs a backend database, secure authentication, server-side stock checks, and real payment validation.
