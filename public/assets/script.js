// Calificación dinámica (puedes cambiar este valor)
const rating = 3.5;

// Seleccionar todas las estrellas
const stars = document.querySelectorAll('.star');

// Rellenar estrellas según la calificación
stars.forEach(star => {
    const value = parseFloat(star.getAttribute('data-value'));
    if (value <= rating) {
        star.classList.add('text-yellow-400'); // Llena la estrella
        star.classList.remove('text-gray-300'); // Quita el vacío
    } else if (value - rating < 1 && value > rating) {
        // Manejo de estrellas a medias (opcional)
        star.classList.add('text-yellow-400');
        star.style.clipPath = "inset(0 50% 0 0)";
    } else {
        star.classList.add('text-gray-300'); // Vacía la estrella
        star.classList.remove('text-yellow-400');
    }
});
