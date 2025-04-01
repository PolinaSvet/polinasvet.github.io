document.addEventListener('DOMContentLoaded', function() {
    // ������������ ���
    const themeSelect = document.getElementById('themeSelect');
    themeSelect.addEventListener('change', function() {
        document.getElementById('stylesheet').href = `css/${this.value}.css`;
    });

    // ������� ��������� ��� ���������
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ���������� ���� ��� ��������� ���������
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    });

    // ������������� ��� ��������
    if (window.innerWidth < 768) {
        navLinks.style.display = 'none';
    }
});