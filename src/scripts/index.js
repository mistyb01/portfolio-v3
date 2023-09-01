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

// LIGHT/DARK MODE TOGGLE
const modeBtn = document.querySelector('.btn--color-mode');

const modeIcon = document.createElement('span')
modeIcon.classList.add('material-symbols-outlined')

let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
isDarkMode ? modeIcon.innerText = 'light_mode' : modeIcon.innerText = 'dark_mode'

// watch for changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    isDarkMode = event.matches;
    isDarkMode ? modeIcon.innerText = 'light_mode' : modeIcon.innerText = 'dark_mode'
    
});

modeBtn.appendChild(modeIcon)
