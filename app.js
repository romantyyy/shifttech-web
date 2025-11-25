'use strict';

// Ambil nomor WA dari atribut HTML supaya tidak terlihat di source JS
const waFab = document.querySelector('.wa-fab');
const ADMIN_NUMBER = waFab.dataset.number || '6285728875494';

const PRODUCTS=[
  // Produk lama tetap
  {id:'asus',category:'laptop',name:'ASUS ROG Strix G15',price:12990000,
   images:['assets/asus1.jpg','assets/asus2.jpg','assets/asus3.jpg','assets/asus4.jpg','assets/asus5.jpg','assets/asus6.jpg'],specs:['Intel i5','RTX3050','16GB RAM','512GB SSD']},
  {id:'asus',category:'laptop',name:'Asus VivoBook A516KA-FHD421',price:7500000,
   images:['assets/asusvivo1.jpg','assets/asusvivo2.jpg','assets/asusvivo3.jpg','assets/asusvivo4.jpg'],specs:['Intel i5','Integrated GPU','8GB RAM','512GB SSD']},
  {id:'asus',category:'monitor',name:'AIO ASUS M3400WUAT-BA541T-90PT0351-M01210',price:8990000,
   images:['assets/asuspc1.jpg','assets/asuspc2.jpg','assets/asuspc3.jpg','assets/asuspc4.jpg'],specs:['AMD Ryzen 5-500U','Windows 11 Home','4GB RAM','1TB SSD']},
  {id:'pc',category:'pc',name:'PC Rakitan Gaming',price:16990000,
   images:['assets/pc1.avif','assets/pc2.svg','assets/pc3.svg'],specs:['Ryzen 7','RTX4060','32GB RAM','1TB SSD']},

  // Produk baru 20 item, gambar dari Unsplash / Pixabay aman untuk hotlink
  {id:'laptop1',category:'laptop',name:'Dell XPS 13',price:18990000,
   images:['https://images.unsplash.com/photo-1612832021359-7f121e37db33?auto=format&fit=crop&w=720&q=80'],specs:['Intel i7','16GB RAM','512GB SSD']},
  {id:'laptop2',category:'laptop',name:'HP Spectre x360',price:17490000,
   images:['https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=720&q=80'],specs:['Intel i7','16GB RAM','1TB SSD']},
  {id:'laptop3',category:'laptop',name:'MacBook Air M2',price:20990000,
   images:['https://images.unsplash.com/photo-1640622656271-5e5a2c0c8c53?auto=format&fit=crop&w=720&q=80'],specs:['Apple M2','8GB RAM','512GB SSD']},
  {id:'laptop4',category:'laptop',name:'Lenovo ThinkPad X1',price:16490000,
   images:['https://images.unsplash.com/photo-1587825140504-7f27b45a209f?auto=format&fit=crop&w=720&q=80'],specs:['Intel i7','16GB RAM','1TB SSD']},
  {id:'laptop5',category:'laptop',name:'Acer Swift 3',price:8490000,
   images:['https://images.unsplash.com/photo-1612831455544-7db3fef77685?auto=format&fit=crop&w=720&q=80'],specs:['Intel i5','8GB RAM','512GB SSD']},
  {id:'laptop6',category:'laptop',name:'Asus ZenBook 14',price:12490000,
   images:['https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=720&q=80'],specs:['Intel i7','16GB RAM','512GB SSD']},
  {id:'laptop7',category:'laptop',name:'Microsoft Surface Laptop 4',price:15990000,
   images:['https://images.unsplash.com/photo-1612831664175-5c53b3c6d0ec?auto=format&fit=crop&w=720&q=80'],specs:['Intel i7','16GB RAM','512GB SSD']},
  {id:'laptop8',category:'laptop',name:'Razer Blade 15',price:22490000,
   images:['https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=720&q=80'],specs:['Intel i7','32GB RAM','1TB SSD','RTX3060']},
  {id:'laptop9',category:'laptop',name:'LG Gram 16',price:16990000,
   images:['https://images.unsplash.com/photo-1612831455544-7db3fef77685?auto=format&fit=crop&w=720&q=80'],specs:['Intel i7','16GB RAM','512GB SSD']},
  {id:'laptop10',category:'laptop',name:'Samsung Galaxy Book',price:11490000,
   images:['https://images.unsplash.com/photo-1612832021359-7f121e37db33?auto=format&fit=crop&w=720&q=80'],specs:['Intel i5','8GB RAM','256GB SSD']},

  {id:'pc1',category:'pc',name:'PC Gaming Ryzen 5',price:14990000,
   images:['https://images.unsplash.com/photo-1603781045685-1b7e0e9e3e87?auto=format&fit=crop&w=720&q=80'],specs:['Ryzen 5','RTX3060','16GB RAM','512GB SSD']},
  {id:'pc2',category:'pc',name:'PC Workstation Intel i9',price:24990000,
   images:['https://images.unsplash.com/photo-1603781005685-1b7e0e9e3e87?auto=format&fit=crop&w=720&q=80'],specs:['Intel i9','RTX3080','32GB RAM','1TB SSD']},
  {id:'pc3',category:'pc',name:'PC Mini ITX',price:10990000,
   images:['https://images.unsplash.com/photo-1612831523455-3c53b3c6d0ec?auto=format&fit=crop&w=720&q=80'],specs:['Intel i5','16GB RAM','512GB SSD']},
  {id:'pc4',category:'pc',name:'PC Office Intel i3',price:5990000,
   images:['https://images.unsplash.com/photo-1612831523455-3c53b3c6d0ec?auto=format&fit=crop&w=720&q=80'],specs:['Intel i3','8GB RAM','256GB SSD']},

  {id:'monitor1',category:'monitor',name:'Dell UltraSharp 27"',price:7490000,
   images:['https://images.unsplash.com/photo-1587825140504-7f27b45a209f?auto=format&fit=crop&w=720&q=80'],specs:['27 inch','IPS','4K']},
  {id:'monitor2',category:'monitor',name:'LG 24" Gaming Monitor',price:4290000,
   images:['https://images.unsplash.com/photo-1603781005685-1b7e0e9e3e87?auto=format&fit=crop&w=720&q=80'],specs:['24 inch','144Hz','1080p']},
  {id:'monitor3',category:'monitor',name:'Samsung Curved 32"',price:8990000,
   images:['https://images.unsplash.com/photo-1612831523455-3c53b3c6d0ec?auto=format&fit=crop&w=720&q=80'],specs:['32 inch','Curved','4K']},
  {id:'monitor4',category:'monitor',name:'Asus TUF Gaming 27"',price:6990000,
   images:['https://images.unsplash.com/photo-1612831455544-7db3fef77685?auto=format&fit=crop&w=720&q=80'],specs:['27 inch','144Hz','1080p']},
];

// Fungsi format Rupiah
function formatRupiah(n){
  return 'Rp'+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,'.');
}

const grid=document.getElementById('grid');

// Render produk
function renderProducts(list){
  grid.innerHTML='';
  list.forEach(p=>{
    const card=document.createElement('article'); 
    card.className='card';

    const img=document.createElement('img'); 
    img.src=p.images[0]; 
    img.alt=p.name; 
    img.className='product-img'; 
    card.appendChild(img);

    const t=document.createElement('div'); 
    t.className='title'; 
    t.textContent=p.name; 
    card.appendChild(t);

    const s=document.createElement('div'); 
    s.className='specs'; 
    s.textContent=p.specs.join(' · '); 
    card.appendChild(s);

    const pr=document.createElement('div'); 
    pr.className='price'; 
    pr.textContent=formatRupiah(p.price); 
    card.appendChild(pr);

    const btnWrap=document.createElement('div');
    const detail=document.createElement('button'); 
    detail.className='btn secondary'; 
    detail.textContent='Lihat Detail'; 
    detail.onclick=()=>openModal(p);
    btnWrap.appendChild(detail);

    const wa=document.createElement('a'); 
    wa.className='btn'; 
    wa.textContent='Tanya WA'; 
    wa.href=makeWA(p.name); 
    wa.target='_blank'; 
    wa.rel='noopener noreferrer'; 
    btnWrap.appendChild(wa);

    card.appendChild(btnWrap);
    grid.appendChild(card);
  });
}

// Modal
const modal=document.getElementById('modal'),
      modalContent=document.getElementById('modalContent'),
      closeBtn=document.getElementById('closeBtn');
let currentSlide=0;

function openModal(p){
  modalContent.innerHTML=''; 
  currentSlide=0;

  const h=document.createElement('h3'); 
  h.textContent=p.name; 
  modalContent.appendChild(h);

  const imgWrapper=document.createElement('div'); 
  imgWrapper.style.position='relative'; 
  imgWrapper.style.textAlign='center';

  const img=document.createElement('img'); 
  img.src=p.images[currentSlide]; 
  img.alt=p.name; 
  imgWrapper.appendChild(img);

  if(p.images.length>1){
    const prev=document.createElement('button'); 
    prev.type='button'; 
    prev.textContent='❮';
    prev.style.position='absolute'; 
    prev.style.left='10px'; 
    prev.style.top='50%';
    prev.style.transform='translateY(-50%)'; 
    prev.style.fontSize='24px'; 
    prev.style.background='rgba(0,0,0,0.3)'; 
    prev.style.color='#fff';
    prev.style.borderRadius='50%'; 
    prev.style.width='36px'; 
    prev.style.height='36px';
    prev.onclick=e=>{ e.stopPropagation(); currentSlide=(currentSlide-1+p.images.length)%p.images.length; img.src=p.images[currentSlide]; };
    imgWrapper.appendChild(prev);

    const next=document.createElement('button'); 
    next.type='button'; 
    next.textContent='❯';
    next.style.position='absolute'; 
    next.style.right='10px'; 
    next.style.top='50%';
    next.style.transform='translateY(-50%)'; 
    next.style.fontSize='24px'; 
    next.style.background='rgba(0,0,0,0.3)'; 
    next.style.color='#fff'; 
    next.style.borderRadius='50%'; 
    next.style.width='36px'; 
    next.style.height='36px'; 
    next.onclick=e=>{ e.stopPropagation(); currentSlide=(currentSlide+1)%p.images.length; img.src=p.images[currentSlide]; };
    imgWrapper.appendChild(next);
  }

  modalContent.appendChild(imgWrapper);

  const sp=document.createElement('p'); 
  sp.className='specs'; 
  sp.textContent='Spesifikasi: '+p.specs.join(', '); 
  modalContent.appendChild(sp);

  const pr=document.createElement('p'); 
  pr.className='price'; 
  pr.textContent=formatRupiah(p.price); 
  modalContent.appendChild(pr);

  const buy=document.createElement('a'); 
  buy.className='btn'; 
  buy.textContent='Tanya & Order via WA';
  buy.href=makeWA(p.name); 
  buy.target='_blank'; 
  buy.rel='noopener noreferrer'; 
  modalContent.appendChild(buy);

  modal.classList.add('open');
}

closeBtn.onclick=()=>modal.classList.remove('open');
modal.onclick=e=>{if(e.target===modal) modal.classList.remove('open');};

function makeWA(product){
  const text=encodeURIComponent(`Halo ShifTech, saya mau Order Website: ${product}`);
  return `https://wa.me/${ADMIN_NUMBER}?text=${text}`;
}

document.getElementById('waLink').href=makeWA('');

// Search
const search=document.getElementById('search');
search.addEventListener('input',()=>{
  const raw=search.value;
  const clean=sanitize(raw);
  if(clean!==raw) search.value=clean;

  const filtered=PRODUCTS.filter(p=>
    p.name.toLowerCase().includes(clean.toLowerCase()) ||
    p.specs.join(' ').toLowerCase().includes(clean.toLowerCase())
  );
  renderProducts(filtered);
});

function sanitize(s){
  return s.replace(/[^\w\s.\-]/g,'').slice(0,60);
}

renderProducts(PRODUCTS);

// Menu kategori
document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const cat=a.dataset.category;
    const filtered=(cat==='all')?PRODUCTS:PRODUCTS.filter(p=>p.category===cat);
    renderProducts(filtered);
  });
});
