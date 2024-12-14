const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const likeGlyphs = document.querySelectorAll('.like-glyph');

  // Ensure modal is hidden initially
  modal.classList.add('hidden');

  // Add event listeners to like glyphs
  likeGlyphs.forEach(glyph => {
    glyph.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          // Toggle heart states
          if (glyph.textContent === EMPTY_HEART) {
            glyph.textContent = FULL_HEART;
            glyph.classList.add('activated-heart');
          } else {
            glyph.textContent = EMPTY_HEART;
            glyph.classList.remove('activated-heart');
          }
        })
        .catch((error) => {
          // Show error modal
          const modalMessage = document.getElementById('modal-message');
          modalMessage.textContent = error;
          modal.classList.remove('hidden');

          // Hide modal after 3 seconds
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});
