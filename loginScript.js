const form = document.querySelector('form');

cadastrarUsuario('admin', 'admin@utfpr', 'admin');

form.addEventListener('submit', function(event){

    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    if(verificaUsuario('email', email)){
        if(verificaUsuario('senha', senha)){
            location.replace("index.html");
        }
    }
    else( alert("Senha Incorreta tente novamente"));
    form.reset();
})
