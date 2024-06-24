class Usuario {
    constructor(nome, email, senha, cpf) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}
const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

function verificaUsuario(atributo, conteudo){
    if(atributo == 'email'){
        return some(usuario => usuario.email == conteudo);
    }
    else if(atributo == 'senha'){
        return some(usuario => usuario.senha == conteudo);
    }
    else if(atributo == 'nome'){
        return some(usuario => usuario.nome == conteudo);
    }
    else
        return some(usuario => usuario.cpf == conteudo);
    
}
function cadastrarUsuario(nome, email, senha, cpf){
    memoriaTemp(nome, email, senha, cpf);
}

function memoriaTemp(nome, email, senha, cpf){
    const novoUsuario = new Usuario(nome, email, senha, cpf); // Cria um novo objeto Usuario
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringifconteudo(usuarios));
}
