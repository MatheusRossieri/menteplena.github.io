const form = document.querySelector('form');
cadastrarUsuario('admin', 'admin@utfpr', 'admin');
const usuario = JSON.parse(localStorage.getItem('usuarios') || '[]');
console.log(usuario);

form.addEventListener('submit', function(event){

    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    var i = 0;
    for(i; usuarios[i].email != email; i++);
    if(usuarios[i].senha ==  senha){
        location.replace("perfil.html");
    }
    else( alert("Senha Incorreta tente novamente"));
    form.reset();
})