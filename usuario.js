class Usuario {
    constructor(nome, email, senha, cpf) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}
const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

function verificaUsuario(email){
    return some(usuario => usuario.email ==  email)
}
function cadastrarUsuario(nome, email, senha, cpf){
    if(usuarios[i].email != email){
        memoriaTemp(nome, email, senha, cpf);
    }
    else{
     memoriaTemp(nome, email, senha, cpf);
    }
}

function memoriaTemp(nome, email, senha, cpf){
    const novoUsuario = new Usuario(nome, email, senha, cpf); // Cria um novo objeto Usuario
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}