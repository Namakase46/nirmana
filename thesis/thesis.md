Judul: APLIKASI WEB SIMULASI DESAIN NIRMANA 3D DENGAN PAKU UNTUK MENINGKATKAN PEMBELAJARAN DESAIN VISUAL

-------
# Abstrak
Pembelajaran Nirmana Trimatra (3D) dalam desain visual sering kali terkendala oleh metode tradisional “paku dan papan” yang membatasi fleksibilitas, kecepatan eksplorasi, serta membutuhkan biaya dan waktu yang signifikan. Penelitian ini bertujuan mengembangkan aplikasi web interaktif berbasis JavaScript, Vue.js, dan Three.js untuk mensimulasikan proses pembuatan Nirmana 3D secara digital, sehingga mahasiswa dapat memvisualisasikan, memanipulasi, dan menyimpan desain tanpa keterbatasan fisik. Metodologi pengembangan menggunakan model waterfall, meliputi tahap komunikasi, perencanaan, perancangan antarmuka, konstruksi aplikasi, serta pengujian. Fitur utama meliputi 2D Studio, 3D Studio, pengaturan papan dan paku, serta penyimpanan desain dalam format JSON pada database PostgreSQL. Uji coba dilakukan kepada mahasiswa Desain Komunikasi Visual melalui kuesioner, wawancara, dan uji fungsionalitas. Hasilnya menunjukkan bahwa aplikasi mampu meningkatkan pemahaman konsep spasial, mempercepat iterasi desain, serta memberikan fleksibilitas eksplorasi bentuk. Responden juga menilai positif akses berbasis web yang memudahkan penggunaan lintas perangkat tanpa instalasi tambahan. Simpulan penelitian menegaskan bahwa aplikasi ini tidak hanya menjadi media pembelajaran efektif, tetapi juga mendukung pemerataan akses edukasi desain melalui eliminasi hambatan biaya dan material, serta relevan dengan kebutuhan industri kreatif modern

Kata Kunci: Nirmana Trimatra, Visualisasi 3D, Three.js, Aplikasi Web, Desain Visual

-------
# KATA PENGANTAR
Puji syukur ke hadirat Tuhan Yang Maha Esa atas rahmat dan karunia-Nya, sehingga skripsi ini dapat diselesaikan dengan baik. Skripsi dengan judul "ALGORITMA EKSTRUSI BERBASIS GRID 2D-KE-3D UNTUK PEMODELAN NIRMANA TRIMATRA BERBASIS WEB" ini disusun sebagai salah satu syarat untuk memperoleh gelar Sarjana Komputer pada Program Studi Computer Science, BINUS Online.
Dalam penyusunan skripsi ini, penulis banyak mendapatkan bimbingan, dukungan, dan bantuan dari berbagai pihak. Oleh karena itu, dengan segala kerendahan hati, penulis menyampaikan ucapan terima kasih yang tulus kepada:
Dr. Nelly, S.Kom., M.M., selaku rektor Universitas Bina Nusantara.
Immanuela Puspasari Saputro, S.Si., M.T., selaku Head of Computer Science Study Program BINUS Online Learning.
Dr. Emmy Harna Yossy, S.Kom., M.T.I., selaku Pembimbing Skripsi, atas kesabaran, waktu, ilmu, serta arahan yang berharga dari awal hingga akhir penyusunan skripsi ini.
Keluarga tercinta, Ayah, Ibu, dan seluruh anggota keluarga, atas doa, dukungan moral, materi, dan kasih sayang yang tak terhingga.
Semua pihak yang tidak dapat disebutkan satu per satu, atas segala bantuan, masukan, dan motivasi yang telah diberikan selama proses penyusunan skripsi ini.
Penulis menyadari bahwa skripsi ini masih jauh dari sempurna. Oleh karena itu, kritik dan saran yang membangun sangat diharapkan demi perbaikan di masa mendatang. Semoga skripsi ini dapat memberikan manfaat dan kontribusi bagi pengembangan ilmu pengetahuan, khususnya dalam bidang desain visual dan teknologi informasi.

-------
# DAFTAR ISI

HALAMAN JUDUL	1
HALAMAN SAMPUL	1
ABSTRAK	2
KATA PENGANTAR	4
DAFTAR ISI	5
DAFTAR TABEL	6
DAFTAR GAMBAR	7
DAFTAR LAMPIRAN	8
BAB 1	9
PENDAHULUAN	9
1.1. Latar Belakang Masalah	9
1.2. Rumusan Masalah	12
1.3. Tujuan Penelitian	13
1.4. Manfaat Penelitian	13
1.5. Ruang Lingkup Penelitian	14
BAB 2	17
TINJAUAN PUSTAKA	17
2.1. Landasan Teori	17
2.1.1. Nirmana	17
2.1.2. Visualisasi 3D dalam Desain	17
2.1.3. Aplikasi Berbasis Web untuk Desain (Three.js)	19
2.2. Kerangka Pemikiran	21
2.3. Studi Terkait dan Research Gap	22
2.3.1 Penelitian Terkait	23
2.3.2 Research Gap	25
BAB 3	26
METODOLOGI PENELITIAN	26
3.1 Metode Penelitian	26
3.2 Identifikasi Masalah	30
3.2.1 Masalah Pembelajaran Nirmana Trimatra Tradisional	30
3.2.2 Gap Teknologi dalam Pendidikan Desain	31
3.2.3 Analisis Kebutuhan Pengguna	32
3.3 Perancangan Platform	33
3.3.1 Arsitektur Sistem	33
3.3.2 Database Schema	35
3.4 Desain Aplikasi	36
3.4.1 Pendekatan Desain UI/UX	36
3.4.2 Struktur Halaman dan Navigasi	37
3.4.3 Contoh Antarmuka	38
3.4.4 Prinsip Desain yang Diterapkan	40
3.5 Pengembangan Aplikasi	41
3.5.1 Teknologi yang Digunakan	41
3.5.2 Arsitektur Sistem	43
3.5.3 Deployment Aplikasi	48
3.6 Pengujian Aplikasi	50
3.6.1 Metode Pengujian	50
3.6.2 Instrumen Pengujian	55
BAB IV	63
HASIL DAN PEMBAHASAN	63
4.1 Spesifikasi Sistem	63
4.2 Prosedur Penggunaan Aplikasi	63
4.2.1 Home	63
4.2.2 Sign Up	64
4.2.3 Forgot Password	65
4.2.4 Sign In	65
4.2.5 Edit Profile	66
4.2.6 View Profile	67
4.2.7 2D Studio	68
4.2.8 3D Studio	69
4.2.9 Board Control Panel	69
4.2.10 Nail Control Panel	70
4.2.11 Save Project	72
4.3 Testing	72
4.3.1 Metode Pengujian	72
4.3.2 Instrumen Kuesioner Pengujian	73
4.4 Evaluasi	74
4.4.1 Pengujian Fungsional dengan Blackbox	74
4.4.2 Pengujian Berbasis User Acceptance (UAT)	75
BAB V	76
SIMPULAN DAN SARAN	76
5.1 Simpulan	76
5.2 Saran	76
DAFTAR PUSTAKA	77


-------
BAB 1 - PENDAHULUAN
1.1. Latar Belakang Masalah 
Konversi data struktur 2D menjadi representasi visual 3D merupakan permasalahan fundamental dalam computer graphics dan visualisasi berbasis web. Tantangan utama meliputi transformasi koordinat diskrit pada grid 2D (x, y) ke sistem koordinat spasial 3D (x, y, z), pengelolaan atribut geometris seperti tinggi (height), lebar (width), dan skala objek, serta optimasi rendering untuk menampilkan ratusan hingga ribuan objek secara simultan tanpa degradasi performa. Dalam konteks aplikasi desain visual seperti Nirmana Trimatra—yang mensimulasikan penataan paku pada papan dengan variasi tinggi dan ketebalan—kompleksitas bertambah dengan kebutuhan interaksi real-time (rotasi, zoom, pan) dan akurasi representasi spasial yang tinggi.

Metode konversi 2D-to-3D konvensional sering menggunakan pendekatan vertex-by-vertex atau mesh generation yang memerlukan komputasi intensif dan kurang efisien untuk objek repetitif dengan geometri seragam. Menurut Chen (2024), rendering model 3D berbasis WebGL menghadapi bottleneck pada operasi transformasi individual untuk setiap objek, dengan response time mencapai 200-300ms untuk 1000+ objek jika tidak dioptimasi. Pendekatan tradisional juga menghasilkan grid yang tidak terpusat pada origin (0,0,0), menyebabkan kesulitan dalam navigasi kamera dan rotasi yang tidak natural. Sebagai contoh, grid 20×20 dengan formula konversi standar `pos = gridCoord × spacing` akan menghasilkan koordinat dari (0,0) hingga (19,19), yang secara visual terletak di kuadran positif saja dan memerlukan offset manual untuk centering.

Permasalahan spesifik yang diidentifikasi dalam penelitian ini meliputi:
1. **Transformasi Koordinat yang Tidak Efisien**: Konversi grid 2D ke 3D sering tidak menghasilkan objek yang terpusat pada origin, mempersulit operasi kamera dan rotasi orbital.
2. **Overhead Rendering untuk Objek Repetitif**: Pembuatan mesh terpisah untuk setiap objek (misalnya 1000 paku) mengakibatkan draw calls berlebihan dan frame rate drop.
3. **Kompleksitas Transformasi Multi-Atribut**: Mengatur posisi, skala (tinggi/lebar), dan rotasi objek secara terpisah memerlukan multiple function calls yang tidak efisien.
4. **Kurangnya Dokumentasi Algoritma Konversi**: Implementasi Three.js/WebGL sering bersifat black-box tanpa penjelasan matematis yang jelas tentang pipeline transformasi.

Penelitian ini mengusulkan solusi berbasis **grid-based extrusion algorithm** dengan komponen utama: (1) sistem koordinat terbalik (reversed coordinate system) untuk centering otomatis, (2) InstancedMesh untuk rendering geometri seragam dengan efisiensi tinggi, dan (3) transformasi berbasis Matrix4 yang menggabungkan scale, translation, dan positioning dalam single operation. Pendekatan ini tidak hanya mengatasi limitasi teknis tetapi juga menyediakan framework yang dapat direplikasi untuk aplikasi visualisasi 3D berbasis web lainnya.  
Penerapan visualisasi 3D dalam pendidikan desain menawarkan solusi transformatif untuk mengatasi kendala ini. Alat 3D memfasilitasi pemahaman spasial yang lebih dalam, khususnya untuk Nirmana Trimatra (3D) yang memerlukan pertimbangan kedalaman, volume, dan bentuk. Metode manual kesulitan merepresentasikan dan memanipulasi objek 3D secara efektif. Sebaliknya, lingkungan digital mendorong eksperimen cepat dan proses desain iteratif, memungkinkan mahasiswa mengeksplorasi berbagai konsep artistik dan variasi komposisi dengan kecepatan dan fleksibilitas yang belum pernah ada. Kemampuan memanipulasi elemen 3D secara instan meningkatkan pemahaman teoritis Nirmana dan memperkaya pengalaman belajar. Adopsi teknologi 3D ini juga langsung mempersiapkan mahasiswa untuk alat dan alur kerja profesional. Menurut Dere & Kalelioglu (2020), penggunaan environment desain 3D berbasis web secara signifikan meningkatkan kemampuan visualisasi spasial dan rotasi mental siswa, dengan peningkatan skor tes yang mencakup visualisasi lintas-seksi objek, menunjukkan potensi transformatif teknologi ini dalam pengembangan keterampilan spasial. 
Transformasi desain dari 2D ke 3D dalam lingkungan digital didasarkan pada prinsip-prinsip geometris dan komputasi canggih, melibatkan konversi data planar menjadi representasi spasial. Proses ini melibatkan perhitungan matematis rumit untuk memproyeksikan dan memanipulasi objek 3D, seringkali menggunakan perkalian matriks untuk mengubah properti objek secara dinamis seperti rotasi, skala, dan translasi. Aplikasi berbasis web yang diusulkan akan memanfaatkan prinsip ini untuk mengubah desain grid 2D menjadi tampilan 3D interaktif, mensimulasikan penataan paku pada papan dengan berbagai ukuran dan ketebalan. Mahasiswa dapat "membangun" komposisi 3D secara virtual, melihat dari berbagai sudut, dan melakukan penyesuaian instan. Pendekatan ini mereplikasi pengalaman taktil dan melampauinya dengan eksplorasi skenario tak terbatas tanpa batasan material atau waktu. Integrasi simulasi paku ini memungkinkan representasi visual akurat tentang bagaimana perubahan elemen 2D diterjemahkan ke bentuk 3D, memperdalam pemahaman hubungan antar dimensi, menjadikannya alat pedagogis yang kuat.  
Aplikasi berbasis web ini akan menjadi aset tak ternilai bagi mahasiswa Desain Komunikasi Visual (DKV) untuk visualisasi desain yang lebih efisien dan interaktif. Manfaat utamanya meliputi peningkatan pemahaman spasial, kemampuan eksperimen yang dipercepat tanpa batasan fisik, dan pengembangan keterampilan digital yang relevan dengan industri. Mahasiswa dapat melihat dan memanipulasi desain dalam 3D, memutar, memperbesar, dan mengubah perspektif dengan mudah, memungkinkan pemahaman intuitif tentang interaksi elemen 3D. Proses iteratif yang cepat mendorong eksplorasi berani tanpa takut kesalahan atau pemborosan material. Lebih dari sekadar alat bantu, platform ini juga mengembangkan kompetensi abad ke-21 seperti berpikir komputasi, pemecahan masalah digital, dan kolaborasi virtual. Menurut Zheng et al. (2024), integrasi platform simulasi virtual dalam kurikulum teknik berkorelasi langsung dengan peningkatan minat belajar, tingkat keterampilan, dan daya saing mahasiswa di pasar kerja melalui peningkatan skor kursus dan partisipasi kompetisi.  
Selain manfaat pedagogis dan pengembangan keterampilan, aplikasi ini berpotensi mendemokratisasi akses ke eksplorasi desain tingkat lanjutan. Dengan menghilangkan batasan fisik dan biaya material metode "paku dan papan" tradisional, mahasiswa dari berbagai latar belakang ekonomi akan memiliki kesempatan yang sama untuk bereksperimen dan mengembangkan kemampuan desain 3D. Tidak ada lagi kekhawatiran biaya material yang sering menjadi hambatan finansial, membuka pintu bagi kreativitas dan inovasi yang lebih luas. Platform digital ini juga meningkatkan aksesibilitas, memungkinkan pembelajaran kapan saja dan di mana saja, yang krusial dalam lingkungan pendidikan modern dengan model pembelajaran hibrida atau jarak jauh. Kemampuan berbagi dan mengulas karya secara digital akan meningkatkan kolaborasi antar mahasiswa dan instruktur, menciptakan ekosistem pembelajaran yang dinamis dan interaktif. Dampak sosial demokratisasi ini signifikan, karena dapat menumbuhkan generasi desainer yang lebih beragam dan inklusif, memperkaya lanskap desain secara keseluruhan. Dengan demikian, aplikasi ini tidak hanya alat pendidikan tetapi juga katalisator untuk perubahan positif dalam aksesibilitas dan kesetaraan pendidikan desain. 
Mengingat potensi besar teknologi digital dalam pendidikan desain, pengembangan aplikasi web untuk simulasi Nirmana Trimatra menjadi sangat relevan dan mendesak. Tantangan dalam mengimplementasikan prinsip Nirmana secara mendalam dan fleksibel dalam kurikulum konvensional memerlukan solusi inovatif. Aplikasi ini tidak hanya mengatasi keterbatasan fisik metode tradisional tetapi juga memberikan pengalaman belajar yang lebih menarik, interaktif, dan relevan dengan kebutuhan industri. Fokus pada simulasi "paku dan papan" secara digital, dengan kemampuan memanipulasi berbagai parameter, akan memastikan esensi Nirmana tetap terjaga, sementara fleksibilitas eksplorasi ditingkatkan secara eksponensial. Selain itu, dengan menyediakan platform yang memungkinkan peralihan mudah antara tampilan 2D dan 3D, aplikasi ini akan membantu mahasiswa memahami hubungan fundamental antara gambar datar dan representasi spasial. Tujuannya adalah memberdayakan mahasiswa DKV dengan alat yang memungkinkan mereka menguasai Nirmana Trimatra secara lebih efektif, mengembangkan keterampilan digital esensial, dan mempersiapkan karier sukses di bidang desain yang terus berkembang. Penelitian oleh Chen (2024) menunjukkan bahwa interaksi real-time model 3D berbasis web secara signifikan meningkatkan efisiensi rendering dan pengalaman pengguna, memperkuat argumen untuk pengembangan platform semacam ini.

1.2. Rumusan Masalah 
Berdasarkan latar belakang diatas, maka rumusan masalah dari penelitian ini adalah: 
  1. Bagaimana merancang algoritma konversi grid 2D-to-3D yang menghasilkan objek terpusat pada origin dengan transformasi koordinat yang efisien?
  2. Bagaimana mengimplementasikan pipeline transformasi berbasis Matrix4 dan InstancedMesh untuk rendering optimal ratusan hingga ribuan objek 3D secara simultan?
  3. Bagaimana performa algoritma ekstrusi berbasis grid dalam hal frame rate, response time interaksi, dan akurasi transformasi koordinat dibandingkan dengan metode konvensional?
  4. Bagaimana efektivitas visualisasi 3D hasil algoritma dalam mendukung pemahaman konsep spasial pada aplikasi pembelajaran Nirmana Trimatra?

1.3. Tujuan Penelitian 
Penelitian ini dilakukan bertujuan untuk:
  1. Merancang dan mengimplementasikan algoritma ekstrusi berbasis grid (grid-based extrusion algorithm) yang mentransformasi data struktur 2D menjadi representasi visual 3D dengan sistem koordinat terbalik (reversed coordinate system) untuk centering otomatis pada origin.
  2. Mengembangkan pipeline transformasi berbasis Matrix4 dan teknik InstancedMesh untuk optimasi rendering objek 3D repetitif pada aplikasi web berbasis Three.js/WebGL.
  3. Mengevaluasi performa algoritma melalui metrik kuantitatif (frame rate, response time, memory usage) dan validasi akurasi transformasi koordinat.
  4. Mendemonstrasikan aplikabilitas algoritma pada domain pembelajaran Nirmana Trimatra sebagai use case, dengan evaluasi efektivitas visualisasi 3D terhadap pemahaman konsep spasial mahasiswa DKV.
  5. Menyediakan dokumentasi algoritma komprehensif dan standalone demonstration code sebagai technical reference untuk replikasi dan pengembangan lebih lanjut. 

1.4. Manfaat Penelitian 
Manfaat yang diperoleh dari penelitian ini adalah sebagai berikut:

1. **Manfaat Akademis (Teoretis)**
   - Memberikan kontribusi pada body of knowledge dalam bidang computer graphics, khususnya algoritma konversi 2D-to-3D berbasis grid dengan reversed coordinate system
   - Menyediakan dokumentasi komprehensif tentang implementasi Matrix4 transformation pipeline dan InstancedMesh optimization dalam konteks WebGL/Three.js
   - Menjadi referensi akademis untuk penelitian lanjutan tentang web-based 3D visualization, grid-based modeling, dan real-time rendering optimization
   - Mengisi research gap pada dokumentasi algoritma konversi 2D-3D yang sering bersifat black-box dalam literatur Three.js

2. **Manfaat Praktis (Aplikatif)**
   - Menyediakan framework open-source yang dapat digunakan developer untuk implementasi konversi grid 2D-to-3D pada aplikasi web mereka (data visualization, architectural modeling, educational tools)
   - Memberikan solusi performa tinggi untuk rendering objek repetitif dalam jumlah besar (1000+ objects) pada platform web tanpa memerlukan plugin atau native installation
   - Mendemonstrasikan best practices dalam implementasi OOP JavaScript untuk aplikasi 3D graphics yang maintainable dan scalable
   - Menyediakan standalone demonstration code (thesis/script.js) sebagai learning resource untuk mahasiswa yang mempelajari Three.js dan WebGL

3. **Manfaat untuk Domain Pendidikan Desain**
   - Memberikan solusi digital untuk pembelajaran Nirmana Trimatra yang mengatasi keterbatasan metode fisik "paku dan papan" (biaya material, keterbatasan eksplorasi)
   - Meningkatkan aksesibilitas pembelajaran desain 3D melalui platform berbasis web yang cross-platform dan tidak memerlukan instalasi software khusus
   - Menyediakan tool interaktif yang memfasilitasi pemahaman konsep spasial, komposisi 3D, dan transformasi geometris secara visual dan hands-on

4. **Manfaat untuk Industri Kreatif dan Teknologi**
   - Memberikan proof-of-concept untuk web-based 3D modeling tools yang dapat diintegrasikan dalam workflow digital creative industry
   - Mendemonstrasikan viabilitas WebGL/Three.js sebagai alternative untuk native 3D applications dalam konteks educational tools dan rapid prototyping
   - Menyediakan technical documentation yang dapat mempercepat development cycle untuk startup atau perusahaan yang mengembangkan web-based visualization platforms
      Penelitian ini diharapkan dapat memberikan kontribusi terhadap pengembangan ilmu pengetahuan, khususnya dalam bidang Desain Komunikasi Visual (DKV) dan media pembelajaran berbasis teknologi. Melalui pengembangan aplikasi simulasi Nirmana Trimatra berbasis web, penelitian ini dapat menjadi referensi dalam penerapan pendekatan digital untuk pembelajaran konsep visual dasar, serta memperkaya kajian akademik mengenai integrasi antara prinsip Nirmana dan teknologi visualisasi tiga dimensi menggunakan JavaScript dan Three.js. Penelitian ini juga dapat mendorong studi lanjutan terkait pengembangan media interaktif dalam pendidikan seni dan desain.
  2. Manfaat Praktis
      Secara praktis, penelitian ini bermanfaat bagi mahasiswa dan pengajar dalam lingkungan pendidikan desain, khususnya program studi Desain Komunikasi Visual. Aplikasi yang dikembangkan memungkinkan proses pembelajaran Nirmana Trimatra menjadi lebih interaktif, efisien, dan fleksibel, tanpa ketergantungan pada alat dan bahan fisik seperti paku dan papan. Mahasiswa dapat lebih mudah mengeksplorasi bentuk, komposisi, serta prinsip spasial secara langsung melalui media digital. Selain itu, aplikasi ini juga memberikan alternatif pembelajaran jarak jauh atau hybrid, serta membuka akses yang lebih luas dan merata bagi mahasiswa dari berbagai latar belakang ekonomi.

1.5. Ruang Lingkup Penelitian
1.5.1 Cakupan 
Penelitian ini mencakup aspek-aspek berikut:

**A. Perancangan dan Implementasi Algoritma**
1. **Grid-Based Coordinate Conversion Algorithm**
   - Transformasi koordinat diskrit 2D (x, y) pada grid M×N menjadi koordinat spasial 3D (x, y, z)
   - Implementasi reversed coordinate system dengan formula: `pos = -((coord - (size-1)/2) × spacing)`
   - Handling edge cases untuk grid size genap/ganjil dan spacing non-uniform
   - Dokumentasi matematis lengkap dengan visualisasi ASCII grid dan contoh perhitungan

2. **Matrix4 Transformation Pipeline**
   - Implementasi transformasi scale, translation, dan positioning menggunakan Matrix4 (4×4 transformation matrix)
   - Pipeline sequence: makeScale() → setPosition() → setMatrixAt()
   - Optimasi untuk mengeliminasi redundant matrix operations
   - Penjelasan komponen matrix internal (Sx, Sy, Sz, Tx, Ty, Tz)

3. **InstancedMesh Rendering Optimization**
   - Implementasi instanced rendering untuk geometri seragam (cylinder geometry sebagai representasi nail)
   - Batch rendering dengan single draw call untuk N instances
   - Memory management untuk instance matrices dan geometry buffers
   - Performance profiling untuk 100, 500, 1000, dan 2000+ instances

**B. Implementasi Aplikasi Web**
1. **Frontend Stack**
   - Vue.js 3 untuk reactive UI components (2D Studio, 3D Studio, Control Panels)
   - Three.js r160 sebagai rendering engine dengan OrbitControls untuk interaksi kamera
   - JavaScript ES6+ dengan OOP paradigm (Class-based architecture)
   - Responsive CSS layout untuk cross-device compatibility

2. **Backend Stack**
   - Ruby on Rails API untuk data persistence
   - PostgreSQL database untuk JSON storage (design data dengan schema gridWidth, gridHeight, nails object)
   - RESTful endpoints untuk CRUD operations (create/read/update/delete projects)

3. **Standalone Algorithm Demonstration**
   - thesis/index.html: Minimal HTML structure dengan Three.js import maps
   - thesis/script.js: 600+ lines documented implementation dengan inline explanations
   - thesis/styles.css: UI styling untuk split-pane layout (data input | 3D preview)
   - thesis/README.md: Technical documentation untuk algorithm usage

**C. Evaluasi dan Testing**
1. **Performance Metrics**
   - Frame rate measurement (target: 60 FPS untuk 1000+ objects)
   - Response time untuk interaksi real-time (rotate, zoom, pan)
   - Memory usage profiling
   - Comparative analysis dengan non-instanced rendering approach

2. **Accuracy Validation**
   - Coordinate transformation correctness testing (expected vs actual positions)
   - Visual regression testing untuk geometric accuracy
   - Cross-browser compatibility testing (Chrome, Firefox, Safari, Edge)

3. **User Acceptance Testing**
   - Evaluasi oleh mahasiswa DKV sebagai end-users (N=20-30 responden)
   - Questionnaire tentang pemahaman konsep spasial sebelum/sesudah penggunaan aplikasi
   - Usability testing dengan System Usability Scale (SUS)
   - Qualitative feedback melalui semi-structured interviews
 
1.5.2 Batasan  
Penelitian ini memiliki batasan-batasan sebagai berikut:

**A. Batasan Algoritma**
1. **Geometry Scope**: Algoritma dirancang untuk konversi grid 2D-to-3D dengan objek geometri seragam (uniform geometry) seperti cylinder/box. Tidak mencakup konversi untuk:
   - Mesh kompleks dengan topology non-uniform (organic shapes, freeform surfaces)
   - Curved grids atau non-Cartesian coordinate systems (polar, spherical)
   - Dynamic geometry yang berubah shape pada runtime

2. **Transformation Limitations**: Fokus pada transformasi affine (scale, translation) tanpa kompleksitas:
   - Non-uniform scaling dengan different ratios per axis pada objek organik
   - Quaternion-based rotation untuk 6-DOF manipulation
   - Skeletal animation atau morph targets

3. **Grid Configuration**: Implementasi current mendukung:
   - Rectangular grids (M×N) dengan uniform spacing
   - Tidak mencakup: hexagonal grids, irregular grids, atau adaptive spacing

**B. Batasan Implementasi Teknis**
1. **Platform**: Aplikasi web berbasis WebGL/Three.js dengan dependency pada:
   - Modern browsers dengan WebGL 1.0 support (Chrome 56+, Firefox 52+, Safari 11+)
   - Tidak mencakup: native mobile apps, desktop applications, atau WebGL 2.0 exclusive features

2. **Performance Target**: Optimasi untuk rendering hingga 2000 instances dengan hardware:
   - Minimum: Integrated GPU (Intel HD 4000 atau equivalent)
   - Tidak dioptimasi untuk: extreme-scale rendering (10,000+ objects), ray tracing, atau global illumination

3. **Data Format**: Penyimpanan desain menggunakan JSON schema dengan structure predefined:
   - gridWidth, gridHeight, marginBetweenNails, paddingBoard, nails object
   - Tidak mencakup: import/export format industri (OBJ, FBX, GLTF), binary formats, atau compressed data

**C. Batasan Evaluasi**
1. **User Testing Scope**: 
   - Responden: Mahasiswa DKV tingkat dasar (semester 1-4), N=20-30
   - Tidak mencakup: profesional desainer, mahasiswa non-DKV, atau international users

2. **Metrics**: Evaluasi kuantitatif terbatas pada:
   - Performance metrics (FPS, response time, memory)
   - Coordinate accuracy testing
   - Tidak mencakup: eye-tracking studies, neurological response, atau long-term learning retention studies

3. **Comparison Baseline**: Perbandingan dilakukan dengan:
   - Non-instanced rendering approach (multiple Mesh objects)
   - Metode manual "paku dan papan" untuk konteks pembelajaran
   - Tidak dibandingkan dengan: commercial 3D software (Blender, 3ds Max), game engines (Unity, Unreal), atau specialized CAD tools

**D. Batasan Fitur Aplikasi**
1. Tidak mencakup: collaborative editing real-time (multi-user), cloud rendering, automatic design generation (AI/ML-based), atau integration dengan LMS (Learning Management Systems)
2. Lighting model terbatas pada basic directional + ambient light (tidak termasuk PBR materials, HDRI environments, atau dynamic shadows)
3. Export format terbatas pada JSON (tidak termasuk image export, video recording, atau 3D print-ready formats) 
 
1.6. Sistematika Penulisan 
Sistematika penulisan dalam penelitian ini akan diuraikan dalam setiap bab. Adapun setiap bab akan membahas hal sebagai berikut.
Bab I - Pendahuluan.
 	Bab ini menjelaskan latar belakang permasalahan konversi data struktur 2D menjadi representasi visual 3D dalam konteks aplikasi web, dengan fokus pada tantangan transformasi koordinat grid, optimasi rendering untuk objek repetitif, dan kompleksitas pipeline transformasi multi-atribut. Ditekankan bahwa metode konvensional menghasilkan grid yang tidak terpusat pada origin dan memiliki overhead rendering tinggi untuk ratusan objek. Solusi yang diusulkan adalah algoritma ekstrusi berbasis grid (grid-based extrusion algorithm) dengan reversed coordinate system, InstancedMesh optimization, dan Matrix4 transformation pipeline. Rumusan masalah berfokus pada aspek algoritma (efisiensi konversi koordinat, performa rendering, akurasi transformasi) dengan use case pembelajaran Nirmana Trimatra sebagai demonstrasi aplikabilitas. Tujuan penelitian adalah merancang, mengimplementasikan, dan mengevaluasi algoritma secara kuantitatif, disertai dokumentasi komprehensif untuk replikasi. Manfaat mencakup kontribusi akademis pada body of knowledge computer graphics, framework praktis untuk web developers, dan solusi untuk domain pendidikan desain.

Bab II - Tinjauan Referensi.
 	Bab ini berisi kajian teori yang mendasari penelitian, termasuk pengertian Nirmana Trimatra, prinsip dasar desain visual, teori pembelajaran berbasis digital, serta pemanfaatan teknologi WebGL dan Three.js dalam visualisasi 3D. Penelitian terdahulu yang relevan juga disajikan sebagai landasan ilmiah dan pembeda bagi penelitian ini.

Bab III - Metodologi Penelitian.
 	Bab ini menjelaskan metode penelitian yang meliputi: (1) Perancangan Algoritma—spesifikasi input/output, desain formula konversi koordinat dengan reversed system, perancangan Matrix4 pipeline, dan pseudocode; (2) Implementasi Teknis—pengembangan dengan JavaScript ES6+/OOP, Three.js r160 sebagai rendering engine, Vue.js untuk UI layer, dan standalone demonstration code (thesis/script.js) dengan 600+ baris dokumentasi inline; (3) Optimasi Performa—implementasi InstancedMesh untuk batch rendering, memory profiling, dan comparative benchmarking vs non-instanced approach; (4) Testing & Validation—automated testing untuk akurasi koordinat (expected vs actual), performance measurement (FPS, response time, memory usage), cross-browser compatibility testing, dan visual regression testing; (5) User Evaluation—UAT dengan mahasiswa DKV (N=20-30) melalui questionnaire pre/post-test pemahaman spasial, usability testing dengan System Usability Scale (SUS), dan qualitative interviews. Bab ini juga menjelaskan struktur folder thesis/ sebagai technical reference: index.html (minimal setup), script.js (full algorithm implementation), styles.css (UI layout), dan README.md (usage documentation).

Bab IV: Hasil dan Pembahasan

	 Bab ini menyajikan hasil pengembangan Aplikasi Web Simulasi Nirmana 3D dengan Paku beserta pembahasan setiap fitur utamanya, seperti registrasi akun, pengelolaan profil, 2D Studio, 3D Studio, Board Control Panel, Nail Control Panel, dan penyimpanan proyek. Analisis dilakukan secara deskriptif kualitatif untuk menilai kemudahan penggunaan, kelengkapan fungsi, serta kontribusinya dalam meningkatkan pemahaman konsep Nirmana Trimatra dibandingkan metode manual “paku dan papan”

Bab V: Simpulan dan Saran

 	Bab terakhir berisi simpulan yang merangkum jawaban terhadap rumusan masalah penelitian sebagaimana dipaparkan pada Bab 1, berdasarkan hasil dan pembahasan pada Bab 4. Simpulan disusun secara singkat, padat, dan jelas. Selain itu, bab ini juga memberikan saran untuk penelitian berikutnya maupun rekomendasi bagi pihak yang akan memanfaatkan hasil penelitian, termasuk pengembangan atau penerapan lebih lanjut dari temuan yang diperoleh



-------
BAB 2 - TINJAUAN PUSTAKA

2.1. Landasan Teori 
2.1.1. Nirmana 
Nirmana adalah prinsip fundamental dalam seni visual dan desain yang berpusat pada penataan elemen-elemen rupa seperti titik, garis, bidang, bentuk, warna, dan tekstur untuk menciptakan komposisi yang harmonis, seimbang, dan estetis. Lebih dari sekadar prinsip dasar, Nirmana adalah kerangka berpikir yang melatih desainer untuk memahami hubungan antar elemen dalam sebuah karya, bukan hanya objek individualnya. Konsep ini krusial dalam membentuk kemampuan visualisasi dan kreativitas, melandasi pemahaman tentang ruang, bentuk, dan dimensi. Nirmana secara umum dibagi menjadi Nirmana Dwimatra (2D) yang berfokus pada permukaan datar, dan Nirmana Trimatra (3D) yang mempertimbangkan volume, kedalaman, dan ruang. Metode pengajaran Nirmana tradisional, seperti metode "paku dan papan", meskipun menawarkan pengalaman taktil yang unik, seringkali membatasi eksperimen, kecepatan iterasi, dan fleksibilitas dalam eksplorasi komposisi. Menurut Dere & Kalelioglu (2020), metode tradisional ini dapat diperkaya dengan penggunaan lingkungan desain 3D berbasis web, yang terbukti meningkatkan kemampuan visualisasi spasial dan rotasi mental siswa, memungkinkan eksplorasi komposisi yang lebih dinamis dan mendalam. Kendala fisik metode tradisional menghambat mahasiswa untuk secara ekstensif mengeksplorasi berbagai penataan, memperlambat proses pembelajaran, dan berpotensi menyebabkan pemahaman prinsip Nirmana menjadi kurang mendalam di mata kuliah desain tingkat lanjut. Oleh karena itu, mencari metode inovatif yang dapat mengoptimalkan pembelajaran Nirmana, terutama Nirmana Trimatra, menjadi sangat relevan dalam pendidikan desain kontemporer. 
 
2.1.2. Visualisasi 3D dalam Desain 
Visualisasi 3D merujuk pada proses penciptaan gambar atau model yang merepresentasikan objek atau data dalam tiga dimensi. Dalam ranah desain, visualisasi 3D merupakan alat yang sangat powerful untuk memahami dan mengkomunikasikan konsep spasial yang kompleks. Khususnya untuk Nirmana Trimatra, di mana kedalaman, volume, dan bentuk adalah inti pertimbangan, visualisasi 3D menjadi esensial. Berbeda dengan representasi 2D yang datar, model 3D memungkinkan desainer untuk menginspeksi objek dari berbagai sudut, memanipulasinya dalam ruang, dan mensimulasikan interaksi cahaya serta bayangan secara realistis. Menurut Chen (2024), interaksi real-time model 3D berbasis web, seperti yang didukung oleh teknologi WebGL, memungkinkan manipulasi dinamis seperti rotasi, skala, dan translasi dengan efisiensi tinggi, sehingga meningkatkan pengalaman pengguna dan pemahaman spasial dalam proses desain. 
Keunggulan utama visualisasi 3D dalam pendidikan desain meliputi:
Peningkatan Pemahaman Spasial: Alat 3D secara signifikan membantu mahasiswa dalam membangun pemahaman intuitif tentang bagaimana objek dan elemen desain berinteraksi dalam ruang tiga dimensi, memperkuat kognisi spasial mereka.
Eksperimen Cepat dan Iteratif: Lingkungan digital memfasilitasi modifikasi desain secara instan dan eksplorasi berbagai variasi komposisi tanpa terhambat oleh batasan material atau waktu. Ini mendukung siklus desain yang lincah dan adaptif, mendorong kreativitas tanpa batas. Menurut Chen (2024), interaksi real-time model 3D berbasis web memungkinkan manipulasi dinamis seperti rotasi, skala, dan translasi dengan respons time rata-rata 80 ms, memungkinkan eksplorasi komposisi yang cepat dan efisien dalam lingkungan digital.
Pengembangan Keterampilan Digital: Penggunaan perangkat lunak visualisasi 3D mempersiapkan mahasiswa dengan kompetensi yang relevan dengan praktik industri desain modern, meningkatkan kesiapan mereka untuk dunia kerja profesional. Menurut Zheng et al. (2024), integrasi platform simulasi virtual berbasis web dalam pendidikan meningkatkan keterampilan teknis dan daya saing mahasiswa di pasar kerja melalui peningkatan skor kursus dan partisipasi dalam kompetisi industri. 


2.1.3. Aplikasi Berbasis Web untuk Desain (Three.js)
Aplikasi berbasis web adalah perangkat lunak yang dapat diakses melalui peramban web (browser) tanpa memerlukan instalasi khusus dan beroperasi dari server. Keunggulan utamanya meliputi aksesibilitas lintas platform, kemudahan pembaruan, dan demokratisasi akses karena tidak terikat pada perangkat keras tertentu. Dalam konteks desain, aplikasi berbasis web semakin mendapatkan popularitas sebagai platform kolaborasi dan pembelajaran interaktif.

Tech Stack yang Digunakan:
Vue.js
	Sebagai framework JavaScript progresif, Vue.js digunakan untuk membangun antarmuka pengguna (UI) aplikasi web yang interaktif dan responsif. Vue.js memungkinkan pengembangan aplikasi yang mudah dikelola dengan sistem pemisahan komponen yang modular.
Three.js
	Library JavaScript untuk membangun dan merender objek 3D di web. Three.js memungkinkan pembuatan visualisasi 3D interaktif yang esensial untuk mendukung aplikasi simulasi desain Nirmana 3D. Dengan kemampuan ini, mahasiswa dapat melihat dan mengubah komposisi desain dalam ruang tiga dimensi secara langsung.
Ruby on Rails
	Digunakan untuk backend pengembangan aplikasi, Ruby on Rails memungkinkan pengelolaan database dan logika aplikasi dengan efisien, serta pengembangan cepat menggunakan prinsip konvensi di atas konfigurasi.
PostgreSQL
	Sistem manajemen basis data relasional yang digunakan untuk menyimpan data desain yang dibuat oleh pengguna. PostgreSQL mendukung skalabilitas dan keandalan, memastikan data yang disimpan dapat diakses dengan cepat dan aman.
Docker
	Digunakan untuk membangun dan menjalankan aplikasi dalam container. Docker memastikan aplikasi berjalan konsisten di berbagai lingkungan, baik itu di pengembangan atau di server produksi, dengan meminimalkan masalah kompatibilitas.

Transformasi desain dari dua dimensi (2D) ke tiga dimensi (3D) dalam lingkungan digital didasarkan pada prinsip-prinsip geometris dan komputasi yang canggih. Proses ini melibatkan konversi data planar menjadi representasi spasial melalui algoritma matematis. Perkalian matriks, misalnya, adalah metode umum yang digunakan untuk melakukan transformasi geometris (seperti rotasi, skala, dan translasi) pada objek 3D secara dinamis, memungkinkan desainer untuk memanipulasi elemen dengan presisi tinggi. Menurut Chen (2024), teknologi web seperti WebGL memungkinkan manipulasi real-time model 3D dengan operasi seperti rotasi dan skala, mencapai efisiensi tinggi dengan respons time rata-rata 80 ms, sehingga mendukung transformasi desain yang akurat dan interaktif.

Untuk penelitian ini, aplikasi berbasis web akan dirancang untuk secara spesifik mensimulasikan metode Nirmana "paku dan papan" secara digital, dengan kemampuan untuk mengubah desain grid 2D menjadi tampilan 3D yang interaktif.
Fitur ini akan memungkinkan:
Simulasi Interaktif: Pengguna dapat menempatkan "paku" virtual dengan berbagai atribut seperti ukuran dan ketebalan, secara akurat mereplikasi pengalaman taktil dari metode tradisional namun dengan fleksibilitas digital.
Fleksibilitas Desain: Variasi komposisi dapat dieksplorasi dengan mudah dan cepat, jauh melampaui batasan fisik dan material. Hal ini mendorong eksplorasi ide-ide baru yang lebih berani.
Aksesibilitas Pendidikan: Dengan menghilangkan hambatan geografis dan finansial yang terkait dengan material fisik, aplikasi ini berkontribusi pada demokratisasi akses ke eksplorasi desain tingkat lanjutan, membuka peluang bagi lebih banyak individu untuk terlibat dalam pembelajaran desain. Menurut Franke & Haehn (2020), visualisasi ilmiah berbasis web, seperti yang didukung oleh teknologi WebGL, meningkatkan aksesibilitas pendidikan dengan memungkinkan interaksi dinamis dan pembelajaran jarak jauh, sehingga mendukung inklusivitas dalam eksplorasi desain. 
 
2.2. Kerangka Pemikiran 
Berdasarkan teori pembelajaran visual spasial dan prinsip dasar Nirmana Trimatra, penelitian ini menyatukan beberapa komponen utama dalam proses pengembangan media pembelajaran digital yang efektif dan relevan dengan kebutuhan mahasiswa Desain Komunikasi Visual (DKV). Kerangka pemikiran dalam penelitian ini dapat dijabarkan sebagai berikut: 
Input: 
Masalah dalam metode pembelajaran Nirmana Trimatra konvensional seperti penggunaan media fisik “paku dan papan” yang terbatas dalam fleksibilitas dan efisiensi.
Kebutuhan mahasiswa DKV akan media pembelajaran berbasis teknologi digital yang interaktif, mudah digunakan, dan memungkinkan eksplorasi bentuk secara bebas.
Konsep dan prinsip dasar Nirmana, khususnya elemen visual seperti titik, garis, bidang, bentuk, komposisi, serta relasi spasial 2D ke 3D.
Proses: 
Pengembangan aplikasi web berbasis JavaScript dan Three.js, dengan pendekatan pemrograman berbasis objek (Object-Oriented Programming) untuk struktur sistem yang modular dan efisien.
Implementasi transformasi geometris (rotasi, skala, translasi) dengan memanfaatkan prinsip komputasi dan perkalian matriks dalam manipulasi objek 3D.
Simulasi komposisi Nirmana Trimatra secara interaktif melalui tampilan grid 3D yang memungkinkan pengguna mengatur posisi dan karakteristik “paku” sebagai elemen visual.
Fitur tambahan seperti penyimpanan desain dalam format .json, kontrol kamera (zoom, rotasi, orbit), dan preview dari berbagai sudut pandang.
Output: 
Aplikasi web interaktif yang dapat digunakan untuk menyusun, memvisualisasikan, dan mengevaluasi desain Nirmana Trimatra secara real-time.
Mahasiswa mampu memahami konsep spasial dan hubungan antar elemen visual secara lebih dalam dan intuitif.
Peningkatan kemampuan eksplorasi bentuk, komposisi, serta keterampilan desain berbasis teknologi yang sesuai dengan kebutuhan industri desain masa kini.
Media pembelajaran digital yang demokratis, fleksibel, dan dapat digunakan secara mandiri maupun kolaboratif.

Gambar 1.1 Kerangka Pemikiran 
 
2.3. Studi Terkait dan Research Gap 
Penelitian mengenai pengembangan media pembelajaran berbasis teknologi 3D telah banyak dilakukan, khususnya dalam bidang pendidikan dan desain. Namun, masih terdapat celah penelitian yang belum banyak dijelajahi, terutama dalam konteks penerapan konsep Nirmana Trimatra menggunakan simulasi berbasis web interaktif. Beberapa studi terdahulu yang relevan antara lain sebagai berikut:
2.3.1 Penelitian Terkait  
Dad Made Widyatantri Merati (2025) meneliti peran Nirmana Trimatra dalam proses studi perancangan desain interior melalui metode kualitatif deskriptif yang berfokus pada pengamatan sketsa dan karya mahasiswa. Hasil penelitian menunjukkan bahwa latihan Nirmana 3D sangat penting untuk membangun kecerdasan ruang (spatial intelligence) mahasiswa interior, khususnya dalam merancang proyek nyata seperti lobi dan toko. Relevansi penelitian ini terletak pada kesamaan topik, yaitu Nirmana Trimatra sebagai fondasi berpikir visual. Namun, penelitian tersebut menggunakan media fisik seperti sketsa tangan dan material interior, sedangkan penelitian ini menekankan pendekatan digital interaktif berbasis web untuk konteks Desain Komunikasi Visual.

Deny Tri Ardianto, Arif Ranu Wicaksono, Sayid Mataram, Rahmanu Widayat, dan Jotika Purnama Yuda (2024) melakukan analisis isi terhadap berbagai jenis video pembelajaran Nirmana di YouTube, disertai analisis pragmatik terhadap komentar penonton. Penelitian ini menunjukkan bahwa video demonstrasi dan animasi merupakan format yang paling efektif untuk meningkatkan pemahaman, sementara video ceramah dinilai membosankan dan kurang menarik. Keterkaitan penelitian ini dengan penelitian yang sedang dilakukan terletak pada tujuan yang sama, yaitu modernisasi pembelajaran Nirmana melalui teknologi. Namun, penelitian terdahulu berfokus pada media pasif (video), sedangkan penelitian ini mengembangkan media aktif berupa aplikasi web yang memungkinkan interaksi langsung dengan objek 3D.

Irpan Riana, Yuda Syah Putra, dan Dyama Khazim Setyadi (2024) mengembangkan Buku Ajar Nirmana Dwimatra untuk mahasiswa Polimedia jurusan Fotografi menggunakan metode penelitian dan pengembangan (R&D). Produk yang dihasilkan berupa buku ajar 2D yang memadukan teori seni dan praktik fotografi. Persamaan dengan penelitian ini terdapat pada tujuan untuk memperbaiki kualitas pembelajaran melalui media baru. Perbedaannya, penelitian tersebut menghasilkan media fisik buku ajar untuk Nirmana 2D, sedangkan penelitian ini menghasilkan aplikasi digital interaktif untuk Nirmana Trimatra (3D).

Husen Hendriyana, Martiyadi Nurhidayat, dan Wuri Handayani (2022) menerapkan konsep Nirmana Dwimatra dalam strategi pembelajaran desain produk menggunakan metode Classroom Action Research (CAR). Penelitian ini berhasil menghasilkan model proses kreatif yang meningkatkan kualitas karya mahasiswa dalam kategori 'Baik'. Kesamaannya terletak pada pemanfaatan konsep Nirmana sebagai fondasi desain. Namun, penelitian tersebut berfokus pada media manual untuk produk fisik 2D, sedangkan penelitian ini menggunakan simulasi digital 3D dengan teknologi WebGL/Three.js untuk konteks pembelajaran DKV.

Marina Wardaya (2021) meneliti penerapan prinsip Nirmana dalam pembuatan pola surface design pada produk fashion menggunakan metode kualitatif deskriptif dan eksploratif. Prinsip Nirmana Dwimatra diterapkan untuk menghasilkan motif digital yang dicetak sebagai produk scarf. Keterkaitan penelitian ini tampak pada penggunaan teknologi digital untuk mendukung aktualisasi prinsip Nirmana. Namun, fokus penelitian tersebut adalah produksi motif 2D untuk fashion, sementara penelitian ini berorientasi pada pengembangan media pembelajaran interaktif untuk Nirmana Trimatra secara digital.
Šafhalter et al. (2022) dalam jurnal International Journal of Technology and Design Education meneliti pengembangan kemampuan berpikir spasial melalui kursus modeling 3D engineering yang ditujukan untuk siswa sekolah menengah bawah. Hasilnya menunjukkan bahwa visualisasi spasial merupakan faktor penting dalam perkembangan kognitif anak, dan kursus ini dapat meningkatkan kemampuan tersebut melalui pengaruh berbagai faktor. Namun, penelitian ini lebih fokus pada pendidikan engineering dan siswa usia muda, bukan pada prinsip Nirmana atau simulasi objek seperti paku dalam konteks desain visual berbasis web.
Chen (2020) dalam Frontier Computing on Industrial Applications meneliti interaksi real-time model animasi 3D berbasis teknologi web, dengan WebGL sebagai dasar utama. Penelitian ini menganalisis teknologi seperti WebGL dan Three.js untuk rendering dan interaksi model 3D, serta membangun model eksperimental untuk operasi seperti translasi, rotasi, dan scaling, dengan hasil tes menunjukkan respons time rata-rata 80 ms dan stabilitas tinggi. Namun, fokusnya pada animasi 3D umum dan peningkatan efisiensi rendering, bukan pada pembelajaran prinsip dasar visual seperti Nirmana Trimatra atau simulasi interaktif objek sederhana seperti paku.
Zheng et al. (2024) dalam Scientific Reports mengembangkan platform pengajaran simulasi virtual untuk manufaktur cerdas, yang mengintegrasikan cloud computing, edge computing, dan teknologi mobile untuk arsitektur sinergis. Platform ini mencakup modul untuk elektronika, kontrol PLC, lini produksi otomatis, dan robot industri, dengan hasil menunjukkan peningkatan minat belajar dan keterampilan siswa secara signifikan dibandingkan metode tradisional. Namun, fokusnya pada pelatihan engineering dan manufaktur industri, bukan pada pembelajaran komposisi visual dasar seperti Nirmana atau simulasi 3D berbasis web dengan elemen sederhana seperti paku.
Franke & Haehn (2020) dalam jurnal Informatics meninjau visualisasi ilmiah modern berbasis web menggunakan teknologi seperti WebGL dan WebGPU untuk grafis 3D, dikombinasikan dengan HTML5, CSS, dan JavaScript. Penelitian ini memperkenalkan Scientific Visualization Future Readiness Score (SciVis FRS) untuk menilai kesiapan visualisasi, serta membahas tantangan seperti latensi jaringan dan tren publikasi yang meningkat sejak 2011. Namun, penelitian ini lebih berorientasi pada visualisasi ilmiah di berbagai domain seperti medis dan biologi, bukan secara spesifik pada prinsip Nirmana atau aplikasi edukatif simulasi objek seperti paku dalam desain komunikasi visual.
Dere & Kalelioglu (2020) dalam Informatics in Education meneliti efek penggunaan environment desain 3D berbasis web pada kemampuan visualisasi spasial dan rotasi mental siswa sekolah menengah. Menggunakan alat seperti Tinkercad, hasilnya menunjukkan peningkatan signifikan dalam tes visualisasi spasial, rotasi mental, dan tes potongan objek, dengan siswa menyatakan kepuasan dalam menciptakan desain baru meskipun ada kesulitan awal. Namun, penelitian ini difokuskan pada siswa sekolah menengah dan kemampuan spasial umum, bukan pada integrasi dengan prinsip Nirmana Trimatra atau simulasi interaktif 3D web untuk objek spesifik seperti paku dalam konteks desain visual.
Fed Som, Mathew, & Vincs (2023) dalam buku Research into Design for a Connected World melakukan tinjauan literatur terhadap lebih dari 50 studi tentang pemanfaatan virtual reality dalam praktik kreativitas dan pendidikan seni-desain. Hasil tinjauan menunjukkan bahwa VR secara signifikan meningkatkan kreativitas, kemampuan spasial, serta motivasi belajar mahasiswa seni dan desain melalui pengalaman imersif dan interaktif. Namun, penelitian ini bersifat tinjauan literatur dan belum mengembangkan alat spesifik, serta tidak membahas simulasi berbasis web maupun konsep Nirmana Trimatra.
Aruanno, Ghelarducci, & Pontiggia (2025) dalam Computer Applications in Engineering Education mengembangkan laboratorium virtual reality untuk pembelajaran imersif teknik dan ilmu material. Hasil pengujian menunjukkan bahwa simulasi VR meningkatkan inklusivitas, pemahaman konsep, dan hasil belajar mahasiswa STEM dibandingkan laboratorium fisik tradisional. Namun, fokus penelitian ini adalah bidang teknik dan material science, bukan pada pendidikan desain komunikasi visual atau simulasi Nirmana Trimatra berbasis web.
Concha-Sanchez et al. (2025) dalam Computer Applications in Engineering Education mengembangkan UYAMAK, sebuah platform web open-source untuk simulasi desain dan model-based engineering. Platform ini memungkinkan iterasi desain yang cepat dan aksesibel tanpa instalasi perangkat lunak khusus. Meskipun menggunakan pendekatan berbasis web yang mirip dengan penelitian ini, UYAMAK ditujukan untuk simulasi teknik dan bukan untuk eksplorasi artistik Nirmana Trimatra atau representasi objek paku secara digital.
Ma et al. (2025) dalam Computer Applications in Engineering Education merancang sistem simulasi virtual lini produksi kepala silinder berbasis Unity3D. Sistem ini meningkatkan pemahaman kognitif mahasiswa terhadap proses manufaktur yang kompleks. Walaupun berhasil meningkatkan kemampuan spasial dan kognitif, penelitian ini menggunakan Unity3D (bukan teknologi web) dan berfokus pada simulasi industri, bukan pada pembelajaran desain visual atau Nirmana.
Balakrishnan & Chavan (2022) dalam American Journal of Art and Design meneliti perspektif programmer terhadap penggunaan previsualization dalam proses desain animasi web berbasis Three.js. Hasil wawancara dan survei terhadap 20+ programmer menunjukkan bahwa previsualization dengan Three.js sangat efektif untuk prototyping cepat animasi 3D di web. Penelitian ini memiliki kemiripan teknologi (Three.js) dengan skripsi ini, namun hanya membahas prototyping animasi umum, bukan simulasi Nirmana Trimatra atau elemen paku-papan.
Lu et al. (2025) dalam arXiv preprint mengusulkan ruang desain (design space) untuk transisi visualisasi data spasial 3D pada lingkungan hybrid AR-desktop. Studi pengguna menunjukkan bahwa transisi yang mulus antar tampilan meningkatkan pemahaman spasial pengguna secara signifikan. Meskipun relevan dengan transformasi 2D ke 3D, penelitian ini berfokus pada lingkungan hybrid AR-desktop, bukan aplikasi web murni seperti yang dikembangkan dalam skripsi ini.
Memarian et al. (2022) dalam Proceedings of the ASEE Annual Conference mengevaluasi pembelajaran visualisasi spasial mahasiswa teknik melalui analisis sketsa digital dan kesalahan proyeksi ortografis. Penelitian ini berhasil mengidentifikasi pola kesalahan umum dan memperbaiki metode asesmen, namun menggunakan pendekatan berbasis sketsa 2D digital, bukan simulasi interaktif 3D atau representasi Nirmana Trimatra.
Hawes et al. (2023) dalam Journal of Numerical Cognition melakukan randomized controlled trial terhadap 287 siswa kelas 4 dan menemukan bahwa pelatihan visualisasi spasial dapat ditransfer ke kemampuan matematika melalui mekanisme kognitif tertentu. Meskipun membuktikan adanya efek transfer keterampilan spasial, penelitian ini berfokus pada matematika dasar anak, bukan pada pendidikan tinggi desain visual atau konsep Nirmana.
Sharma (2023) dalam International Journal of Mechanical Engineering Education menerapkan visualisasi spasial melalui tugas ideasi desain alat pada mahasiswa teknik mesin. Hasilnya menunjukkan peningkatan signifikan dalam pemikiran visual dan kemampuan kognitif. Walaupun tujuannya mirip (mengembangkan kemampuan visual-spasial melalui aktivitas desain), penelitian ini berorientasi teknik mesin dan bukan pada eksplorasi artistik Nirmana Trimatra.
Ghelarducci et al. (2024) dalam Proceedings of the CHI Conference merancang Interaction Geography Slicer, alat visualisasi data spasial eksploratif untuk membantu praktik reflektif guru. Hasil studi usability menunjukkan bahwa visualisasi interaktif sangat mendukung refleksi pedagogis. Meskipun memiliki kemiripan dalam hal visualisasi spasial eksploratif, penelitian ini ditujukan untuk refleksi pengajaran guru, bukan untuk simulasi atau pembelajaran desain mahasiswa DKV.

2.3.2 Research Gap
Dari berbagai studi yang telah dilakukan, terdapat beberapa celah (gap) yang menjadi dasar pengembangan penelitian ini, antara lain:
Belum adanya aplikasi berbasis web yang mengintegrasikan konsep pembelajaran Nirmana Trimatra secara interaktif dan eksploratif, khususnya untuk mahasiswa Desain Komunikasi Visual.
Minimnya penelitian yang menggunakan pendekatan simulasi objek geometris (seperti paku dan papan) dalam representasi prinsip-prinsip Nirmana menggunakan teknologi Three.js.
Kebanyakan penelitian masih berfokus pada media pembelajaran offline atau berbasis game engine, belum mengoptimalkan teknologi WebGL dan Three.js untuk aksesibilitas luas secara daring.
Kurangnya penggabungan aspek pedagogis, spasial, dan visualisasi real-time dalam satu platform sebagai media belajar eksploratif yang sejalan dengan kebutuhan kurikulum DKV modern.


-------
BAB 3 - METODOLOGI PENELITIAN

3.1 Metode Penelitian

Penelitian ini menggunakan metode pengembangan perangkat lunak dengan pendekatan **Waterfall Model** (Model Air Terjun) yang telah diadaptasi sesuai kebutuhan pengembangan aplikasi web interaktif. Model Waterfall dipilih karena karakteristik penelitian ini memiliki requirement yang jelas dan stabil, yaitu mengembangkan aplikasi web simulasi Nirmana Trimatra dengan fitur-fitur spesifik yang telah ditentukan di awal. Pendekatan ini memungkinkan tahapan pengembangan dilakukan secara sistematis dan terstruktur, mulai dari analisis kebutuhan hingga pengujian sistem.

Adapun tahapan metode Waterfall yang diterapkan dalam penelitian ini adalah sebagai berikut:

**1. Communication (Komunikasi dan Pengumpulan Data)**
Tahap ini melibatkan komunikasi dengan stakeholder untuk memahami kebutuhan pengguna dan permasalahan yang dihadapi dalam pembelajaran Nirmana Trimatra. Aktivitas yang dilakukan meliputi:
- Studi literatur tentang konsep Nirmana Trimatra, pembelajaran desain visual, dan teknologi web 3D (Three.js, WebGL)
- Observasi metode pembelajaran Nirmana tradisional menggunakan "paku dan papan"
- Wawancara dengan dosen DKV dan mahasiswa untuk mengidentifikasi pain points dalam pembelajaran
- Analisis aplikasi sejenis yang sudah ada untuk mengidentifikasi fitur yang dibutuhkan dan research gap

**2. Planning (Perencanaan)**
Tahap perencanaan meliputi penyusunan roadmap pengembangan, estimasi waktu, dan resource yang dibutuhkan:
- Identifikasi scope aplikasi: fitur 2D Studio, 3D Studio, Board Control Panel, Nail Control Panel, dan penyimpanan proyek
- Pemilihan tech stack: Vue.js 3 untuk frontend, Three.js untuk rendering 3D, Ruby on Rails untuk backend API, PostgreSQL untuk database
- Penyusunan timeline pengembangan dengan milestone yang jelas
- Perancangan arsitektur sistem dan data flow diagram

**3. Modeling (Perancangan Sistem)**
Tahap ini fokus pada desain arsitektur sistem dan perancangan antarmuka pengguna:
- **Analisis Kebutuhan**: Penyusunan functional dan non-functional requirements
- **Perancangan Sistem**: Use case diagram, activity diagram, class diagram untuk struktur OOP
- **Perancangan Database**: Entity-Relationship Diagram (ERD), database schema untuk tabel users, projects, dan project_data
- **Perancangan Algoritma**: Spesifikasi algoritma konversi grid 2D-to-3D dengan reversed coordinate system, Matrix4 transformation pipeline, dan InstancedMesh optimization
- **Desain UI/UX**: Wireframe dan mockup untuk setiap halaman aplikasi (Home, 2D Studio, 3D Studio, Control Panels)

**4. Construction (Konstruksi dan Implementasi)**
Tahap implementasi kode berdasarkan desain yang telah dibuat:
- **Frontend Development**: 
  - Implementasi komponen Vue.js untuk UI reactive (ProjectForm, ThreeDPreview, ControlPanel, Toast)
  - Integrasi Three.js untuk rendering 3D dengan OrbitControls untuk interaksi kamera
  - Implementasi composables (use3DScene.js, use2DGrid.js, useToast.js) untuk reusable logic
  - Styling dengan CSS responsive untuk cross-device compatibility
- **Backend Development**:
  - Implementasi RESTful API dengan Ruby on Rails (endpoints untuk authentication, CRUD projects)
  - Integrasi PostgreSQL dengan JSON datatype untuk penyimpanan design data
  - Implementasi authentication dan authorization dengan token-based system
- **Algorithm Implementation**:
  - Implementasi grid-based extrusion algorithm dengan reversed coordinate system
  - Optimasi rendering dengan InstancedMesh untuk batch rendering ratusan objek
  - Matrix4 transformation pipeline untuk scale, translation, dan positioning
- **Standalone Demo**: Pengembangan thesis/script.js sebagai standalone demonstration code dengan dokumentasi inline

**5. Deployment**
Tahap deployment aplikasi ke environment production:
- Setup server dengan Docker containerization untuk konsistensi environment
- Konfigurasi domain dan SSL certificate untuk akses HTTPS
- Database migration dan seeding initial data
- Performance tuning dan optimization untuk production environment
- Continuous Integration/Continuous Deployment (CI/CD) setup untuk automated deployment

**6. Testing dan Evaluasi**
Tahap pengujian dilakukan secara komprehensif untuk memastikan aplikasi berfungsi sesuai requirement:
- **Functional Testing**: Black box testing untuk setiap fitur aplikasi
- **Performance Testing**: Measurement FPS, response time, memory usage untuk 100-2000 objek
- **Accuracy Testing**: Validasi koordinat transformation (expected vs actual positions)
- **Cross-browser Testing**: Testing pada Chrome, Firefox, Safari, Edge
- **User Acceptance Testing (UAT)**: Evaluasi oleh mahasiswa DKV (N=20-30) melalui kuesioner dan wawancara
- **Usability Testing**: System Usability Scale (SUS) questionnaire

Metode penelitian ini bersifat kuantitatif dan kualitatif:
- **Kuantitatif**: Pengukuran performance metrics (FPS, response time, memory usage), accuracy testing, dan scoring dari kuesioner UAT
- **Kualitatif**: Analisis feedback dari wawancara, observasi penggunaan aplikasi, dan open-ended responses dari kuesioner

3.2 Identifikasi Masalah

Berdasarkan komunikasi dengan stakeholder dan studi literatur, identifikasi masalah dalam penelitian ini meliputi:

**3.2.1 Masalah Pembelajaran Nirmana Trimatra Tradisional**
1. **Keterbatasan Material Fisik**:
   - Metode "paku dan papan" memerlukan biaya untuk membeli material (paku, papan, benang)
   - Material terbatas dalam jumlah, ukuran, dan variasi yang dapat digunakan
   - Kesalahan dalam penataan paku sulit diperbaiki (destructive editing)

2. **Keterbatasan Eksplorasi Desain**:
   - Proses trial-and-error memakan waktu lama karena harus memasang dan mencabut paku secara manual
   - Sulit untuk melihat desain dari berbagai sudut pandang secara cepat
   - Tidak dapat menyimpan multiple iterations untuk perbandingan
   - Eksplorasi variasi komposisi terhambat oleh keterbatasan waktu dan material

3. **Aksesibilitas dan Inklusivitas**:
   - Mahasiswa dengan keterbatasan ekonomi mungkin kesulitan membeli material
   - Pembelajaran jarak jauh (remote learning) tidak dapat dilakukan dengan metode fisik
   - Tidak ada dokumentasi digital yang dapat dibagikan atau direvisi secara kolaboratif

4. **Pemahaman Konsep Spasial**:
   - Mahasiswa kesulitan memvisualisasikan hubungan 2D-to-3D sebelum implementasi fisik
   - Tidak ada feedback visual instant tentang bagaimana perubahan pada grid 2D mempengaruhi bentuk 3D
   - Sulit untuk memahami prinsip kedalaman, volume, dan komposisi spasial secara intuitif

**3.2.2 Gap Teknologi dalam Pendidikan Desain**
1. **Kurangnya Tools Digital Khusus Nirmana**:
   - Aplikasi 3D umum (Blender, 3ds Max) terlalu kompleks untuk pembelajaran konsep dasar Nirmana
   - Tidak ada aplikasi web yang secara spesifik mensimulasikan metode "paku dan papan"
   - Tools yang ada tidak mengintegrasikan workflow 2D dan 3D dalam satu platform

2. **Performa dan Aksesibilitas Web Apps**:
   - Rendering ratusan objek 3D di browser sering mengalami performance bottleneck
   - Aplikasi web 3D yang ada memerlukan plugin atau instalasi tambahan
   - Tidak ada dokumentasi algoritma konversi 2D-to-3D yang clear untuk konteks educational tools

3. **Kesenjangan Pedagogis**:
   - Minimnya integrasi antara teori Nirmana dengan praktik digital dalam kurikulum DKV
   - Kurangnya media pembelajaran interaktif yang align dengan learning outcomes Nirmana Trimatra
   - Tidak ada assessment tools digital untuk mengevaluasi pemahaman konsep spasial mahasiswa

**3.2.3 Analisis Kebutuhan Pengguna**
Berdasarkan wawancara dan observasi, kebutuhan pengguna (mahasiswa DKV dan dosen) meliputi:

**Kebutuhan Fungsional**:
1. Kemampuan membuat grid 2D dengan ukuran customizable (gridWidth, gridHeight)
2. Penempatan "paku" virtual dengan atribut tinggi (height) dan ketebalan (body_width, head_width)
3. Preview 3D real-time yang merespons perubahan pada data 2D
4. Interaksi kamera 3D (rotate, zoom, pan) untuk inspeksi dari berbagai sudut
5. Penyimpanan dan loading proyek desain dalam format JSON
6. User authentication untuk mengelola proyek pribadi
7. Export/share proyek untuk kolaborasi dan presentasi

**Kebutuhan Non-Fungsional**:
1. **Performance**: Rendering 60 FPS untuk minimal 1000 objek 3D
2. **Usability**: Antarmuka intuitif dengan learning curve minimal (<30 menit)
3. **Accessibility**: Dapat diakses dari berbagai device (desktop, laptop, tablet) tanpa instalasi
4. **Reliability**: Aplikasi stabil tanpa crash pada penggunaan normal
5. **Maintainability**: Kode terstruktur dengan OOP untuk kemudahan pengembangan lanjutan

3.3 Perancangan Platform

**3.3.1 Arsitektur Sistem**

Aplikasi dirancang dengan arsitektur **Client-Server** berbasis **REST API**:

```
┌─────────────────────────────────────────────────┐
│                  CLIENT SIDE                    │
│  ┌───────────────────────────────────────────┐  │
│  │         Vue.js Frontend Layer             │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │  UI Components:                     │  │  │
│  │  │  - ProjectForm.vue                  │  │  │
│  │  │  - ThreeDPreview.vue                │  │  │
│  │  │  - ControlPanel.vue                 │  │  │
│  │  │  - Toast.vue                        │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │  Composables (Reusable Logic):      │  │  │
│  │  │  - use3DScene.js ←──┐               │  │  │
│  │  │  - use2DGrid.js     │               │  │  │
│  │  │  - useToast.js      │               │  │  │
│  │  └─────────────────────│───────────────┘  │  │
│  │                         │                  │  │
│  │  ┌──────────────────────▼──────────────┐  │  │
│  │  │   Three.js Rendering Engine         │  │  │
│  │  │  - Scene, Camera, Renderer          │  │  │
│  │  │  - InstancedMesh for Nails          │  │  │
│  │  │  - OrbitControls                    │  │  │
│  │  │  - Matrix4 Transformations          │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────┘
                     │ HTTP Requests (RESTful API)
                     │ JSON Data
┌────────────────────▼────────────────────────────┐
│                  SERVER SIDE                    │
│  ┌───────────────────────────────────────────┐  │
│  │      Ruby on Rails Backend API            │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │  Controllers:                       │  │  │
│  │  │  - AuthController (login, register) │  │  │
│  │  │  - ProjectsController (CRUD)        │  │  │
│  │  │  - UsersController (profile)        │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │  Models:                            │  │  │
│  │  │  - User                             │  │  │
│  │  │  - Project                          │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  └───────────────────┬───────────────────────┘  │
│                      │ ActiveRecord ORM         │
│  ┌───────────────────▼───────────────────────┐  │
│  │      PostgreSQL Database                  │  │
│  │  Tables:                                  │  │
│  │  - users (id, email, password_hash, ...)  │  │
│  │  - projects (id, user_id, name, data)     │  │
│  │    └─ data: JSONB (gridWidth, nails{})    │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

**Component Interaction Flow**:
1. User berinteraksi dengan Vue.js UI Components (ProjectForm untuk input data 2D)
2. Data dikirim ke `use3DScene.js` composable yang mengelola Three.js scene
3. `use3DScene.js` memanggil algoritma konversi 2D-to-3D dan mengupdate InstancedMesh
4. Rendering engine (Three.js) menampilkan visualisasi 3D di canvas
5. Untuk penyimpanan, data JSON dikirim ke Rails API melalui HTTP POST request
6. Rails Controller memproses request, validasi, dan menyimpan ke PostgreSQL
7. Response (success/error) dikembalikan ke client dan ditampilkan via Toast notification

**3.3.2 Database Schema**

```sql
-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects Table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  data JSONB NOT NULL, -- Stores design data: {gridWidth, gridHeight, nails{}}
  thumbnail_url VARCHAR(500),
  is_public BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_projects_data ON projects USING GIN (data); -- GIN index for JSONB queries
```

**Data JSON Structure** (stored in `projects.data` column):
```json
{
  "version": "1.0.0",
  "gridWidth": 20,
  "gridHeight": 20,
  "marginBetweenNails": 10,
  "paddingBoard": 10,
  "nails": {
    "5,5": {
      "height": 30,
      "body_width": 2,
      "head_width": 2
    },
    "6,5": {
      "height": 35,
      "body_width": 3,
      "head_width": 3
    }
  }
}
```

3.4 Desain Aplikasi

**3.4.1 Pendekatan Desain UI/UX**

Desain aplikasi menggunakan pendekatan **User-Centered Design (UCD)** dengan prinsip-prinsip berikut:

1. **Simplicity and Clarity**:
   - Interface yang clean dengan hierarki visual yang jelas
   - Minimalis untuk mengurangi cognitive load, fokus pada creative workflow
   - Typography yang readable (Inter/Roboto font family)

2. **Consistency**:
   - Konsistensi dalam penggunaan warna, spacing, dan component styling
   - Reusable UI components untuk consistency across pages
   - Consistent interaction patterns (button behaviors, form validations)

3. **Feedback and Responsiveness**:
   - Visual feedback untuk setiap user action (button click, form submission)
   - Toast notifications untuk success/error messages
   - Loading states untuk async operations
   - Real-time preview 3D yang merespons perubahan input

4. **Accessibility**:
   - Semantic HTML untuk screen readers
   - Keyboard navigation support
   - Sufficient color contrast (WCAG AA standard)
   - Responsive design untuk berbagai screen sizes (320px - 2560px)

**Color Palette**:
- Primary: #3B82F6 (Blue) - untuk CTA buttons dan highlights
- Secondary: #10B981 (Green) - untuk success states
- Accent: #F59E0B (Orange) - untuk warnings
- Danger: #EF4444 (Red) - untuk errors dan destructive actions
- Neutral: #1F2937 (Dark Gray) - untuk text
- Background: #F9FAFB (Light Gray) - untuk main background

**3.4.2 Struktur Halaman dan Navigasi**

**Site Map**:
```
Home (/)
├── Login (/login)
├── Register (/register)
├── Forgot Password (/forgot-password)
└── Reset Password (/reset-password/:token)

Dashboard (Protected Routes - requires authentication)
├── Profile (/profile)
│   └── Edit Profile (/profile/edit)
├── Projects (/projects)
│   ├── New 2D Project (/projects/2d/new)
│   │   ├── 2D Studio (ProjectForm component)
│   │   └── 3D Preview (ThreeDPreview component)
│   ├── Edit 2D Project (/projects/2d/:id/edit)
│   ├── New 3D Project (/projects/3d/new)
│   └── Edit 3D Project (/projects/3d/:id/edit)
└── Logout (action)
```

**Navigation Flow**:
1. **Guest User**: Home → Login/Register → Dashboard
2. **Authenticated User**: Dashboard → Projects → New/Edit Project → 2D Studio + 3D Preview
3. **Project Workflow**: 
   - Create Project → Input Data di 2D Studio → Preview di 3D Studio → Save Project → Back to Projects List

**3.4.3 Contoh Antarmuka**

**1. Home Page**:
- Hero section dengan tagline: "Eksplorasi Nirmana Trimatra Tanpa Batas"
- Feature highlights (2D Studio, 3D Studio, Cloud Storage)
- CTA buttons: "Mulai Gratis" (→ Register) dan "Masuk" (→ Login)
- Screenshot carousel dari aplikasi

**2. Login/Register Page**:
- Split layout: Left (form), Right (hero image)
- Email dan password input fields dengan validation
- Social login options (Google, GitHub) - optional
- Link ke "Lupa Password?" dan "Belum punya akun? Daftar"

**3. Projects List Page**:
- Grid layout dengan project cards (thumbnail, name, last edited)
- Filter dan search functionality
- FAB (Floating Action Button) untuk "New Project"
- Empty state dengan CTA untuk create first project

**4. 2D Studio + 3D Preview (Main Workspace)**:
Layout split-pane:
```
┌───────────────────────────────────────────────┐
│  Header: Project Name | Save | Share          │
├─────────────────────┬─────────────────────────┤
│                     │                         │
│   2D STUDIO         │   3D PREVIEW            │
│   (Left Panel)      │   (Right Panel)         │
│                     │                         │
│  ┌───────────────┐  │   ┌─────────────────┐   │
│  │ Grid Settings │  │   │                 │   │
│  │ - Width: 20   │  │   │   Three.js      │   │
│  │ - Height: 20  │  │   │   Canvas        │   │
│  └───────────────┘  │   │   (Interactive) │   │
│                     │   │                 │   │
│  ┌───────────────┐  │   └─────────────────┘   │
│  │ Grid Visual   │  │                         │
│  │ (Click cells) │  │   Controls:             │
│  └───────────────┘  │   • Rotate: Drag        │
│                     │   • Zoom: Scroll        │
│  ┌───────────────┐  │   • Pan: Right-drag     │
│  │ Nail Control  │  │                         │
│  │ - Height:▓▓▓  │  │   Performance:          │
│  │ - Width: ▓▓▓  │  │   FPS: 60               │
│  └───────────────┘  │   Objects: 250          │
│                     │                         │
└─────────────────────┴─────────────────────────┘
```

**5. Control Panels (Floating/Collapsible)**:

**Board Control Panel**:
- Board Width/Height sliders
- Margin Between Nails slider (1-20mm)
- Padding Board slider (0-50mm)
- Board Color picker
- Reset to default button

**Nail Control Panel**:
- Active when nail is selected on grid
- Height slider (0-100mm) dengan real-time preview
- Body Width radio buttons: Thin (1) | Medium (2) | Thick (3)
- Head Width radio buttons: Small (1) | Medium (2) | Large (3)
- Visual preview mini-canvas showing selected nail
- Delete nail button

**3.4.4 Prinsip Desain yang Diterapkan**

**1. Progressive Disclosure**:
- Advanced settings (lighting, shadows) tersembunyi di collapsible panels
- Beginner mode vs Advanced mode toggle
- Tooltips untuk menjelaskan fitur kompleks

**2. Direct Manipulation**:
- Click pada grid 2D langsung menempatkan paku (instant feedback)
- Drag sliders untuk adjust parameters dengan real-time 3D update
- OrbitControls untuk intuitif 3D navigation

**3. Undo/Redo Support**:
- History stack untuk undo/redo nail placements
- Keyboard shortcuts: Ctrl+Z (undo), Ctrl+Shift+Z (redo)

**4. Responsive Design Breakpoints**:
- Desktop (>1024px): Split-pane layout (2D Studio | 3D Preview)
- Tablet (768px-1024px): Tabbed interface (switch between 2D and 3D)
- Mobile (<768px): Stacked layout dengan 3D preview di top, controls di bottom

**5. Performance Optimization UX**:
- Lazy loading untuk project thumbnails
- Skeleton screens saat loading data
- Debouncing untuk input fields yang trigger re-rendering
- Loading spinners dengan progress percentage untuk heavy operations

3.5 Pengembangan Aplikasi

**3.5.1 Teknologi yang Digunakan**

**Frontend Stack**:
1. **Vue.js 3.3** (Composition API):
   - Reactive framework untuk building UI components
   - Composition API untuk reusable logic dengan composables
   - Vue Router 4 untuk SPA navigation
   - Pinia untuk state management (optional, karena composables cukup untuk app ini)

2. **Three.js r160**:
   - WebGL rendering library untuk visualisasi 3D
   - OrbitControls untuk camera interaction
   - InstancedMesh untuk optimized rendering
   - ShaderMaterial untuk custom visual effects (optional)

3. **JavaScript ES6+**:
   - Modern syntax (arrow functions, destructuring, async/await)
   - Class-based OOP untuk algoritma konversi
   - Modules (import/export) untuk code organization

4. **CSS3 & Responsive Design**:
   - Flexbox dan Grid Layout untuk responsive UI
   - CSS Custom Properties (variables) untuk theming
   - Media queries untuk breakpoints
   - CSS Transitions untuk smooth animations

5. **Build Tools**:
   - Vite 5 sebagai build tool dan dev server (fast HMR)
   - PostCSS untuk CSS processing
   - ESLint untuk code linting

**Backend Stack**:
1. **Ruby on Rails 7.1**:
   - RESTful API dengan JSON responses
   - Action Controller API mode (tanpa view rendering)
   - Active Record ORM untuk database operations
   - Active Support untuk utilities

2. **PostgreSQL 15**:
   - Relational database dengan JSONB support untuk flexible schema
   - Full-text search dengan pg_search (optional untuk search projects)
   - Connection pooling dengan PgBouncer

3. **Authentication**:
   - JWT (JSON Web Token) untuk stateless authentication
   - Bcrypt untuk password hashing
   - Devise atau custom auth solution

4. **Deployment**:
   - Docker containerization untuk consistency across environments
   - Docker Compose untuk multi-container orchestration (Rails app + PostgreSQL)
   - Nginx sebagai reverse proxy
   - SSL/TLS dengan Let's Encrypt certificates

**Development Tools**:
- Git untuk version control
- GitHub untuk repository hosting dan collaboration
- VS Code sebagai code editor
- Postman untuk API testing
- Chrome DevTools untuk debugging frontend

**3.5.2 Arsitektur Sistem**

**Frontend Architecture (Vue.js)**:

```
src/
├── main.js                 # App entry point
├── App.vue                 # Root component
├── router/
│   └── index.js            # Vue Router configuration
├── views/                  # Page-level components
│   ├── HomeView.vue
│   ├── LoginView.vue
│   ├── RegisterView.vue
│   ├── ProfileView.vue
│   └── 2D/
│       ├── NewProjectView.vue
│       └── EditProjectView.vue
├── components/             # Reusable UI components
│   ├── ProjectForm.vue     # 2D Studio interface
│   ├── ThreeDPreview.vue   # 3D visualization canvas
│   ├── ControlPanel.vue    # Board & Nail controls
│   └── Toast.vue           # Notification system
├── composables/            # Reusable logic (Composition API)
│   ├── use3DScene.js       # Three.js scene management
│   ├── use2DGrid.js        # Grid data management
│   └── useToast.js         # Toast notifications
├── utils/                  # Helper functions
│   ├── api.js              # API client (axios wrapper)
│   └── validators.js       # Form validations
└── assets/
    ├── main.css            # Global styles
    └── images/
```

**Key Components Responsibility**:

1. **ProjectForm.vue** (2D Studio):
   - Manages grid settings (gridWidth, gridHeight)
   - Renders interactive 2D grid (HTML table atau SVG)
   - Handles nail placement on grid click
   - Displays Board and Nail Control Panels
   - Emits data changes ke parent component

2. **ThreeDPreview.vue** (3D Studio):
   - Initializes Three.js scene, camera, renderer
   - Uses `use3DScene` composable untuk scene logic
   - Handles window resize events untuk responsive canvas
   - Displays performance stats (FPS, object count)

3. **use3DScene.js** Composable:
```javascript
// Pseudocode structure
export function use3DScene(canvasElement) {
  // Internal state
  const scene = ref(null)
  const camera = ref(null)
  const renderer = ref(null)
  const nailInstancedMesh = ref(null)
  
  // Initialize Three.js scene
  const initScene = () => {
    scene.value = new THREE.Scene()
    camera.value = new THREE.PerspectiveCamera(...)
    renderer.value = new THREE.WebGLRenderer({ canvas: canvasElement })
    // Setup lights, controls, etc.
  }
  
  // Update 3D scene based on 2D data
  const updateNails = (gridData) => {
    // Call grid-based extrusion algorithm
    const positions = convertGridTo3D(gridData)
    updateInstancedMesh(nailInstancedMesh.value, positions)
  }
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate)
    renderer.value.render(scene.value, camera.value)
  }
  
  // Cleanup on component unmount
  const dispose = () => {
    renderer.value.dispose()
    // Cleanup geometries, materials
  }
  
  return { initScene, updateNails, animate, dispose }
}
```

4. **Grid-Based Extrusion Algorithm** (in utils/gridConversion.js):
```javascript
// Core algorithm for 2D-to-3D conversion
class GridConverter {
  constructor(gridWidth, gridHeight, marginBetweenNails) {
    this.gridWidth = gridWidth
    this.gridHeight = gridHeight
    this.margin = marginBetweenNails
  }
  
  // Reversed coordinate system for centering on origin
  convertCoordinate(gridX, gridY) {
    const centerX = (this.gridWidth - 1) / 2
    const centerY = (this.gridHeight - 1) / 2
    
    const posX = (gridX - centerX) * this.margin
    const posZ = (gridY - centerY) * this.margin
    
    return { x: posX, z: posZ }
  }
  
  // Generate transformation matrices for InstancedMesh
  generateMatrices(nailsData) {
    const matrices = []
    
    for (const [key, nail] of Object.entries(nailsData)) {
      const [x, y] = key.split(',').map(Number)
      const { x: posX, z: posZ } = this.convertCoordinate(x, y)
      
      const matrix = new THREE.Matrix4()
      // Scale based on nail dimensions
      matrix.makeScale(nail.body_width, nail.height, nail.body_width)
      // Translate to grid position
      matrix.setPosition(posX, nail.height / 2, posZ)
      
      matrices.push(matrix)
    }
    
    return matrices
  }
}
```

**Backend Architecture (Rails API)**:

```
app/
├── controllers/
│   ├── api/
│   │   └── v1/
│   │       ├── auth_controller.rb      # POST /api/v1/auth/login
│   │       ├── users_controller.rb     # GET/PATCH /api/v1/users/:id
│   │       └── projects_controller.rb  # CRUD /api/v1/projects
├── models/
│   ├── user.rb
│   └── project.rb
├── serializers/                        # JSON response formatting
│   ├── user_serializer.rb
│   └── project_serializer.rb
└── services/                           # Business logic
    └── project_validator.rb            # Validate project data JSON

db/
├── migrate/
│   ├── 001_create_users.rb
│   └── 002_create_projects.rb
└── schema.rb
```

**API Endpoints**:

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/auth/register` | User registration | No |
| POST | `/api/v1/auth/login` | User login | No |
| POST | `/api/v1/auth/logout` | User logout | Yes |
| GET | `/api/v1/users/me` | Get current user profile | Yes |
| PATCH | `/api/v1/users/me` | Update profile | Yes |
| GET | `/api/v1/projects` | List user projects | Yes |
| GET | `/api/v1/projects/:id` | Get project detail | Yes |
| POST | `/api/v1/projects` | Create new project | Yes |
| PATCH | `/api/v1/projects/:id` | Update project | Yes |
| DELETE | `/api/v1/projects/:id` | Delete project | Yes |

**Example API Request/Response**:

```http
POST /api/v1/projects
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "name": "Diamond Pattern",
  "description": "Nirmana dengan pola diamond pyramid",
  "data": {
    "version": "1.0.0",
    "gridWidth": 10,
    "gridHeight": 10,
    "marginBetweenNails": 10,
    "paddingBoard": 10,
    "nails": {
      "5,5": { "height": 30, "body_width": 2, "head_width": 2 }
    }
  }
}

Response 201 Created:
{
  "id": 123,
  "user_id": 456,
  "name": "Diamond Pattern",
  "description": "Nirmana dengan pola diamond pyramid",
  "data": { ... },
  "created_at": "2026-01-07T10:30:00Z",
  "updated_at": "2026-01-07T10:30:00Z"
}
```

**3.5.3 Deployment Aplikasi**

**Deployment Strategy**: Docker-based deployment dengan CI/CD pipeline

**Docker Configuration**:

1. **Frontend Dockerfile** (Vue.js):
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. **Backend Dockerfile** (Rails):
```dockerfile
FROM ruby:3.2-alpine
WORKDIR /app

# Install dependencies
RUN apk add --no-cache postgresql-dev build-base

# Install gems
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy app files
COPY . .

# Precompile assets (if any)
RUN bundle exec rake assets:precompile

EXPOSE 3000
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
```

3. **Docker Compose**:
```yaml
version: '3.8'
services:
  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: ${DB_PASSWORD}
  
  backend:
    build: ./backend
    depends_on:
      - db
    environment:
      DATABASE_URL: postgresql://postgres:${DB_PASSWORD}@db:5432/nirmana_production
      JWT_SECRET: ${JWT_SECRET}
    ports:
      - "3000:3000"
  
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  postgres_data:
```

**CI/CD Pipeline** (GitHub Actions example):
1. **On Push to main branch**:
   - Run tests (frontend: Jest, backend: RSpec)
   - Build Docker images
   - Push images to Docker Hub / GitHub Container Registry
   
2. **Deployment**:
   - SSH to production server
   - Pull latest Docker images
   - Run `docker-compose up -d` untuk restart services
   - Run database migrations jika ada

**Production Infrastructure**:
- **Server**: VPS (DigitalOcean, AWS EC2, atau Google Cloud Compute Engine)
- **Domain**: Custom domain dengan DNS pointing ke server IP
- **SSL**: Let's Encrypt certificate dengan auto-renewal (Certbot)
- **Reverse Proxy**: Nginx untuk routing requests ke frontend dan backend
- **Monitoring**: Uptime monitoring (UptimeRobot), error tracking (Sentry)
- **Backup**: Daily automated PostgreSQL backups ke cloud storage (S3)

3.6 Pengujian Aplikasi

**3.6.1 Metode Pengujian**

Pengujian aplikasi dilakukan secara komprehensif dengan beberapa metode:

**1. Functional Testing (Black Box Testing)**:
Menguji fungsionalitas aplikasi tanpa melihat internal code structure:

| No | Fitur | Test Case | Expected Result |
|----|-------|-----------|-----------------|
| 1 | Register | Input valid email & password → Submit | User created, redirect to login |
| 2 | Login | Input correct credentials → Submit | Token generated, redirect to dashboard |
| 3 | Create Project | Fill form → Click Save | Project saved to DB, success toast |
| 4 | Edit Project | Modify nail height → Update | 3D preview updates real-time |
| 5 | Delete Project | Click Delete → Confirm | Project removed from DB |
| 6 | 2D-to-3D Conversion | Place nail at (5,5) → Preview 3D | Nail rendered at correct position |
| 7 | Camera Controls | Drag mouse → Rotate | Scene rotates smoothly |
| 8 | Save Project | Click Save with empty name | Validation error shown |

**2. Performance Testing**:
Mengukur performa aplikasi dengan metrics kuantitatif:

**Test Scenarios**:
- **Scenario A**: 100 nails (10x10 grid)
- **Scenario B**: 400 nails (20x20 grid)
- **Scenario C**: 1000 nails (custom pattern)
- **Scenario D**: 2000 nails (stress test)

**Metrics Measured**:
1. **Frame Rate (FPS)**: Target 60 FPS pada Scenario A-C, >30 FPS pada Scenario D
2. **Initial Load Time**: Time from page load to first 3D render
3. **Response Time**: Time dari user input (slider change) hingga 3D update
4. **Memory Usage**: RAM consumption selama rendering
5. **Network Latency**: API response time untuk CRUD operations

**Performance Testing Tools**:
- Chrome DevTools Performance tab untuk FPS profiling
- `performance.now()` untuk measuring execution time
- Three.js Stats.js untuk real-time FPS monitoring
- Lighthouse untuk overall performance score

**3. Accuracy Testing**:
Validasi ketepatan algoritma konversi koordinat:

**Test Cases**:
```javascript
// Grid 20x20, margin 10mm
// Expected positions for reversed coordinate system:

// Nail at (0,0) → 3D position: (-95, y, -95)
// Nail at (9,9) → 3D position: (0, y, 0)  // Center
// Nail at (19,19) → 3D position: (95, y, 95)

// Formula: pos = (coord - (gridSize-1)/2) * margin
// For (0,0): (0 - 9.5) * 10 = -95 ✓
```

**Automated Unit Tests**:
```javascript
describe('GridConverter', () => {
  it('should center grid at origin', () => {
    const converter = new GridConverter(20, 20, 10)
    const { x, z } = converter.convertCoordinate(9, 9)
    expect(x).toBe(0)
    expect(z).toBe(0)
  })
  
  it('should handle even grid sizes', () => {
    const converter = new GridConverter(10, 10, 10)
    const { x, z } = converter.convertCoordinate(4, 4)
    expect(x).toBe(-5)  // (4 - 4.5) * 10 = -5
    expect(z).toBe(-5)
  })
})
```

**4. Cross-Browser Testing**:
Memastikan compatibility di berbagai browser:

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 120+ | ✅ Primary target |
| Firefox | 115+ | ✅ Full support |
| Safari | 16+ | ⚠️ Requires testing WebGL |
| Edge | 120+ | ✅ Chromium-based |
| Opera | 105+ | ✅ Chromium-based |

**5. User Acceptance Testing (UAT)**:
Evaluasi oleh end-users (mahasiswa DKV):

**Participant Criteria**:
- Mahasiswa DKV semester 1-4 (sudah/sedang mengambil mata kuliah Nirmana)
- Memiliki akses laptop/desktop dengan GPU yang memadai
- Bersedia memberikan feedback melalui kuesioner dan wawancara
- Total responden: N=20-30 orang

**UAT Methodology**:
1. **Pre-Test**:
   - Kuesioner tentang pemahaman awal Nirmana Trimatra
   - Tes visualisasi spasial (baseline measurement)

2. **Application Usage**:
   - Peserta diberikan tutorial singkat (10 menit)
   - Task scenario: "Buat desain Nirmana dengan pola pyramid di grid 15x15"
   - Observasi penggunaan aplikasi (time to completion, errors, confusion points)
   - Think-aloud protocol untuk capture thought process

3. **Post-Test**:
   - System Usability Scale (SUS) questionnaire (10 pertanyaan, skala 1-5)
   - Kuesioner pemahaman Nirmana Trimatra (bandingkan dengan pre-test)
   - Open-ended questions:
     - Apa fitur yang paling berguna?
     - Apa kesulitan yang dihadapi?
     - Saran perbaikan?
   - Semi-structured interview (optional, untuk insight mendalam)

**SUS Questionnaire** (System Usability Scale):
1. Saya pikir saya ingin sering menggunakan aplikasi ini
2. Saya merasa aplikasi ini terlalu kompleks
3. Saya merasa aplikasi ini mudah digunakan
4. Saya memerlukan bantuan orang teknis untuk menggunakan aplikasi ini
5. Fitur-fitur dalam aplikasi ini terintegrasi dengan baik
6. Saya merasa ada terlalu banyak inkonsistensi dalam aplikasi ini
7. Kebanyakan orang akan belajar menggunakan aplikasi ini dengan cepat
8. Aplikasi ini sangat membingungkan untuk digunakan
9. Saya merasa sangat percaya diri menggunakan aplikasi ini
10. Saya perlu belajar banyak hal sebelum bisa menggunakan aplikasi ini

**Scoring**: (Skor 1-5 per pertanyaan, dikonversi ke skala 0-100)
- **Acceptable**: SUS score > 68
- **Good**: SUS score > 80
- **Excellent**: SUS score > 90

**6. Security Testing**:
- **SQL Injection**: Test input sanitization pada API endpoints
- **XSS (Cross-Site Scripting)**: Test Vue.js template injection
- **Authentication**: Test JWT token expiration dan refresh mechanism
- **Authorization**: Test access control (user tidak bisa edit project milik user lain)
- **Password Security**: Verify bcrypt hashing dengan adequate cost factor

**3.6.2 Instrumen Pengujian**

**A. Performance Testing Instrumentation**:

```javascript
// FPS Counter (in ThreeDPreview.vue)
let frameCount = 0
let lastTime = performance.now()

function updateFPS() {
  frameCount++
  const currentTime = performance.now()
  
  if (currentTime - lastTime >= 1000) {
    const fps = Math.round(frameCount * 1000 / (currentTime - lastTime))
    console.log(`FPS: ${fps}`)
    frameCount = 0
    lastTime = currentTime
  }
}

function animate() {
  requestAnimationFrame(animate)
  updateFPS()
  renderer.render(scene, camera)
}
```

**B. Accuracy Testing Suite** (Jest unit tests):

```javascript
// tests/unit/gridConverter.spec.js
import { GridConverter } from '@/utils/gridConversion'

describe('GridConverter Accuracy Tests', () => {
  test('converts center coordinate correctly', () => {
    const converter = new GridConverter(20, 20, 10)
    const result = converter.convertCoordinate(9, 9)
    expect(result.x).toBeCloseTo(0, 5)
    expect(result.z).toBeCloseTo(0, 5)
  })
  
  test('generates correct transformation matrix', () => {
    const converter = new GridConverter(10, 10, 10)
    const nailData = { height: 30, body_width: 2, head_width: 2 }
    const matrix = converter.generateMatrix(5, 5, nailData)
    
    // Extract position from matrix
    const position = new THREE.Vector3()
    position.setFromMatrixPosition(matrix)
    
    expect(position.x).toBeCloseTo(5, 5)
    expect(position.y).toBeCloseTo(15, 5)  // height/2
    expect(position.z).toBeCloseTo(5, 5)
  })
})
```

**C. UAT Questionnaire Template**:

**Section 1: Demographics**
1. Semester berapa Anda saat ini? (1/2/3/4/5/6/7/8)
2. Sudah/sedang mengambil mata kuliah Nirmana? (Ya/Tidak)
3. Pengalaman menggunakan software 3D sebelumnya? (Tidak ada / Pemula / Menengah / Mahir)

**Section 2: Pre-Test Knowledge Assessment**
1. Seberapa paham Anda tentang konsep Nirmana Trimatra? (Skala 1-5)
2. Seberapa sulit Anda memvisualisasikan bentuk 3D dari grid 2D? (Skala 1-5)

**Section 3: Post-Usage - System Usability Scale (SUS)**
(10 pertanyaan SUS seperti dijelaskan di atas, skala 1-5)

**Section 4: Post-Test Knowledge Assessment**
1. Seberapa aplikasi ini membantu pemahaman Nirmana Trimatra? (Skala 1-5)
2. Apakah Anda lebih mudah memvisualisasikan 3D setelah menggunakan aplikasi? (Skala 1-5)

**Section 5: Open-Ended Feedback**
1. Fitur apa yang paling Anda sukai?
2. Apa tantangan terbesar saat menggunakan aplikasi?
3. Fitur apa yang Anda ingin ditambahkan?
4. Saran perbaikan lainnya?

**D. Automated Testing Scripts**:

```bash
# Frontend unit tests (Jest)
npm run test:unit

# Frontend e2e tests (Cypress)
npm run test:e2e

# Backend tests (RSpec)
bundle exec rspec

# Performance benchmarking
npm run benchmark
```

**Summary Metrics untuk Evaluasi**:
1. **Functional**: % test cases passed (target: 100%)
2. **Performance**: Average FPS (target: >60 for 400 objects)
3. **Accuracy**: Coordinate error margin (target: <0.01mm)
4. **Usability**: SUS score (target: >68, ideally >80)
5. **User Satisfaction**: Post-test knowledge improvement (target: +20% dari pre-test)


-------
SIMPULAN DAN SARAN
5.1 Simpulan
Berdasarkan hasil penelitian yang telah dibahas pada Bab IV, dapat disimpulkan bahwa pengembangan Aplikasi Web Simulasi Nirmana 3D dengan Paku berbasis JavaScript, Three.js, dan PostgreSQL berhasil dilaksanakan sesuai dengan tujuan penelitian. Aplikasi ini mampu menyediakan fitur utama seperti registrasi akun, login, 2D Studio, 3D Studio, Board Control Panel, Nail Control Panel, dan penyimpanan proyek yang berfungsi dengan baik tanpa bug kritis. 











DAFTAR PUSTAKA

**Buku & Literatur Utama**

Arsyad, A. (2019). *Media Pembelajaran*. Jakarta: PT Raja Grafindo Persada.

Connolly, T. M., & Begg, C. E. (2015). *Database Systems: A Practical Approach to Design, Implementation, and Management* (6th ed.). Pearson Education.

Dirksen, J. (2023). *Learn Three.js: Programming 3D animations and visualizations for the web with HTML5 and WebGL* (4th ed.). Packt Publishing.

Pressman, R. S., & Maxim, B. R. (2020). *Software Engineering: A Practitioner’s Approach* (9th ed.). McGraw-Hill Education.

Sanyoto, S. E. (2010). *Nirmana: Elemen-elemen Seni dan Desain*. Yogyakarta: Jalasutra.

Sugiyono. (2019). *Metode Penelitian Kuantitatif, Kualitatif, dan R&D*. Bandung: Alfabeta.

Wong, W. (1993). *Principles of Form and Design*. New York: Van Nostrand Reinhold.

**Jurnal & Artikel Ilmiah (Nirmana & Pendidikan Desain)**

Dere, H. E., & Kalelioglu, F. (2020). The effects of using web-based 3D design environment on spatial visualisation and mental rotation abilities of secondary school students. *Informatics in Education*, 19(3). https://doi.org/10.15388/infedu.2020.18

Deny, T. A., Wicaksono, A. R., Mataram, S., Widayat, R., & Yuda, J. P. (2024). Content analysis of different types of nirmana teaching videos and the viewers' perception. *Journal of Arts and Humanities*, 11(2), 45-58.

Hendriyana, H., Nurhidayat, M., & Handayani, W. (2022). Product design strategy using Nirmana Dwimatra concept: Implementation in the learning process in product design students of FIK Telkom University. *International Journal of Creative and Arts Studies*, 9(1), 12-24.

Merati, D. M. W. (2025). Peran Nirmana Trimatra dalam proses studi perancangan desain interior (The purpose of Nirmana Trimatra in interior design study process). *Jurnal Dimensi Interior*, 18(1).

Riana, I., Putra, Y. S., & Setyadi, D. K. (2024). Design of the Nirmana Dwimatra teaching material book for students of the Polimedia Photography Department. *Journal of Education and Laboratory Research*.

Šafhalter, A., Glodež, S., Šorgo, A., & Ploj Virtič, M. (2022). Development of spatial thinking abilities in engineering 3D modeling course aimed at lower secondary students. *International Journal of Technology and Design Education*, 32, 1269–1296. https://doi.org/10.1007/s10798-020-09597-8

Wardaya, M. (2021). Penggunaan Nirmana–Komposisi Tak Berbentuk sebagai dasar pembuatan pola surface design. *Jurnal Rupa*, 6(1).

**Jurnal & Artikel Ilmiah (Teknologi, WebGL, & Visualisasi)**

Brooke, J. (1996). SUS: A 'quick and dirty' usability scale. In P. W. Jordan, B. Thomas, B. A. Weerdmeester, & A. L. McClelland (Eds.), *Usability Evaluation in Industry* (pp. 189–194). Taylor & Francis.

Chen, D. (2024). Research on real-time interaction of 3D animation model based on web technology. In *Frontier Computing on Industrial Applications Volume 3* (pp. 167–175). Springer, Singapore. https://doi.org/10.1007/978-981-96-2798-1_19

Franke, L., & Haehn, D. (2020). Modern scientific visualizations on the web. *Informatics*, 7(4), 37. https://doi.org/10.3390/informatics7040037

He, Y. R., Wang, X. R., Chen, Q. J., & Leng, P. (2020). Design and implementation of virtual simulation teaching system for UAV based on WEBGL. *The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences*, XLII-3/W10, 1239-1244. https://doi.org/10.5194/isprs-archives-XLII-3-W10-1239-2020

Zheng, P., Yang, J., Lou, J., & Wang, B. (2024). Design and application of virtual simulation teaching platform for intelligent manufacturing. *Scientific Reports*, 14, 11234. https://doi.org/10.1038/s41598-024-62072-5

**Dokumentasi Teknis & Standar**

ISO. (2011). *ISO/IEC 25010:2011 Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models*. International Organization for Standardization.

Khronos Group. (2023). *WebGL 2.0 Specification*. Retrieved from https://www.khronos.org/registry/webgl/specs/latest/2.0/

Vue.js Core Team. (2024). *Vue.js Documentation*. Retrieved from https://vuejs.org/guide/introduction.html Three.js Authors. (2024). *Three.js Documentation*. Retrieved from https://threejs.org/docs/ 
