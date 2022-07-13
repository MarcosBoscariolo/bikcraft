// Ativar links do menu
const links = document.querySelectorAll('.header-menu a');

links.forEach((activeLink) => {
    const href = activeLink.href;
    const url = location.href
    
    if (url.includes(href)) {
        activeLink.classList.add('active');
    }
});

// Ativar itens do Orçamento
const paramsSearch = new URLSearchParams(location.search);

paramsSearch.forEach((activateProduct) => {
    const product = document.getElementById(activateProduct);
    if (product) {
        product.checked = true;
    }
});
