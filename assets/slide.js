$(function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  $('.dot').on('click', function(e) {
    toggleClass(dots, 'dot--active', e.target.dataset.index);
    toggleClass(slides, 'slide--active', e.target.dataset.index);
  })

  $(document).keyup(function(e) {
    const activeDot = document.querySelector('.dot--active');
    if (e.key === 'ArrowRight') {
      currentIndex++;

      currentIndex = currentIndex > dots.length - 1 ? 0 : currentIndex; 
      toggleClass(dots, 'dot--active', currentIndex);
      toggleClass(slides, 'slide--active', currentIndex);
    } else if (e.key === 'ArrowLeft') {
      currentIndex--;

      currentIndex = currentIndex < 0 ? dots.length - 1 : currentIndex; 
      toggleClass(dots, 'dot--active', currentIndex);
      toggleClass(slides, 'slide--active', currentIndex);
    }
  })
})

function toggleClass(element, className, index) {
  element.forEach((el, idx) => {
    if (idx === Number(index)) {
      el.classList.add(className);
    } else {
      el.classList.remove(className);
    }
  })
}