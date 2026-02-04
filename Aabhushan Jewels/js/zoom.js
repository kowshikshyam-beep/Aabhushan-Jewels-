// IMAGE ZOOM FUNCTIONALITY
// Provides image magnification on hover and modal zoom on click

class ImageZoom {
  constructor() {
    this.init();
  }

  init() {
    this.setupZoomModal();
    this.setupThumbnailGallery();
    this.setupMainImageZoom();
  }

  setupZoomModal() {
    const mainImage = document.querySelector('.main-image img');
    const zoomModal = document.getElementById('zoomModal');
    const zoomImage = document.getElementById('zoomImage');
    const closeBtn = document.getElementById('zoomClose');

    if (!mainImage || !zoomModal) return;

    // Open zoom modal on image click
    mainImage.addEventListener('click', () => {
      zoomImage.src = mainImage.src;
      zoomModal.classList.add('active');
    });

    // Close zoom modal
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        zoomModal.classList.remove('active');
      });
    }

    // Close modal on outside click
    zoomModal.addEventListener('click', (e) => {
      if (e.target === zoomModal) {
        zoomModal.classList.remove('active');
      }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
        zoomModal.classList.remove('active');
      }
    });
  }

  setupThumbnailGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');

    if (!mainImage || thumbnails.length === 0) return;

    thumbnails.forEach((thumbnail, index) => {
      // Set first thumbnail as active
      if (index === 0) {
        thumbnail.classList.add('active');
      }

      // Click to change main image
      thumbnail.addEventListener('click', () => {
        const imgSrc = thumbnail.querySelector('img').src;
        mainImage.src = imgSrc;

        // Update active thumbnail
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
      });

      // Keyboard navigation (arrow keys)
      thumbnail.addEventListener('keydown', (e) => {
        let nextIndex = index;
        if (e.key === 'ArrowRight' && index < thumbnails.length - 1) {
          nextIndex = index + 1;
        } else if (e.key === 'ArrowLeft' && index > 0) {
          nextIndex = index - 1;
        }

        if (nextIndex !== index) {
          const nextThumbnail = thumbnails[nextIndex];
          const imgSrc = nextThumbnail.querySelector('img').src;
          mainImage.src = imgSrc;

          thumbnails.forEach(t => t.classList.remove('active'));
          nextThumbnail.classList.add('active');
          nextThumbnail.focus();
        }
      });
    });
  }

  setupMainImageZoom() {
    const mainImageContainer = document.querySelector('.main-image');
    const mainImage = document.querySelector('.main-image img');

    if (!mainImageContainer || !mainImage) return;

    // Hover zoom effect
    mainImageContainer.addEventListener('mousemove', (e) => {
      const rect = mainImageContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      mainImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    });

    mainImageContainer.addEventListener('mouseleave', () => {
      mainImage.style.transformOrigin = 'center center';
    });
  }
}

// Initialize zoom when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.main-image')) {
      new ImageZoom();
    }
  });
} else {
  if (document.querySelector('.main-image')) {
    new ImageZoom();
  }
}
