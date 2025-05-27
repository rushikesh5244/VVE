let currentIndex = 0;
const slides = document.querySelectorAll('#slider img');
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
  updateDots();
}

function updateDots() {
  dotsContainer.querySelectorAll('div').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Create dots
slides.forEach((_, idx) => {
  const dot = document.createElement('div');
  dot.addEventListener('click', () => {
    currentIndex = idx;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
});

updateSlider(); // Initial update


// Contact Modal Logic
document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.getElementById('openContactModal');
  const modal = document.getElementById("contactModal");
  const closeBtn = document.getElementById("closeModal");

  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
// Handle form submit and show success popup
document.getElementById('contactform').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("OUR AGENT WILL CONTACT YOU SOON!");
  document.getElementById('contactModal').style.display = 'none';
  this.reset();
});
