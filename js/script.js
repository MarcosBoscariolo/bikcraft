// Animação "Simple Anime"
if (window.SimpleAnime) {
    new SimpleAnime();
}

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

// faq
const faqButton = document.querySelectorAll('.faq button');

faqButton.forEach((onClick) => {
    onClick.addEventListener('click', activeFaq);
})

function activeFaq(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute('aria-controls');
    const answer = document.getElementById(controls);
    
    answer.classList.toggle('active');
    const answerActive = answer.classList.contains('active');
    question.setAttribute('aria-expanded', answerActive);
}

// Galeria de Bicicletas imagens
const galery = document.querySelectorAll('.bicycle-images img');
const galeryContainer = document.querySelector('.bicycle-images');

galery.forEach((onClickImage) => {
    onClickImage.addEventListener('click', changeImage);
});

function changeImage(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;

    if (media) {
        galeryContainer.prepend(img);
    }
}
