const scrollToTopButton = document.getElementById('scrollToTopButton');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// JavaScript for Index.html
if (document.title === 'Cosmetics Website - Home') {
  // Hide scroll to top button by default
  scrollToTopButton.style.display = 'none';

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
}

// JavaScript for Lipsticks.html and Lipglosses.html
if (
  document.title === 'Cosmetics Website - Lipsticks' ||
  document.title === 'Cosmetics Website - Lip Glosses'
) {
  const products = document.querySelectorAll('.product');
 }

