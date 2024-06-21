class Usuario {
    constructor(nome, email, senha, cpf) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}
const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
function cadastrarUsuario(nome, email, senha) {
    let i = 0;
    if(usuarios[i] != null){
        for(i; usuarios[i].email != email; i++);
        if(usuarios[i].email != email){
            memoriaTemp(nome, email, senha);
        }
    }
    else{
        memoriaTemp(nome, email, senha);
    }
}

function memoriaTemp(nome, email, senha){
    const novoUsuario = new Usuario(nome, email, senha); // Cria um novo objeto Usuario
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}