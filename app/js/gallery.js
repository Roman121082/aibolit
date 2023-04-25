//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
  gallery_init();
}
function gallery_init() {
  for (let index = 0; index < gallery.length; index++) {
    const el = gallery[index];
    lightGallery(el, {
      counter: false,
      selector: 'a',
      download: false
    });
  }
}
//=================