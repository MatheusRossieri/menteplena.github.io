const form = document.querySelector('form');

form.addEventListener('submit', function(event){

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if(verificaUsuario(email)){
        cadastrarUsuario(nome, email, senha, cpf);
        location.replace("login.html");
    }
    else{
        alert("Login Errado Tente novamente");
    }
    form.reset();
});