(() => {
  'use strict';

  const STORAGE = {
    menuItems: 'click2bite_menuItems',
    orders: 'click2bite_orders',
    currentUser: 'click2bite_currentUser',
    accounts: 'click2bite_accounts',
    adminLoggedIn: 'click2bite_adminLoggedIn'
  };

  const CANTEENS = [
    { id: 'jmjj', name: 'JMJJ Canteen', campus: 'Main Campus', rating: 4.8, status: 'Open', tags: ['rice', 'breakfast', 'burger'], image: 'assets/images/canteen-jmjj.svg' },
    { id: 'crimson', name: 'Crimson Food Hub', campus: 'Near Library', rating: 4.7, status: 'Open', tags: ['snacks', 'fries', 'tea'], image: 'assets/images/canteen-crimson.svg' },
    { id: 'cups', name: 'Cups and Bites', campus: 'College Wing', rating: 4.6, status: 'Open', tags: ['coffee', 'sandwich', 'dessert'], image: 'assets/images/canteen-cups.svg' },
    { id: 'gemz', name: 'Gemz Eatery', campus: 'Science Building', rating: 4.5, status: 'Open', tags: ['pasta', 'noodles', 'lunch'], image: 'assets/images/canteen-gemz.svg' },
    { id: 'dgrille', name: 'D Grille', campus: 'Gym Area', rating: 4.4, status: 'Open', tags: ['grilled', 'chicken', 'rice'], image: 'assets/images/canteen-grille.svg' },
    { id: 'cravings', name: 'Cravings Corner', campus: 'Student Lounge', rating: 4.3, status: 'Open', tags: ['dessert', 'milk tea', 'snacks'], image: 'assets/images/canteen-cravings.svg' },
    { id: 'mamalings', name: 'Mamaling\'s Kitchen', campus: 'Education Building', rating: 4.2, status: 'Closed', tags: ['home cooked', 'soup'], image: 'assets/images/canteen-mamalings.svg' },
    { id: 'thirdys', name: 'Thirdy\'s Burger', campus: 'Gate 2', rating: 4.1, status: 'Open', tags: ['burger', 'fries'], image: 'assets/images/canteen-thirdys.svg' },
    { id: 'stella', name: 'Stella Snacks', campus: 'Covered Court', rating: 4.0, status: 'Open', tags: ['siomai', 'snacks'], image: 'assets/images/canteen-stella.svg' },
    { id: 'patir', name: 'Patir Spot', campus: 'Business Center', rating: 4.0, status: 'Open', tags: ['patir', 'rice'], image: 'assets/images/canteen-patir.svg' },
    { id: 'alfresco', name: 'Alfresco Bites', campus: 'Garden Walk', rating: 3.9, status: 'Open', tags: ['salad', 'sandwich'], image: 'assets/images/canteen-alfresco.svg' },
    { id: 'afy', name: 'Afy Refreshments', campus: 'IT Building', rating: 3.9, status: 'Open', tags: ['drinks', 'shake'], image: 'assets/images/canteen-afy.svg' }
  ];

  function foodImage(fileName) {
    return `assets/images/food/${fileName}`;
  }


  const FOOD_IMAGES = {
    pastil: foodImage('pastil.jpg'),
    cheeseburger: foodImage('cheeseburger.jpg'),
    icedTea: foodImage('iced-lemon-tea.jpg'),
    fries: foodImage('fries.jpg'),
    hamSandwich: foodImage('ham-sandwich.jpg'),
    icedCoffee: foodImage('iced-coffee.jpg'),
    tunaSandwich: foodImage('tuna-sandwich.jpg'),
    chocolateCake: foodImage('chocolate-cake.jpg'),
    pancit: foodImage('pancit-canton.jpg'),
    spaghetti: foodImage('spaghetti.jpg'),
    grilledChickenRice: foodImage('grilled-chicken-rice.jpg'),
    porkBbq: foodImage('pork-bbq.jpg'),
    milkTea: foodImage('milk-tea.jpg'),
    mangoFloat: foodImage('mango-float.jpg'),
    tinola: foodImage('tinola.jpg'),
    burgerSteak: foodImage('burger-steak.jpg'),
    siomai: foodImage('siomai.jpg'),
    clubSandwich: foodImage('club-sandwich.jpg'),
    fruitShake: foodImage('fruit-shake.jpg')
  };

  const IMAGE_OPTIONS = [
    ['Pastil / Patir rice meal', FOOD_IMAGES.pastil],
    ['Burger / Cheeseburger', FOOD_IMAGES.cheeseburger],
    ['Iced tea / Lemon tea', FOOD_IMAGES.icedTea],
    ['Loaded fries', FOOD_IMAGES.fries],
    ['Ham sandwich', FOOD_IMAGES.hamSandwich],
    ['Iced coffee', FOOD_IMAGES.icedCoffee],
    ['Tuna sandwich', FOOD_IMAGES.tunaSandwich],
    ['Chocolate cake', FOOD_IMAGES.chocolateCake],
    ['Pancit canton', FOOD_IMAGES.pancit],
    ['Filipino spaghetti', FOOD_IMAGES.spaghetti],
    ['Grilled chicken rice', FOOD_IMAGES.grilledChickenRice],
    ['Pork barbecue', FOOD_IMAGES.porkBbq],
    ['Milk tea', FOOD_IMAGES.milkTea],
    ['Mango graham / Mango float', FOOD_IMAGES.mangoFloat],
    ['Chicken tinola', FOOD_IMAGES.tinola],
    ['Burger steak rice', FOOD_IMAGES.burgerSteak],
    ['Siomai rice', FOOD_IMAGES.siomai],
    ['Club sandwich', FOOD_IMAGES.clubSandwich],
    ['Fruit shake', FOOD_IMAGES.fruitShake]
  ];

  const DEFAULT_MENU = [
    item('m1', 'jmjj', 'Chicken Pastil Rice', 'Seasoned chicken flakes with steamed rice.', 65, 24, FOOD_IMAGES.pastil),
    item('m2', 'jmjj', 'Beef Burger', 'Juicy beef patty, lettuce, and house sauce.', 75, 18, FOOD_IMAGES.cheeseburger),
    item('m3', 'jmjj', 'Iced Tea', 'Cold brewed sweet tea.', 25, 40, FOOD_IMAGES.icedTea),
    item('m4', 'crimson', 'Loaded Fries', 'Crispy fries with cheese and toppings.', 55, 20, FOOD_IMAGES.fries),
    item('m5', 'crimson', 'Ham Sandwich', 'Toasted sandwich with ham and cheese.', 50, 15, FOOD_IMAGES.hamSandwich),
    item('m6', 'crimson', 'Lemon Tea', 'Refreshing lemon tea.', 30, 30, FOOD_IMAGES.icedTea),
    item('m7', 'cups', 'Iced Coffee', 'Cold coffee with creamy milk.', 49, 25, FOOD_IMAGES.icedCoffee),
    item('m8', 'cups', 'Tuna Sandwich', 'Tuna spread with cucumber and lettuce.', 58, 18, FOOD_IMAGES.tunaSandwich),
    item('m9', 'cups', 'Chocolate Cake Slice', 'Moist cake with chocolate frosting.', 45, 12, FOOD_IMAGES.chocolateCake),
    item('m10', 'gemz', 'Pancit Canton', 'Stir-fried noodles with vegetables.', 60, 18, FOOD_IMAGES.pancit),
    item('m11', 'gemz', 'Spaghetti', 'Sweet-style spaghetti with cheese.', 55, 20, FOOD_IMAGES.spaghetti),
    item('m12', 'dgrille', 'Grilled Chicken Rice', 'Grilled chicken with rice and sauce.', 85, 14, FOOD_IMAGES.grilledChickenRice),
    item('m13', 'dgrille', 'Pork BBQ Stick', 'Smoky pork barbecue stick.', 35, 35, FOOD_IMAGES.porkBbq),
    item('m14', 'cravings', 'Milk Tea', 'Classic milk tea with pearls.', 59, 22, FOOD_IMAGES.milkTea),
    item('m15', 'cravings', 'Mango Graham Cup', 'Creamy mango dessert cup.', 45, 16, FOOD_IMAGES.mangoFloat),
    item('m16', 'mamalings', 'Chicken Tinola', 'Warm ginger chicken soup.', 70, 0, FOOD_IMAGES.tinola),
    item('m17', 'thirdys', 'Cheese Burger', 'Burger with melted cheese.', 65, 18, FOOD_IMAGES.cheeseburger),
    item('m18', 'thirdys', 'Burger Steak Rice', 'Burger patty with gravy and rice.', 78, 13, FOOD_IMAGES.burgerSteak),
    item('m19', 'stella', 'Siomai Rice', 'Four-piece siomai with rice.', 55, 28, FOOD_IMAGES.siomai),
    item('m20', 'patir', 'Chicken Patir', 'Wrapped chicken rice meal.', 60, 22, FOOD_IMAGES.pastil),
    item('m21', 'alfresco', 'Club Sandwich', 'Layered sandwich with vegetables.', 68, 12, FOOD_IMAGES.clubSandwich),
    item('m22', 'afy', 'Fruit Shake', 'Blended seasonal fruit drink.', 45, 25, FOOD_IMAGES.fruitShake)
  ];

  const DEMO_ACCOUNT = {
    id: 'ACCT-DEMO-STUDENT',
    name: 'WMSU Student',
    email: 'student@wmsu.edu.ph',
    password: 'password',
    status: 'Active',
    createdAt: '2026-01-01T00:00:00.000Z',
    lastLoginAt: ''
  };

  function item(id, canteenId, name, description, price, stock, image) {
    return { id, canteenId, name, description, price, stock, image };
  }

  function getData(key, fallback) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : fallback;
    } catch (error) {
      console.warn('Storage parse error:', error);
      return fallback;
    }
  }

  function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function ensureSeedData() {
    if (!localStorage.getItem(STORAGE.menuItems)) {
      setData(STORAGE.menuItems, DEFAULT_MENU);
    } else {
      migrateMenuImages();
    }

    if (!localStorage.getItem(STORAGE.orders)) {
      setData(STORAGE.orders, []);
    }

    const accounts = getData(STORAGE.accounts, []);
    if (!accounts.length) {
      setData(STORAGE.accounts, [DEMO_ACCOUNT]);
    } else if (!accounts.some(account => normalizeEmail(account.email) === DEMO_ACCOUNT.email)) {
      accounts.unshift(DEMO_ACCOUNT);
      setData(STORAGE.accounts, accounts);
    }
  }

  function migrateMenuImages() {
    const items = getData(STORAGE.menuItems, []);
    let changed = false;
    const defaultsById = new Map(DEFAULT_MENU.map(menuItem => [menuItem.id, menuItem]));

    const migrated = items.map(menuItem => {
      const source = defaultsById.get(menuItem.id);
      if (!source) return menuItem;
      if (menuItem.image !== source.image) {
        changed = true;
        return { ...menuItem, image: source.image };
      }
      return menuItem;
    });

    const existingIds = new Set(migrated.map(menuItem => menuItem.id));
    DEFAULT_MENU.forEach(menuItem => {
      if (!existingIds.has(menuItem.id)) {
        migrated.push(menuItem);
        changed = true;
      }
    });

    if (changed) setData(STORAGE.menuItems, migrated);
  }

  function normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
  }

  function validWmsuEmail(email) {
    return normalizeEmail(email).endsWith('@wmsu.edu.ph');
  }

  function money(amount) {
    return `PHP ${Number(amount || 0).toFixed(2)}`;
  }

  function escapeHTML(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function toast(message) {
    const oldToast = qs('.toast');
    if (oldToast) oldToast.remove();

    const node = document.createElement('div');
    node.className = 'toast';
    node.textContent = message;
    document.body.appendChild(node);
    window.setTimeout(() => node.remove(), 3000);
  }

  function currentUser() {
    return getData(STORAGE.currentUser, null);
  }

  function requireStudentSession() {
    const user = currentUser();
    if (!user || !user.email) {
      window.location.href = 'index.html#login-card';
      return null;
    }

    const account = findAccount(user.email);
    if (!account || account.status === 'Inactive') {
      localStorage.removeItem(STORAGE.currentUser);
      window.location.href = 'index.html#login-card';
      return null;
    }

    return {
      id: account.id,
      name: account.name,
      email: normalizeEmail(account.email)
    };
  }

  function saveAccount(account) {
    const accounts = getData(STORAGE.accounts, []);
    const email = normalizeEmail(account.email);
    const index = accounts.findIndex(entry => normalizeEmail(entry.email) === email);
    if (index >= 0) accounts[index] = { ...accounts[index], ...account, email };
    else accounts.unshift({ ...account, email });
    setData(STORAGE.accounts, accounts);
  }

  function findAccount(email) {
    return getData(STORAGE.accounts, []).find(account => normalizeEmail(account.email) === normalizeEmail(email));
  }

  function setCurrentUserFromAccount(account) {
    const now = new Date().toISOString();
    const next = { ...account, lastLoginAt: now };
    saveAccount(next);
    setData(STORAGE.currentUser, {
      id: next.id,
      name: next.name,
      email: normalizeEmail(next.email)
    });
  }

  function studentLogout() {
    localStorage.removeItem(STORAGE.currentUser);
    window.location.href = 'index.html#login-card';
  }

  function statusBadge(status) {
    const cls = status === 'Rejected' || status === 'Inactive'
      ? 'danger'
      : ['Completed', 'Ready', 'Verified', 'Active'].includes(status) ? 'success' : '';
    return `<span class="badge ${cls}">${escapeHTML(status)}</span>`;
  }

  function getCanteenName(id) {
    return CANTEENS.find(c => c.id === id)?.name || 'Unknown Canteen';
  }

  function imageFallback() {
    return "this.onerror=null;this.src='assets/images/meal-placeholder.svg';";
  }

  function imageForName(name) {
    const text = String(name || '').toLowerCase();
    if (text.includes('pastil') || text.includes('patir') || text.includes('pater')) return FOOD_IMAGES.pastil;
    if (text.includes('siomai')) return FOOD_IMAGES.siomai;
    if (text.includes('tinola') || text.includes('soup')) return FOOD_IMAGES.tinola;
    if (text.includes('burger steak') || text.includes('hamburger steak')) return FOOD_IMAGES.burgerSteak;
    if (text.includes('pancit') || text.includes('noodle')) return FOOD_IMAGES.pancit;
    if (text.includes('spaghetti') || text.includes('pasta')) return FOOD_IMAGES.spaghetti;
    if (text.includes('bbq') || text.includes('barbecue')) return FOOD_IMAGES.porkBbq;
    if (text.includes('chicken') || text.includes('grilled')) return FOOD_IMAGES.grilledChickenRice;
    if (text.includes('fries')) return FOOD_IMAGES.fries;
    if (text.includes('coffee')) return FOOD_IMAGES.icedCoffee;
    if (text.includes('milk tea')) return FOOD_IMAGES.milkTea;
    if (text.includes('tea')) return FOOD_IMAGES.icedTea;
    if (text.includes('cake')) return FOOD_IMAGES.chocolateCake;
    if (text.includes('mango') || text.includes('graham') || text.includes('float')) return FOOD_IMAGES.mangoFloat;
    if (text.includes('shake') || text.includes('smoothie')) return FOOD_IMAGES.fruitShake;
    if (text.includes('ham')) return FOOD_IMAGES.hamSandwich;
    if (text.includes('tuna')) return FOOD_IMAGES.tunaSandwich;
    if (text.includes('club') || text.includes('sandwich')) return FOOD_IMAGES.clubSandwich;
    if (text.includes('cheese burger') || text.includes('cheeseburger') || text.includes('burger')) return FOOD_IMAGES.cheeseburger;
    return 'assets/images/meal-rice.svg';
  }

  function initLanding() {
    const loginForm = qs('#loginForm');
    const registerForm = qs('#registerForm');
    const hashTarget = window.location.hash;
    if (hashTarget === '#login-card') {
      window.setTimeout(() => qs('#login-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }

    loginForm?.addEventListener('submit', event => {
      event.preventDefault();
      const email = normalizeEmail(qs('#loginEmail')?.value);
      const password = qs('#loginPassword')?.value || '';

      if (!validWmsuEmail(email)) {
        toast('Use a valid @wmsu.edu.ph email address.');
        return;
      }

      const account = findAccount(email);
      if (!account) {
        toast('Account not found. Please register first.');
        return;
      }
      if (account.status === 'Inactive') {
        toast('This account is inactive. Ask the admin to reactivate it.');
        return;
      }
      if (account.password !== password) {
        toast('Incorrect password.');
        return;
      }

      setCurrentUserFromAccount(account);
      toast('Login successful.');
      window.setTimeout(() => window.location.href = 'homepage.html', 250);
    });

    registerForm?.addEventListener('submit', event => {
      event.preventDefault();
      const name = qs('#registerName')?.value.trim() || '';
      const email = normalizeEmail(qs('#registerEmail')?.value);
      const password = qs('#registerPassword')?.value || '';

      if (name.length < 2) {
        toast('Enter your full name.');
        return;
      }
      if (!validWmsuEmail(email)) {
        toast('Registration requires a WMSU email address.');
        return;
      }
      if (password.length < 6) {
        toast('Password must be at least 6 characters.');
        return;
      }
      if (findAccount(email)) {
        toast('That email is already registered. Please login.');
        return;
      }

      const account = {
        id: `ACCT-${Date.now()}`,
        name,
        email,
        password,
        status: 'Active',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString()
      };
      saveAccount(account);
      setData(STORAGE.currentUser, { id: account.id, name: account.name, email: account.email });
      toast('Registration saved. Opening canteens.');
      window.setTimeout(() => window.location.href = 'homepage.html', 350);
    });
  }

  function initHome() {
    const user = requireStudentSession();
    if (!user) return;

    const grid = qs('#canteenGrid');
    const search = qs('#canteenSearch');
    const openOnly = qs('#openOnly');
    const userName = qs('#studentName');
    if (userName) userName.textContent = user.name;

    qs('#studentLogout')?.addEventListener('click', event => {
      event.preventDefault();
      studentLogout();
    });

    const render = () => {
      const term = (search?.value || '').toLowerCase();
      const items = getData(STORAGE.menuItems, DEFAULT_MENU);
      const visible = CANTEENS.filter(canteen => {
        const menuTerms = items
          .filter(menuItem => menuItem.canteenId === canteen.id)
          .map(menuItem => menuItem.name.toLowerCase())
          .join(' ');
        const text = `${canteen.name} ${canteen.campus} ${canteen.tags.join(' ')} ${menuTerms}`.toLowerCase();
        return text.includes(term) && (!openOnly?.checked || canteen.status === 'Open');
      });

      if (!visible.length) {
        grid.innerHTML = '<div class="card empty-state">No canteens matched your search.</div>';
        return;
      }

      grid.innerHTML = visible.map(canteen => {
        const availableCount = items.filter(menuItem => menuItem.canteenId === canteen.id && menuItem.stock > 0).length;
        const disabled = canteen.status !== 'Open' ? 'disabled' : '';
        const label = canteen.status === 'Open' ? 'View menu' : 'Closed';
        return `
          <article class="card canteen-card">
            <img class="card-media" src="${canteen.image}" alt="${escapeHTML(canteen.name)} illustration">
            <div class="card-body">
              <div class="meta-row">
                <span class="badge ${canteen.status === 'Open' ? 'success' : 'danger'}">${canteen.status}</span>
                <span class="muted">Rating ${canteen.rating}</span>
              </div>
              <h3>${escapeHTML(canteen.name)}</h3>
              <p class="muted">${escapeHTML(canteen.campus)} - ${availableCount} available items</p>
              <button class="btn btn-primary full-width" data-canteen="${canteen.id}" ${disabled}>${label}</button>
            </div>
          </article>`;
      }).join('');

      qsa('[data-canteen]', grid).forEach(button => {
        button.addEventListener('click', () => {
          window.location.href = `menu.html?canteen=${encodeURIComponent(button.dataset.canteen)}`;
        });
      });
    };

    search?.addEventListener('input', render);
    openOnly?.addEventListener('change', render);
    render();
  }

  function initMenu() {
    const user = requireStudentSession();
    if (!user) return;

    const params = new URLSearchParams(window.location.search);
    const canteenId = params.get('canteen') || CANTEENS[0].id;
    const canteen = CANTEENS.find(c => c.id === canteenId) || CANTEENS[0];
    const menuTitle = qs('#menuTitle');
    const menuSubtitle = qs('#menuSubtitle');
    const menuGrid = qs('#menuGrid');
    const cartItems = qs('#cartItems');
    const cartTotal = qs('#cartTotal');
    const placeOrderBtn = qs('#placeOrderBtn');
    const cart = new Map();

    if (menuTitle) menuTitle.textContent = canteen.name;
    if (menuSubtitle) menuSubtitle.textContent = `${canteen.campus} - choose items and place your order.`;

    const getMenuItems = () => getData(STORAGE.menuItems, DEFAULT_MENU).filter(menuItem => menuItem.canteenId === canteen.id);

    const renderMenu = () => {
      const items = getMenuItems();
      if (!items.length) {
        menuGrid.innerHTML = '<div class="card empty-state">No menu items yet. Add items from the vendor page.</div>';
        return;
      }

      menuGrid.innerHTML = items.map(menuItem => {
        const disabled = menuItem.stock <= 0 ? 'disabled' : '';
        const stockClass = menuItem.stock > 0 ? 'success' : 'danger';
        const image = menuItem.image || imageForName(menuItem.name);
        return `
          <article class="card menu-card">
            <img class="card-media" src="${escapeHTML(image)}" alt="${escapeHTML(menuItem.name)}" loading="lazy" onerror="${imageFallback()}">
            <div class="card-body">
              <div class="meta-row">
                <strong>${money(menuItem.price)}</strong>
                <span class="badge ${stockClass}">${menuItem.stock > 0 ? `${menuItem.stock} left` : 'Sold out'}</span>
              </div>
              <h3>${escapeHTML(menuItem.name)}</h3>
              <p class="muted">${escapeHTML(menuItem.description)}</p>
              <button class="btn btn-primary full-width" data-add="${menuItem.id}" ${disabled}>Add to cart</button>
            </div>
          </article>`;
      }).join('');

      qsa('[data-add]', menuGrid).forEach(button => {
        button.addEventListener('click', () => addToCart(button.dataset.add));
      });
    };

    const renderCart = () => {
      const items = getMenuItems();
      let total = 0;
      const rows = Array.from(cart.entries()).map(([id, quantity]) => {
        const menuItem = items.find(entry => entry.id === id);
        if (!menuItem) return '';
        total += menuItem.price * quantity;
        return `
          <div class="cart-line">
            <div>
              <strong>${escapeHTML(menuItem.name)}</strong>
              <p class="muted small-text">${money(menuItem.price)} each</p>
            </div>
            <div class="qty-controls">
              <button class="qty-btn" type="button" data-dec="${menuItem.id}" aria-label="Decrease ${escapeHTML(menuItem.name)}">-</button>
              <strong>${quantity}</strong>
              <button class="qty-btn" type="button" data-inc="${menuItem.id}" aria-label="Increase ${escapeHTML(menuItem.name)}">+</button>
            </div>
          </div>`;
      }).join('');

      cartItems.innerHTML = rows || '<p class="muted">Your cart is empty.</p>';
      cartTotal.textContent = money(total);
      placeOrderBtn.disabled = cart.size === 0;

      qsa('[data-dec]', cartItems).forEach(button => {
        button.addEventListener('click', () => changeQty(button.dataset.dec, -1));
      });
      qsa('[data-inc]', cartItems).forEach(button => {
        button.addEventListener('click', () => changeQty(button.dataset.inc, 1));
      });
    };

    const addToCart = id => changeQty(id, 1);

    const changeQty = (id, delta) => {
      const menuItem = getMenuItems().find(entry => entry.id === id);
      if (!menuItem) return;
      const next = (cart.get(id) || 0) + delta;
      if (next <= 0) {
        cart.delete(id);
      } else if (next > menuItem.stock) {
        toast('Not enough stock available.');
      } else {
        cart.set(id, next);
      }
      renderCart();
    };

    placeOrderBtn?.addEventListener('click', () => {
      const items = getData(STORAGE.menuItems, DEFAULT_MENU);
      const selected = Array.from(cart.entries()).map(([id, quantity]) => {
        const menuItem = items.find(entry => entry.id === id);
        return { id, name: menuItem.name, price: menuItem.price, quantity, subtotal: menuItem.price * quantity };
      });

      if (!selected.length) return;

      for (const orderItem of selected) {
        const source = items.find(menuItem => menuItem.id === orderItem.id);
        if (!source || source.stock < orderItem.quantity) {
          toast(`${orderItem.name} is no longer available in that quantity.`);
          return;
        }
      }

      for (const orderItem of selected) {
        const source = items.find(menuItem => menuItem.id === orderItem.id);
        source.stock -= orderItem.quantity;
      }
      setData(STORAGE.menuItems, items);

      const orders = getData(STORAGE.orders, []);
      const payment = qs('input[name="paymentMethod"]:checked')?.value || 'Cash';
      const order = {
        id: `C2B-${Date.now()}`,
        createdAt: new Date().toISOString(),
        customerId: user.id || '',
        customerName: user.name,
        customerEmail: user.email,
        canteenId: canteen.id,
        canteenName: canteen.name,
        items: selected,
        total: selected.reduce((sum, orderItem) => sum + orderItem.subtotal, 0),
        payment,
        note: qs('#orderNote')?.value.trim() || '',
        status: 'Pending'
      };
      orders.unshift(order);
      setData(STORAGE.orders, orders);
      toast('Order placed successfully.');
      window.setTimeout(() => window.location.href = 'orders.html', 500);
    });

    renderMenu();
    renderCart();
  }

  function orderCard(order, options = {}) {
    const items = order.items.map(entry => `<li>${escapeHTML(entry.name)} x ${entry.quantity} - ${money(entry.subtotal)}</li>`).join('');
    const date = new Date(order.createdAt).toLocaleString();
    let actions = '';

    if (options.admin) {
      actions = `
        <div class="action-row">
          ${['Verified', 'Preparing', 'Ready', 'Completed', 'Rejected'].map(status => `<button class="btn btn-ghost small-btn" data-status="${status}" data-order="${order.id}">${status}</button>`).join('')}
        </div>`;
    }

    if (options.cashier) {
      actions = `
        <div class="action-row">
          <button class="btn btn-primary small-btn" data-verify="${order.id}">Verify payment</button>
          <button class="btn btn-ghost small-btn" data-reject="${order.id}">Reject</button>
        </div>`;
    }

    return `
      <article class="card order-card">
        <div class="order-meta">
          <div>
            <h3>${escapeHTML(order.id)}</h3>
            <p class="muted">${escapeHTML(order.canteenName)} - ${escapeHTML(order.customerEmail)} - ${date}</p>
          </div>
          ${statusBadge(order.status)}
        </div>
        <ul class="order-items">${items}</ul>
        <div class="meta-row">
          <p class="muted">Payment: ${escapeHTML(order.payment)}${order.note ? ` - Note: ${escapeHTML(order.note)}` : ''}</p>
          <strong>${money(order.total)}</strong>
        </div>
        ${actions}
      </article>`;
  }

  function initOrders() {
    const user = requireStudentSession();
    if (!user) return;

    const list = qs('#ordersList');
    const clear = qs('#clearMyOrders');

    const render = () => {
      const orders = getData(STORAGE.orders, []).filter(order => normalizeEmail(order.customerEmail) === normalizeEmail(user.email));
      list.innerHTML = orders.length
        ? orders.map(order => orderCard(order)).join('')
        : '<div class="card empty-state">No orders yet. Go back to canteens and place your first order.</div>';
    };

    clear?.addEventListener('click', () => {
      const remaining = getData(STORAGE.orders, []).filter(order => normalizeEmail(order.customerEmail) !== normalizeEmail(user.email));
      setData(STORAGE.orders, remaining);
      render();
      toast('Your local order history was cleared.');
    });

    render();
  }

  function initAdminLogin() {
    qs('#adminLoginForm')?.addEventListener('submit', event => {
      event.preventDefault();
      const username = qs('#adminUsername')?.value.trim();
      const password = qs('#adminPassword')?.value;
      if (username === 'admin' && password === '1234') {
        localStorage.setItem(STORAGE.adminLoggedIn, 'true');
        window.location.href = 'admin.html';
      } else {
        toast('Invalid admin credentials.');
      }
    });
  }

  function updateOrderStatus(id, status) {
    const orders = getData(STORAGE.orders, []);
    const order = orders.find(entry => entry.id === id);
    if (!order) return;
    order.status = status;
    order.updatedAt = new Date().toISOString();
    setData(STORAGE.orders, orders);
  }

  function updateAccountStatus(id, status) {
    const accounts = getData(STORAGE.accounts, []);
    const account = accounts.find(entry => entry.id === id);
    if (!account) return;
    account.status = status;
    account.updatedAt = new Date().toISOString();
    setData(STORAGE.accounts, accounts);
  }

  function deleteAccount(id) {
    const accounts = getData(STORAGE.accounts, []);
    const target = accounts.find(entry => entry.id === id);
    if (!target) return;
    const next = accounts.filter(entry => entry.id !== id);
    setData(STORAGE.accounts, next);
    const current = currentUser();
    if (current && normalizeEmail(current.email) === normalizeEmail(target.email)) {
      localStorage.removeItem(STORAGE.currentUser);
    }
  }

  function accountCard(account) {
    const orders = getData(STORAGE.orders, []).filter(order => normalizeEmail(order.customerEmail) === normalizeEmail(account.email));
    const spent = orders.filter(order => order.status !== 'Rejected').reduce((sum, order) => sum + Number(order.total || 0), 0);
    const created = account.createdAt ? new Date(account.createdAt).toLocaleString() : 'Unknown';
    const lastLogin = account.lastLoginAt ? new Date(account.lastLoginAt).toLocaleString() : 'Never';
    const toggleStatus = account.status === 'Inactive' ? 'Activate' : 'Deactivate';
    const nextStatus = account.status === 'Inactive' ? 'Active' : 'Inactive';

    return `
      <article class="card account-card">
        <div class="order-meta">
          <div>
            <h3>${escapeHTML(account.name)}</h3>
            <p class="muted">${escapeHTML(account.email)}</p>
          </div>
          ${statusBadge(account.status || 'Active')}
        </div>
        <div class="account-metrics">
          <span><strong>${orders.length}</strong><small>Orders</small></span>
          <span><strong>${money(spent)}</strong><small>Total spent</small></span>
          <span><strong>${created}</strong><small>Registered</small></span>
          <span><strong>${lastLogin}</strong><small>Last login</small></span>
        </div>
        <div class="action-row">
          <button class="btn btn-primary small-btn" data-account-orders="${account.id}">View orders</button>
          <button class="btn btn-ghost small-btn" data-account-status="${account.id}" data-next-status="${nextStatus}">${toggleStatus}</button>
          <button class="btn btn-ghost small-btn" data-account-delete="${account.id}">Delete</button>
        </div>
      </article>`;
  }

  function initAdmin() {
    if (localStorage.getItem(STORAGE.adminLoggedIn) !== 'true') {
      window.location.href = 'admin-login.html';
      return;
    }

    const stats = qs('#adminStats');
    const list = qs('#adminOrders');
    const filter = qs('#adminStatusFilter');
    const accountList = qs('#adminAccounts');
    const accountSearch = qs('#accountSearch');
    const exportAccountsBtn = qs('#exportAccountsBtn');
    const orderScope = qs('#adminOrderScope');
    const clearScope = qs('#clearOrderScope');
    let accountOrderFilter = '';

    qs('#adminLogout')?.addEventListener('click', () => {
      localStorage.removeItem(STORAGE.adminLoggedIn);
      window.location.href = 'admin-login.html';
    });

    const renderStats = () => {
      const orders = getData(STORAGE.orders, []);
      const accounts = getData(STORAGE.accounts, []);
      const totalRevenue = orders.filter(order => order.status !== 'Rejected').reduce((sum, order) => sum + Number(order.total || 0), 0);
      const pendingCount = orders.filter(order => order.status === 'Pending').length;
      const completedCount = orders.filter(order => order.status === 'Completed').length;
      const activeCount = accounts.filter(account => account.status !== 'Inactive').length;

      stats.innerHTML = [
        ['Total Orders', orders.length],
        ['Pending', pendingCount],
        ['Completed', completedCount],
        ['Sales', money(totalRevenue)],
        ['Registered Accounts', accounts.length],
        ['Active Accounts', activeCount]
      ].map(([label, value]) => `<article class="card stat-card"><p class="eyebrow">${label}</p><h2>${value}</h2></article>`).join('');
    };

    const renderOrders = () => {
      const orders = getData(STORAGE.orders, []);
      const wanted = filter?.value || 'All';
      let visible = wanted === 'All' ? orders : orders.filter(order => order.status === wanted);
      if (accountOrderFilter) {
        visible = visible.filter(order => normalizeEmail(order.customerEmail) === normalizeEmail(accountOrderFilter));
      }

      if (orderScope) {
        orderScope.textContent = accountOrderFilter ? `Showing orders for ${accountOrderFilter}` : 'Showing all orders';
      }
      if (clearScope) {
        clearScope.hidden = !accountOrderFilter;
      }

      list.innerHTML = visible.length
        ? visible.map(order => orderCard(order, { admin: true })).join('')
        : '<div class="card empty-state">No orders for this filter.</div>';

      qsa('[data-status]', list).forEach(button => {
        button.addEventListener('click', () => {
          updateOrderStatus(button.dataset.order, button.dataset.status);
          renderStats();
          renderOrders();
          renderAccounts();
          toast('Order status updated.');
        });
      });
    };

    const renderAccounts = () => {
      const term = (accountSearch?.value || '').toLowerCase();
      const accounts = getData(STORAGE.accounts, []).filter(account => {
        const text = `${account.name} ${account.email} ${account.status}`.toLowerCase();
        return text.includes(term);
      });

      accountList.innerHTML = accounts.length
        ? accounts.map(account => accountCard(account)).join('')
        : '<div class="card empty-state">No registered accounts matched your search.</div>';

      qsa('[data-account-orders]', accountList).forEach(button => {
        button.addEventListener('click', () => {
          const account = getData(STORAGE.accounts, []).find(entry => entry.id === button.dataset.accountOrders);
          if (!account) return;
          accountOrderFilter = account.email;
          renderOrders();
          qs('#ordersPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          toast('Filtered orders by account.');
        });
      });

      qsa('[data-account-status]', accountList).forEach(button => {
        button.addEventListener('click', () => {
          updateAccountStatus(button.dataset.accountStatus, button.dataset.nextStatus);
          renderStats();
          renderAccounts();
          toast(`Account ${button.dataset.nextStatus.toLowerCase()}.`);
        });
      });

      qsa('[data-account-delete]', accountList).forEach(button => {
        button.addEventListener('click', () => {
          const confirmed = window.confirm('Delete this registered account from localStorage? Existing order history stays for audit records.');
          if (!confirmed) return;
          deleteAccount(button.dataset.accountDelete);
          renderStats();
          renderAccounts();
          renderOrders();
          toast('Account deleted.');
        });
      });
    };

    filter?.addEventListener('change', renderOrders);
    accountSearch?.addEventListener('input', renderAccounts);
    exportAccountsBtn?.addEventListener('click', () => {
      const safeAccounts = getData(STORAGE.accounts, []).map(({ password, ...account }) => account);
      const blob = new Blob([JSON.stringify(safeAccounts, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'click2bite-registered-accounts.json';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      toast('Registered accounts exported.');
    });
    clearScope?.addEventListener('click', () => {
      accountOrderFilter = '';
      renderOrders();
    });

    renderStats();
    renderOrders();
    renderAccounts();
  }

  function initCashier() {
    const list = qs('#cashierOrders');

    const render = () => {
      const orders = getData(STORAGE.orders, []).filter(order => ['Pending', 'Verified'].includes(order.status));
      list.innerHTML = orders.length
        ? orders.map(order => orderCard(order, { cashier: true })).join('')
        : '<div class="card empty-state">No payments waiting for verification.</div>';

      qsa('[data-verify]', list).forEach(button => {
        button.addEventListener('click', () => {
          updateOrderStatus(button.dataset.verify, 'Verified');
          render();
          toast('Payment verified.');
        });
      });
      qsa('[data-reject]', list).forEach(button => {
        button.addEventListener('click', () => {
          updateOrderStatus(button.dataset.reject, 'Rejected');
          render();
          toast('Order rejected.');
        });
      });
    };

    render();
  }

  function initVendor() {
    const form = qs('#vendorForm');
    const canteenSelect = qs('#vendorCanteen');
    const imageList = qs('#imageChoices');
    const itemList = qs('#vendorItems');

    if (canteenSelect) {
      canteenSelect.innerHTML = CANTEENS.map(canteen => `<option value="${canteen.id}">${escapeHTML(canteen.name)}</option>`).join('');
    }

    if (imageList) {
      imageList.innerHTML = IMAGE_OPTIONS.map(([label, url]) => `<option value="${escapeHTML(url)}">${escapeHTML(label)}</option>`).join('');
    }

    const render = () => {
      const items = getData(STORAGE.menuItems, DEFAULT_MENU);
      if (!items.length) {
        itemList.innerHTML = '<div class="card empty-state">No menu items available.</div>';
        return;
      }

      itemList.innerHTML = items.map(menuItem => `
        <article class="card vendor-item">
          <div class="vendor-row">
            <img class="thumb" src="${escapeHTML(menuItem.image || imageForName(menuItem.name))}" alt="${escapeHTML(menuItem.name)}" onerror="${imageFallback()}">
            <div>
              <h3>${escapeHTML(menuItem.name)}</h3>
              <p class="muted">${escapeHTML(getCanteenName(menuItem.canteenId))} - ${escapeHTML(menuItem.description)}</p>
            </div>
            <strong>${money(menuItem.price)}</strong>
          </div>
          <div class="two-col">
            <label>Price
              <input type="number" min="1" value="${menuItem.price}" data-price="${menuItem.id}">
            </label>
            <label>Stock
              <input type="number" min="0" value="${menuItem.stock}" data-stock="${menuItem.id}">
            </label>
          </div>
          <label>Image path or URL
            <input type="text" value="${escapeHTML(menuItem.image || '')}" data-image="${menuItem.id}" placeholder="Paste an image path or online food image URL">
          </label>
          <div class="action-row">
            <button class="btn btn-primary small-btn" data-update="${menuItem.id}" type="button">Update</button>
            <button class="btn btn-ghost small-btn" data-delete="${menuItem.id}" type="button">Delete</button>
          </div>
        </article>`).join('');

      qsa('[data-update]', itemList).forEach(button => {
        button.addEventListener('click', () => {
          const items = getData(STORAGE.menuItems, DEFAULT_MENU);
          const target = items.find(menuItem => menuItem.id === button.dataset.update);
          if (!target) return;
          target.price = Number(qs(`[data-price="${target.id}"]`)?.value || target.price);
          target.stock = Number(qs(`[data-stock="${target.id}"]`)?.value || 0);
          target.image = qs(`[data-image="${target.id}"]`)?.value.trim() || imageForName(target.name);
          setData(STORAGE.menuItems, items);
          render();
          toast('Menu item updated.');
        });
      });

      qsa('[data-delete]', itemList).forEach(button => {
        button.addEventListener('click', () => {
          const confirmed = window.confirm('Delete this menu item?');
          if (!confirmed) return;
          const next = getData(STORAGE.menuItems, DEFAULT_MENU).filter(menuItem => menuItem.id !== button.dataset.delete);
          setData(STORAGE.menuItems, next);
          render();
          toast('Menu item deleted.');
        });
      });
    };

    form?.addEventListener('submit', event => {
      event.preventDefault();
      const name = qs('#vendorName')?.value.trim() || '';
      const imageValue = qs('#vendorImage')?.value.trim() || '';
      const items = getData(STORAGE.menuItems, DEFAULT_MENU);
      const menuItem = {
        id: `custom-${Date.now()}`,
        canteenId: qs('#vendorCanteen')?.value,
        name,
        description: qs('#vendorDesc')?.value.trim() || '',
        price: Number(qs('#vendorPrice')?.value),
        stock: Number(qs('#vendorStock')?.value),
        image: imageValue || imageForName(name)
      };
      items.unshift(menuItem);
      setData(STORAGE.menuItems, items);
      form.reset();
      render();
      toast('New menu item saved.');
    });

    qs('#resetDataBtn')?.addEventListener('click', () => {
      const confirmed = window.confirm('Reset menu, orders, and demo inventory? Registered accounts will remain saved.');
      if (!confirmed) return;
      setData(STORAGE.menuItems, DEFAULT_MENU);
      setData(STORAGE.orders, []);
      render();
      toast('Demo menu and orders reset. Accounts were kept.');
    });

    render();
  }

  ensureSeedData();

  const page = document.body.dataset.page;
  const routers = {
    landing: initLanding,
    home: initHome,
    menu: initMenu,
    orders: initOrders,
    'admin-login': initAdminLogin,
    admin: initAdmin,
    cashier: initCashier,
    vendor: initVendor
  };

  if (routers[page]) routers[page]();
})();
