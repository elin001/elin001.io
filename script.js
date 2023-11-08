//menu
const checkbox = document.getElementById('op');
        const mainContent = document.getElementById('content');

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                // Checkbox is checked, apply z-index: -1000
                mainContent.style.zIndex = '-1000';
            } else {
                // Checkbox is unchecked, remove the z-index property
                mainContent.style.removeProperty('z-index');
            }
        });

//gif
const gif = document.getElementById('autoplayGif');

const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.5, 
};

const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            gif.src = gif.src;
        } else {
            gif.src = gif.src;
        }
    });
};

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(gif);

