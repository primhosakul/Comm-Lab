window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  
  // Optional: Add a small delay to make the animation visible
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); // Wait for transition to finish
  }, 1000); // 1-second minimum load time
});
