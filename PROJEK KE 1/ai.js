function askQuestion() {
    let userInput = document.getElementById("userInput").value.toLowerCase();
    let chatBox = document.getElementById("chatBox");

    let responses = {
        "apa kabar?": "Saya baik, terima kasih! Bagaimana dengan Anda?",
        "apakah kamu Bisa merasa senang?" : "Tidak,Tuan Saya Menciptakan Saya Khusus Menjawab Pertanyaan, Terlebih Saya Tidak Dirancang untuk berekspresi dan merasan sesuatu,Tetapi Mungkin Suatu Hari akan ada AI Yang Bisa Bereskpresi Seperti Manusia.",
        "baik": "Baguslah Kalau Begitu,Apakah Ada Yang Bisa Saya Tolong?",
        "apakah kamu menyukai seseorang?" : "Maaf Saya Tidak Mengerti apa Itu Arti Suka",
        "siapa nama pembuatu kamu?" : "Nama Pembuat Saya Adalah akunsete atau Susanto,Yang Menciptakan Saya Untuk Membantu Orang Dalam Merespon Jawaban.",
        "siapa nama kamu?": "Saya adalah AI Assistant.",
        "tidak ada": "Baiklah Kalau Begitu,Jangan Ragu-Ragu untuk Bertanya Kepada Saya😊😊😊",
        // Daftar pertanyaan dan respons tambahan
        "halo": "Halo,Ada Yang Bisa Saya Bantu?",
        "berapa 1+1?": "Yaitu Jawabannya adalah 2",
        "siapa pembuat kamu?": "Pembuat Saya adalah akunsete,Yang Bertujuan Untuk Membuat ai Tanpa API",
        "apakah boleh berpacaran dalam islam?": "Islam melarang untuk berpacaran karena mendekati perbuatan zina. Sebagaimana dalam Al-Quran surah Al-Isra ayat 32 sebagai berikut. Nabi Muhammad SAW juga menegaskan bahwa laki-laki dan perempuan tidak diperbolehkan berduaan. Sebagaimana dalam hadis berikut.",
        "apa warna langit?": "Warna langit bisa berubah-ubah tergantung pada waktu dan kondisi cuaca. Biasanya biru pada siang hari dan merah saat matahari terbenam.",
        "apa itu ai?": "AI atau kecerdasan buatan adalah simulasi kecerdasan manusia oleh mesin, terutama komputer.",
        "apa itu css?": "CSS atau Cascading Style Sheets adalah bahasa untuk mendesain tampilan dokumen HTML.",
        "apa itu javascript?": "JavaScript adalah bahasa pemrograman tingkat tinggi yang digunakan terutama untuk pengembangan web.",
        "siapa penemu listrik?": "Penemu listrik adalah Thomas Edison.",
        "siapa ceo facebook?": "Mark Zuckerberg adalah CEO Facebook.",
        "siapa yang menemukan gravitasi?": "Hukum gravitasi ditemukan oleh Isaac Newton.",
        "apa itu html?": "HTML atau HyperText Markup Language adalah bahasa markup standar untuk membuat halaman web.",
        "siapa yang menulis 'to kill a mockingbird'?": "Harper Lee adalah penulis 'To Kill a Mockingbird'.",
        "siapa yang menemukan radioaktivitas?": "Marie Curie dan suaminya Pierre Curie menemukan radioaktivitas.",
        "apa itu machine learning?": "Machine learning adalah cabang dari kecerdasan buatan yang memungkinkan sistem untuk belajar dari data.",
        "siapa yang menulis '1984'?": "George Orwell adalah penulis '1984'.",
        "apa itu algoritma?": "Algoritma adalah serangkaian langkah logis yang diambil untuk menyelesaikan masalah atau melakukan tugas tertentu.",
        "siapa yang menulis 'pride and prejudice'?": "Jane Austen adalah penulis 'Pride and Prejudice'.",
        "siapa yang menemukan komputer?": "Charles Babbage dianggap sebagai 'Bapak Komputer' karena konsep mesin analitiknya.",
        "apa itu covid-19?": "COVID-19 adalah penyakit yang disebabkan oleh virus corona jenis baru, SARS-CoV-2.",
        "siapa yang menulis 'the lord of the rings'?": "J.R.R. Tolkien adalah penulis 'The Lord of the Rings'.",
        "siapa yang menulis 'harry potter'?": "J.K. Rowling adalah penulis seri 'Harry Potter'.",
        "siapa yang menulis 'Romeo and Juliet'?": "William Shakespeare adalah penulis 'Romeo and Juliet'.",
        "siapa pelukis terkenal 'mona lisa'?": "Leonardo da Vinci adalah pelukis 'Mona Lisa'.",
        "siapa pelukis terkenal 'starry night'?": "Vincent van Gogh adalah pelukis 'Starry Night'.",
        "apa itu blockchain?": "Blockchain adalah sistem tersebar yang terdiri dari catatan transaksi yang disebut blok yang dihubungkan menggunakan kriptografi.",
        "siapa tokoh sejarah terkenal 'napoleon bonaparte'?": "Napoleon Bonaparte adalah seorang jenderal dan pemimpin militer Prancis yang menjadi Kaisar Prancis pada awal abad ke-19.",
        "kapan perang dunia pertama dimulai?": "Perang Dunia Pertama dimulai pada 28 Juli 1914.",
        "apa itu arsitektur von neumann?": "Arsitektur von Neumann adalah desain arsitektur komputer yang paling umum digunakan."
        // Pertanyaan dan respons tambahan
        // Tambahkan lebih banyak pertanyaan dan respons di sini
    };

    var response = responses[userInput];
    var chatMessage = "";

    if (response) {
        chatMessage = `
            <div class="message user-message">
                <span class="message-text">${userInput}</span>
            </div>
            <div class="message ai-message">
                <span id="typingAnimation" class="typing-animation"></span>
            </div>
        `;

        chatBox.innerHTML = chatMessage;

        // Animasi ketik
        let typingSpan = document.getElementById('typingAnimation');
        let index = 0;
        let typingInterval = setInterval(function() {
            if (index < response.length) {
                typingSpan.textContent += response.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 58);
    } else {
        // Animasi saat AI tidak bisa menjawab
        chatBox.innerHTML = `
            <div class="message user-message">
                <span class="message-text">${userInput}</span>
            </div>
            <div class="message ai-message" style="animation: shake 0.5s;">
                <span class="message-text">Maaf, saya tidak bisa menjawab pertanyaan itu,Cobalah Denga Pertanyaan Yang lain</span>
            </div>
        `;
        
    }

    console.info(userInput)


    document.getElementById("userInput").value = ""; // Kosongkan input setelah bertanya
}

document.addEventListener("DOMContentLoaded", function() {
    // Sambutan
    let welcomeMessage = document.querySelector('.chat-box .message.ai-message');

    // Ketika pengguna mulai mengetik
    document.getElementById("userInput").addEventListener("input", function() {
        // Jika ada sambutan, hapus atau sembunyikan
        if (welcomeMessage) {
            welcomeMessage.parentNode.removeChild(welcomeMessage); // Semisal ingin disembunyikan
            // Atau bisa juga menggunakan metode removeChild() untuk menghapus elemen
            // welcomeMessage.parentNode.removeChild(welcomeMessage);
        }
    });
});
