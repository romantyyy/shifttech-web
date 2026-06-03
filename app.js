'use strict';

// Ambil nomor WA dari atribut HTML supaya tidak terlihat di source JS
const waFab = document.querySelector('.wa-fab');
const ADMIN_NUMBER = waFab.dataset.number || '6281236863710';

const PRODUCTS = [
  // Kategori: Hardware / Gadget Pentesting
  {
    id: 'flipper-zero',
    category: 'hardware',
    name: 'Flipper Zero Multi-tool',
    price: 4500000,
    images: ['https://images.unsplash.com/photo-1657813662474-13dfba615959?auto=format&fit=crop&w=720&q=80'],
    specs: ['Sub-GHz', 'RFID', 'NFC', 'Infrared', 'GPIO Expansion', 'BadUSB Emulation']
  },
  {
    id: 'wifi-deauther',
    category: 'hardware',
    name: 'WiFi Deauther OLED V2 (ESP8266)',
    price: 350000,
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=720&q=80'],
    specs: ['ESP8266 Custom Firmware', 'Deauth Attack', 'Beacon Packet Spammer', 'OLED Display']
  },
  {
    id: 'rubber-ducky',
    category: 'hardware',
    name: 'Hak5 USB Rubber Ducky',
    price: 1850000,
    images: ['https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=720&q=80'],
    specs: ['Keystroke Injection', 'Ducky Script 3.0', 'MicroSD Support', 'High-Speed Emulation']
  },
  {
    id: 'wifi-pineapple',
    category: 'hardware',
    name: 'Hak5 WiFi Pineapple Mark VII',
    price: 4950000,
    images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=720&q=80'],
    specs: ['Rogue AP Automation', 'Man-in-the-Middle (MitM)', '2.4 GHz & 5 GHz Dual Band', 'PineAP Suite']
  },
  {
    id: 'proxmark3',
    category: 'hardware',
    name: 'Proxmark3 Easy Kit RFID Cloner',
    price: 1250000,
    images: ['https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=720&q=80'],
    specs: ['HF (13.56 MHz) Antenna', 'LF (125 kHz) Antenna', 'IC Card Cloning', 'Mifare Crack Support']
  },
  {
    id: 'hackrf-one',
    category: 'hardware',
    name: 'HackRF One SDR Software Defined Radio',
    price: 5400000,
    images: ['https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=720&q=80'],
    specs: ['1 MHz to 6 GHz Operating Freq', 'Half-Duplex Transceiver', 'Up to 20M samples per second', 'SMA Female']
  },
  {
    id: 'lan-turtle',
    category: 'hardware',
    name: 'Hak5 LAN Turtle 3G/4G',
    price: 2100000,
    images: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=720&q=80'],
    specs: ['Covert Systems Administration', 'Remote SSH Access', 'MitM Network Tap', 'USB Ethernet Simulation']
  },
  {
    id: 'bash-bunny',
    category: 'hardware',
    name: 'Hak5 Bash Bunny Core',
    price: 2650000,
    images: ['https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=720&q=80'],
    specs: ['Multi-payload Linux Attack Platform', 'USB Ethernet/Serial/Keyboard', 'Quad-Core Processor']
  },

  // Kategori: Network / Aksesoris Audit Jaringan
  {
    id: 'alfa-awus036ach',
    category: 'network',
    name: 'Alfa AWUS036ACH WiFi Adapter',
    price: 1350000,
    images: ['https://images.unsplash.com/photo-1625316708582-7c38734be31d?auto=format&fit=crop&w=720&q=80'],
    specs: ['Realtek RTL8812AU', 'Packet Injection Support', 'Monitor Mode', 'Dual-Band 2.4GHz/5GHz']
  },
  {
    id: 'tp-link-wn722n',
    category: 'network',
    name: 'TP-Link TL-WN722N v1 (Modified)',
    price: 275000,
    images: ['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=720&q=80'],
    specs: ['Atheros AR9271 Chipset', 'Native Monitor Mode', 'Packet Injection', 'External High Gain Antenna']
  },
  {
    id: 'pluto-sdr',
    category: 'network',
    name: 'Adalm-Pluto SDR Active Learning Module',
    price: 3950000,
    images: ['https://images.unsplash.com/photo-1581092334651-ddf26d9aae9d?auto=format&fit=crop&w=720&q=80'],
    specs: ['325 MHz to 3.8 GHz', 'Full-Duplex RF', 'GNU Radio Compatible', 'MATLAB Simulink Support']
  },

  // Kategori: Software / Lisensi & Lab OSINT
  {
    id: 'maltego-pro',
    category: 'software',
    name: 'Maltego Professional 1-Year License',
    price: 18000000,
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=80'],
    specs: ['Link Analysis', 'OSINT Data Integration', 'Threat Intelligence Graph', 'Unlimited Entities']
  },
  {
    id: 'burp-suite',
    category: 'software',
    name: 'Burp Suite Professional Annual License',
    price: 7490000,
    images: ['https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=720&q=80'],
    specs: ['Advanced Web Vulnerability Scanner', 'Custom Intruder Payloads', 'Intercepting Proxy', 'BApp Extensions']
  },
  {
    id: 'shodan-member',
    category: 'software',
    name: 'Shodan Enterprise API Key Pack',
    price: 5200000,
    images: ['https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=720&q=80'],
    specs: ['IoT Search Engine Access', 'Continuous Network Monitoring', 'Banners & IP Threat Intel', 'Full API Access']
  }
];

// Fungsi format Rupiah
function formatRupiah(n){
  return 'Rp ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

const grid = document.getElementById('grid');

// Render produk
function renderProducts(list){
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = '<div style="color: #ff5555; text-align:center; width:100%; grid-column: 1/-1; padding: 20px;">Alat/Tools tidak ditemukan.</div>';
    return;
  }
  
  list.forEach(p=>{
    const card = document.createElement('article'); 
    card.className = 'card';

    const img = document.createElement('img'); 
    img.src = p.images[0]; 
    img.alt = p.name; 
    img.className = 'product-img'; 
    card.appendChild(img);

    const t = document.createElement('div'); 
    t.className = 'title'; 
    t.textContent = p.name; 
    card.appendChild(t);

    const s = document.createElement('div'); 
    s.className = 'specs'; 
    s.textContent = p.specs.join(' · '); 
    card.appendChild(s);

    const pr = document.createElement('div'); 
    pr.className = 'price'; 
    pr.textContent = formatRupiah(p.price); 
    card.appendChild(pr);

    const btnWrap = document.createElement('div');
    const detail = document.createElement('button'); 
    detail.className = 'btn secondary'; 
    detail.textContent = 'Lihat Detail Spec'; 
    detail.onclick = () => openModal(p);
    btnWrap.appendChild(detail);

    const wa = document.createElement('a'); 
    wa.className = 'btn'; 
    wa.textContent = 'Order via WA'; 
    wa.href = makeWA(p.name); 
    wa.target = '_blank'; 
    wa.rel = 'noopener noreferrer'; 
    btnWrap.appendChild(wa);

    card.appendChild(btnWrap);
    grid.appendChild(card);
  });
}

// Modal
const modal = document.getElementById('modal'),
      modalContent = document.getElementById('modalContent'),
      closeBtn = document.getElementById('closeBtn');
let currentSlide = 0;

function openModal(p){
  modalContent.innerHTML = ''; 
  currentSlide = 0;

  const h = document.createElement('h3'); 
  h.textContent = p.name; 
  modalContent.appendChild(h);

  const imgWrapper = document.createElement('div'); 
  imgWrapper.style.position = 'relative'; 
  imgWrapper.style.textAlign = 'center';

  const img = document.createElement('img'); 
  img.src = p.images[currentSlide]; 
  img.alt = p.name; 
  imgWrapper.appendChild(img);

  if(p.images.length > 1){
    const prev = document.createElement('button'); 
    prev.type = 'button'; 
    prev.textContent = '❮';
    prev.style.position = 'absolute'; 
    prev.style.left = '10px'; 
    prev.style.top = '50%';
    prev.style.transform = 'translateY(-50%)'; 
    prev.style.fontSize = '24px'; 
    prev.style.background = 'rgba(0,0,0,0.3)'; 
    prev.style.color = '#fff';
    prev.style.borderRadius = '50%'; 
    prev.style.width = '36px'; 
    prev.style.height = '36px';
    prev.onclick = e => { e.stopPropagation(); currentSlide = (currentSlide - 1 + p.images.length) % p.images.length; img.src = p.images[currentSlide]; };
    imgWrapper.appendChild(prev);

    const next = document.createElement('button'); 
    next.type = 'button'; 
    next.textContent = '❯';
    next.style.position = 'absolute'; 
    next.style.right = '10px'; 
    next.style.top = '50%';
    next.style.transform = 'translateY(-50%)'; 
    next.style.fontSize = '24px'; 
    next.style.background = 'rgba(0,0,0,0.3)'; 
    next.style.color = '#fff'; 
    next.style.borderRadius = '50%'; 
    next.style.width = '36px'; 
    next.style.height = '36px'; 
    next.onclick = e => { e.stopPropagation(); currentSlide = (currentSlide + 1) % p.images.length; img.src = p.images[currentSlide]; };
    imgWrapper.appendChild(next);
  }

  modalContent.appendChild(imgWrapper);

  const sp = document.createElement('p'); 
  sp.className = 'specs'; 
  sp.textContent = 'Fitur & Spesifikasi Teknis: ' + p.specs.join(', '); 
  modalContent.appendChild(sp);

  const pr = document.createElement('p'); 
  pr.className = 'price'; 
  pr.textContent = formatRupiah(p.price); 
  modalContent.appendChild(pr);

  const buy = document.createElement('a'); 
  buy.className = 'btn'; 
  buy.textContent = 'Konsultasi & Order via WA';
  buy.href = makeWA(p.name); 
  buy.target = '_blank'; 
  buy.rel = 'noopener noreferrer'; 
  modalContent.appendChild(buy);

  modal.classList.add('open');
}

closeBtn.onclick = () => modal.classList.remove('open');
modal.onclick = e => { if(e.target === modal) modal.classList.remove('open'); };

function makeWA(product){
  // Mengubah sapaan teks WA agar sesuai dengan tema Platform Red Team / Cyber Security
  const text = encodeURIComponent(`Halo ShiftTech Cyber Store, saya tertarik untuk memesan/konsultasi perangkat ini: ${product}`);
  return `https://wa.me/${ADMIN_NUMBER}?text=${text}`;
}

document.getElementById('waLink').href = makeWA('Umum');

// Search
const search = document.getElementById('search');
search.addEventListener('input', () => {
  const raw = search.value;
  const clean = sanitize(raw);
  if(clean !== raw) search.value = clean;

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(clean.toLowerCase()) ||
    p.specs.join(' ').toLowerCase().includes(clean.toLowerCase())
  );
  renderProducts(filtered);
});

function sanitize(s){
  return s.replace(/[^\w\s.\-]/g, '').slice(0, 60);
}

renderProducts(PRODUCTS);

// Menu kategori (Hubungkan dengan 'hardware', 'network', atau 'software' di HTML Anda)
document.querySelectorAll('.menu a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const cat = a.dataset.category;
    const filtered = (cat === 'all') ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
    renderProducts(filtered);
  });
});
