// ON-SCROLL ANIMATION
const sectionObserver = new IntersectionObserver((sections)=>{
    sections.forEach(section => {
            if (section.isIntersecting) {
                section.target.classList.add("active");
            } 
    })
}, {threshold: 0.1})

document.querySelectorAll('.animate').forEach((i) => {
    if (i) {
        sectionObserver.observe(i);
    }
})

// DARK/LIGHT MODE TOGGLE
const modeToggleBtn = document.querySelector('.mode-toggle-btn');

modeToggleBtn.addEventListener('click', () => {
    console.log('h')
    document.body.classList.toggle('dark')
})