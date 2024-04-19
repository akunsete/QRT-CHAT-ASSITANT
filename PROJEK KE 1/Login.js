document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Ganti var menjadi let untuk mendeklarasikan variabel
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    // Ubah logika validasi
    if (username === 'admin' && password === 'password') {
      console.log('Login berhasil');
      // Simpan nama pengguna di console
      console.log('Nama pengguna:', username);
      // Tambahkan logika untuk kembali ke halaman biasa
      window.location.href = 'ai.html'; // Ganti halaman-biasa.html dengan halaman yang sesuai
    } else {
      console.log('Login gagal. Username atau password salah.');
      alert("Pastikan Anda MengInput Username Anda Dan Password Anda Dengan Benar");
    }
  });
  