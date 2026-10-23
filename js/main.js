/**
 * BYTEPRO - SISTEMA WEB DE E-COMMERCE & HARDWARE
 * USFX - Facultad de Ciencias y Tecnología - SIS324
 * Lógica e Interactividad JavaScript Puro (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==================== BASE DE DATOS DE PRODUCTOS DE DEMOSTRACIÓN ====================
  const PRODUCTS_DATA = [
    {
      id: 'prod-01',
      name: 'Laptop BytePro Aero 15 Core i7',
      category: 'laptops',
      categoryLabel: 'Laptops',
      price: 7450,
      image: 'assets/images/prod-laptop-zenith.svg',
      shortSpecs: 'Intel Core i7-13700H • 16GB DDR5 • 1TB SSD NVMe Gen4 • 15.6" IPS 144Hz',
      description: 'Portátil de alta potencia optimizada para ingenieros de software, diseñadores y desarrollo de aplicaciones multitarea exigentes.',
      fullSpecs: [
        'Procesador: Intel Core i7-13700H (14 núcleos, hasta 5.0 GHz)',
        'Memoria RAM: 16 GB DDR5 4800 MHz (ampliable a 64 GB)',
        'Almacenamiento: 1 TB SSD M.2 NVMe PCIe 4.0 ultra rápido',
        'Pantalla: 15.6" Full HD (1920x1080) 144Hz IPS antirreflejo',
        'Gráficos: Gráficos Iris Xe / Opción dedicada',
        'Conectividad: Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4, HDMI 2.1',
        'Batería: 4 celdas 80Wh con carga rápida de 100W USB-C'
      ]
    },
    {
      id: 'prod-02',
      name: 'Workstation BytePro Apex Pro Ryzen 9',
      category: 'desktop',
      categoryLabel: 'Computadoras de Escritorio',
      price: 11200,
      image: 'assets/images/prod-desktop-titan.svg',
      shortSpecs: 'AMD Ryzen 9 7900X • 32GB RAM DDR5 6000MHz • 2TB SSD • Refrigeración Líquida 240mm',
      description: 'Computadora de escritorio para renderizado 3D, compilación pesada y estaciones de trabajo de alto rendimiento.',
      fullSpecs: [
        'Procesador: AMD Ryzen 9 7900X (12 núcleos, 24 hilos, hasta 5.4 GHz)',
        'Refrigeración: Sistema AIO líquido 240mm con bomba silenciosa',
        'Memoria RAM: 32 GB (2x16GB) DDR5 6000MHz Kingston Fury RGB',
        'Almacenamiento: 2 TB SSD NVMe PCIe 4.0 (Lectura 7000 MB/s)',
        'Placa Madre: Chipset B650 con Wi-Fi integrado y disipación térmica activa',
        'Fuente de Poder: 850W 80 Plus Gold Modular certificada',
        'Gabinete: Vidrio templado con flujo de aire optimizado y 4 ventiladores ARGB'
      ]
    },
    {
      id: 'prod-03',
      name: 'Monitor Curvo BytePro Vision 27" 2K',
      category: 'monitors',
      categoryLabel: 'Monitores',
      price: 2150,
      image: 'assets/images/prod-monitor-ultra.svg',
      shortSpecs: '27" QHD (2560x1440) • 165Hz • 1ms GtG • Panel Fast IPS • FreeSync Premium',
      description: 'Pantalla curva panorámica 1500R de alta fidelidad cromática (99% sRGB) para productividad y visualización fluida.',
      fullSpecs: [
        'Resolución: QHD 2560 x 1440 píxeles a 165Hz',
        'Tipo de Panel: Fast IPS Curvo 1500R con ángulos de 178°/178°',
        'Tiempo de Respuesta: 1ms (GtG) / 0.5ms (MPRT)',
        'Gama de Color: 99% sRGB, 95% DCI-P3 con HDR10',
        'Sincronización: Compatible con AMD FreeSync Premium y NVIDIA G-Sync',
        'Puertos: 2x HDMI 2.0, 1x DisplayPort 1.4, Salida audio 3.5mm',
        'Soporte Ergonómico: Ajuste de inclinación y compatibilidad VESA 100x100'
      ]
    },
    {
      id: 'prod-04',
      name: 'Kit Periféricos MechStrike Pro RGB',
      category: 'peripherals',
      categoryLabel: 'Teclados y Ratones',
      price: 480,
      image: 'assets/images/prod-keyboard-mouse.svg',
      shortSpecs: 'Teclado Mecánico Red Switch Anti-Ghosting + Mouse Óptico 16.000 DPI Ergonómico',
      description: 'Combo de alta precisión para tipeo prolongado y control milimétrico con switches mecánicos lineales duraderos.',
      fullSpecs: [
        'Teclado: Mecánico formato TKL con switches Red lineales (50M pulsaciones)',
        'Iluminación Teclado: RGB individual personalizable con 18 modos dinámicos',
        'Tecnología: Full Anti-Ghosting y N-Key Rollover por USB cable mallado',
        'Mouse: Sensor óptico PixArt 3389 regulable de 800 a 16.000 DPI reales',
        'Botones Mouse: 6 botones programables con switches Omron de 20M clics',
        'Construcción: Chasis de aluminio cepillado de grado aeronáutico'
      ]
    },
    {
      id: 'prod-05',
      name: 'Impresora Multifunción PrintFlow X',
      category: 'printers',
      categoryLabel: 'Impresoras',
      price: 1680,
      image: 'assets/images/prod-printer-eco.svg',
      shortSpecs: 'Sistema Continuo de Tanque de Tinta • Wi-Fi Direct • Impresión Dúplex Automática',
      description: 'Solución de impresión económica y de alta definición para oficinas, proyectos universitarios y documentación.',
      fullSpecs: [
        'Funciones: Impresión, escaneo plano y fotocopiado de alta resolución',
        'Tecnología: Tanques de tinta de recarga limpia sin cartuchos (EcoTank)',
        'Velocidad: Hasta 33 ppm en texto negro y 15 ppm a color',
        'Dúplex: Impresión a doble cara automática integrada',
        'Conectividad: Wi-Fi, Wi-Fi Direct, USB 2.0 de alta velocidad, App móvil',
        'Resolución de Escáner: 1200 x 2400 DPI ópticos para digitalización nítida'
      ]
    },
    {
      id: 'prod-06',
      name: 'Placa de Video BytePro Titan RTX 4060 Ti',
      category: 'components',
      categoryLabel: 'Componentes y Accesorios',
      price: 3890,
      image: 'assets/images/prod-gpu-rtx.svg',
      shortSpecs: '16GB GDDR6 • Triple Fan Cooling • DLSS 3 • Ray Tracing 3ra Gen • PCIe 4.0',
      description: 'Tarjeta gráfica de vanguardia con arquitectura de trazado de rayos y aceleración de inteligencia artificial para gráficos.',
      fullSpecs: [
        'Memoria VRAM: 16 GB GDDR6 con bus de 128-bit',
        'Frecuencia Boost: Hasta 2595 MHz en modo Overclock',
        'Tecnologías: NVIDIA DLSS 3, Reflex, Broadcast y NVENC de 8va generación',
        'Refrigeración: Sistema triple ventilador con rodamientos dobles y parada pasiva',
        'Salidas de Video: 3x DisplayPort 1.4a, 1x HDMI 2.1a (Soporta 4K a 120Hz / 8K)',
        'Alimentación requerida: Fuente recomendada de 600W (Conector 1x 8 pines)'
      ]
    }
  ];

  // Estado de la aplicación
  let currentCategory = 'all';
  let searchQuery = '';
  let cart = [];

  // Elementos DOM
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const productsGrid = document.getElementById('products-grid');
  const searchInput = document.getElementById('product-search');
  const searchFeedback = document.getElementById('search-feedback');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const categoryCards = document.querySelectorAll('.category-card');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  // Modal de detalles
  const modalOverlay = document.getElementById('product-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalCat = document.getElementById('modal-cat');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalDesc = document.getElementById('modal-desc');
  const modalSpecsList = document.getElementById('modal-specs-list');
  const modalAddToCartBtn = document.getElementById('modal-add-cart');

  // Carrito y Drawer
  const cartBtn = document.getElementById('cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartDrawerClose = document.getElementById('cart-drawer-close');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartTotalVal = document.getElementById('cart-total-val');
  const cartBadge = document.getElementById('cart-badge');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  // FAQ
  const faqItems = document.querySelectorAll('.faq-item');

  // Formulario de Contacto
  const contactForm = document.getElementById('contact-form');

  // ==================== HEADER STICKY & MENÚ MÓVIL ====================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==================== RENDERIZADO DE PRODUCTOS ====================
  function renderProducts() {
    if (!productsGrid) return;

    const filtered = PRODUCTS_DATA.filter(prod => {
      const matchCat = (currentCategory === 'all') || (prod.category === currentCategory);
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = q === '' ||
        prod.name.toLowerCase().includes(q) ||
        prod.categoryLabel.toLowerCase().includes(q) ||
        prod.shortSpecs.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    if (searchFeedback) {
      if (searchQuery.trim() !== '' || currentCategory !== 'all') {
        searchFeedback.textContent = `Mostrando ${filtered.length} de ${PRODUCTS_DATA.length} productos de demostración`;
      } else {
        searchFeedback.textContent = `Catálogo completo con ${PRODUCTS_DATA.length} productos de hardware informático`;
      }
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-results">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h4>No se encontraron productos</h4>
          <p style="color: var(--text-muted); margin-top: 6px;">Intenta con otro término de búsqueda o selecciona otra categoría de hardware.</p>
          <button class="btn btn-secondary btn-sm" id="btn-reset-filters" style="margin-top: 16px;">Restablecer Filtros</button>
        </div>
      `;

      const resetBtn = document.getElementById('btn-reset-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          tabBtns.forEach(t => t.classList.toggle('active', t.dataset.category === 'all'));
          renderProducts();
        });
      }
      return;
    }

    productsGrid.innerHTML = filtered.map(prod => `
      <article class="product-card" data-id="${prod.id}">
        <span class="product-badge-cat">${prod.categoryLabel}</span>
        <div class="product-media">
          <img src="${prod.image}" alt="${prod.name}" loading="lazy" width="280" height="200">
        </div>
        <div class="product-body">
          <h3 class="product-name">${prod.name}</h3>
          <p class="product-specs">${prod.shortSpecs}</p>
          <div class="product-footer">
            <div class="price-box">
              <span class="price-label">Precio Referencial</span>
              <span class="price-val">${prod.price.toLocaleString('es-BO')} Bs.</span>
              <span class="price-demo-badge">Demostración</span>
            </div>
            <button class="btn btn-primary btn-sm view-details-btn" data-id="${prod.id}" aria-label="Ver detalles de ${prod.name}">
              Ver Detalles
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Asignar listeners a los botones de detalles generados
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        openProductModal(id);
      });
    });
  }

  // ==================== FILTRADO POR TABS Y BUSCADOR ====================
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category || 'all';
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Categorías de la sección 3 que activan el filtro
  categoryCards.forEach(card => {
    const btn = card.querySelector('.category-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetCat = card.dataset.category;
        if (targetCat) {
          currentCategory = targetCat;
          tabBtns.forEach(t => {
            t.classList.toggle('active', t.dataset.category === targetCat);
          });
          renderProducts();
          const targetSection = document.getElementById('productos');
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }
  });

  // ==================== MODAL DE DETALLES DEL PRODUCTO ====================
  let currentModalProduct = null;

  function openProductModal(productId) {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return;

    currentModalProduct = prod;
    modalImg.src = prod.image;
    modalImg.alt = prod.name;
    modalCat.textContent = prod.categoryLabel;
    modalTitle.textContent = prod.name;
    modalPrice.textContent = `${prod.price.toLocaleString('es-BO')} Bs. (Demostración)`;
    modalDesc.textContent = prod.description;

    modalSpecsList.innerHTML = prod.fullSpecs.map(spec => `
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${spec}</span>
      </li>
    `).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProductModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProductModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCartDrawer();
    }
  });

  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener('click', () => {
      if (currentModalProduct) {
        addToCart(currentModalProduct);
        closeProductModal();
      }
    });
  }

  // ==================== CARRITO DE COMPRAS / SIMULADOR DE PEDIDO ====================
  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }

    updateCartUI();
    showToast(`✓ "${product.name}" agregado a tu pedido de demo`);
  }

  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartBadge) {
      cartBadge.textContent = totalCount;
    }

    if (cartTotalVal) {
      cartTotalVal.textContent = `${totalPrice.toLocaleString('es-BO')} Bs.`;
    }

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 12px; color: var(--text-dim);">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <p>Tu lista de pedido está vacía.</p>
          <p style="font-size: 0.8rem; margin-top: 4px;">Explora los productos de hardware y agrégalos para simular tu orden.</p>
        </div>
      `;
      return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">${item.quantity}x ${item.price.toLocaleString('es-BO')} Bs.</div>
        </div>
        <button class="cart-item-remove" data-id="${item.id}" title="Eliminar del pedido" aria-label="Eliminar ${item.name}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `).join('');

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        removeFromCart(id);
      });
    });
  }

  function openCartDrawer() {
    if (cartDrawer) {
      cartDrawer.classList.add('open');
    }
  }

  function closeCartDrawer() {
    if (cartDrawer) {
      cartDrawer.classList.remove('open');
    }
  }

  if (cartBtn) {
    cartBtn.addEventListener('click', openCartDrawer);
  }

  if (cartDrawerClose) {
    cartDrawerClose.addEventListener('click', closeCartDrawer);
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('⚠ Tu lista de pedido está vacía');
        return;
      }
      const orderCode = 'BP-' + Math.floor(100000 + Math.random() * 900000);
      showToast(`🎉 ¡Pedido de prueba generado con éxito! Código: ${orderCode}`);
      cart = [];
      updateCartUI();
      closeCartDrawer();
    });
  }

  // ==================== FAQ ACCORDION ====================
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Cerrar los demás acordeones para un look limpio
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ==================== FORMULARIO DE CONTACTO ====================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const category = document.getElementById('contact-category').value;
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('⚠ Por favor completa todos los campos requeridos');
        return;
      }

      // Simulación de envío
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando consulta...';
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast(`✓ ¡Gracias ${name}! Tu solicitud sobre ${category || 'hardware'} fue recibida.`);
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 700);
    });
  }

  // ==================== TOAST NOTIFICATIONS ====================
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3500);
  }

  // ==================== ACTIVE NAV LINK ON SCROLL ====================
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const link = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });

  // Inicializar productos al cargar
  renderProducts();
});
