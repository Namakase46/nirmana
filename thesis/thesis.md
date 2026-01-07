Judul: APLIKASI WEB SIMULASI DESAIN NIRMANA 3D DENGAN PAKU UNTUK MENINGKATKAN PEMBELAJARAN DESAIN VISUAL

-------
# Abstrak
Pembelajaran Nirmana Trimatra (3D) dalam desain visual sering kali terkendala oleh metode tradisional “paku dan papan” yang membatasi fleksibilitas, kecepatan eksplorasi, serta membutuhkan biaya dan waktu yang signifikan. Penelitian ini bertujuan mengembangkan aplikasi web interaktif berbasis JavaScript, Vue.js, dan Three.js untuk mensimulasikan proses pembuatan Nirmana 3D secara digital, sehingga mahasiswa dapat memvisualisasikan, memanipulasi, dan menyimpan desain tanpa keterbatasan fisik. Metodologi pengembangan menggunakan model waterfall, meliputi tahap komunikasi, perencanaan, perancangan antarmuka, konstruksi aplikasi, serta pengujian. Fitur utama meliputi 2D Studio, 3D Studio, pengaturan papan dan paku, serta penyimpanan desain dalam format JSON pada database PostgreSQL. Uji coba dilakukan kepada mahasiswa Desain Komunikasi Visual melalui kuesioner, wawancara, dan uji fungsionalitas. Hasilnya menunjukkan bahwa aplikasi mampu meningkatkan pemahaman konsep spasial, mempercepat iterasi desain, serta memberikan fleksibilitas eksplorasi bentuk. Responden juga menilai positif akses berbasis web yang memudahkan penggunaan lintas perangkat tanpa instalasi tambahan. Simpulan penelitian menegaskan bahwa aplikasi ini tidak hanya menjadi media pembelajaran efektif, tetapi juga mendukung pemerataan akses edukasi desain melalui eliminasi hambatan biaya dan material, serta relevan dengan kebutuhan industri kreatif modern

Kata Kunci: Nirmana Trimatra, Visualisasi 3D, Three.js, Aplikasi Web, Desain Visual

-------
# KATA PENGANTAR
Puji syukur ke hadirat Tuhan Yang Maha Esa atas rahmat dan karunia-Nya, sehingga skripsi ini dapat diselesaikan dengan baik. Skripsi dengan judul "APLIKASI WEB SIMULASI DESAIN NIRMANA 3D DENGAN PAKU UNTUK MENINGKATKAN PEMBELAJARAN DESAIN VISUAL" ini disusun sebagai salah satu syarat untuk memperoleh gelar Sarjana Komputer pada Program Studi Computer Science, BINUS Online.
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
METODOLOGI	26
3.1 Metodologi	26
3.2 Analisis	28
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
Nirmana, sebagai penataan elemen geometris untuk estetika, adalah fondasi seni visual dan desain. Konsep ini krusial untuk pengembangan kreativitas dan visualisasi, membantu desainer memahami hubungan antar elemen. Namun, metode tradisional seperti "paku dan papan" memiliki keterbatasan signifikan dalam eksperimen, kecepatan, dan fleksibilitas. Proses manual ini menghambat eksplorasi ekstensif, iterasi cepat, dan variasi komposisi. Kendala fisik ini sering membuat prinsip Nirmana terabaikan dalam mata kuliah lanjutan, karena waktu lebih banyak dihabiskan untuk proses fisik ketimbang eksplorasi konseptual. Ini menciptakan tantangan dalam mempersiapkan mahasiswa untuk industri desain modern yang mengandalkan alat digital untuk inovasi dan efisiensi. Keterbatasan ini menyoroti kebutuhan akan pendekatan baru yang dapat mengoptimalkan pembelajaran Nirmana, memastikan pemahaman mendalam tanpa terhambat oleh proses yang memakan waktu dan material.  
Penerapan visualisasi 3D dalam pendidikan desain menawarkan solusi transformatif untuk mengatasi kendala ini. Alat 3D memfasilitasi pemahaman spasial yang lebih dalam, khususnya untuk Nirmana Trimatra (3D) yang memerlukan pertimbangan kedalaman, volume, dan bentuk. Metode manual kesulitan merepresentasikan dan memanipulasi objek 3D secara efektif. Sebaliknya, lingkungan digital mendorong eksperimen cepat dan proses desain iteratif, memungkinkan mahasiswa mengeksplorasi berbagai konsep artistik dan variasi komposisi dengan kecepatan dan fleksibilitas yang belum pernah ada. Kemampuan memanipulasi elemen 3D secara instan meningkatkan pemahaman teoritis Nirmana dan memperkaya pengalaman belajar. Adopsi teknologi 3D ini juga langsung mempersiapkan mahasiswa untuk alat dan alur kerja profesional. Menurut Dere & Kalelioglu (2020), penggunaan environment desain 3D berbasis web secara signifikan meningkatkan kemampuan visualisasi spasial dan rotasi mental siswa, dengan peningkatan skor tes yang mencakup visualisasi lintas-seksi objek, menunjukkan potensi transformatif teknologi ini dalam pengembangan keterampilan spasial. 
Transformasi desain dari 2D ke 3D dalam lingkungan digital didasarkan pada prinsip-prinsip geometris dan komputasi canggih, melibatkan konversi data planar menjadi representasi spasial. Proses ini melibatkan perhitungan matematis rumit untuk memproyeksikan dan memanipulasi objek 3D, seringkali menggunakan perkalian matriks untuk mengubah properti objek secara dinamis seperti rotasi, skala, dan translasi. Aplikasi berbasis web yang diusulkan akan memanfaatkan prinsip ini untuk mengubah desain grid 2D menjadi tampilan 3D interaktif, mensimulasikan penataan paku pada papan dengan berbagai ukuran dan ketebalan. Mahasiswa dapat "membangun" komposisi 3D secara virtual, melihat dari berbagai sudut, dan melakukan penyesuaian instan. Pendekatan ini mereplikasi pengalaman taktil dan melampauinya dengan eksplorasi skenario tak terbatas tanpa batasan material atau waktu. Integrasi simulasi paku ini memungkinkan representasi visual akurat tentang bagaimana perubahan elemen 2D diterjemahkan ke bentuk 3D, memperdalam pemahaman hubungan antar dimensi, menjadikannya alat pedagogis yang kuat.  
Aplikasi berbasis web ini akan menjadi aset tak ternilai bagi mahasiswa Desain Komunikasi Visual (DKV) untuk visualisasi desain yang lebih efisien dan interaktif. Manfaat utamanya meliputi peningkatan pemahaman spasial, kemampuan eksperimen yang dipercepat tanpa batasan fisik, dan pengembangan keterampilan digital yang relevan dengan industri. Mahasiswa dapat melihat dan memanipulasi desain dalam 3D, memutar, memperbesar, dan mengubah perspektif dengan mudah, memungkinkan pemahaman intuitif tentang interaksi elemen 3D. Proses iteratif yang cepat mendorong eksplorasi berani tanpa takut kesalahan atau pemborosan material. Lebih dari sekadar alat bantu, platform ini juga mengembangkan kompetensi abad ke-21 seperti berpikir komputasi, pemecahan masalah digital, dan kolaborasi virtual. Menurut Zheng et al. (2024), integrasi platform simulasi virtual dalam kurikulum teknik berkorelasi langsung dengan peningkatan minat belajar, tingkat keterampilan, dan daya saing mahasiswa di pasar kerja melalui peningkatan skor kursus dan partisipasi kompetisi.  
Selain manfaat pedagogis dan pengembangan keterampilan, aplikasi ini berpotensi mendemokratisasi akses ke eksplorasi desain tingkat lanjutan. Dengan menghilangkan batasan fisik dan biaya material metode "paku dan papan" tradisional, mahasiswa dari berbagai latar belakang ekonomi akan memiliki kesempatan yang sama untuk bereksperimen dan mengembangkan kemampuan desain 3D. Tidak ada lagi kekhawatiran biaya material yang sering menjadi hambatan finansial, membuka pintu bagi kreativitas dan inovasi yang lebih luas. Platform digital ini juga meningkatkan aksesibilitas, memungkinkan pembelajaran kapan saja dan di mana saja, yang krusial dalam lingkungan pendidikan modern dengan model pembelajaran hibrida atau jarak jauh. Kemampuan berbagi dan mengulas karya secara digital akan meningkatkan kolaborasi antar mahasiswa dan instruktur, menciptakan ekosistem pembelajaran yang dinamis dan interaktif. Dampak sosial demokratisasi ini signifikan, karena dapat menumbuhkan generasi desainer yang lebih beragam dan inklusif, memperkaya lanskap desain secara keseluruhan. Dengan demikian, aplikasi ini tidak hanya alat pendidikan tetapi juga katalisator untuk perubahan positif dalam aksesibilitas dan kesetaraan pendidikan desain. 
Mengingat potensi besar teknologi digital dalam pendidikan desain, pengembangan aplikasi web untuk simulasi Nirmana Trimatra menjadi sangat relevan dan mendesak. Tantangan dalam mengimplementasikan prinsip Nirmana secara mendalam dan fleksibel dalam kurikulum konvensional memerlukan solusi inovatif. Aplikasi ini tidak hanya mengatasi keterbatasan fisik metode tradisional tetapi juga memberikan pengalaman belajar yang lebih menarik, interaktif, dan relevan dengan kebutuhan industri. Fokus pada simulasi "paku dan papan" secara digital, dengan kemampuan memanipulasi berbagai parameter, akan memastikan esensi Nirmana tetap terjaga, sementara fleksibilitas eksplorasi ditingkatkan secara eksponensial. Selain itu, dengan menyediakan platform yang memungkinkan peralihan mudah antara tampilan 2D dan 3D, aplikasi ini akan membantu mahasiswa memahami hubungan fundamental antara gambar datar dan representasi spasial. Tujuannya adalah memberdayakan mahasiswa DKV dengan alat yang memungkinkan mereka menguasai Nirmana Trimatra secara lebih efektif, mengembangkan keterampilan digital esensial, dan mempersiapkan karier sukses di bidang desain yang terus berkembang. Penelitian oleh Chen (2024) menunjukkan bahwa interaksi real-time model 3D berbasis web secara signifikan meningkatkan efisiensi rendering dan pengalaman pengguna, memperkuat argumen untuk pengembangan platform semacam ini.

1.2. Rumusan Masalah 
Berdasarkan latar belakang diatas, maka rumusan masalah dari penelitian ini adalah: 
  1. Bagaimana pengaruh penggunaan aplikasi web simulasi Nirmana 3D terhadap pemahaman konsep Nirmana Trimatra pada mahasiswa Desain Komunikasi Visual?
  2. Bagaimana bentuk output visual dari aplikasi ini dapat dimanfaatkan sebagai media pembelajaran prinsip Nirmana secara efektif? 
  3. Bagaimana efektivitas aplikasi simulasi Nirmana 3D dalam mendukung proses eksplorasi bentuk dan komposisi desain oleh mahasiswa DKV?  

1.3. Tujuan Penelitian 
Penelitian ini dilakukan bertujuan untuk:
  1. Mengembangkan aplikasi web berbasis JavaScript berparadigma Object-Oriented Programming (OOP) dan Three.js yang memungkinkan pengguna untuk membuat desain Nirmana dari format 2D menjadi representasi 3D. 
  2. Mendeskripsikan bagaimana bentuk output visual dari aplikasi dapat dimanfaatkan sebagai media pembelajaran prinsip Nirmana secara efektif. 
  3. Mengevaluasi efektivitas aplikasi simulasi Nirmana 3D dalam memfasilitasi eksplorasi bentuk dan komposisi desain oleh mahasiswa DKV. 

1.4. Manfaat Penelitian 
Manfaat yang diperoleh dari penelitian ini adalah sebagai berikut:
  1. Manfaat Akademis (Teoretis)
      Penelitian ini diharapkan dapat memberikan kontribusi terhadap pengembangan ilmu pengetahuan, khususnya dalam bidang Desain Komunikasi Visual (DKV) dan media pembelajaran berbasis teknologi. Melalui pengembangan aplikasi simulasi Nirmana Trimatra berbasis web, penelitian ini dapat menjadi referensi dalam penerapan pendekatan digital untuk pembelajaran konsep visual dasar, serta memperkaya kajian akademik mengenai integrasi antara prinsip Nirmana dan teknologi visualisasi tiga dimensi menggunakan JavaScript dan Three.js. Penelitian ini juga dapat mendorong studi lanjutan terkait pengembangan media interaktif dalam pendidikan seni dan desain.
  2. Manfaat Praktis
      Secara praktis, penelitian ini bermanfaat bagi mahasiswa dan pengajar dalam lingkungan pendidikan desain, khususnya program studi Desain Komunikasi Visual. Aplikasi yang dikembangkan memungkinkan proses pembelajaran Nirmana Trimatra menjadi lebih interaktif, efisien, dan fleksibel, tanpa ketergantungan pada alat dan bahan fisik seperti paku dan papan. Mahasiswa dapat lebih mudah mengeksplorasi bentuk, komposisi, serta prinsip spasial secara langsung melalui media digital. Selain itu, aplikasi ini juga memberikan alternatif pembelajaran jarak jauh atau hybrid, serta membuka akses yang lebih luas dan merata bagi mahasiswa dari berbagai latar belakang ekonomi.

1.5. Ruang Lingkup Penelitian
1.5.1 Cakupan 
Penelitian ini mencakup proses perancangan dan pengembangan aplikasi web interaktif berbasis JavaScript dan Three.js yang memungkinkan mahasiswa Desain Komunikasi Visual (DKV) untuk melakukan simulasi pembuatan desain Nirmana Trimatra (3D) secara digital. Fitur utama dari aplikasi ini meliputi:
Pembuatan komposisi geometris berbasis grid
Representasi visual elemen “paku” sebagai objek 3D dengan parameter posisi, ukuran, dan tinggi
Navigasi tampilan 3D (rotasi, zoom, dan perspektif)
Penyimpanan dan pemuatan ulang desain dalam format data json dan disimpan pada database PostgreSQL.
Visualisasi hasil komposisi sebagai media pembelajaran prinsip Nirmana Trimatra 

Penelitian juga mencakup uji coba aplikasi oleh sekelompok mahasiswa DKV sebagai responden untuk mengevaluasi pemahaman terhadap prinsip Nirmana, serta sejauh mana aplikasi mendukung eksplorasi desain secara lebih fleksibel dibandingkan metode manual.
 
1.5.2 Batasan  
Penelitian ini dibatasi hanya pada pengembangan prototipe aplikasi untuk keperluan eksplorasi dan pembelajaran prinsip Nirmana Trimatra. Aplikasi ini tidak mencakup integrasi dengan sistem pembelajaran daring (e-learning), penilaian otomatis karya, ataupun fitur kolaborasi real-time antar pengguna. Desain objek dalam simulasi dibatasi pada bentuk dasar geometris (seperti silinder sebagai representasi paku) tanpa kompleksitas bentuk organik. Evaluasi dilakukan secara kualitatif berdasarkan pengalaman pengguna dan persepsi efektivitas aplikasi, bukan melalui uji statistik eksperimental. Selain itu, pengujian hanya dilakukan pada lingkup mahasiswa program studi Desain Komunikasi Visual tingkat dasar dan tidak mencakup pengguna profesional atau lintas bidang desain. 
 
1.6. Sistematika Penulisan 
Sistematika penulisan dalam penelitian ini akan diuraikan dalam setiap bab. Adapun setiap bab akan membahas hal sebagai berikut.
Bab I - Pendahuluan.
 	Bab ini menjelaskan latar belakang penelitian mengenai tantangan dalam pembelajaran Nirmana Trimatra (3D) pada mahasiswa Desain Komunikasi Visual, khususnya yang masih mengandalkan metode manual seperti "paku dan papan". Ditekankan pula keterbatasan metode tradisional dalam hal fleksibilitas, kecepatan eksplorasi, dan ketersediaan material. Selain itu, bab ini memaparkan urgensi pemanfaatan teknologi digital seperti visualisasi 3D interaktif untuk meningkatkan pemahaman spasial dan proses eksploratif mahasiswa. Rumusan masalah, tujuan, dan manfaat penelitian juga dijelaskan secara rinci dalam bab ini.

Bab II - Tinjauan Referensi.
 	Bab ini berisi kajian teori yang mendasari penelitian, termasuk pengertian Nirmana Trimatra, prinsip dasar desain visual, teori pembelajaran berbasis digital, serta pemanfaatan teknologi WebGL dan Three.js dalam visualisasi 3D. Penelitian terdahulu yang relevan juga disajikan sebagai landasan ilmiah dan pembeda bagi penelitian ini.

Bab III - Metodologi Penelitian.
 	Bab ini menjelaskan metode yang digunakan dalam pengembangan aplikasi, yaitu pendekatan rekayasa perangkat lunak dengan model pengembangan iteratif. Tahapan penelitian meliputi identifikasi kebutuhan pengguna melalui observasi dan wawancara, perancangan antarmuka berbasis prinsip user-centered design, pengembangan aplikasi web dengan JavaScript dan Three.js menggunakan pendekatan Object-Oriented Programming (OOP), serta implementasi fitur penyimpanan desain menggunakan format .json. Pengujian aplikasi dilakukan dengan uji fungsionalitas, uji antarmuka pengguna, dan uji efektivitas dalam konteks pembelajaran.

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





SIMPULAN DAN SARAN
5.1 Simpulan
Berdasarkan hasil penelitian yang telah dibahas pada Bab IV, dapat disimpulkan bahwa pengembangan Aplikasi Web Simulasi Nirmana 3D dengan Paku berbasis JavaScript, Three.js, dan PostgreSQL berhasil dilaksanakan sesuai dengan tujuan penelitian. Aplikasi ini mampu menyediakan fitur utama seperti registrasi akun, login, 2D Studio, 3D Studio, Board Control Panel, Nail Control Panel, dan penyimpanan proyek yang berfungsi dengan baik tanpa bug kritis. 











DAFTAR PUSTAKA
Šafhalter, A., Glodež, S., Šorgo, A., & Ploj Virtič, M. (2022). Development of spatial thinking abilities in engineering 3D modeling course aimed at lower secondary students. International Journal of Technology and Design Education. https://doi.org/10.1007/s10798-020-09597-8
Chen, D. (2024). Research on real-time interaction of 3D animation model based on web technology. In Frontier Computing on Industrial Applications Volume 3 (pp. 167–175). Springer, Singapore. https://doi.org/10.1007/978-981-96-2798-1_19
He, Y. R., Wang, X. R., Chen, Q. J., & Leng, P. (2020). Design and implementation of virtual simulation teaching system for UAV based on WEBGL. The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences. https://doi.org/10.5194/isprs-archives-XLII-3-W10-1239-2020
Zheng, P., Yang, J., Lou, J., & Wang, B. (2024). Design and application of virtual simulation teaching platform for intelligent manufacturing. Scientific Reports. https://doi.org/10.1038/s41598-024-62072-5
Franke, L., & Haehn, D. (2020). Modern scientific visualizations on the web. Informatics. https://doi.org/10.3390/informatics7040037
Dere, H. E., & Kalelioglu, F. (2020). The effects of using web-based 3D design environment on spatial visualisation and mental rotation abilities of secondary school students. Informatics in Education. https://doi.org/10.15388/infedu.2020.18
Made Widyatantri Merati. (2025). Peran Nirmana Trimatra dalam proses studi perancangan desain interior (The purpose of Nirmana Trimatra in interior design study process). 
Deny Tri Ardianto, Wicaksono, A. R., Mataram, S., Widayat, R., & Yuda, J. P. (2024). Content analysis of different types of nirmana teaching videos and the viewers' perception. 
Riana, I., Putra, Y. S., & Setyadi, D. K. (2024). Design of the Nirmana Dwimatra teaching material book for students of the Polimedia Photography Department. 
Hendriyana, H., Nurhidayat, M., & Handayani, W. (2022). Product design strategy using Nirmana Dwimatra concept: Implementation in the learning process in product design students of FIK Telkom University. 
Wardaya, M. (2021). Penggunaan Nirmana–Komposisi Tak Berbentuk sebagai dasar pembuatan pola surface design. 
