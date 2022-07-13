const links = document.querySelectorAll('.header-menu a');

links.forEach((activeLink) => {
    const href = activeLink.href;
    const url = location.href
    
    if (url.includes(href)) {
        activeLink.classList.add('active');
    }
})