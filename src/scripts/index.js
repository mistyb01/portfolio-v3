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
const modeToggleImg = document.getElementById('mode-toggle-img');

modeToggleBtn.addEventListener('click', () => {
        modeToggleBtn.replaceChildren();

        const svg = document.createElement('img');
        svg.setAttribute('onload', 'SVGInject(this)');
        
        document.body.classList.toggle('dark');
        createColorModeSVG();
    }
)

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
}

function createColorModeSVG() {
    const svg = document.createElement('img');
    svg.setAttribute('onload', 'SVGInject(this)');
    if (document.body.classList.contains('dark')) {
        svg.src = "../assets/svg/icon-darkmode.svg";
    } else {
        svg.src = "../assets/svg/icon-lightmode.svg";
    }
    modeToggleBtn.appendChild(svg);
}
createColorModeSVG();