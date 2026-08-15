import './style.css'

// Force page to top on reload (prevents mobile browsers from jumping down to previous scroll positions)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  
  // --- Preloader ---
  const preloader = document.getElementById('preloader');
  // Add a slight delay to ensure the animation is seen for a moment
  setTimeout(() => {
    preloader.classList.add('fade-out');
    // Remove from DOM after fade out
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1000);

  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-studio-black/90', 'backdrop-blur-md', 'shadow-lg');
      navbar.classList.remove('py-4');
      navbar.classList.add('py-2');
    } else {
      navbar.classList.remove('bg-studio-black/90', 'backdrop-blur-md', 'shadow-lg');
      navbar.classList.add('py-4');
      navbar.classList.remove('py-2');
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
      mobileMenuBtn.innerHTML = '<i class="ph ph-x"></i>';
    } else {
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenuBtn.innerHTML = '<i class="ph ph-list"></i>';
    }
  };

  mobileMenuBtn.addEventListener('click', toggleMenu);
  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // --- Scroll Reveal Animations ---
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach(reveal => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger on load

  // --- Custom Audio Player ---
  const audioTrack = document.getElementById('audio-track');
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const seekBar = document.getElementById('seek-bar');
  const currentTimeDisplay = document.getElementById('current-time');
  const durationDisplay = document.getElementById('duration');

  let isPlaying = false;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Set duration when metadata is loaded
  audioTrack.addEventListener('loadedmetadata', () => {
    seekBar.max = audioTrack.duration;
    durationDisplay.textContent = formatTime(audioTrack.duration);
  });

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      audioTrack.pause();
      playIcon.classList.remove('ph-pause');
      playIcon.classList.add('ph-play');
    } else {
      audioTrack.play();
      playIcon.classList.remove('ph-play');
      playIcon.classList.add('ph-pause');
    }
    isPlaying = !isPlaying;
  });


  // --- Tracklist Logic ---
  const trackBtns = document.querySelectorAll('.track-btn');
  trackBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update styling
      trackBtns.forEach(b => {
        b.classList.remove('bg-white/10', 'border-studio-purple', 'text-studio-purple');
        b.classList.add('bg-transparent', 'border-transparent', 'text-white/70');
      });
      btn.classList.remove('bg-transparent', 'border-transparent', 'text-white/70');
      btn.classList.add('bg-white/10', 'border-studio-purple', 'text-studio-purple');
      
      // Update audio source and play
      audioTrack.src = btn.getAttribute('data-src');
      audioTrack.play();
      isPlaying = true;
      playIcon.classList.remove('ph-play');
      playIcon.classList.add('ph-pause');
    });
  });

  audioTrack.addEventListener('timeupdate', () => {
    seekBar.value = audioTrack.currentTime;
    currentTimeDisplay.textContent = formatTime(audioTrack.currentTime);
  });

  seekBar.addEventListener('input', () => {
    audioTrack.currentTime = seekBar.value;
  });

  // --- Testimonial Carousel ---
  const track = document.getElementById('testimonial-track');
  const dots = document.querySelectorAll('#carousel-dots button');
  let currentIndex = 0;
  const totalReviews = 3;

  const updateCarousel = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('bg-studio-purple', 'w-6');
        dot.classList.remove('bg-white/20', 'w-3');
      } else {
        dot.classList.remove('bg-studio-purple', 'w-6');
        dot.classList.add('bg-white/20', 'w-3');
      }
    });
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel(currentIndex);
    });
  });

  // Auto-play
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalReviews;
    updateCarousel(currentIndex);
  }, 5000);

});

  // --- Lightbox Logic ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item img');

  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      
      // Small delay to allow display:flex to apply before animating opacity
      setTimeout(() => {
        lightbox.classList.remove('opacity-0');
        lightbox.classList.add('opacity-100');
        lightboxImg.classList.remove('scale-95', 'opacity-0');
        lightboxImg.classList.add('scale-100', 'opacity-100');
      }, 50);
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('opacity-100');
    lightbox.classList.add('opacity-0');
    lightboxImg.classList.remove('scale-100', 'opacity-100');
    lightboxImg.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    }, 500); // match the duration-500 transition
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });


  // --- Expand Gallery Logic ---
  const expandGalleryBtn = document.getElementById('expand-gallery-btn');
  const extraPhotos = document.querySelectorAll('.extra-photo');
  let isGalleryExpanded = false;

  if (expandGalleryBtn) {
    expandGalleryBtn.addEventListener('click', () => {
      isGalleryExpanded = !isGalleryExpanded;
      if (isGalleryExpanded) {
        extraPhotos.forEach((photo, index) => {
          photo.classList.remove('hidden');
          // stagger the reveal animation based on index
          setTimeout(() => {
            photo.classList.add('active');
          }, 50 + (index * 250)); // Slower 250ms stagger per photo
        });
        expandGalleryBtn.textContent = 'Show Less';
      } else {
        extraPhotos.forEach(photo => {
          photo.classList.add('hidden');
          photo.classList.remove('active');
        });
        expandGalleryBtn.textContent = 'View All Photos';
        // Scroll back up to the gallery start
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- WhatsApp Booking Form Logic ---
  document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value;
        const phone = document.getElementById('form-phone').value;
        const email = document.getElementById('form-email').value;
        const service = document.getElementById('form-service').options[document.getElementById('form-service').selectedIndex].text;
        const message = document.getElementById('form-message').value;

        // Construct the WhatsApp message safely
        const whatsappText = `*New Booking Inquiry* 🎵\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Service:* ${service}\n*Message:* ${message}`;
        
        const encodedText = encodeURIComponent(whatsappText);

        // Open WhatsApp (using the studio's phone number)
        window.location.href = `https://wa.me/919958340671?text=${encodedText}`;

        // Optional: reset the form after sending
        bookingForm.reset();
      });
    }
  });

  // --- Marketing Popup Logic ---
  document.addEventListener('DOMContentLoaded', () => {
    const promoPopup = document.getElementById('promo-popup');
    const promoContent = document.getElementById('promo-content');
    const promoClose = document.getElementById('promo-close');
    const promoClaimBtn = document.getElementById('promo-claim-btn');

    // Show popup after 3 seconds on every page load
    if (promoPopup) {
      setTimeout(() => {
        promoPopup.classList.remove('hidden');
        promoPopup.classList.add('flex');
        
        setTimeout(() => {
          promoPopup.classList.remove('opacity-0');
          promoPopup.classList.add('opacity-100');
          promoContent.classList.remove('scale-95', 'opacity-0');
          promoContent.classList.add('scale-100', 'opacity-100');
        }, 50);
      }, 3000);
    }

    const closePromo = () => {
      promoPopup.classList.remove('opacity-100');
      promoPopup.classList.add('opacity-0');
      promoContent.classList.remove('scale-100', 'opacity-100');
      promoContent.classList.add('scale-95', 'opacity-0');
      
      setTimeout(() => {
        promoPopup.classList.add('hidden');
        promoPopup.classList.remove('flex');
      }, 500);
    };

    if (promoClose) promoClose.addEventListener('click', closePromo);
    if (promoPopup) promoPopup.addEventListener('click', (e) => {
      if (e.target === promoPopup) closePromo();
    });
    if (promoClaimBtn) {
      promoClaimBtn.addEventListener('click', () => {
        closePromo();
      });
    }
  });
