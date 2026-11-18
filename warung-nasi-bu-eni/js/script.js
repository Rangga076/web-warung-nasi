/* =========================================================
   Tahap 1-3: konfigurasi, navbar, kategori, dan katalog menu
   ========================================================= */

// Satu-satunya tempat nomor WhatsApp disimpan.
// Ganti dengan nomor warung nanti, format: 628xxxxxxxxxx
const WHATSAPP_NUMBER = "6282163199525";

const CONTACT = {
    whatsapp: WHATSAPP_NUMBER,
    address: "Warung Nasi Bu Eni, Jl. Terusan Dusun 5, Bandar Setia, Kec. Percut Sei Tuan, Medan, Sumatera Utara 20371",
    hours: "06.00 - 12.00 WIB",
    mapsQuery: "3.6328014,98.7513123",
    mapsEmbedUrl: "https://www.google.com/maps?cid=13447350492832997488&output=embed",
    mapsLinkUrl: "https://maps.app.goo.gl/RDZDmt1LAMd37f129",
    qrImage: "assets/icons/qr.jpeg"
};

const FALLBACK_IMAGE = "assets/images/placeholder/menu-fallback.svg";

// Delapan kategori menu. Tambah atau ubah kategori di sini.
const CATEGORIES = [
    { id: "all", label: "Semua Menu", icon: "bi-grid-3x3-gap-fill" },
    { id: "ayam", label: "Menu Ayam", icon: "bi-fire" },
    { id: "nila", label: "Menu Ikan Nila", icon: "bi-water" },
    { id: "lele", label: "Menu Ikan Lele", icon: "bi-droplet-fill" },
    { id: "lainnya", label: "Menu Lainnya", icon: "bi-box-seam" },
    { id: "nasi", label: "Menu Nasi", icon: "bi-basket2-fill" },
    { id: "telur", label: "Menu Telur", icon: "bi-egg-fill" },
    { id: "sambal-seafood", label: "Menu Sambal dan Seafood", icon: "bi-stars" }
];

/* =========================================================
   HARGA CONTOH — BUKAN HARGA RESMI WARUNG NASI BU ENI
   Ubah nilai `price` di bawah setelah harga asli tersedia.
   ========================================================= */
const MENU_ITEMS = [
    {
        id: "ayam-bakar",
        name: "Ayam Panggang",
        category: "ayam",
        description: "Ayam panggang bumbu kecap manis dengan aroma panggangan yang menggugah selera.",
        price: 7000,
        image: "assets/images/menu/ayam-panggang.jpeg",
        alt: "Ayam panggang khas Indonesia",
        isPlaceholder: false
    },
    {
        id: "ayam-goreng",
        name: "Ayam Goreng",
        category: "ayam",
        description: "Ayam goreng renyah dengan rempah kunyit dan ketumbar, cocok dengan sambal.",
        price: 7000,
        image: "assets/images/menu/ayam-goreng.jpeg",
        alt: "Ayam goreng renyah",
        isPlaceholder: false
    },
    {
        id: "ayam-rendang",
        name: "Ayam Rendang",
        category: "ayam",
        description: "Ayam dimasak lambat dengan santan kental dan bumbu rendang khas Padang.",
        price: 7000,
        image: "assets/images/menu/ayam-rendang.jpeg",
        alt: "Ayam rendang dengan kuah kental",
        isPlaceholder: false
    },
    {
        id: "ayam-semur",
        name: "Ayam Semur",
        category: "ayam",
        description: "Ayam semur kecap manis dengan rempah hangat dan cita rasa rumahan.",
        price: 7000,
        image: "assets/images/menu/ayam semur.jpg",
        alt: "Ayam semur kecap",
        isPlaceholder: false
    },
    {
        id: "ayam-rica-rica",
        name: "Ayam Rica-Rica",
        category: "ayam",
        description: "Ayam berbumbu rica-rica pedas khas Manado dengan aroma daun jeruk.",
        price: 7000,
        image: "assets/images/menu/ayam rica rica.avif",
        alt: "Ayam rica-rica pedas",
        isPlaceholder: false
    },
    {
        id: "ayam-gulai",
        name: "Ayam Gulai",
        category: "ayam",
        description: "Ayam gulai santan kuning dengan kuah gurih dan rempah yang kaya.",
        price: 7000,
        image: "assets/images/menu/gulai-padang.jpg",
        alt: "Ayam gulai kuah santan",
        isPlaceholder: false
    },
    {
        id: "ikan-nila-goreng",
        name: "Ikan Nila Goreng",
        category: "nila",
        description: "Ikan nila goreng renyah dengan bumbu rempah, disajikan hangat.",
        price: 9000,
        image: "assets/images/menu/nila goreng.jpg",
        alt: "Ikan nila goreng renyah",
        isPlaceholder: false
    },
    {
        id: "ikan-nila-gulai",
        name: "Ikan Nila Gulai",
        category: "nila",
        description: "Ikan nila dalam kuah gulai santan kuning yang gurih dan berempah.",
        price: 9000,
        image: "assets/images/menu/nila gulai.webp",
        alt: "Ikan nila gulai",
        isPlaceholder: false
    },
    {
        id: "ikan-nila-acar",
        name: "Ikan Nila Acar",
        category: "nila",
        description: "Ikan nila dengan acar sayur segar, perpaduan asam manis yang pas.",
        price: 9000,
        image: "assets/images/menu/ikan-nila-acar.jpeg",
        alt: "Ikan nila acar",
        isPlaceholder: false
    },
    {
        id: "ikan-lele-goreng",
        name: "Ikan Lele Goreng",
        category: "lele",
        description: "Lele goreng renyah dengan bumbu kunyit, ketumbar, dan garam.",
        price: 7000,
        image: "assets/images/menu/lele goreng.jpg",
        alt: "Ikan lele goreng",
        isPlaceholder: false
    },
    {
        id: "ikan-lele-cabe-ijo",
        name: "Ikan Lele Cabe Ijo",
        category: "lele",
        description: "Lele goreng disiram sambal cabe ijo segar yang pedas dan harum.",
        price: 7000,
        image: "assets/images/menu/lele cabe ijo.jpg",
        alt: "Ikan lele dengan sambal cabe ijo",
        isPlaceholder: false
    },
    {
        id: "tauco-kikil",
        name: "Tauco Kikil",
        category: "lainnya",
        description: "Kikil empuk dimasak tauco dengan rasa gurih, asin, dan sedikit manis.",
        price: 5000,
        image: "assets/images/menu/tauco-kikil.jpeg",
        alt: "Tauco kikil",
        isPlaceholder: false
    },
    {
        id: "tempe-bacem",
        name: "Tempe Bacem",
        category: "lainnya",
        description: "Tempe bacem manis gurih dengan bumbu kecap dan rempah tradisional.",
        price: 5000,
        image: "assets/images/menu/tempe-bacem.jpeg",
        alt: "Tempe bacem",
        isPlaceholder: false
    },
    {
        id: "tauco",
        name: "Tauco",
        category: "lainnya",
        description: "Sambal tauco khas rumahan dengan rasa gurih dan aroma kedelai khas.",
        price: 5000,
        image: "assets/images/menu/tauco.jpeg",
        alt: "Sambal tauco",
        isPlaceholder: false
    },
    {
        id: "nasi-uduk",
        name: "Nasi Uduk",
        category: "nasi",
        description: "Nasi uduk harum dengan santan, daun salam, dan rempah pilihan.",
        price: 11000,
        image: "assets/images/menu/nasi uduk.webp",
        alt: "Nasi uduk harum",
        isPlaceholder: false
    },
    {
        id: "lontong",
        name: "Lontong",
        category: "nasi",
        description: "Lontong padat disajikan hangat, cocok dipadukan dengan gulai atau sambal.",
        price: 11000,
        image: "assets/images/menu/lontong.jpg",
        alt: "Lontong",
        isPlaceholder: false
    },
    {
        id: "telur-bulat-sambal",
        name: "Telur Bulat Sambal",
        category: "telur",
        description: "Telur bulat dengan sambal pedas manis yang khas dan menggugah selera.",
        price: 4000,
        image: "assets/images/menu/telur sambal.jpeg",
        alt: "Telur bulat dengan sambal",
        isPlaceholder: false
    },
    {
        id: "telur-semur",
        name: "Telur Semur",
        category: "telur",
        description: "Telur rebus masak semur kecap dengan bumbu rempah yang hangat.",
        price: 4000,
        image: "assets/images/menu/telur semur.avif",
        alt: "Telur semur",
        isPlaceholder: false
    },
    {
        id: "telur-rendang",
        name: "Telur Rendang",
        category: "telur",
        description: "Telur rendang dengan bumbu kaya rempah dan kuah santan kental.",
        price: 4000,
        image: "assets/images/menu/telur-rendang.jpeg",
        alt: "Telur rendang",
        isPlaceholder: false
    },
    {
        id: "telur-gulai",
        name: "Telur Gulai",
        category: "telur",
        description: "Telur gulai santan kuning dengan cita rasa gurih dan hangat.",
        price: 4000,
        image: "assets/images/menu/telur gulai.jpg",
        alt: "Telur gulai",
        isPlaceholder: false
    },
    {
        id: "sambal-udang-saus-tiram",
        name: "Sambal Udang Saus Tiram",
        category: "sambal-seafood",
        description: "Udang segar dengan sambal saus tiram yang gurih, pedas, dan manis.",
        price: 15000,
        image: "assets/images/menu/sambal-udang-saus-tiram.jpeg",
        alt: "Sambal udang saus tiram",
        isPlaceholder: false
    },
    {
        id: "ikan-tongkol-asam-padeh",
        name: "Ikan Tongkol Asam Padeh",
        category: "sambal-seafood",
        description: "Ikan tongkol dalam kuah asam pedas khas Minang yang segar dan berempah.",
        price: 9000,
        image: "assets/images/menu/tongkol-asam-padeh.jpg",
        alt: "Ikan tongkol asam padeh",
        isPlaceholder: false
    },
    {
        id: "sambal-teri-kacang-tanah",
        name: "Sambal Teri Kacang Tanah",
        category: "sambal-seafood",
        description: "Teri goreng dan kacang tanah dibalut sambal cabai yang renyah.",
        price: 5000,
        image: "assets/images/menu/sambal-teri-kacang-tanah.jpeg",
        alt: "Sambal teri kacang tanah",
        isPlaceholder: false
    },
    {
        id: "ikan-dencis-sambal",
        name: "Ikan Dencis Sambal",
        category: "sambal-seafood",
        description: "Ikan dencis goreng dengan sambal terasi pedas khas rumahan.",
        price: 7000,
        image: "assets/images/menu/dencis-sambal.jpeg",
        alt: "Ikan dencis dengan sambal",
        isPlaceholder: false
    },
    {
        id: "ikan-dencis-tauco",
        name: "Ikan Dencis Tauco",
        category: "sambal-seafood",
        description: "Ikan dencis dimasak tauco dengan rasa gurih dan aroma khas kedelai.",
        price: 7000,
        image: "assets/images/menu/dencis-tauco.jpg",
        alt: "Ikan dencis tauco",
        isPlaceholder: false
    }
];

const dom = {};

// Tahap 4: kategori yang sedang aktif
let activeCategory = "all";

// Tahap 5: penanda waktu toast notifikasi
let toastTimer = null;

function cacheDom() {
    dom.siteHeader = document.getElementById("siteHeader");
    dom.navToggle = document.getElementById("navToggle");
    dom.navMenu = document.getElementById("navMenu");
    dom.navLinks = document.querySelectorAll(".nav-link, .nav-cta");
    dom.menuCount = document.getElementById("menuCount");
    dom.categoryTabs = document.getElementById("categoryTabs");
    dom.menuGrid = document.getElementById("menuGrid");
    dom.searchInput = document.getElementById("searchInput");
    dom.clearSearch = document.getElementById("clearSearch");
    dom.resultCount = document.getElementById("resultCount");
    dom.emptyState = document.getElementById("emptyState");
    dom.whatsappToast = document.getElementById("whatsappToast");
    dom.footerWhatsappButton = document.getElementById("footerWhatsappButton");
    dom.footerWhatsappLabel = document.getElementById("footerWhatsappLabel");
    dom.footerAddress = document.getElementById("footerAddress");
    dom.footerHours = document.getElementById("footerHours");
    dom.contactMap = document.getElementById("contactMap");
    dom.contactMapLink = document.getElementById("contactMapLink");
    dom.contactQr = document.getElementById("contactQr");
    dom.contactAddress = document.getElementById("contactAddress");
    dom.contactHours = document.getElementById("contactHours");
    dom.contactWhatsapp = document.getElementById("contactWhatsapp");
    dom.contactWhatsappButton = document.getElementById("contactWhatsappButton");
    dom.currentYear = document.getElementById("currentYear");
}

// Membuka atau menutup menu hamburger sekaligus menyinkronkan atribut aksesibilitas
function setMobileMenu(isOpen) {
    if (!dom.navToggle || !dom.navMenu) return;

    dom.navMenu.classList.toggle("is-open", isOpen);
    dom.navToggle.setAttribute("aria-expanded", String(isOpen));
    dom.navToggle.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
}

function closeMobileMenu() {
    setMobileMenu(false);
}

// Navbar mendapat bayangan halus setelah halaman digulir
function updateHeaderState() {
    if (!dom.siteHeader) return;
    dom.siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
}

function initNavbar() {
    if (!dom.navToggle || !dom.navMenu) return;

    dom.navToggle.addEventListener("click", () => {
        const isOpen = dom.navToggle.getAttribute("aria-expanded") === "true";
        setMobileMenu(!isOpen);
    });

    dom.navLinks.forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("click", (event) => {
        const clickedInsideNav = dom.navMenu.contains(event.target) || dom.navToggle.contains(event.target);
        if (!clickedInsideNav) closeMobileMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 992) closeMobileMenu();
    });

    window.addEventListener("scroll", updateHeaderState, { passive: true });
    updateHeaderState();
}

// Format harga tampilan, misalnya 30000 menjadi Rp 30.000
function formatPrice(price) {
    return `Rp ${price.toLocaleString("id-ID")}`;
}

function getCategoryLabel(categoryId) {
    const category = CATEGORIES.find((item) => item.id === categoryId);
    return category ? category.label : categoryId;
}

// Tahap 3: tombol kategori dibuat dari data agar tidak ditulis berulang di HTML
function renderCategories() {
    if (!dom.categoryTabs) return;

    dom.categoryTabs.innerHTML = CATEGORIES.map((category, index) => `
        <button class="category-tab${index === 0 ? " is-active" : ""}"
                type="button"
                data-category="${category.id}"
                aria-pressed="${index === 0}">
            <i class="bi ${category.icon}" aria-hidden="true"></i>
            <span>${category.label}</span>
        </button>
    `).join("");
}

// Tahap 4: menyamakan huruf dan aksara agar pencarian lebih fleksibel
function normalizeText(value) {
    return value
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Tahap 4: menggabungkan-filter kategori dan kata kunci pencarian
function getFilteredMenu() {
    const query = normalizeText(dom.searchInput ? dom.searchInput.value : "");

    return MENU_ITEMS.filter((item) => {
        const matchCategory = activeCategory === "all" || item.category === activeCategory;
        const matchSearch = normalizeText(item.name).includes(query);
        return matchCategory && matchSearch;
    });
}

function updateResultCount(count) {
    if (!dom.resultCount) return;
    dom.resultCount.textContent = `Menampilkan ${count} dari ${MENU_ITEMS.length} menu`;
}

// Tahap 4: tombol kategori aktif ikut berubah saat dipilih
function setActiveCategory(categoryId) {
    activeCategory = categoryId;

    if (dom.categoryTabs) {
        dom.categoryTabs.querySelectorAll(".category-tab").forEach((tab) => {
            const isActive = tab.dataset.category === categoryId;
            tab.classList.toggle("is-active", isActive);
            tab.setAttribute("aria-pressed", String(isActive));
        });
    }

    updateMenu();
}

// Tahap 4: memasang event untuk kategori, pencarian, dan tombol hapus
function initMenuFilters() {
    if (dom.categoryTabs) {
        dom.categoryTabs.addEventListener("click", (event) => {
            const button = event.target.closest(".category-tab");
            if (!button) return;
            setActiveCategory(button.dataset.category);
        });
    }

    if (dom.searchInput) {
        dom.searchInput.addEventListener("input", updateMenu);
    }

    if (dom.clearSearch) {
        dom.clearSearch.addEventListener("click", () => {
            if (!dom.searchInput) return;
            dom.searchInput.value = "";
            updateMenu();
            dom.searchInput.focus();
        });
    }
}

// Tahap 3: satu kartu menu dibuat otomatis untuk setiap item
function createMenuCard(item) {
    const photoNote = item.isPlaceholder
        ? '<span class="photo-note">Foto contoh</span>'
        : "";

    return `
        <article class="menu-card">
            <div class="menu-card-media">
                <img class="menu-img"
                     src="${item.image}"
                     alt="${item.alt}"
                     width="640"
                     height="480"
                     loading="lazy"
                     data-fallback="${FALLBACK_IMAGE}">
                ${photoNote}
            </div>
            <div class="menu-card-body">
                <span class="category-badge badge-${item.category}">${getCategoryLabel(item.category)}</span>
                <h3 class="menu-title">${item.name}</h3>
                <p class="menu-description">${item.description}</p>
                <div class="menu-card-footer">
                    <span class="menu-price">${formatPrice(item.price)}</span>
                    <button class="btn btn-primary btn-order"
                            type="button"
                            data-menu-id="${item.id}"
                            aria-label="Pesan ${item.name}">
                        <i class="bi bi-whatsapp" aria-hidden="true"></i>
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Jika foto asli gagal dimuat, gambar diganti placeholder lokal
function initImageFallbacks() {
    if (!dom.menuGrid) return;

    dom.menuGrid.querySelectorAll(".menu-img").forEach((image) => {
        image.addEventListener("error", () => {
            if (image.dataset.fallbackApplied) return;
            image.dataset.fallbackApplied = "true";
            image.src = image.dataset.fallback || FALLBACK_IMAGE;
        }, { once: true });
    });
}

function renderMenu(items = MENU_ITEMS) {
    if (!dom.menuGrid) return;

    dom.menuGrid.innerHTML = items.map(createMenuCard).join("");
    initImageFallbacks();

    if (dom.emptyState) {
        dom.emptyState.hidden = items.length !== 0;
    }
}

// Tahap 4: satu fungsi untuk menyegarkan katalog setelah filter atau pencarian berubah
function updateMenu() {
    const filteredMenu = getFilteredMenu();

    renderMenu(filteredMenu);
    updateResultCount(filteredMenu.length);

    if (dom.clearSearch && dom.searchInput) {
        dom.clearSearch.hidden = dom.searchInput.value.length === 0;
    }
}

// Jumlah menu di hero diambil langsung dari data, bukan angka statis
function updateMenuCount() {
    if (!dom.menuCount) return;
    dom.menuCount.textContent = new Intl.NumberFormat("id-ID").format(MENU_ITEMS.length);
}

// Tahap 5: nomor dibersihkan dari spasi atau tanda baca yang tidak diperlukan
function normalizeWhatsAppNumber(number = WHATSAPP_NUMBER) {
    return String(number).replace(/\D/g, "");
}

// Format yang diterima: 628 diikuti 8 sampai 12 digit angka
function isValidWhatsAppNumber(number = WHATSAPP_NUMBER) {
    return /^628\d{8,12}$/.test(normalizeWhatsAppNumber(number));
}

// Pesan pemesanan otomatis berisi sapaan, nama menu, dan harga
function buildOrderMessage(menu) {
    return [
        "Halo Bu Eni,",
        "",
        "Saya ingin memesan:",
        `Nama menu: ${menu.name}`,
        `Harga: ${formatPrice(menu.price)}`,
        "",
        "Mohon info ketersediaannya. Terima kasih."
    ].join("\n");
}

// Pesan umum untuk tombol Hubungi Kami pada tahap berikutnya
function buildContactMessage() {
    return [
        "Halo Bu Eni,",
        "",
        "Saya ingin bertanya tentang menu dan cara pemesanan di Warung Nasi Bu Eni.",
        "Terima kasih."
    ].join("\n");
}

function createWhatsAppUrl(message, number = WHATSAPP_NUMBER) {
    const cleanNumber = normalizeWhatsAppNumber(number);
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

// Notifikasi ringan ketika nomor WhatsApp masih placeholder
function showToast(message) {
    if (!dom.whatsappToast) {
        window.alert(message);
        return;
    }

    dom.whatsappToast.textContent = message;
    dom.whatsappToast.classList.add("is-visible");

    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
        dom.whatsappToast.classList.remove("is-visible");
    }, 4000);
}

// Membuka WhatsApp. Jika nomor belum diatur, tombol tetap merespons lewat toast.
function openWhatsApp(message) {
    if (!isValidWhatsAppNumber()) {
        showToast("Nomor WhatsApp belum diatur. Silakan ganti WHATSAPP_NUMBER di js/script.js dengan format 628xxxxxxxxxx.");
        return false;
    }

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    return true;
}

// Tahap 5: event delegation agar tombol tetap bekerja setelah kartu di-render ulang
function initOrderButtons() {
    if (!dom.menuGrid) return;

    dom.menuGrid.addEventListener("click", (event) => {
        const button = event.target.closest(".btn-order");
        if (!button) return;

        const menu = MENU_ITEMS.find((item) => item.id === button.dataset.menuId);
        if (!menu) return;

        openWhatsApp(buildOrderMessage(menu));
    });
}

function initContact() {
    const mapsQuery = CONTACT.mapsQuery || CONTACT.address;
    const encodedQuery = encodeURIComponent(mapsQuery);
    const embedUrl = CONTACT.mapsEmbedUrl || `https://www.google.com/maps?q=${encodedQuery}&z=14&output=embed`;
    const mapsUrl = CONTACT.mapsLinkUrl || `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

    if (dom.contactAddress) dom.contactAddress.textContent = CONTACT.address;
    if (dom.contactHours) dom.contactHours.textContent = CONTACT.hours;
    if (dom.contactWhatsapp) dom.contactWhatsapp.textContent = CONTACT.whatsapp;
    if (dom.contactMap) dom.contactMap.src = embedUrl;
    if (dom.contactMapLink) dom.contactMapLink.href = mapsUrl;
    if (dom.contactQr && CONTACT.qrImage) dom.contactQr.src = CONTACT.qrImage;

    if (dom.contactWhatsappButton) {
        dom.contactWhatsappButton.addEventListener("click", () => {
            openWhatsApp(buildContactMessage());
        });
    }
}

function initFooter() {
    if (dom.footerWhatsappLabel) dom.footerWhatsappLabel.textContent = CONTACT.whatsapp;
    if (dom.footerAddress) dom.footerAddress.textContent = CONTACT.address;
    if (dom.footerHours) dom.footerHours.textContent = CONTACT.hours;
    if (dom.currentYear) dom.currentYear.textContent = String(new Date().getFullYear());

    if (dom.footerWhatsappButton) {
        dom.footerWhatsappButton.addEventListener("click", () => {
            openWhatsApp(buildContactMessage());
        });
    }
}

function init() {
    cacheDom();
    initNavbar();
    updateMenuCount();
    renderCategories();
    initMenuFilters();
    initOrderButtons();
    initContact();
    initFooter();
    updateMenu();
}

document.addEventListener("DOMContentLoaded", init);
