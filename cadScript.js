const form = document.querySelector('form');
cadastrarUsuario('admin', 'admin@utfpr', 'admin');

form.addEventListener('submit', function(event){

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    var i = 0;
    for(i; usuarios[i].cpf != cpf; i++);

    location.replace("login.html");
    form.reset();
})