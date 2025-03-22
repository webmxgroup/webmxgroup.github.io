document.addEventListener('DOMContentLoaded', function() {
  const triggerDown = document.querySelector('.trigger-down a');
  const firstBioSection = document.querySelector('.bio-section');

  if (triggerDown && firstBioSection) {
    triggerDown.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      firstBioSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
