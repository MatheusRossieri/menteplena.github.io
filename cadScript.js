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
    if(cadastrarUsuario(nome, email, senha, cpf)){

    }
    else

    location.replace("login.html");
    form.reset();
})

function trocaClasse(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
}

setTimeout(function() {
    var div = document.querySelector('div');
    trocaClasse(div, 'azul', 'verde');
}, 2000);