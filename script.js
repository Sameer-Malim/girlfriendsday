const flap = document.getElementById('flap');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const popupContent = document.getElementById('popupContent');

flap.addEventListener('click', () => {
  popup.classList.add('active');
  flap.style.transform = 'rotateX(180deg)';
});

function closePopup() {
  flap.style.transform = 'rotateX(0deg)';
  // Remove active class AFTER animation duration (400ms) to allow fade out
  popup.style.pointerEvents = 'none'; // disable pointer events immediately to avoid interaction during fade
  popup.style.opacity = '0'; // start fade out immediately
  // Delay removing active class and restoring display until fade ends
  setTimeout(() => {
    popup.classList.remove('active');
    // Reset inline styles (so CSS rules take back over)
    popup.style.opacity = '';
    popup.style.pointerEvents = '';
  }, 400);
}

closeBtn.addEventListener('click', closePopup);

popup.addEventListener('click', (e) => {
  if (!popupContent.contains(e.target)) {
    closePopup();
  }
});


 const photoTrack = document.querySelector(".photo-track");
  const slides = document.querySelectorAll(".photo-slide");
  let index = 0;

  function slidePhotos() {
    index = (index + 1) % slides.length;
    photoTrack.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(slidePhotos, 4000); // Slide every 3 seconds

