console.log('Website designed and developed by Studio Kashanti');
console.log('www.kashanti.com');

function burgerclick() {
  var burger = document.getElementById("burger");
  burger.classList.toggle("is-active");
  document.getElementById("navlinks").classList.toggle("nav-active");
}

window.addEventListener('DOMContentLoaded', () => {
  const landingImage = document.querySelector('.landing-logo');
  const logo = document.getElementById('logo');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        logo.classList.remove('visible');
        logo.classList.add('hide');
      } else {
        logo.classList.remove('hide');
        logo.classList.add('visible', 'animate__fadeInUp');
      }
    });
  }, {
    threshold: 0.3
  });
  if (landingImage) {
    observer.observe(landingImage);
  }
});

// Intersection observer options
const options = {
  rootMargin: "0px",
  threshold: 0.3
};

// Callback function for the intersection observer
// Callback function for the intersection observer
function callbackFunction(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'about-section' || entry.target.id === 'about-section-2') {
        entry.target.classList.remove('hide');
        entry.target.classList.add('visible', 'animate__fadeIn');
      }
    } else {
      if (entry.target.id === 'about-section' || entry.target.id === 'about-section-2') {
        entry.target.classList.remove('visible', 'animate__fadeIn');
        entry.target.classList.add('hide');
      }
    }
  });
}

// Create the intersection observer
const observer = new IntersectionObserver(callbackFunction, options);

// Get references to the elements to observe
const aboutSection = document.getElementById("about-section");
const aboutSection2 = document.getElementById("about-section-2");

// Start observing elements with the observer
if (aboutSection && aboutSection2) {
  observer.observe(aboutSection);
  observer.observe(aboutSection2);
}


// Callback function for the intersection observer
function productCallback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'product-2' || entry.target.id === 'product-3' || entry.target.id === 'product-4') {
        entry.target.classList.remove('hide');
        entry.target.classList.add('animate__fadeIn', 'visible');
      }
      productObserver.unobserve(entry.target);
    }
  });
}

// Create the intersection observer
const productObserver = new IntersectionObserver(productCallback, options);

// Get references to the elements to observe
const product2 = document.getElementById("product-2");
const product3 = document.getElementById("product-3");
const product4 = document.getElementById("product-4");

// Start observing elements with the observer
if (product2 && product3 && product4) {
  productObserver.observe(product2);
  productObserver.observe(product3);
  productObserver.observe(product4);
}