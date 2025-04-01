document.addEventListener('DOMContentLoaded', function() {
    // Переключение тем
    const themeSelect = document.getElementById('themeSelect');
    themeSelect.addEventListener('change', function() {
        document.getElementById('stylesheet').href = `css/${this.value}.css`;
    });

    // Плавная прокрутка для навигации
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Адаптивное меню для мобильных устройств
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    });

    // Инициализация при загрузке
    if (window.innerWidth < 768) {
        navLinks.style.display = 'none';
    }
});