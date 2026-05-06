# Specific Requested Fixes

## 1. Crimson theme

Changed the UI theme in `css/styles.css` using these main variables:

- `--primary: #dc143c`
- `--primary-dark: #9f1239`
- crimson-tinted backgrounds, borders, focus states, badges, shadows, and button hover states

Affected pages:

- `index.html`
- `homepage.html`
- `menu.html`
- `orders.html`
- `admin-login.html`
- `admin.html`
- `cashier.html`
- `vendor.html`

## 2. Accurate menu images

Added local food photos in `assets/images/food/` and connected them in `js/app.js` through the `FOOD_IMAGES` map and `DEFAULT_MENU` data.

Current bundled image files:

- `pastil.jpg`
- `cheeseburger.jpg`
- `iced-lemon-tea.jpg`
- `fries.jpg`
- `ham-sandwich.jpg`
- `iced-coffee.jpg`
- `tuna-sandwich.jpg`
- `chocolate-cake.jpg`
- `pancit-canton.jpg`
- `spaghetti.jpg`
- `grilled-chicken-rice.jpg`
- `pork-bbq.jpg`
- `milk-tea.jpg`
- `mango-float.jpg`
- `tinola.jpg`
- `burger-steak.jpg`
- `siomai.jpg`
- `club-sandwich.jpg`
- `fruit-shake.jpg`

The image source links are documented in `IMAGE_CREDITS.md` and duplicated in `ATTRIBUTIONS.md`.

## 3. Registered accounts saved and shown in Admin

Implemented account saving in `js/app.js` with the localStorage key:

```text
click2bite_accounts
```

Student registration now saves:

- account ID
- full name
- WMSU email
- password for prototype login
- account status
- created date/time
- last login date/time

Admin dashboard now shows registered accounts in `admin.html` under **Registered Accounts**.

Admin account functions added:

- search accounts
- view orders for one account
- activate/deactivate account
- delete account record
- export registered accounts to JSON without passwords

Important prototype note: this is a static project, so saved accounts persist in the same browser/device through localStorage. For real multi-device saving, the project needs Firebase, Supabase, or another backend database.

## 4. Buttons made functional

Implemented or verified these button/link actions:

### `index.html`

- Start ordering: scrolls to login/register area
- Student login: validates registered account and opens canteens
- Register: saves account and opens canteens
- Admin: opens admin login
- Vendor/Cashier/Admin footer links: open their pages

### `homepage.html`

- Logout: clears student session
- Search canteens: filters canteen cards
- Open only: hides closed canteens
- View menu: opens selected canteen menu

### `menu.html`

- Add to cart: adds selected item
- Plus/minus quantity buttons: update cart quantity
- Cash/GCash radio buttons: saved with order
- Pickup note: saved with order
- Place Order: saves order, deducts stock, opens order tracker

### `orders.html`

- Clear my orders: removes current student's orders from the tracker

### `admin-login.html`

- Login: validates demo admin credentials and opens dashboard

### `admin.html`

- Logout: clears admin session
- Export accounts: downloads account JSON without passwords
- Account search: filters registered accounts
- View orders: filters orders by account
- Activate/Deactivate: changes account status
- Delete: removes selected account record
- Status buttons: update order status
- Show all orders: clears account order filter

### `cashier.html`

- Verify payment: marks order as Verified
- Reject: marks order as Rejected

### `vendor.html`

- Save item: creates a new menu item
- Update: edits price, stock, and image path/URL
- Delete: removes menu item
- Reset menu/orders: restores default menu and clears orders while keeping registered accounts
