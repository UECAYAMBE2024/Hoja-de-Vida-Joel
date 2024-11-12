document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling; // Obtiene el contenido de la sección

        // Alterna la clase 'show' para mostrar u ocultar el contenido
        content.classList.toggle('show');
    });
});
