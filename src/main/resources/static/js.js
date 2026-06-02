// ---- NAVIGATION (multi-file) ----
function showPage(page) {
  const map = {
    home: 'Homepage.html',
    index: 'Homepage.html',
    modules: 'Modules.html',
    quiz: 'Quiz.html',
    tips: 'Tips.html',
    about: 'About.html'
  };
  const dest = map[page];
  if (dest) window.location.href = dest;
}

//  DATA
const MODULES = [
  {
    id:1, emoji:"🛢️", bg:"linear-gradient(135deg,#1a0a05,#3d1508)",
    title:"Polusi Plastik di Laut Indonesia",
    desc:"Pelajari dampak sampah plastik terhadap ekosistem laut dan solusi nyata yang bisa diterapkan.",
    tag:"Polusi", tagClass:"tag-red", category:"polusi", difficulty:"Pemula", progress:85,
    materi:`<h3>Krisis Plastik di Lautan Kita</h3><p>Indonesia adalah salah satu penghasil sampah plastik terbesar di dunia yang masuk ke lautan. Setiap tahun, diperkirakan 620.000 ton plastik dari Indonesia berakhir di laut — menjadikan Indonesia negara kedua terbesar setelah China.</p><div class="fact-box"><p>💡 <strong>Fakta Penting:</strong> Sebuah plastik bisa bertahan di lautan hingga 450 tahun sebelum terurai sepenuhnya menjadi mikroplastik.</p></div><h3>Jenis Polutan Utama</h3><ul><li><strong>Kantong plastik</strong> — sering tertelan penyu karena mirip ubur-ubur</li><li><strong>Botol plastik</strong> — penyumbang terbesar berdasarkan volume</li><li><strong>Styrofoam</strong> — mudah hancur menjadi mikropartikel</li><li><strong>Jaring ikan hantu (ghost nets)</strong> — menangkap dan membunuh biota laut tanpa tujuan</li><li><strong>Sedotan plastik</strong> — sering tersangkut di hidung dan mulut satwa laut</li></ul><h3>Dampak terhadap Biota Laut</h3><p>Lebih dari 700 spesies laut telah terdampak oleh polusi plastik. Penyu, lumba-lumba, paus, dan burung laut adalah yang paling rentan. Microplastic bahkan telah ditemukan dalam darah ikan yang dikonsumsi manusia.</p><div class="fact-box"><p>🐠 Riset terbaru menunjukkan mikroplastik ditemukan di 100% sampel air laut yang diuji di seluruh perairan Indonesia — termasuk di kawasan konservasi sekalipun.</p></div><h3>Apa yang Bisa Dilakukan?</h3><p>Solusi terbaik adalah mencegah plastik masuk ke laut sejak awal — dengan mengurangi penggunaan plastik sekali pakai, memilah sampah, dan berpartisipasi dalam kegiatan bersih-bersih pantai.</p>`,
    comments:[{name:"Ayu Kartini",text:"Sangat informatif! Saya tidak tahu bahwa plastik bisa bertahan 450 tahun di laut.",stars:5,time:"2 jam lalu",color:"#e85d3a"},{name:"Budi Santoso",text:"Materinya mudah dipahami. Semoga lebih banyak orang Indonesia baca ini.",stars:4,time:"1 hari lalu",color:"#29a5d6"}],
    ratings:[0,2,5,12,31], avgRating:4.4, totalRatings:50
  },
  {
    id:2, emoji:"🪸", bg:"linear-gradient(135deg,#051a10,#0a3d26)",
    title:"Ekosistem Terumbu Karang Indonesia",
    desc:"Indonesia memiliki terumbu karang terluas di dunia. Pelajari mengapa mereka terancam dan cara melindunginya.",
    tag:"Ekosistem", tagClass:"tag-green", category:"ekosistem", difficulty:"Menengah", progress:60,
    materi:`<h3>Surga Bawah Laut yang Terancam</h3><p>Indonesia adalah pusat dari "Segitiga Terumbu Karang" (Coral Triangle) — wilayah dengan keanekaragaman hayati laut tertinggi di planet ini. Sekitar 75% dari seluruh spesies terumbu karang dunia hidup di perairan Indonesia.</p><div class="fact-box"><p>🪸 Indonesia memiliki luas terumbu karang sekitar 51.000 km² — terluas di dunia. Namun, hampir 50% dari terumbu karang ini dalam kondisi rusak atau sangat rusak.</p></div><h3>Mengapa Terumbu Karang Penting?</h3><ul><li>Rumah bagi 25% spesies laut meski hanya menutupi &lt;1% dasar laut</li><li>Melindungi garis pantai dari erosi dan gelombang besar</li><li>Sumber mata pencaharian jutaan nelayan Indonesia</li><li>Potensi wisata bahari yang bernilai miliaran dolar</li></ul><h3>Ancaman Utama Terumbu Karang</h3><p><strong>Pemutihan Karang (Coral Bleaching)</strong> terjadi ketika suhu air laut meningkat akibat perubahan iklim. Karang yang stres membuang alga zooxanthellae yang memberi warna dan nutrisi, menyebabkan karang memutih dan akhirnya mati.</p><h3>Upaya Pemulihan</h3><p>Transplantasi karang, pembangunan terumbu buatan, dan penetapan kawasan konservasi laut (KKL) adalah beberapa langkah yang terbukti efektif memulihkan ekosistem terumbu karang.</p>`,
    comments:[{name:"Dewi Pratiwi",text:"Wah baru tau kalau Indonesia punya terumbu karang terluas di dunia! Bangga sekaligus sedih melihat kondisinya.",stars:5,time:"5 jam lalu",color:"#2dbd8a"}],
    ratings:[0,1,3,18,28], avgRating:4.5, totalRatings:50
  },
  {
    id:3, emoji:"🌡️", bg:"linear-gradient(135deg,#1a0f00,#3d2800)",
    title:"Perubahan Iklim & Kenaikan Permukaan Laut",
    desc:"Bagaimana pemanasan global mengancam wilayah pesisir Indonesia dan apa yang harus kita lakukan.",
    tag:"Iklim", tagClass:"tag-amber", category:"iklim", difficulty:"Menengah", progress:40,
    materi:`<h3>Indonesia di Garis Depan Krisis Iklim</h3><p>Sebagai negara kepulauan, Indonesia adalah salah satu negara yang paling rentan terhadap dampak perubahan iklim. Kenaikan permukaan laut, perubahan pola cuaca, dan intensitas badai yang meningkat mengancam jutaan penduduk pesisir.</p><div class="fact-box"><p>🌊 Permukaan laut global telah naik sekitar 20 cm sejak tahun 1900, dan laju kenaikannya semakin cepat. Proyeksi menunjukkan kenaikan 0,3–1 meter lagi pada akhir abad ini.</p></div><h3>Dampak di Indonesia</h3><ul><li>Jakarta diproyeksikan sebagian terendam pada 2050 jika tidak ada intervensi</li><li>Ribuan pulau kecil terancam tenggelam</li><li>Intrusi air laut merusak sumber air tawar dan lahan pertanian</li><li>Pergeseran musim hujan mengganggu siklus tangkap ikan nelayan tradisional</li></ul><h3>Peran Laut dalam Menyerap Karbon</h3><p>Laut adalah penyerap karbon terbesar di planet ini, menyerap sekitar 25–30% emisi CO₂ global. Namun kemampuan ini berkurang seiring meningkatnya suhu dan keasaman laut.</p>`,
    comments:[{name:"Rizal Hakim",text:"Sangat membuka wawasan. Ternyata laut sangat berperan dalam menyerap karbon.",stars:5,time:"3 hari lalu",color:"#f0a500"}],
    ratings:[0,1,4,15,30], avgRating:4.5, totalRatings:50
  },
  {
    id:4, emoji:"🎣", bg:"linear-gradient(135deg,#051628,#0e2a47)",
    title:"Penangkapan Ikan Berlebihan (Overfishing)",
    desc:"Mengapa populasi ikan Indonesia menurun dan bagaimana perikanan berkelanjutan menjadi jawabannya.",
    tag:"Ekosistem", tagClass:"tag-green", category:"ekosistem", difficulty:"Pemula", progress:70,
    materi:`<h3>Krisis Sumber Daya Perikanan</h3><p>Indonesia adalah negara produsen ikan terbesar kedua di dunia. Namun, praktik penangkapan ikan yang berlebihan (overfishing) telah menyebabkan penurunan drastis populasi banyak spesies ikan komersial penting.</p><div class="fact-box"><p>🎣 Lebih dari 33% stok ikan laut dunia saat ini dalam kondisi overfished — ditangkap lebih cepat dari kemampuan mereka beregenerasi.</p></div><h3>Masalah Utama di Perairan Indonesia</h3><ul><li><strong>Illegal Fishing</strong> — kapal asing mencuri ikan di perairan Indonesia senilai Rp 30+ triliun/tahun</li><li><strong>Alat tangkap destruktif</strong> — trawl dasar, cantrang, dan bom ikan merusak habitat</li><li><strong>Bycatch</strong> — hiu, penyu, lumba-lumba sering ikut terjaring</li></ul><h3>Perikanan Berkelanjutan</h3><p>Solusinya adalah transisi ke praktik perikanan yang berkelanjutan: menghormati musim pemijahan, menggunakan alat tangkap selektif, dan mendukung sertifikasi MSC untuk produk ikan.</p>`,
    comments:[{name:"Pak Yusuf",text:"Saya nelayan dan setuju dengan konten ini. Perlu edukasi lebih ke sesama nelayan.",stars:5,time:"2 hari lalu",color:"#2dbd8a"}],
    ratings:[0,2,6,20,22], avgRating:4.2, totalRatings:50
  },
  {
    id:5, emoji:"🌿", bg:"linear-gradient(135deg,#021a0d,#053d1e)",
    title:"Hutan Mangrove: Penjaga Garis Pantai",
    desc:"Hutan mangrove adalah ekosistem vital yang melindungi pantai, menyerap karbon, dan menopang kehidupan.",
    tag:"Ekosistem", tagClass:"tag-green", category:"ekosistem", difficulty:"Pemula", progress:55,
    materi:`<h3>Apa itu Hutan Mangrove?</h3><p>Mangrove adalah hutan yang tumbuh di zona pasang-surut di daerah tropis dan subtropis. Indonesia memiliki hutan mangrove terluas di dunia — sekitar 3,5 juta hektar atau hampir 23% dari total mangrove global.</p><div class="fact-box"><p>🌿 Mangrove mampu menyerap karbon 3-5 kali lebih banyak per hektar dibandingkan hutan hujan tropis — menjadikannya salah satu ekosistem paling penting untuk mitigasi iklim.</p></div><h3>Fungsi Vital Mangrove</h3><ul><li>Melindungi garis pantai dari erosi dan gelombang tsunami</li><li>Tempat pemijahan dan nursery bagi ratusan spesies ikan</li><li>Penyerap karbon "blue carbon" yang sangat efisien</li><li>Sumber mata pencaharian masyarakat pesisir</li></ul><h3>Ancaman & Rehabilitasi</h3><p>Lebih dari 40% hutan mangrove Indonesia telah hilang dalam 30 tahun terakhir. Pemerintah Indonesia menargetkan penanaman kembali 600.000 hektar mangrove.</p>`,
    comments:[{name:"Lina Wijaya",text:"Baru tau mangrove bisa serap karbon lebih dari hutan hujan tropis!",stars:5,time:"4 jam lalu",color:"#52d4a3"}],
    ratings:[0,0,3,14,33], avgRating:4.6, totalRatings:50
  },
  {
    id:6, emoji:"♻️", bg:"linear-gradient(135deg,#1a1500,#3d3100)",
    title:"Aksi Nyata: Kurangi Jejak Plastikmu",
    desc:"Panduan praktis mengurangi penggunaan plastik dalam kehidupan sehari-hari untuk melindungi laut.",
    tag:"Aksi", tagClass:"", category:"aksi", difficulty:"Semua Level", progress:90,
    materi:`<h3>Mulai dari Dirimu Sendiri</h3><p>Perubahan besar dimulai dari kebiasaan kecil. Setiap plastik yang kamu hindari adalah satu piece yang tidak akan masuk ke laut.</p><h3>5 Langkah Utama Mengurangi Plastik</h3><ul><li><strong>Bawa tas belanja sendiri</strong> — simpan di tas agar tidak lupa</li><li><strong>Gunakan botol minum isi ulang</strong> — hemat uang sekaligus kurangi sampah</li><li><strong>Tolak sedotan plastik</strong> — minta tanpa sedotan atau bawa sedotan stainless/bambu</li><li><strong>Pilih produk dengan kemasan minimal atau daur ulang</strong></li><li><strong>Pilah sampah di rumah</strong> — pisahkan organik, plastik, dan kertas</li></ul><div class="fact-box"><p>♻️ Jika 1% penduduk Indonesia (2,7 juta orang) mengurangi 1 plastik per hari, itu berarti hampir 1 MILIAR plastik tidak jadi sampah dalam setahun!</p></div><h3>Bergabung dalam Gerakan Bersih Pantai</h3><p>Ikuti atau inisiasi kegiatan bersih-bersih pantai di kotamu bersama komunitas lokal.</p>`,
    comments:[{name:"Maya S",text:"Praktis banget! Langsung bisa diterapkan.",stars:5,time:"1 jam lalu",color:"#f0a500"}],
    ratings:[0,1,4,16,29], avgRating:4.5, totalRatings:50
  }
];

const TIPS = [
  {emoji:"🛍️",title:"Kurangi Plastik Sekali Pakai",desc:"Bawa tas belanja, botol minum, dan wadah makan sendiri. Hindari sedotan plastik dan kemasan styrofoam."},
  {emoji:"🗑️",title:"Pilah Sampahmu",desc:"Pisahkan sampah organik, plastik, kertas, dan logam. Dukung program bank sampah di lingkunganmu."},
  {emoji:"🏖️",title:"Ikuti Bersih Pantai",desc:"Bergabung dengan komunitas bersih pantai lokal atau inisiasi kegiatanmu sendiri bersama teman-teman."},
  {emoji:"🐟",title:"Konsumsi Ikan Bertanggung Jawab",desc:"Pilih ikan dari sumber yang ramah lingkungan. Hindari spesies yang terancam punah seperti hiu dan hiu paus."},
  {emoji:"📣",title:"Sebarkan Kesadaran",desc:"Bagikan informasi tentang pentingnya menjaga laut di media sosial dan kepada orang-orang di sekitarmu."},
  {emoji:"🌱",title:"Dukung Penanaman Mangrove",desc:"Ikuti program rehabilitasi mangrove atau donasikan ke organisasi yang bergerak di bidang pelestarian ekosistem pesisir."},
  {emoji:"⚡",title:"Hemat Energi di Rumah",desc:"Kurangi emisi karbon dengan hemat listrik, gunakan transportasi umum, dan dukung energi terbarukan."},
  {emoji:"💧",title:"Hindari Produk Berbahaya",desc:"Gunakan produk rumah tangga ramah lingkungan. Hindari sunscreen yang mengandung oxybenzone yang merusak karang."},
  {emoji:"🚿",title:"Hemat Air",desc:"Air yang bersih akhirnya mengalir ke laut. Menjaga sumber air bersih berarti menjaga kesehatan ekosistem pesisir."},
  {emoji:"🧴",title:"Pilih Kosmetik Ramah Laut",desc:"Hindari produk mengandung microbeads (butiran plastik mikro) yang langsung masuk ke sistem air dan laut."},
  {emoji:"📸",title:"Dokumentasikan & Laporkan",desc:"Foto pembuangan sampah ilegal dan laporkan ke dinas terkait. Jadilah mata dan telinga bagi laut kita."},
  {emoji:"🤝",title:"Bergabung Komunitas",desc:"Dukung NGO lingkungan seperti WWF Indonesia, Yayasan Terumbu Karang, dan Divers Clean Action."},
];

const QUIZ_DATA = {
  umum:[
    {q:"Berapa persen permukaan Bumi yang ditutupi oleh laut?",opts:["50%","60%","71%","80%"],ans:2,expl:"Sekitar 71% permukaan Bumi ditutupi oleh lautan. Laut menyimpan sekitar 97% seluruh air di Bumi."},
    {q:"Indonesia adalah negara kepulauan terbesar di dunia dengan berapa pulau?",opts:["Lebih dari 5.000","Lebih dari 10.000","Lebih dari 17.000","Lebih dari 25.000"],ans:2,expl:"Indonesia memiliki lebih dari 17.500 pulau, menjadikannya negara kepulauan terbesar di dunia."},
    {q:"Berapa luas wilayah laut Indonesia?",opts:["1 juta km²","2,5 juta km²","5 juta km²","10 juta km²"],ans:1,expl:"Luas wilayah laut Indonesia sekitar 2,5 juta km² — sekitar 2/3 dari total wilayah nasional."},
    {q:"Apa nama kawasan keanekaragaman hayati laut tertinggi di dunia yang berpusat di Indonesia?",opts:["Bermuda Triangle","Coral Triangle","Pacific Ring","Ocean Heart"],ans:1,expl:"Coral Triangle (Segitiga Terumbu Karang) adalah kawasan dengan keanekaragaman hayati laut tertinggi di dunia."},
    {q:"Berapa ton sampah plastik yang masuk ke laut setiap tahunnya secara global?",opts:["1 juta ton","4 juta ton","8 juta ton","20 juta ton"],ans:2,expl:"Diperkirakan 8 juta ton plastik masuk ke laut setiap tahun — setara dengan satu truk sampah setiap menit."},
    {q:"Berapa lama waktu yang dibutuhkan plastik untuk terurai di laut?",opts:["10-20 tahun","50-100 tahun","200-300 tahun","400-450 tahun"],ans:3,expl:"Plastik membutuhkan waktu 400-450 tahun untuk terurai sepenuhnya."},
    {q:"Apa yang dimaksud dengan 'mikroplastik'?",opts:["Plastik daur ulang","Partikel plastik berukuran kurang dari 5mm","Plastik biodegradable","Plastik ramah lingkungan"],ans:1,expl:"Mikroplastik adalah partikel plastik berukuran kurang dari 5mm yang sulit disaring dan telah ditemukan di seluruh lautan dunia."},
    {q:"Berapa persen terumbu karang Indonesia yang dalam kondisi rusak?",opts:["10%","25%","50%","75%"],ans:2,expl:"Sekitar 50% terumbu karang Indonesia berada dalam kondisi rusak atau sangat rusak."},
    {q:"Laut menyerap berapa persen emisi CO₂ global?",opts:["5-10%","15-20%","25-30%","40-50%"],ans:2,expl:"Laut menyerap sekitar 25-30% emisi CO₂ global per tahun."},
    {q:"Berapa spesies laut yang terdampak polusi plastik?",opts:["Lebih dari 100","Lebih dari 300","Lebih dari 500","Lebih dari 700"],ans:3,expl:"Lebih dari 700 spesies laut telah terdampak polusi plastik."}
  ],
  polusi:[
    {q:"Indonesia menempati peringkat ke berapa sebagai penyumbang polusi plastik laut terbesar di dunia?",opts:["Pertama","Kedua","Ketiga","Keempat"],ans:1,expl:"Indonesia adalah penyumbang polusi plastik laut terbesar kedua di dunia setelah China."},
    {q:"Apa bahaya utama mikroplastik bagi biota laut?",opts:["Hanya mengubah warna air","Dapat tertelan dan masuk ke rantai makanan","Meningkatkan suhu air","Tidak berbahaya"],ans:1,expl:"Mikroplastik dapat tertelan oleh biota laut, masuk ke rantai makanan, dan berpotensi dikonsumsi manusia."},
    {q:"Apa yang dimaksud dengan 'ghost net' (jaring hantu)?",opts:["Jaring transparan","Jaring ikan yang hilang dan terus menangkap biota laut","Jaring berbahan bio-plastik","Jaring milik nelayan ilegal"],ans:1,expl:"Ghost net adalah jaring ikan yang hilang atau ditinggalkan di laut, terus menangkap dan membunuh biota laut tanpa tujuan."},
    {q:"Mengapa penyu laut sering menelan kantong plastik?",opts:["Penyu tidak bisa membedakan warna","Kantong plastik terlihat seperti ubur-ubur","Penyu menyukai bau plastik","Plastik mengandung nutrisi"],ans:1,expl:"Kantong plastik yang mengambang di air terlihat persis seperti ubur-ubur dari bawah, makanan favorit penyu."},
    {q:"Selain plastik, polutan laut berbahaya lainnya adalah...",opts:["Air hujan","Tumpahan minyak (oil spill)","Pasir dari darat","Sinar matahari"],ans:1,expl:"Tumpahan minyak adalah polutan laut berbahaya yang dapat membunuh ribuan spesies laut."},
    {q:"Senyawa kimia apa dalam sunscreen yang merusak terumbu karang?",opts:["Titanium dioxide","Zinc oxide","Oxybenzone","Vitamin E"],ans:2,expl:"Oxybenzone dan octinoxate adalah senyawa dalam sunscreen konvensional yang terbukti merusak terumbu karang."},
    {q:"Berapa estimasi banyaknya plastik yang ada di lautan saat ini?",opts:["1 juta ton","50 juta ton","150 juta ton","500 juta ton"],ans:2,expl:"Diperkirakan ada sekitar 150 juta ton plastik di lautan saat ini."},
    {q:"Program apa yang bisa dilakukan masyarakat untuk langsung mengurangi polusi laut?",opts:["Menangkap ikan lebih banyak","Beach clean-up (bersih pantai)","Membuang sampah ke sungai","Mengurangi konsumsi ikan"],ans:1,expl:"Beach clean-up adalah kegiatan langsung yang efektif. Setiap tahun kegiatan World Cleanup Day berhasil mengumpulkan ribuan ton sampah."},
    {q:"Apa perbedaan antara 'sampah organik' dan 'sampah anorganik' dari perspektif laut?",opts:["Tidak ada perbedaan","Sampah organik terurai alami, anorganik bertahan sangat lama","Sampah organik lebih berbahaya","Anorganik terurai lebih cepat"],ans:1,expl:"Sampah organik terurai secara alami, sementara sampah anorganik seperti plastik bertahan sangat lama di ekosistem laut."},
    {q:"Apa solusi paling efektif untuk mengatasi polusi plastik laut dalam jangka panjang?",opts:["Memungut plastik dari laut","Membakar sampah plastik","Mengurangi produksi dan konsumsi plastik sejak awal","Membuang plastik di gurun"],ans:2,expl:"Pencegahan di sumber (reduce) jauh lebih efektif daripada pembersihan."}
  ],
  ekosistem:[
    {q:"Berapa luas terumbu karang Indonesia — terluas di dunia?",opts:["10.000 km²","30.000 km²","51.000 km²","100.000 km²"],ans:2,expl:"Indonesia memiliki terumbu karang seluas sekitar 51.000 km², menjadikannya negara dengan terumbu karang terluas di dunia."},
    {q:"Apa itu 'coral bleaching' (pemutihan karang)?",opts:["Karang yang tumbuh memutih secara alami","Karang melepaskan alga simbiotiknya akibat stres suhu","Karang yang dicat oleh manusia","Karang muda yang baru tumbuh"],ans:1,expl:"Coral bleaching terjadi ketika suhu air meningkat, karang melepaskan alga zooxanthellae yang memberi warna dan nutrisi."},
    {q:"Berapa persen luas dasar laut yang ditutupi terumbu karang, namun menopang 25% spesies laut?",opts:["Kurang dari 1%","5%","15%","25%"],ans:0,expl:"Terumbu karang hanya menutupi kurang dari 1% dasar laut, namun menjadi rumah bagi sekitar 25% dari seluruh spesies laut."},
    {q:"Berapa luas hutan mangrove Indonesia — terluas di dunia?",opts:["500.000 ha","1 juta ha","3,5 juta ha","10 juta ha"],ans:2,expl:"Indonesia memiliki hutan mangrove seluas sekitar 3,5 juta hektar — hampir 23% dari total mangrove global."},
    {q:"Apa fungsi utama hutan mangrove bagi ekosistem laut?",opts:["Tempat berlibur","Tempat pemijahan dan nursery ikan","Sumber kayu bakar","Penghalang cuaca panas"],ans:1,expl:"Mangrove berfungsi sebagai nursery dan habitat pemijahan bagi ratusan spesies ikan dan udang."},
    {q:"Berapa kali mangrove menyerap karbon dibanding hutan hujan tropis per hektar?",opts:["Sama saja","2 kali lebih banyak","3-5 kali lebih banyak","10 kali lebih banyak"],ans:2,expl:"Mangrove mampu menyerap karbon 3-5 kali lebih banyak per hektar dibanding hutan hujan tropis daratan."},
    {q:"Apa yang dimaksud dengan 'overfishing'?",opts:["Memancing di tempat yang salah","Penangkapan ikan melebihi kemampuan populasi untuk beregenerasi","Konsumsi ikan berlebihan","Memelihara ikan terlalu banyak"],ans:1,expl:"Overfishing adalah kondisi di mana ikan ditangkap lebih cepat dari kemampuan populasinya untuk berkembang biak kembali."},
    {q:"Apa dampak 'ocean acidification' (pengasaman laut) terhadap terumbu karang?",opts:["Tidak ada dampak","Karang tumbuh lebih cepat","Melemahkan struktur kapur karang dan menghambat pertumbuhan","Membuat karang lebih kuat"],ans:2,expl:"Pengasaman laut melemahkan struktur kalsium karbonat terumbu karang, membuatnya lebih rapuh."},
    {q:"Spesies apa yang dikenal sebagai 'insinyur ekosistem' karang karena zmembantu membersihkan alga?",opts:["Hiu","Ikan badut (nemo)","Bulu babi (sea urchin) dan ikan kakaktua","Paus biru"],ans:2,expl:"Bulu babi dan ikan kakaktua (parrotfish) memakan alga yang mengancam karang dan membantu menjaga keseimbangan ekosistem terumbu."},
    {q:"Padang lamun (seagrass) penting bagi ekosistem laut karena...",opts:["Hanya untuk keindahan","Habitat dan sumber makanan dugong, penyu, dan banyak ikan","Menghasilkan garam","Menangkap ikan secara alami"],ans:1,expl:"Padang lamun adalah habitat vital bagi dugong, penyu hijau, dan ribuan spesies ikan, serta penyerap karbon yang signifikan."}
  ]
};

// Pre-quiz questions untuk setiap modul
const PREQUIZ = {
  1: {
    questions: [
      {q: "Seberapa sering kamu menggunakan plastik sekali pakai?", opts: ["Hampir tidak pernah", "Kadang-kadang", "Sering", "Selalu"]},
      {q: "Apakah kamu sudah mengetahui dampak plastik bagi laut?", opts: ["Sudah tahu banyak", "Sedikit tahu", "Belum tahu sama sekali"]}
    ],
    recommendations: ["Sangat cocok untuk kamu yang ingin mulai berubah!", "Modul ini akan memperdalam pemahamanmu.", "Modul ini sempurna untuk memulai perjalananmu!"]
  },
  2: {
    questions: [
      {q: "Pernahkah kamu menyelam atau snorkeling dan melihat terumbu karang?", opts: ["Ya, sering", "Ya, sekali dua kali", "Belum pernah"]},
      {q: "Seberapa jauh pengetahuanmu tentang ekosistem laut?", opts: ["Sangat paham", "Cukup paham", "Masih pemula"]}
    ],
    recommendations: ["Modul ini akan memberimu perspektif baru!", "Modul ini cocok untuk kamu!", "Modul ini adalah tempat terbaik untuk memulai!"]
  },
  3: {
    questions: [
      {q: "Apakah kamu tinggal di daerah pesisir?", opts: ["Ya, tepat di pesisir", "Dekat pesisir", "Jauh dari pesisir"]},
      {q: "Seberapa khawatir kamu tentang perubahan iklim?", opts: ["Sangat khawatir", "Cukup khawatir", "Belum terlalu memikirkannya"]}
    ],
    recommendations: ["Modul ini sangat relevan untuk kehidupanmu!", "Modul ini akan membuka wawasanmu lebih luas.", "Modul ini akan membuatmu lebih peduli lingkungan!"]
  },
  4: {
    questions: [
      {q: "Apakah kamu seorang nelayan atau terkait industri perikanan?", opts: ["Ya, nelayan", "Terkait industri ikan", "Tidak, tapi suka makan ikan", "Tidak terkait"]},
      {q: "Apakah kamu memperhatikan asal-usul ikan yang kamu beli?", opts: ["Selalu", "Kadang-kadang", "Tidak pernah"]}
    ],
    recommendations: ["Modul ini sangat penting untukmu!", "Modul ini akan membantumu membuat pilihan lebih baik.", "Modul ini akan mengubah cara pandangmu!"]
  },
  5: {
    questions: [
      {q: "Pernahkah kamu melihat hutan mangrove secara langsung?", opts: ["Ya, sering", "Ya, sekali", "Belum pernah"]},
      {q: "Apakah di daerahmu ada hutan mangrove?", opts: ["Ya, masih ada dan terawat", "Ada tapi sudah berkurang", "Tidak ada"]}
    ],
    recommendations: ["Modul ini akan memperdalam kecintaanmu pada mangrove!", "Modul ini akan menyadarkanmu pentingnya pelestarian!", "Modul ini akan mengenalkanmu pada ekosistem luar biasa ini!"]
  },
  6: {
    questions: [
      {q: "Berapa banyak plastik sekali pakai yang kamu kurangi dalam seminggu?", opts: ["Sudah hampir nol", "Lumayan banyak", "Masih banyak", "Belum mencoba"]},
      {q: "Apa halangan terbesar yang kamu hadapi untuk hidup lebih ramah lingkungan?", opts: ["Tidak ada alternatif murah", "Kebiasaan susah berubah", "Tidak tahu harus mulai dari mana", "Tidak ada halangan"]}
    ],
    recommendations: ["Kamu sudah menjadi contoh yang baik! Modul ini untuk inspirasi tambahan.", "Modul ini akan membantumu melangkah lebih jauh!", "Modul ini adalah panduan praktis yang kamu butuhkan!"]
  }
};

//  STATE
const moduleData = JSON.parse(JSON.stringify(MODULES));
let openedModules = new Set();
let finishedModules = new Set();
let currentModuleId = null;
let currentRating = 0;
let currentCommentRating = 0;

// Auth state (simple in-memory)
let currentUser = null;
try { currentUser = JSON.parse(sessionStorage.getItem('og_user')); } catch(e) {}
// Simulate registered users
let registeredUsers = {};
try { registeredUsers = JSON.parse(localStorage.getItem('og_users') || '{}'); } catch(e) {}

// Quiz state
let quizCategory = '';
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizCorrect = 0;
let quizTimer = null;
let quizTimeLeft = 30;
let quizTimesUsed = [];
let quizAnswered = false;
let quizHistory = [];

// Theme
let isLight = localStorage.getItem('og_theme') === 'light';

//  THEME
function applyTheme() {
  document.body.classList.toggle('light', isLight);
  document.querySelectorAll('.theme-btn').forEach(b => b.textContent = isLight ? '🌙' : '☀️');
}
function toggleTheme() {
  isLight = !isLight;
  localStorage.setItem('og_theme', isLight ? 'light' : 'dark');
  applyTheme();
}

//  AUTH
function openAuth(tab = 'login') {
  document.getElementById('auth-modal').classList.add('open');
  switchAuthTab(tab);
}
function closeAuth() {
  document.getElementById('auth-modal').classList.remove('open');
}
function switchAuthTab(tab) {
  document.getElementById('auth-tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('auth-tab-signup').classList.toggle('active', tab === 'signup');
  document.getElementById('auth-panel-login').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('auth-panel-signup').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('auth-error-login').textContent = '';
  document.getElementById('auth-error-signup').textContent = '';
}
function doLogin() {
  const user = document.getElementById('login-username').value.trim();
  const pass = document.getElementById('login-password').value;
  const err = document.getElementById('auth-error-login');
  if (!user || !pass) { err.textContent = 'Username dan password wajib diisi.'; return; }
  if (!registeredUsers[user] || registeredUsers[user] !== pass) {
    err.textContent = 'Username atau password salah.'; return;
  }
  currentUser = { username: user };
  sessionStorage.setItem('og_user', JSON.stringify(currentUser));
  closeAuth();
  updateNavUser();
  showToast(`👋 Selamat datang kembali, ${user}!`);
}
function doSignup() {
  const user = document.getElementById('signup-username').value.trim();
  const pass = document.getElementById('signup-password').value;
  const conf = document.getElementById('signup-confirm').value;
  const err = document.getElementById('auth-error-signup');
  if (!user || !pass || !conf) { err.textContent = 'Semua kolom wajib diisi.'; return; }
  if (user.length < 3) { err.textContent = 'Username minimal 3 karakter.'; return; }
  if (pass.length < 6) { err.textContent = 'Password minimal 6 karakter.'; return; }
  if (pass !== conf) { err.textContent = 'Konfirmasi password tidak cocok.'; return; }
  if (registeredUsers[user]) { err.textContent = 'Username sudah digunakan.'; return; }
  registeredUsers[user] = pass;
  localStorage.setItem('og_users', JSON.stringify(registeredUsers));
  currentUser = { username: user };
  sessionStorage.setItem('og_user', JSON.stringify(currentUser));
  closeAuth();
  updateNavUser();
  showToast(`🎉 Akun berhasil dibuat, ${user}! Selamat bergabung!`);
}
function doLogout() {
  currentUser = null;
  sessionStorage.removeItem('og_user');
  updateNavUser();
  showToast('👋 Kamu sudah keluar.');
}
function updateNavUser() {
  const navAuth = document.getElementById('nav-auth-area');
  if (!navAuth) return;
  if (currentUser) {
    navAuth.innerHTML = `
      <span style="font-size:0.85rem;color:var(--text-muted);margin-right:8px;">👤 ${currentUser.username}</span>
      <button class="btn-outline" style="padding:7px 16px;font-size:0.82rem;" onclick="doLogout()">Keluar</button>
    `;
  } else {
    navAuth.innerHTML = `
      <button class="btn-primary" style="padding:8px 18px;font-size:0.85rem;" onclick="openAuth('login')">Masuk / Daftar</button>
    `;
  }
}

//  PRE-QUIZ MODAL (sebelum buka modul)
let pendingModuleId = null;
let prequizAnswers = [];
let prequizStep = 0;

function showPrequiz(moduleId) {
  pendingModuleId = moduleId;
  prequizAnswers = [];
  prequizStep = 0;
  const pq = PREQUIZ[moduleId];
  if (!pq) { openModule(moduleId); return; }
  renderPrequizStep();
  document.getElementById('prequiz-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function renderPrequizStep() {
  const pq = PREQUIZ[pendingModuleId];
  const totalSteps = pq.questions.length;
  const isResult = prequizStep >= totalSteps;
  const content = document.getElementById('prequiz-content');

  if (isResult) {
    // Show recommendation
    const ansIdx = prequizAnswers[0] || 0;
    const rec = pq.recommendations[Math.min(ansIdx, pq.recommendations.length - 1)];
    content.innerHTML = `
      <div style="text-align:center;padding:1rem 0;">
        <div style="font-size:3rem;margin-bottom:1rem;">🎯</div>
        <h3 style="font-family:'Syne',sans-serif;font-size:1.3rem;font-weight:700;margin-bottom:0.75rem;">Rekomendasi Untukmu</h3>
        <p style="color:var(--text-muted);margin-bottom:1.5rem;line-height:1.6;">${rec}</p>
        <p style="color:var(--text-muted);font-size:0.88rem;margin-bottom:1.5rem;">Modul ini cocok untuk level <strong style="color:var(--ocean-light)">${moduleData.find(m=>m.id===pendingModuleId).difficulty}</strong>.</p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <button class="btn-primary" onclick="closePrequiz();openModule(pendingModuleId)">Mulai Baca Modul →</button>
          <button class="btn-outline" onclick="closePrequiz()">Nanti Saja</button>
        </div>
      </div>`;
  } else {
    const q = pq.questions[prequizStep];
    content.innerHTML = `
      <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:1rem;">Pertanyaan ${prequizStep+1} dari ${totalSteps}</div>
      <div style="height:4px;background:var(--input-bg);border-radius:2px;margin-bottom:1.5rem;overflow:hidden;">
        <div style="height:100%;width:${(prequizStep/totalSteps)*100}%;background:var(--ocean-main);border-radius:2px;transition:width 0.3s;"></div>
      </div>
      <p style="font-family:'Syne',sans-serif;font-size:1rem;font-weight:600;margin-bottom:1.25rem;line-height:1.4;">${q.q}</p>
      <div class="prequiz-question" id="pq-opts">
        ${q.opts.map((o,i)=>`<button class="prequiz-option" onclick="selectPrequizOpt(${i})" data-idx="${i}">${o}</button>`).join('')}
      </div>
      <div style="display:flex;justify-content:flex-end;margin-top:1.5rem;">
        <button class="btn-primary" id="pq-next" disabled onclick="nextPrequizStep()" style="opacity:0.5;cursor:not-allowed;">
          ${prequizStep < totalSteps-1 ? 'Selanjutnya →' : 'Lihat Rekomendasi →'}
        </button>
      </div>`;
  }
}
function selectPrequizOpt(idx) {
  document.querySelectorAll('.prequiz-option').forEach((b,i) => b.classList.toggle('selected', i===idx));
  prequizAnswers[prequizStep] = idx;
  const btn = document.getElementById('pq-next');
  if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; }
}
function nextPrequizStep() {
  prequizStep++;
  renderPrequizStep();
}
function closePrequiz() {
  document.getElementById('prequiz-modal').classList.remove('open');
  document.body.style.overflow = '';
}

//  RENDER HELPERS
function renderStars(rating, total=5) {
  let h = '';
  for (let i=1; i<=total; i++) h += `<span class="star${i<=Math.round(rating)?'':' empty'}">★</span>`;
  return h;
}

function renderModuleCard(m) {
  const opened = openedModules.has(m.id);
  const finished = finishedModules.has(m.id);
  return `<div class="module-card reveal-card" onclick="showPrequiz(${m.id})" style="animation-delay:${(m.id-1)*0.06}s">
    <div class="module-thumb" style="background:${m.bg}">
      <span style="position:relative;z-index:1;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.5))">${m.emoji}</span>
      ${finished ? '<span class="module-opened-badge" style="background:rgba(45,189,138,0.9);">✅ Selesai</span>'
        : opened ? '<span class="module-opened-badge">📖 Dibaca</span>' : ''}
    </div>
    <div class="module-body">
      <div class="module-meta"><span class="module-tag ${m.tagClass}">${m.tag}</span><span class="module-difficulty">📊 ${m.difficulty}</span></div>
      <div class="module-title">${m.title}</div>
      <div class="module-desc">${m.desc}</div>
      <div class="module-progress"><div class="module-progress-bar" style="width:${m.progress}%"></div></div>
      <div class="module-footer">
        <div class="module-stars">${renderStars(m.avgRating)}<span class="module-rating-val">${m.avgRating.toFixed(1)}</span></div>
        <div class="module-comments">💬 ${m.comments.length} komentar</div>
      </div>
    </div>
  </div>`;
}

function renderTipCard(t, idx=0) {
  return `<div class="tip-card reveal-card" style="animation-delay:${idx*0.05}s">
    <div class="tip-icon">${t.emoji}</div>
    <div class="tip-title">${t.title}</div>
    <div class="tip-desc">${t.desc}</div>
  </div>`;
}

//  INIT
function init() {
  applyTheme();
  updateNavUser();

  // Render home page elements
  const homeGrid = document.getElementById('home-modules-preview');
  if (homeGrid) homeGrid.innerHTML = moduleData.slice(0,3).map(m => renderModuleCard(m)).join('');

  const homeTips = document.getElementById('home-tips-preview');
  if (homeTips) homeTips.innerHTML = TIPS.slice(0,4).map((t,i) => renderTipCard(t,i)).join('');

  const allModules = document.getElementById('all-modules-grid');
  if (allModules) allModules.innerHTML = moduleData.map(m => renderModuleCard(m)).join('');

  const allTips = document.getElementById('all-tips-grid');
  if (allTips) allTips.innerHTML = TIPS.map((t,i) => renderTipCard(t,i)).join('');

  updateProgressTracker();
  setTimeout(initScrollAnimations, 100);
}

//  SCROLL ANIMATIONS
function initScrollAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold:0.1, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal-card').forEach(el => obs.observe(el));
}

//  NAV
function toggleMobileMenu() {
  document.getElementById('nav-mobile').classList.toggle('open');
}

//  PROGRESS TRACKER
function updateProgressTracker() {
  const pct = Math.round((finishedModules.size / MODULES.length) * 100);
  const bar = document.getElementById('overall-progress-bar');
  const p = document.getElementById('progress-pct');
  const l = document.getElementById('progress-label');
  if (bar) bar.style.width = pct + '%';
  if (p) p.textContent = pct + '%';
  if (l) l.textContent = `${finishedModules.size} dari ${MODULES.length} modul selesai`;
}

//  SEARCH & FILTER
function searchModules(q) {
  const term = q.toLowerCase().trim();
  const grid = document.getElementById('all-modules-grid');
  const noR = document.getElementById('no-results');
  const filtered = term ? moduleData.filter(m => m.title.toLowerCase().includes(term) || m.desc.toLowerCase().includes(term) || m.tag.toLowerCase().includes(term)) : moduleData;
  if (!filtered.length) { grid.innerHTML=''; noR.style.display='block'; }
  else { noR.style.display='none'; grid.innerHTML=filtered.map(m=>renderModuleCard(m)).join(''); setTimeout(initScrollAnimations,80); }
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
}

function filterModules(cat, btn) {
  document.getElementById('module-search').value = '';
  document.getElementById('no-results').style.display = 'none';
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = cat==='all' ? moduleData : moduleData.filter(m=>m.category===cat);
  document.getElementById('all-modules-grid').innerHTML = filtered.map(m=>renderModuleCard(m)).join('');
  setTimeout(initScrollAnimations, 80);
}

//  MODULE MODAL
function openModule(id) {
  const m = moduleData.find(x => x.id===id);
  currentModuleId = id;
  currentRating = 0;
  currentCommentRating = 0;
  openedModules.add(id);

  const hero = document.getElementById('modal-hero');
  hero.style.background = m.bg;
  hero.innerHTML = `<span style="font-size:4.5rem;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.5))">${m.emoji}</span><button class="modal-close" onclick="closeModal()">✕</button>`;

  document.getElementById('modal-tags').innerHTML = `<span class="module-tag ${m.tagClass}">${m.tag}</span><span class="module-tag">${m.difficulty}</span>`;
  document.getElementById('modal-title').textContent = m.title;
  document.getElementById('modal-desc').textContent = m.desc;

  // Materi content + tombol selesai
  document.getElementById('materi-content').innerHTML = m.materi + `
    <button class="materi-done-btn" onclick="markModuleDone(${id})">
      ✅ Selesai Membaca — Lihat Komentar &amp; Beri Rating
    </button>`;

  renderRatingSection(m);
  renderComments(m);
  switchTabById('materi');

  document.getElementById('module-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  updateProgressTracker();
}

function markModuleDone(id) {
  finishedModules.add(id);
  showToast('✅ Modul selesai! Bagikan pendapatmu di tab Komentar.');
  switchTabById('komentar');
  updateProgressTracker();
  refreshModuleGrids();
}

function closeModal() {
  document.getElementById('module-modal').classList.remove('open');
  document.body.style.overflow = '';
  refreshModuleGrids();
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('module-modal')) closeModal();
}

function refreshModuleGrids() {
  const homeGrid = document.getElementById('home-modules-preview');
  if (homeGrid) homeGrid.innerHTML = moduleData.slice(0,3).map(m=>renderModuleCard(m)).join('');
  const allGrid = document.getElementById('all-modules-grid');
  if (allGrid) allGrid.innerHTML = moduleData.map(m=>renderModuleCard(m)).join('');
  setTimeout(initScrollAnimations, 80);
}

//  TABS
function switchTab(name, btn) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}
function switchTabById(name) {
  const names = ['materi','rating','komentar'];
  document.querySelectorAll('.modal-tab').forEach((t,i) => t.classList.toggle('active', i===names.indexOf(name)));
  document.querySelectorAll('.tab-panel').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
}

//  RATING
function renderRatingSection(m) {
  updateStarInput(0, 'star-input');
  document.getElementById('rating-summary').innerHTML = `<span class="rating-big">${m.avgRating.toFixed(1)}</span> ${renderStars(m.avgRating)} <span style="margin-left:4px">${m.totalRatings} penilaian</span>`;
  const max = Math.max(...m.ratings, 1);
  const labels = ['1 ★','2 ★','3 ★','4 ★','5 ★'];
  document.getElementById('rating-bar-chart').innerHTML = m.ratings.map((v,i) => `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;font-size:0.82rem;">
      <span style="width:28px;text-align:right;color:var(--text-muted)">${labels[i]}</span>
      <div style="flex:1;height:8px;background:var(--input-bg);border-radius:4px;overflow:hidden;">
        <div style="height:100%;width:${(v/max*100).toFixed(0)}%;background:var(--amber);border-radius:4px;transition:width 0.6s;"></div>
      </div>
      <span style="width:24px;color:var(--text-muted)">${v}</span>
    </div>`).join('');
}

function setRating(val) { currentRating = val; updateStarInput(val, 'star-input'); }
function updateStarInput(val, id) {
  document.querySelectorAll('#' + id + ' .star-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.val || b.dataset.cv) <= val));
}

function submitRating() {
  if (!currentRating) { showToast('⚠️ Pilih jumlah bintang terlebih dahulu!'); return; }
  const m = moduleData.find(x => x.id===currentModuleId);
  m.ratings[currentRating-1]++;
  m.totalRatings++;
  m.avgRating = +(m.ratings.reduce((a,v,i) => a+v*(i+1), 0) / m.totalRatings).toFixed(1);
  renderRatingSection(m);
  showToast(`⭐ Rating ${currentRating} bintang berhasil dikirim!`);
  currentRating = 0;
  updateStarInput(0, 'star-input');
}


//  COMMENTS
const avatarColors = ['#e85d3a','#29a5d6','#2dbd8a','#f0a500','#a855f7','#ec4899','#14b8a6'];
function getInitials(n) { return n.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2); }
function getColor(n) { let h=0; for (let c of n) h=(h*31+c.charCodeAt(0))%avatarColors.length; return avatarColors[h]; }

function renderComments(m) {
  const list = document.getElementById('comments-list');
  if (!m.comments.length) {
    list.innerHTML = '<p style="color:var(--text-muted);font-size:0.88rem;text-align:center;padding:1.5rem 0">Belum ada komentar. Jadilah yang pertama! 💬</p>';
  } else {
    list.innerHTML = m.comments.map(c => `
      <div class="comment-item">
        <div class="comment-avatar" style="background:${c.color}22;color:${c.color}">${getInitials(c.name||'Anonim')}</div>
        <div class="comment-body">
          <div class="comment-header"><span class="comment-name">${c.name||'Anonim'}</span><span class="comment-time">${c.time}</span></div>
          ${c.stars ? `<div class="comment-stars">${renderStars(c.stars)}</div>` : ''}
          <p class="comment-text">${c.text}</p>
        </div>
      </div>`).join('');
}

  // Comment form - only if logged in
    const form = document.getElementById('comment-form-area');
    if (!form) return;
    if (!currentUser) {
    form.innerHTML = `
    <div class="comment-login-wall">
        <div style="font-size:2rem;margin-bottom:0.75rem;">🔒</div>
        <p>Kamu harus <strong>masuk</strong> untuk bisa memberikan komentar.</p>
        <button class="btn-primary" onclick="closeModal();openAuth('login')">Masuk / Daftar</button>
    </div>`;
} else {
    form.innerHTML = `
    <div class="comment-form">
        <div class="comment-name-input" style="background:var(--input-bg);border:1px solid var(--card-border);padding:10px 14px;border-radius:var(--radius-sm);font-size:0.88rem;color:var(--text-muted);">
            💬 Komentar sebagai <strong style="color:var(--ocean-light)">${currentUser.username}</strong>
        </div>
        <textarea class="comment-textarea" id="comment-text" placeholder="Bagikan pendapatmu tentang modul ini..." maxlength="500"></textarea>
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
        <div style="display:flex;gap:6px;align-items:center;" id="comment-star-input">
            <span style="font-size:0.8rem;color:var(--text-muted)">Rating:</span>
            <button class="star-btn" data-cv="1" onclick="setCommentRating(1)">★</button>
            <button class="star-btn" data-cv="2" onclick="setCommentRating(2)">★</button>
            <button class="star-btn" data-cv="3" onclick="setCommentRating(3)">★</button>
            <button class="star-btn" data-cv="4" onclick="setCommentRating(4)">★</button>
            <button class="star-btn" data-cv="5" onclick="setCommentRating(5)">★</button>
            </div>
            <button class="btn-primary" style="font-size:0.85rem;padding:10px 20px;margin-left:auto;" onclick="submitComment()">Kirim Komentar</button>
        </div>
    </div>`;
    }
}

function setCommentRating(val) {
    currentCommentRating = val;
    document.querySelectorAll('#comment-star-input .star-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.cv)<=val));
}

function submitComment() {
    if (!currentUser) { showToast('⚠️ Harap masuk terlebih dahulu!'); return; }
    const text = document.getElementById('comment-text').value.trim();
    if (!text) { showToast('⚠️ Tulis komentar terlebih dahulu!'); return; }
    const m = moduleData.find(x => x.id===currentModuleId);
    m.comments.unshift({name:currentUser.username, text, stars:currentCommentRating, time:'Baru saja', color:getColor(currentUser.username)});
    renderComments(m);
    showToast('💬 Komentar berhasil dikirim, terima kasih!');
}

//  QUIZ
const QUIZ_CAT_NAMES = {umum:'🌊 Pengetahuan Umum', polusi:'🛢️ Polusi & Sampah', ekosistem:'🪸 Ekosistem & Biodiversitas'};

function startQuiz(cat) {
    quizCategory = cat;
    quizQuestions = [...QUIZ_DATA[cat]].sort(() => Math.random()-0.5);
    quizIndex=0; quizScore=0; quizCorrect=0; quizTimesUsed=[];
    document.getElementById('quiz-lobby').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-active').style.display = 'block';
    document.getElementById('quiz-cat-label').textContent = QUIZ_CAT_NAMES[cat];
    showQuestion();
}

function showQuestion() {
    const q = quizQuestions[quizIndex];
    quizAnswered = false;
    document.getElementById('quiz-q-num').textContent = `Pertanyaan ${quizIndex+1} dari ${quizQuestions.length}`;
    document.getElementById('quiz-question').textContent = q.q;
    document.getElementById('quiz-progress-bar').style.width = `${(quizIndex/quizQuestions.length)*100}%`;
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('quiz-next-btn').style.display = 'none';
    const opts = document.getElementById('quiz-options');
    opts.innerHTML = q.opts.map((opt,i) => `
    <button class="quiz-option-btn" onclick="answerQuiz(${i})" id="opt-${i}">
        <span class="quiz-letter">${['A','B','C','D'][i]}</span>${opt}
    </button>`).join('');
    clearInterval(quizTimer);
    quizTimeLeft = 30;
    document.getElementById('quiz-timer').textContent = `⏱ ${quizTimeLeft}s`;
    document.getElementById('quiz-timer').style.color = 'var(--ocean-light)';
    quizTimer = setInterval(() => {
    quizTimeLeft--;
    document.getElementById('quiz-timer').textContent = `⏱ ${quizTimeLeft}s`;
    if (quizTimeLeft<=10) document.getElementById('quiz-timer').style.color='var(--coral)';
    if (quizTimeLeft<=0) { clearInterval(quizTimer); if (!quizAnswered) answerQuiz(-1); }
    }, 1000);
}

function answerQuiz(selected) {
    if (quizAnswered) return;
        quizAnswered = true;
        clearInterval(quizTimer);
        const timeUsed = 30-quizTimeLeft;
        quizTimesUsed.push(timeUsed);
        const q = quizQuestions[quizIndex];
        const isCorrect = selected===q.ans;
    if (isCorrect) { quizCorrect++; quizScore += Math.max(10, 30-timeUsed); }
    for (let i=0; i<q.opts.length; i++) {
    const btn = document.getElementById('opt-'+i);
    btn.disabled = true;
    if (i===q.ans) btn.classList.add('correct');
    else if (i===selected) btn.classList.add('wrong');
    }
    const fb = document.getElementById('quiz-feedback');
    fb.style.display = 'block';
    if (selected===-1) {
        fb.style.background='rgba(240,165,0,0.1)'; fb.style.borderLeft='3px solid var(--amber)';
        fb.innerHTML = `<strong style="color:var(--amber)">⏰ Waktu Habis!</strong><br><span style="color:var(--text-muted)">Jawaban benar: <strong style="color:var(--green-light)">${q.opts[q.ans]}</strong></span><br><span style="color:var(--text-muted);margin-top:4px;display:block">${q.expl}</span>`;
        } else if (isCorrect) {
            fb.style.background='rgba(45,189,138,0.1)'; fb.style.borderLeft='3px solid var(--green)';
            fb.innerHTML = `<strong style="color:var(--green)">✅ Benar! +${Math.max(10,30-timeUsed)} poin</strong><br><span style="color:var(--text-muted);margin-top:4px;display:block">${q.expl}</span>`;
    } else {
        fb.style.background='rgba(232,93,58,0.1)'; fb.style.borderLeft='3px solid var(--coral)';
        fb.innerHTML = `<strong style="color:var(--coral)">❌ Kurang tepat.</strong> Jawaban benar: <strong style="color:var(--green-light)">${q.opts[q.ans]}</strong><br><span style="color:var(--text-muted);margin-top:4px;display:block">${q.expl}</span>`;
}
    fb.style.borderRadius = '0 var(--radius-sm) var(--radius-sm) 0';
    fb.style.padding = '1rem 1.25rem';
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.style.display = 'block';
    nextBtn.textContent = quizIndex<quizQuestions.length-1 ? 'Pertanyaan Berikutnya →' : 'Lihat Hasil →';
}

function nextQuestion() {
    quizIndex++;
    if (quizIndex>=quizQuestions.length) showQuizResult(); else showQuestion();
}

function showQuizResult() {
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
    document.getElementById('quiz-progress-bar').style.width = '100%';
    const pct = Math.round((quizCorrect/quizQuestions.length)*100);
    const avgTime = Math.round(quizTimesUsed.reduce((a,b)=>a+b,0)/quizTimesUsed.length);
    document.getElementById('result-score').textContent = quizScore;
    document.getElementById('result-correct').textContent = `${quizCorrect}/${quizQuestions.length}`;
    document.getElementById('result-time').textContent = avgTime+'s';
    let emoji,title,desc;
    if (pct>=90) { emoji='🏆'; title='Luar Biasa!'; desc='Kamu adalah Penjaga Laut sejati!'; }
        else if (pct>=70) { emoji='🌊'; title='Bagus Sekali!'; desc='Pengetahuanmu tentang laut sudah sangat baik.'; }
        else if (pct>=50) { emoji='🐠'; title='Lumayan!'; desc='Sudah cukup baik! Pelajari lagi modul-modul kami.'; }
    else { emoji='🌱'; title='Terus Belajar!'; desc='Jangan menyerah! Laut Indonesia butuh lebih banyak penjaga yang berpengetahuan.'; }
    document.getElementById('result-emoji').textContent = emoji;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-desc').textContent = desc;
    quizHistory.unshift({cat:QUIZ_CAT_NAMES[quizCategory], score:quizScore, correct:quizCorrect, total:quizQuestions.length, pct, time:new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'})});
    renderScoreHistory();
    showToast(`🎉 Kuis selesai! Skor: ${quizScore} poin`);
}

function renderScoreHistory() {
    const el = document.getElementById('score-history');
    if (!el) return;
    if (!quizHistory.length) {
    el.innerHTML = '<p style="color:var(--text-muted);font-size:0.88rem;text-align:center;padding:1rem 0">Belum ada kuis yang diselesaikan. Mulai kuis di atas!</p>';
    return;
    }
    el.innerHTML = quizHistory.slice(0,5).map(h => `
    <div style="display:flex;align-items:center;gap:1rem;padding:0.75rem 0;border-bottom:1px solid var(--card-border);">
        <div style="font-size:1.5rem;">${h.pct>=90?'🏆':h.pct>=70?'🌊':h.pct>=50?'🐠':'🌱'}</div>
        <div style="flex:1;"><div style="font-size:0.88rem;font-weight:500;">${h.cat}</div><div style="font-size:0.78rem;color:var(--text-muted)">${h.correct}/${h.total} benar · ${h.time}</div></div>
        <div style="font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:700;color:${h.pct>=70?'var(--green)':h.pct>=50?'var(--amber)':'var(--coral)'}">${h.pct}%</div>
    </div>`).join('');
}

function exitQuiz() {
    clearInterval(quizTimer);
    document.getElementById('quiz-active').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-lobby').style.display = 'block';
}
function retryQuiz() {
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-lobby').style.display = 'block';
    renderScoreHistory();
}

//  TOAST
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

//  KEYBOARD & SCROLL
document.addEventListener('keydown', e => { if (e.key==='Escape') { closeModal(); closeAuth(); closePrequiz(); } });
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) nav.style.background = window.scrollY>20 ? (isLight ? 'rgba(232,244,251,0.97)' : 'rgba(4,10,20,0.95)') : 'var(--nav-bg)';
});

//  START
init();