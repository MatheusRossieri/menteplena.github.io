class Usuario {
    constructor(nome, email, senha, cpf) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}
const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
cadastrarUsuario('admin', 'admin@utfpr', 'admin', '12345678900');

function verificaUsuario(atributo, conteudo){
    if(atributo == 'email'){
        return usuarios.some(usuario => usuario.email == conteudo);
    }
    else if(atributo == 'senha'){
        return usuarios.some(usuario => usuario.senha == conteudo);
    }
    else if(atributo == 'nome'){
        return usuarios.some(usuario => usuario.nome == conteudo);
    }
    else{
        return usuarios.some(usuario => usuario.cpf == conteudo);
    }
}
function cadastrarUsuario(nome, email, senha, cpf){
    memoriaTemp(nome, email, senha, cpf);
}

function memoriaTemp(nome, email, senha, cpf){
    const novoUsuario = new Usuario(nome, email, senha, cpf); // Cria um novo objeto Usuario
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringifconteudo(usuarios));
}