// NAVIGATION
function showPage(page) {
  const map = { home:'Homepage.html', index:'Homepage.html', modules:'Modules.html', tips:'Tips.html' };
  const dest = map[page];
  if (dest) window.location.href = dest;
}

// STATE
let moduleData = [];

// // LOAD MODULES 
// async function loadModules() {

//   const grid = document.getElementById("all-modules-grid");
//   if (!grid) return;

//   try {
//     const res  = await fetch("/api/modules");
//     const data = await res.json();

//     if (!Array.isArray(data) || data.length === 0) {
//       grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:2rem;">Belum ada modul.</p>';
//       return;
//     }

//     moduleData = data;

//     grid.innerHTML = data.map(m => `
//       <div class="module-card reveal-card" onclick="openModule(${m.id})" style="cursor:pointer;">

//         <div class="module-thumb" style="background:${m.bg || 'linear-gradient(135deg,#0a1628,#0e3d6e)'};position:relative;height:200px;border-radius:16px 16px 0 0;overflow:hidden;">
//           <img
//             src="${m.imageUrl || m.thumbnail || '/Foto/Jona4.jpg'}"
//             alt="${m.title || ''}"
//             style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
//             onerror="this.style.display='none'"
//           >
//           <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.05) 0%,rgba(10,22,40,0.7) 100%);pointer-events:none;"></div>
//         </div>

//         <div class="module-body" style="padding:1.25rem;">
//           <div class="module-title" style="font-weight:700;font-size:1.05rem;margin-bottom:0.5rem;">${m.title || 'Tanpa Judul'}</div>
//           <div class="module-desc" style="font-size:0.875rem;color:var(--text-muted);margin-bottom:1rem;line-height:1.5;">${m.description || ''}</div>
//           <button class="btn-primary" style="font-size:0.82rem;padding:8px 16px;" onclick="event.stopPropagation();openModule(${m.id})">📖 Buka Modul</button>
//         </div>

//       </div>
//     `).join("");

//     // Preview di homepage (2 modul pertama)
//     const homeGrid = document.getElementById('home-modules-preview');
//     if (homeGrid) {
//       homeGrid.innerHTML = data.slice(0, 2).map(m => `
//         <div class="module-card reveal-card" onclick="openModule(${m.id})" style="cursor:pointer;">
//           <div class="module-thumb" style="background:${m.bg || 'linear-gradient(135deg,#0a1628,#0e3d6e)'};position:relative;height:200px;border-radius:16px 16px 0 0;overflow:hidden;">
//             <img src="${m.imageUrl || m.thumbnail || '/Foto/Jona4.jpg'}" alt="${m.title || ''}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" onerror="this.style.display='none'">
//             <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.05) 0%,rgba(10,22,40,0.7) 100%);pointer-events:none;"></div>
//           </div>
//           <div class="module-body" style="padding:1.25rem;">
//             <div class="module-title" style="font-weight:700;font-size:1.05rem;margin-bottom:0.5rem;">${m.title || ''}</div>
//             <div class="module-desc" style="font-size:0.875rem;color:var(--text-muted);margin-bottom:1rem;">${m.description || ''}</div>
//             <button class="btn-primary" style="font-size:0.82rem;padding:8px 16px;">📖 Buka Modul</button>
//           </div>
//         </div>
//       `).join("");
//     }

//     setTimeout(initScrollAnimations, 100);

//   } catch (err) {
//     console.error("ERROR:", err);
//     grid.innerHTML = '<p style="color:red;">Gagal mengambil data modul: ' + err.message + '</p>';
//   }
// }

function renderBlocks(content) {
  if (!content) return '<p style="color:var(--text-muted)">Konten belum tersedia.</p>';

  let blocks;
  try {
    blocks = JSON.parse(content);
    if (!Array.isArray(blocks)) throw new Error();
  } catch(e) {
    // Bukan JSON — tampilkan langsung sebagai HTML (data lama)
    return content;
  }

  return blocks.map(b => {
    switch(b.type) {

      case 'heading':
        return `<h3 style="
          font-family:'Syne',sans-serif;
          font-size:1.1rem;
          font-weight:700;
          color:var(--ocean-light);
          margin:1.75rem 0 0.6rem;
          padding-bottom:0.4rem;
          border-bottom:1px solid rgba(56,189,248,0.15);
        ">${b.text||''}</h3>`;

      case 'paragraph':
        return `<p style="
          line-height:1.8;
          margin-bottom:0.9rem;
          color:var(--text-main);
          font-size:0.925rem;
        ">${b.text||''}</p>`;

      case 'bold':
        return `<p style="line-height:1.8;margin-bottom:0.9rem;font-size:0.925rem;">
          <strong style="color:var(--text-main);">${b.label||''}</strong>
          <span style="color:var(--text-main);"> ${b.text||''}</span>
        </p>`;

      case 'image':
        return `
          <div style="border-radius:12px;overflow:hidden;margin:1.25rem 0;border:1px solid var(--card-border);">
            <img src="${b.url||''}" alt="${b.caption||''}"
              style="width:100%;max-height:320px;object-fit:cover;display:block;"
              onerror="this.style.display='none'">
            ${b.caption
              ? `<div style="padding:8px 14px;font-size:0.76rem;color:var(--text-muted);background:var(--input-bg);line-height:1.5;">${b.caption}</div>`
              : ''}
          </div>`;

      case 'image_double':
        const imgs = b.images || [];
        return `
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.25rem 0;">
            ${imgs.map(img => `
              <div style="border-radius:10px;overflow:hidden;border:1px solid var(--card-border);">
                <img src="${img.url||''}" alt="${img.caption||''}"
                  style="width:100%;height:160px;object-fit:cover;display:block;"
                  onerror="this.style.display='none'">
                ${img.caption
                  ? `<div style="padding:8px 10px;font-size:0.74rem;color:var(--text-muted);background:var(--input-bg);line-height:1.4;">${img.caption}</div>`
                  : ''}
              </div>`).join('')}
          </div>`;

      case 'factbox':
        return `
          <div style="
            background:rgba(56,189,248,0.06);
            border-left:3px solid var(--ocean-main);
            padding:0.85rem 1.1rem;
            border-radius:0 8px 8px 0;
            margin:1rem 0;
            font-size:0.86rem;
            line-height:1.6;
          ">
            <strong style="color:var(--ocean-light);">📌 ${b.label||'Sumber'}</strong>
            ${b.text
              ? `<br><a href="${b.text}" target="_blank" rel="noopener"
                  style="color:var(--ocean-light);text-decoration:underline;font-size:0.82rem;"
                >${b.text} ↗</a>`
              : ''}
          </div>`;

      default:
        return b.text ? `<p style="line-height:1.8;margin-bottom:0.9rem;">${b.text}</p>` : '';
    }
  }).join('');
}


// OPEN MODULE 
async function openModule(id) {
  currentModuleId = id;
  try {
    const res = await fetch('/api/modules/' + id);
    if (!res.ok) throw new Error("Status " + res.status);
    const m = await res.json();
    console.log(m);

    // Hero
    const hero = document.getElementById('modal-hero');
    if (hero) {
      hero.style.background = m.bg || 'linear-gradient(135deg,#0a1628,#0e3d6e)';
      hero.innerHTML = '<button class="modal-close" onclick="closeModal()">✕</button>';
    }

    // Judul & deskripsi
    const titleEl = document.getElementById('modal-title');
    if (titleEl) titleEl.textContent = m.title || '';

    const descEl = document.getElementById('modal-desc');
    if (descEl) descEl.textContent = m.description || '';

    // Konten materi
    const materiEl = document.getElementById('materi-content');
    if (materiEl) {
      materiEl.innerHTML = m.content
        ? m.content + '<div style="margin-top:2rem;"><button class="btn-primary" onclick="switchTabById(\'quiz\')">✅ Selesai Membaca — Mulai Kuis</button></div>'
        : '<p style="color:var(--text-muted)">Konten modul belum tersedia.</p>';
    }

    // Load quiz
    await loadQuiz(id); 

    // Buka modal
    document.getElementById('module-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
    switchTabById('materi');

  } catch (err) {
    console.error("Gagal buka modul:", err);
    alert("Gagal membuka modul: " + err.message);
  }
}

// LOAD QUIZ
async function loadQuiz(moduleId) {
  try { 
    console.log("LOAD QUIZ", moduleId);

    const response = await fetch(`/api/quizzes/module/${moduleId}`);
    const quizzes = await response.json();

    console.log(quizzes);

    const quizPanel = document.getElementById("module-quiz-area");

    if (!quizPanel) return;

    let html = `
      <div style="padding:20px;">
        <h3>Kuis Modul</h3>
    `;

    quizzes.forEach((q, index) => {
      html += `
        <div style="margin-bottom:25px;">
          <h4>${index + 1}. ${q.question}</h4>

          <label><input type="radio" name="q${q.id}" value="A"> ${q.optionA}</label><br>
          <label><input type="radio" name="q${q.id}" value="B"> ${q.optionB}</label><br>
          <label><input type="radio" name="q${q.id}" value="C"> ${q.optionC}</label><br>
          <label><input type="radio" name="q${q.id}" value="D"> ${q.optionD}</label>
        </div>
      `;
    });

    html += `
      <button class="btn-primary" onclick="submitQuiz(${moduleId})">
        Submit Quiz
      </button>
      </div>
    `;

    quizPanel.innerHTML = html;

  } catch (err) {
    console.error("Quiz Error:", err);
  }
}

// SUBMIT QUIZ
async function submitQuiz(moduleId) {

    const response = await fetch(`/api/quizzes/module/${moduleId}`);
    const quizzes = await response.json();

    let score = 0;

    quizzes.forEach(q => {

        const selected =
            document.querySelector(`input[name="q${q.id}"]:checked`);

        const radios =
            document.querySelectorAll(`input[name="q${q.id}"]`);

        radios.forEach(radio => {

            const label = radio.parentElement;

            label.style.background = "";
            label.style.color = "";
            label.style.padding = "6px";
            label.style.borderRadius = "6px";

            // Jawaban benar
            if (radio.value === q.answer) {
                label.style.backgroundColor = "#2ecc71";
                label.style.color = "white";
            }

            // Jawaban user salah
            if (
                selected &&
                radio.checked &&
                radio.value !== q.answer
            ) {
                label.style.backgroundColor = "#e74c3c";
                label.style.color = "white";
            }
        });

        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    alert(`Nilai kamu: ${score}/${quizzes.length}`);
}

// CLOSE MODAL
function closeModal() {
  document.getElementById('module-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('module-modal')) closeModal();
}

// TABS 
function switchTab(name, btn) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const panel = document.getElementById('tab-' + name);
  if (panel) panel.classList.add('active');
}

function switchTabById(name) {
  const names = ['materi', 'quiz', 'komentar'];
  document.querySelectorAll('.modal-tab').forEach((t, i) => t.classList.toggle('active', i === names.indexOf(name)));
  document.querySelectorAll('.tab-panel').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('tab-' + name);
  if (panel) panel.classList.add('active');
}

// SEARCH
function searchModules(q) {
  const term = q.toLowerCase().trim();
  const grid = document.getElementById('all-modules-grid');
  if (!grid) return;

  const filtered = term
    ? moduleData.filter(m =>
        (m.title || '').toLowerCase().includes(term) ||
        (m.description || '').toLowerCase().includes(term))
    : moduleData;

  const noResults = document.getElementById('no-results');

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';

  grid.innerHTML = filtered.map(m => `
    <div class="module-card reveal-card" onclick="openModule(${m.id})" style="cursor:pointer;">
      <div class="module-thumb" style="background:${m.bg || 'linear-gradient(135deg,#0a1628,#0e3d6e)'};position:relative;height:200px;border-radius:16px 16px 0 0;overflow:hidden;">
        <img src="${m.imageUrl || m.thumbnail || '/Foto/Jona4.jpg'}" alt="${m.title || ''}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" onerror="this.style.display='none'">
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.05) 0%,rgba(10,22,40,0.7) 100%);pointer-events:none;"></div>
      </div>
      <div class="module-body" style="padding:1.25rem;">
        <div class="module-title" style="font-weight:700;font-size:1.05rem;margin-bottom:0.5rem;">${m.title || ''}</div>
        <div class="module-desc" style="font-size:0.875rem;color:var(--text-muted);margin-bottom:1rem;">${m.description || ''}</div>
        <button class="btn-primary" style="font-size:0.82rem;padding:8px 16px;">📖 Buka Modul</button>
      </div>
    </div>
  `).join("");

  setTimeout(initScrollAnimations, 80);
}

// ANIMASI SCROLL
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal-card').forEach(el => obs.observe(el));
}

// MOBILE MENU 
function toggleMobileMenu() {
  document.getElementById('nav-mobile').classList.toggle('open');
}

// THEME 
let isLight = localStorage.getItem('og_theme') === 'light';

function applyTheme() {
  document.body.classList.toggle('light', isLight);
  document.querySelectorAll('.theme-btn').forEach(b => b.textContent = isLight ? '🌙' : '☀️');
}

function toggleTheme() {
  isLight = !isLight;
  localStorage.setItem('og_theme', isLight ? 'light' : 'dark');
  applyTheme();
}

// AUTH 
let currentUser = null;
try { currentUser = JSON.parse(sessionStorage.getItem('og_user')); } catch(e) {}
let registeredUsers = {};
try { registeredUsers = JSON.parse(localStorage.getItem('og_users') || '{}'); } catch(e) {}

function openAuth(tab) {
  document.getElementById('auth-modal').classList.add('open');
  switchAuthTab(tab || 'login');
}
function closeAuth() { document.getElementById('auth-modal').classList.remove('open'); }
function switchAuthTab(tab) {
  document.getElementById('auth-tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('auth-tab-signup').classList.toggle('active', tab === 'signup');
  document.getElementById('auth-panel-login').style.display  = tab === 'login'  ? 'block' : 'none';
  document.getElementById('auth-panel-signup').style.display = tab === 'signup' ? 'block' : 'none';
}
function doLogin() {
  const user = document.getElementById('login-username').value.trim();
  const pass = document.getElementById('login-password').value;
  const err  = document.getElementById('auth-error-login');
  if (!user || !pass) { err.textContent = 'Username dan password wajib diisi.'; return; }
  if (!registeredUsers[user] || registeredUsers[user] !== pass) { err.textContent = 'Username atau password salah.'; return; }
  currentUser = { username: user };
  sessionStorage.setItem('og_user', JSON.stringify(currentUser));
  closeAuth(); updateNavUser();
}
function doSignup() {
  const user = document.getElementById('signup-username').value.trim();
  const pass = document.getElementById('signup-password').value;
  const conf = document.getElementById('signup-confirm').value;
  const err  = document.getElementById('auth-error-signup');
  if (!user || !pass || !conf) { err.textContent = 'Semua kolom wajib diisi.'; return; }
  if (pass.length < 6) { err.textContent = 'Password minimal 6 karakter.'; return; }
  if (pass !== conf)   { err.textContent = 'Password tidak cocok.'; return; }
  if (registeredUsers[user]) { err.textContent = 'Username sudah digunakan.'; return; }
  registeredUsers[user] = pass;
  localStorage.setItem('og_users', JSON.stringify(registeredUsers));
  currentUser = { username: user };
  sessionStorage.setItem('og_user', JSON.stringify(currentUser));
  closeAuth(); updateNavUser();
}
function doLogout() {
  currentUser = null;
  sessionStorage.removeItem('og_user');
  updateNavUser();
}
function updateNavUser() {
  const area = document.getElementById('nav-auth-area');
  if (!area) return;
  area.innerHTML = currentUser
    ? `<span style="font-size:0.85rem;color:var(--text-muted);margin-right:8px;">👤 ${currentUser.username}</span><button class="btn-outline" style="padding:7px 16px;font-size:0.82rem;" onclick="doLogout()">Keluar</button>`
    : `<button class="btn-primary" style="padding:8px 18px;font-size:0.85rem;" onclick="openAuth('login')">Masuk / Daftar</button>`;
}

// KEYBOARD
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeAuth(); }
});

// LOAD MODULES
async function loadModules() {
  try {
    const response = await fetch('/api/modules');
    const modules = await response.json();

    console.log('Modules:', modules);

    const container = document.getElementById('all-modules-grid');

    container.innerHTML = '';
    modules.forEach(module => {
      container.innerHTML += `
        <div style="
          width:320px;
          background:rgba(255,255,255,0.05);
          border-radius:16px;
          overflow:hidden;
          padding:12px;
          margin:16px;
        ">
          
          <img
            src="${module.thumbnail}"
            alt="${module.title}"
            style="
              width:100%;
              height:180px;
              object-fit:cover;
              border-radius:12px;
              display:block;
            "
          >

          <h3 style="margin:12px 0 8px 0;">
            ${module.title}
          </h3>

          <p style="font-size:14px;margin-bottom:12px;">
            ${module.description}
          </p>

          <button
            onclick="window.location.href='/module/${module.id}'"
            style="
              width:100%;
              padding:10px;
              background:#00bfff;
              color:white;
              border:none;
              border-radius:8px;
              cursor:pointer;
            "
          >
            📖 Baca Modul
          </button>

        </div>
      `;
    });
  } catch (err) {
    console.error('Error loading modules:', err);
    const container = document.getElementById('all-modules-grid');
  }
}

// INIT 
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  updateNavUser();
  loadModules();
});
