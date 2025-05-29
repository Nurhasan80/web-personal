// script kontak 
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzfibuTVVoVBo4MCgcRi3ugdtXL5ESLKZLN2w0m78-wQIEeDM9nIz_Ng2AafWWBAN9gxQ/exec'

// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//  e.preventDefault()
// fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! your form is submitted successfully." ))
// .then(() => { window.location.reload(); })
// .catch(error => console.error('Error!', error.message))
// })
// Script kotak pesan End

// kontak wa
document.getElementById('submit-btn').addEventListener('click', function () {
  // Ambil data dari form
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validasi input
  if (!name || !email || !phone || !message) {
    alert('Harap isi semua kolom!');
    return;
  }

  // Format pesan untuk dikirim ke WhatsApp
  const whatsappNumber = '6287781935781'; // Ganti dengan nomor WhatsApp tujuan (tanpa tanda +)
  const whatsappMessage = `Halo, saya ${name} \nEmail: ${email} \nNo Telepon: ${phone} \nPesan: ${message}`
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Buka link WhatsApp
  window.open(whatsappUrl, '_blank');

  // Kosongkan form
  document.getElementById('contact-form').reset();
});
