// Lazy Loading
if ('loading' in HTMLImageElement.prototype) {
  const images = Array.from(document.querySelectorAll('img[loading="lazy"]'));
  images.forEach(function(img) {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library. Add "lazyload" className to image elements
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  document.body.appendChild(script);
}
