class Usuario {
    constructor(nome, email, senha, cpf) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}
function cadastrarUsuario(nome, email, senha) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let i = 0;
    for(i; usuarios[i].email != email; i++);
    if(usuarios[i].email != email){
        const novoUsuario = new Usuario(nome, email, senha); // Cria um novo objeto Usuario
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
}