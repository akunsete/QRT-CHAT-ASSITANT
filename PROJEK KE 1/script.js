const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const content = document.querySelector('.content');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  content.classList.toggle('hide'); // Menambah atau menghapus kelas 'hide' pada konten
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navbarMenu.classList.remove('active');
    content.classList.remove('hide'); // Menghapus kelas 'hide' jika lebar layar lebih besar dari 768px
  }
});

