// Placeholder gambar (SVG). Ganti dengan file asli di folder assets/ kapan saja.
function PH(label){
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' width='640' height='400'><rect width='100%' height='100%' fill='#2d9cdb' opacity='.18'/><text x='50%' y='50%' fill='#2d9cdb' font-family='sans-serif' font-size='34' font-weight='700' text-anchor='middle' dominant-baseline='middle'>${label}</text></svg>`;
  return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg);
}
document.querySelectorAll('img[data-ph]').forEach(i=>{i.onerror=()=>{i.onerror=null;i.src=PH(i.dataset.ph)}; if(i.complete&&!i.naturalWidth)i.onerror()});
const av=document.querySelector('.avatar'); if(av.complete&&!av.naturalWidth)av.onerror();

// ===== Galeri foto (ganti judul & nama file di sini) =====
const G={
  kicad:[
  {src:'assets/kicad1', title:'Skematik 3D Monitoring server Telkomsat'},
  {src:'assets/kicad2', title:'Skematik Monitoring server Telkomsat'}
  ],
  tinkercad:[{src:'assets/tinkercad1',title:'Desain Monitoring Server Telkomsat'}],
  iot:[
  {src:'assets/iot1', title:'PLC trainer Divisi wiring'},
  {src:'assets/iot2', title:'Prototype Fire Alarm Detector Prima Jaya Elektronik'},
  {src:'assets/iot3', title:'Project Kuliah Solar Panel Divisi Programming'},
  {src:'assets/iot4', title:'Prototype Monitoring Server'},
  {src:'assets/iot5', title:'Project kuliah Solar panel'}
]
};

// Teks multi-bahasa
const T={
id:{nav_about:'Tentang',nav_skills:'Skill',nav_projects:'Proyek',nav_exp:'Pengalaman',nav_contact:'Kontak',welcome:'Selamat datang di portfolio saya',iam:'Saya',see_projects:'Lihat Proyek',contact_me:'Hubungi Saya',about:'Tentang Saya',
about_text:'Nama saya Asyahdan Amrullah, lulusan Sekolah Vokasi IPB Program Studi Teknologi Rekayasa Komputer. Saya memiliki minat di bidang jaringan komputer, Internet of Things (IoT), robotika, dan Artificial Intelligence (AI), khususnya AI Agent dan Large Language Models (LLM). Saya tertarik mengeksplorasi perkembangan teknologi dan mengembangkan solusi inovatif. Memiliki kemampuan bekerja secara mandiri maupun dalam tim, serta semangat untuk terus belajar, mengembangkan keterampilan, dan memperoleh pengalaman profesional di bidang teknologi.',
cv_id:'Unduh CV (Indonesia)',cv_en:'Unduh CV (Inggris)',skills:'Skill',skills_intro:'Saat berkuliah di Sekolah Vokasi IPB, saya telah mempelajari beberapa skill berikut:',
s1_t:'Skematik di KiCad',s1_d:'Mengimplementasikan skematik rangkaian elektronik pada aplikasi KiCad.',s2_t:'Desain 3D di Tinkercad',s2_d:'Membuat desain 3D pada Tinkercad.',s3_t:'Proyek IoT',s3_d:'Membuat proyek IoT skala kecil hingga besar, baik dalam tim maupun individu.',
projects:'Proyek',p1_t:'Monitoring Suhu Gudang',p1_d:'Sistem pemantauan suhu gudang berbasis IoT dengan sensor inframerah, data real-time ke Firebase, dan notifikasi otomatis lewat Telegram.',p2_t:'Monitoring Server IoT',p2_d:'Perancangan skematik dengan Fritzing dan perakitan perangkat untuk sistem monitoring server berbasis IoT (Telkomsat).',p3_t:'Insta Designer',p3_d:'Web statis untuk mendesain postingan Instagram.',p4_t:'Local RAG Chat',p4_d:'Asisten tanya-jawab dokumen yang berjalan sepenuhnya offline di laptop sendiri, dibuat dengan Ollama, ChromaDB, dan Streamlit. Mendukung bahasa Indonesia dan Inggris.',
exp:'Pengalaman',e2:'Berkontribusi pada proyek sistem monitoring server berbasis IoT: perancangan skematik dengan Fritzing dan perakitan alat sesuai skematik.',e1:'Membangun sistem pemantauan suhu gudang berbasis IoT dan mendukung tim HRD dalam administrasi, pengarsipan dokumen, dan rekap data.',e0:'Program Studi Teknologi Rekayasa Komputer.',
contact:'Kontak',contact_text:'Tertarik berkolaborasi atau ingin berdiskusi? Hubungi saya lewat:',roles:['Fresh Graduate IoT Engineer','Penggemar AI Agent & LLM','Pembuat Proyek IoT']},
en:{nav_about:'About',nav_skills:'Skills',nav_projects:'Projects',nav_exp:'Experience',nav_contact:'Contact',welcome:'Welcome to my portfolio',iam:"I'm",see_projects:'View Projects',contact_me:'Contact Me',about:'About Me',
about_text:'My name is Asyahdan Amrullah, a graduate of IPB Vocational School with a degree in Computer Engineering Technology. I am interested in computer networking, the Internet of Things (IoT), robotics, and Artificial Intelligence (AI), particularly AI Agents and Large Language Models (LLMs). I enjoy exploring technological developments and building innovative solutions. I can work both independently and in a team, and I am eager to keep learning, develop my skills, and gain professional experience in the technology field.',
cv_id:'Download CV (Indonesian)',cv_en:'Download CV (English)',skills:'Skills',skills_intro:'During my studies at IPB Vocational School, I learned the following skills:',
s1_t:'Schematics in KiCad',s1_d:'Implementing electronic circuit schematics in KiCad.',s2_t:'3D Design in Tinkercad',s2_d:'Creating 3D designs in Tinkercad.',s3_t:'IoT Projects',s3_d:'Building IoT projects from small to large scale, both in teams and individually.',
projects:'Projects',p1_t:'Warehouse Temperature Monitor',p1_d:'IoT-based warehouse temperature monitoring with infrared sensors, real-time data to Firebase, and automatic Telegram notifications.',p2_t:'IoT Server Monitoring',p2_d:'Schematic design with Fritzing and device assembly for an IoT-based server monitoring system (Telkomsat).',p3_t:'Insta Designer',p3_d:'A static web app for designing Instagram posts.',p4_t:'Local RAG Chat',p4_d:'A document Q&A assistant that runs fully offline on your own laptop, built with Ollama, ChromaDB, and Streamlit. Supports Indonesian and English.',
exp:'Experience',e2:'Contributed to an IoT-based server monitoring project: schematic design with Fritzing and assembling the device according to the schematic.',e1:'Built an IoT-based warehouse temperature monitoring system and supported the HR team with administration, document filing, and data recapitulation.',e0:'Computer Engineering Technology study program.',
contact:'Contact',contact_text:'Interested in collaborating or just want to chat? Reach me via:',roles:['Fresh Graduate IoT Engineer','AI Agent & LLM Enthusiast','IoT Project Builder']}};
let lang='id';try{lang=localStorage.getItem('lang')||'id'}catch(e){}
let typer=0;
function setLang(l){
  lang=l;try{localStorage.setItem('lang',l)}catch(e){}
  document.documentElement.lang=l;
  document.querySelectorAll('[data-i18n]').forEach(e=>{const v=T[l][e.dataset.i18n];if(v)e.textContent=v});
  document.getElementById('lang').textContent=l==='id'?'EN':'ID';
  startTyping();
}
// Efek mengetik
function startTyping(){
  clearTimeout(typer);const el=document.getElementById('typed');const roles=T[lang].roles;let r=0,c=0,del=false;
  (function tick(){
    const w=roles[r];el.textContent=w.slice(0,c);
    if(!del&&c===w.length){del=true;typer=setTimeout(tick,1600);return}
    if(del&&c===0){del=false;r=(r+1)%roles.length}
    c+=del?-1:1;typer=setTimeout(tick,del?35:70);
  })();
}
document.getElementById('lang').onclick=()=>setLang(lang==='id'?'en':'id');
// Tema gelap/terang
const root=document.documentElement,tb=document.getElementById('theme');
const isDark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
const paint=()=>tb.textContent=isDark()?'☀':'☾';paint();
tb.onclick=()=>{const t=isDark()?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}paint()};
// Menu mobile
const menu=document.getElementById('menu');
document.getElementById('burger').onclick=()=>menu.classList.toggle('open');
menu.onclick=e=>{if(e.target.tagName==='A')menu.classList.remove('open')};
// Animasi muncul saat scroll + menu aktif
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(s=>io.observe(s));
const links=[...menu.querySelectorAll('a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section').forEach(s=>so.observe(s));
document.getElementById('year').textContent=new Date().getFullYear();
setLang(lang);

// ===== Lightbox =====
const lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');
lb.innerHTML='<div class="lb-top"><span class="lb-count"></span><button class="lb-close" aria-label="Tutup">✕</button></div><div class="lb-track"></div><button class="lb-prev" aria-label="Sebelumnya">‹</button><button class="lb-next" aria-label="Berikutnya">›</button>';
document.body.appendChild(lb);
const track=lb.querySelector('.lb-track'),count=lb.querySelector('.lb-count');
let total=0,wheelLock=false;
const cur=()=>Math.round(track.scrollLeft/track.clientWidth);
const upd=()=>count.textContent=(cur()+1)+' / '+total;
const go=d=>track.scrollBy({left:d*track.clientWidth,behavior:'smooth'});
// Coba ekstensi otomatis (jpg, jpeg, png, webp) kalau nama file tanpa ekstensi
const EXT=['jpg','jpeg','png','webp','JPG','JPEG','PNG','WEBP'];
function loadImg(im,base,title){
  const fail=()=>{im.onerror=null;im.src=PH(title)};
  if(/\.\w+$/.test(base)){im.onerror=fail;im.src=base;return}
  let i=0;im.onerror=()=>{i++;i<EXT.length?im.src=base+'.'+EXT[i]:fail()};
  im.src=base+'.'+EXT[0];
}
function openLB(items,start){
  track.innerHTML='';total=items.length;lb.classList.toggle('single',total<2);
  items.forEach(it=>{
    const f=document.createElement('figure');f.className='lb-slide';
    const im=document.createElement('img');im.alt=it.title;
    loadImg(im,it.src,it.title);
    const cap=document.createElement('figcaption');cap.textContent=it.title;
    f.append(im,cap);track.appendChild(f);
  });
  lb.classList.add('open');document.body.style.overflow='hidden';
  track.style.scrollBehavior='auto';track.scrollLeft=start*track.clientWidth;track.style.scrollBehavior='';
  upd();lb.querySelector('.lb-close').focus();
}
function closeLB(){lb.classList.remove('open');document.body.style.overflow=''}
track.addEventListener('scroll',upd);
track.addEventListener('wheel',e=>{ // roda mouse vertikal -> geser ke samping
  if(total<2||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;
  e.preventDefault();if(wheelLock)return;wheelLock=true;go(e.deltaY>0?1:-1);setTimeout(()=>wheelLock=false,450);
},{passive:false});
lb.querySelector('.lb-close').onclick=closeLB;
lb.querySelector('.lb-prev').onclick=()=>go(-1);
lb.querySelector('.lb-next').onclick=()=>go(1);
lb.addEventListener('click',e=>{if(e.target===lb||e.target===track||e.target.classList.contains('lb-slide')||e.target.classList.contains('lb-top'))closeLB()});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')closeLB();if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)});
// Pasang ke semua gambar
document.querySelectorAll('.card img').forEach(img=>{
  const gal=G[img.dataset.gallery];
  const wrap=document.createElement('div');wrap.className='thumb';img.replaceWith(wrap);wrap.appendChild(img);
  if(gal&&gal.length>1){const b=document.createElement('span');b.className='badge';b.textContent='🖼 '+gal.length;wrap.appendChild(b)}
  wrap.onclick=()=>openLB(gal||[{src:img.currentSrc||img.src,title:img.closest('.card').querySelector('h3').textContent}],0);
});
av.onclick=()=>openLB([{src:av.currentSrc||av.src,title:'Asyahdan Amrullah'}],0);
