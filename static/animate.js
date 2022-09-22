    /*Thanks*/
    /*https://stackoverflow.com/questions/27462306/css3-animate-elements-if-visible-in-viewport-page-scroll*/
    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        });
        };
    
        const Obs = new IntersectionObserver(inViewport);
        const obsOptions = {};
    
        const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
        ELs_inViewport.forEach(EL => {
        Obs.observe(EL, obsOptions);
        });