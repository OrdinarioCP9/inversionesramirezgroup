const observeElements = () => {
  // Configuramos el IntersectionObserver
  const options = {
    root: null, // Viewport
    rootMargin: '0px',
    threshold: 0.1 // Al menos 10% del elemento es visible
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      // Si el elemento es visible
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Una vez animado, dejamos de observar el elemento
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  // Observamos todos los elementos con clase 'animate'
  document.querySelectorAll('.animate').forEach(element => {
    observer.observe(element);
  });
};

export default observeElements;
