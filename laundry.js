// ===== Cek Status Pesanan =====
function cekStatus() {
  const telepon = document.getElementById('telepon').value.trim();
  const result = document.getElementById('status-result');
  if(!telepon) {
    result.textContent = "Masukkan nomor telepon!";
    result.style.color = "red";
  } else {
    // Demo status
    result.textContent = `Pesanan untuk nomor ${telepon} sedang diproses.`;
    result.style.color = "#0d3b66";
  }
}

// ===== Smooth Scroll untuk Navbar =====
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Tombol Lihat di Maps untuk Outlet =====
const outletCards = document.querySelectorAll('.outlet-card');

const mapsLinks = [
  "https://www.google.com/maps?q=2WXF+98F,+Jl.+Balandongan,+Sudajaya+Hilir,+Kec.+Baros,+Kota+Sukabumi,+Jawa+Barat+43161",
  "https://www.google.com/maps?q=Jl.+Pramuka+No.46,+Cikondang,+Kec.+Citamiang,+Kota+Sukabumi,+Jawa+Barat+43142"
];

outletCards.forEach((card, index) => {
  const btn = document.createElement('button');
  btn.textContent = "Lihat di Maps";
  btn.style.marginTop = "10px";
  btn.style.padding = "8px 15px";
  btn.style.background = "#f4d35e";
  btn.style.color = "#0d3b66";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  btn.addEventListener('click', () => {
    window.open(mapsLinks[index], "_blank");
  });
  card.appendChild(btn);
});
