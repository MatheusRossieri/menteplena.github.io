class Usuario {
    constructor(nome, email, senha, cpf) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}
const form = document.querySelector('form');

// Função para cadastrar usuário usando a classe Usuario


function cadastrarUsuario(nome, email, senha) {
    const novoUsuario = new Usuario(nome, email, senha); // Cria um novo objeto Usuario
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    exibirUsuarios(); // Atualiza a lista de usuários
}

// Atualiza a função para usar a classe Usuario
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value; // Obtém o valor do campo de senha

    // Validação básica (opcional)
    if (nome === '' || email === '' || senha === '') {
        alert('Preencha todos os campos!');
        return;
    }

    cadastrarUsuario(nome, email, senha); // Cadastra o usuário usando a classe Usuario
    form.reset(); // Limpa os campos do formulário
});

function exibirUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const listaUsuarios = document.getElementById('usuarios-lista');
    listaUsuarios.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
    console.log(usuarios);
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `${usuario.nome} - ${usuario.email} - ${usuario.senha}`;
        listaUsuarios.appendChild(li);
    });
}

// Exibe usuários na lista após o cadastro e ao carregar a página
exibirUsuarios();
form.addEventListener('submit', exibirUsuarios);
