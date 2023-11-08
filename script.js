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
