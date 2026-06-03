'use strict';

// Gunakan nomor WA admin Anda, simpan di HTML dataset jika untuk produksi.
const ADMIN_NUMBER = '6281236863710'; // Ganti dengan nomor WA Anda

const PRODUCTS = [
    // ShiftTech WiFi Kill Module v1 - Berdasarkan foto Anda
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

// Fungsi format Rupiah (Tetap ada untuk internal, tidak digunakan untuk display harga)
function formatRupiah(n) {
    return 'Rp ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

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

        // Hapus rendering harga
        // const price = document.createElement('div');
        // price.className = 'price';
        // price.textContent = formatRupiah(p.price);
        // card.appendChild(price);

        const btnWrap = document.createElement('div');
        btnWrap.className = 'btn-wrap';

        const detailBtn = document.createElement('button');
        detailBtn.className = 'btn secondary';
        detailBtn.textContent = 'Detail Modul';
        detailBtn.onclick = () => openModal(p);
        btnWrap.appendChild(detailBtn);

        const waLink = document.createElement('a');
        waLink.className = 'btn';
        // Ganti teks tombol menjadi 'Tanya WA'
        waLink.textContent = 'Tanya WA';
        waLink.href = makeWAUrl(p.name, 'saya tertarik untuk menanyakan harga dan memesan modul');
        waLink.target = '_blank';
        waLink.rel = 'noopener noreferrer';
        btnWrap.appendChild(waLink);

        card.appendChild(btnWrap);
        grid.appendChild(card);
    });
}

// ... fungsi modal lainnya tetap sama, tetapi hapus harga di dalamnya ...
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

    // Hapus rendering harga di modal
    // const price = document.createElement('p');
    // price.className = 'price';
    // price.textContent = formatRupiah(p.price);
    // modalContent.appendChild(price);

    const buyLink = document.createElement('a');
    buyLink.className = 'btn';
    buyLink.style.width = '100%'; // Lebarkan tombol di modal
    buyLink.textContent = 'Tanya / Order via WA';
    buyLink.href = makeWAUrl(p.name, 'konsultasi & order');
    buyLink.target = '_blank';
    buyLink.rel = 'noopener noreferrer';
    modalContent.appendChild(buyLink);

    modal.classList.add('open');
}

// ... fungsi lainnya tetap sama ...
