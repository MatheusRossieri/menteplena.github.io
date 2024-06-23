class Usuario {
    constructor(nome, email, senha, cpf) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}
const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

function cadastrarUsuario(nome, email, senha, cpf) {
    let i = 0;
    for(i; usuarios[i].cpf != cpf; i++);
    if(usuarios[i].cpf == cpf){
        return false;
    }
    if(usuarios[i] != null){
        for(i; usuarios[i].email != email; i++);
        if(usuarios[i].email != email){
            memoriaTemp(nome, email, senha, cpf);
            return true;
        }
    }
    else{
        memoriaTemp(nome, email, senha, cpf);
        return true;
    }
}

function memoriaTemp(nome, email, senha, cpf){
    const novoUsuario = new Usuario(nome, email, senha, cpf); // Cria um novo objeto Usuario
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}