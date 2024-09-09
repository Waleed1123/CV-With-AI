// JavaScript for scroll-triggered animations

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.animate');
    sections.forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            section.classList.add('visible');
        }
    });
});
