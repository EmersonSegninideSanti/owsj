// Vibe Code
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll('.oculto');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Quando o elemento cruza a linha central da tela
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        // Para de observar depois que já apareceu (opcional)
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Define o gatilho exatamente no meio (-50% do topo e -50% do fundo da tela)
    rootMargin: "-30% 0px -30% 0px"
  });

  elementos.forEach(el => observer.observe(el));
});