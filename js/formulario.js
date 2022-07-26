const form = document.querySelector('form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    const button = document.querySelector('form button');
    button.disabled = true;
    button.innerText = 'Enviando...';

    const data = new FormData(form);
    fetch('./send-mail.php', {
        method: 'POST',
        body: data
    }).then(formSent);
}

function formSent(response) {
    if (response.ok) {
        form.innerHTML = '<p class="font-2-l" style="grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;"><span style="color: #317A00;">Mensagem enviada</span>, em breve entraremos em contato!</p>'
    } else {
        form.innerHTML = '<p class="font-2-l" style="grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;">Houve algum <span style="color: #E00000;">erro no envio</span> de sua mensagem, você pode enviar diretamente para o nosso e-mail em: <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a></p>'
    }
}
