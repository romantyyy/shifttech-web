'use strict';

// Nomor WA admin
const ADMIN_NUMBER = '6281236863710'; // Ganti dengan nomor WA Anda

const PRODUCTS = [
    // ShiftTech WiFi Kill Module v1 - Produk asli buatan Anda
    {
        id: 'shifttech-wifi-kill-v1',
        category: 'hardware',
        name: 'ShiftTech WiFi Kill Module v1 - DIY Kit',
        price: 0, // Harga diatur ke 0 untuk internal, tidak ditampilkan
        // ⚠️ PENTING: Gunakan gambar image_3.png yang sudah dipotong dan disimpan di folder 'products/'.
        images: [
            'products/diy_wifi_1.jpg', // View dekat layar/hand
            'products/diy_wifi_2.jpg', // View lengkap held by hand
            'products/diy_wifi_3.jpg'  // View datar datar
        ],
        specs: [
            'ESP8266 Based DIY',
            'OLED Display 1.3"',
            'External High-Gain Antena',
            '5 Programable Buttons',
            '5V USB / LiPo Powered',
            'Breadboard Construction'
        ]
    }
];

const grid = document.getElementById('grid');

// Render produk
function renderProducts(list) {
    grid.innerHTML = '';
    if (list.length === 0) {
        grid.innerHTML = '<div style="color: #ff3366; text-align:center; width:100%; grid-column: 1/-1; padding: 20px;">Produk atau modul tidak ditemukan.</div>';
        return;
    }

    list.forEach(p => {
        const card = document.createElement('article');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = p.images[0];
        img.alt = p.name;
        img.className = 'product-img';
        card.appendChild(img);

        const title = document.createElement('div');
        title.className = 'title';
        title.textContent = p.name;
        card.appendChild(title);

        const specs = document.createElement('div');
        specs.className = 'specs';
        specs.textContent = p.specs.slice(0, 3).join(' · '); // Hanya tampilkan 3 spek awal
        card.appendChild(specs);

        const btnWrap = document.createElement('div');
        btnWrap.className = 'btn-wrap';

        const detailBtn = document.createElement('button');
        detailBtn.className = 'btn secondary';
        detailBtn.textContent = 'Detail Modul';
        detailBtn.onclick = () => openModal(p);
        btnWrap.appendChild(detailBtn);

        const waLink = document.createElement('a');
        waLink.className = 'btn';
        // Teks tombol diperbarui
        waLink.textContent = 'Tanya WA';
        waLink.href = makeWAUrl(p.name, 'saya tertarik untuk menanyakan harga dan memesan modul');
        waLink.target = '_blank';
        waLink.rel = 'noopener noreferrer';
        btnWrap.appendChild(waLink);

        card.appendChild(btnWrap);
        grid.appendChild(card);
    });
}

// Modal Detail Produk
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('closeBtn');

function openModal(p) {
    modalContent.innerHTML = ''; // Hapus konten sebelumnya

    const h3 = document.createElement('h3');
    h3.textContent = p.name;
    modalContent.appendChild(h3);

    // Render Gambar
    const img = document.createElement('img');
    img.src = p.images[0];
    img.alt = p.name;
    modalContent.appendChild(img);

    const specsLabel = document.createElement('strong');
    specsLabel.textContent = 'Fitur & Spesifikasi Teknis:';
    modalContent.appendChild(specsLabel);

    const specsList = document.createElement('p');
    specsList.className = 'specs';
    specsList.innerHTML = p.specs.join(', '); // Gabungkan semua spek
    modalContent.appendChild(specsList);

    const buyLink = document.createElement('a');
    buyLink.className = 'btn';
    buyLink.style.width = '100%'; // Lebarkan tombol di modal
    buyLink.textContent = 'Konsultasi & Order via WA';
    buyLink.href = makeWAUrl(p.name, 'konsultasi & order');
    buyLink.target = '_blank';
    buyLink.rel = 'noopener noreferrer';
    modalContent.appendChild(buyLink);

    modal.classList.add('open');
}

// Close Modal
closeBtn.onclick = () => modal.classList.remove('open');
modal.onclick = e => { if (e.target === modal) modal.classList.remove('open'); };

// Buat WA URL
function makeWAUrl(product, message) {
    const text = encodeURIComponent(`Halo ShiftTech Cyber Store, saya ingin ${message}: ${product}`);
    return `https://wa.me/${ADMIN_NUMBER}?text=${text}`;
}

// Atur WA link default di floating button
document.getElementById('waLink').href = makeWAUrl('Konsultasi DIY Module', 'konsultasi');

// Search & Sanitize
const search = document.getElementById('search');
search.addEventListener('input', () => {
    const rawInput = search.value;
    const cleanInput = sanitize(rawInput);
    if (cleanInput !== rawInput) search.value = cleanInput;

    const filtered = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(cleanInput.toLowerCase()) ||
        p.specs.join(' ').toLowerCase().includes(cleanInput.toLowerCase())
    );
    renderProducts(filtered);
});

function sanitize(s) {
    return s.replace(/[^\w\s.\-]/g, '').slice(0, 60);
}

// Startup
renderProducts(PRODUCTS);

// Category Menu
document.querySelectorAll('.menu a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        // Atur menu aktif
        document.querySelectorAll('.menu a').forEach(el => el.classList.remove('active'));
        a.classList.add('active');

        const cat = a.dataset.category;
        const filtered = (cat === 'all') ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
        renderProducts(filtered);
    });
});
