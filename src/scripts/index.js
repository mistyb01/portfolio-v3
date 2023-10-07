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

modeToggleBtn.addEventListener('click', () => 
    document.body.classList.toggle('dark')
)

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark')
    
}