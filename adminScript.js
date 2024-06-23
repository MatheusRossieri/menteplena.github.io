class Usuario {
    constructor(nome, email, senha, cpf) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}

// Função para verificar se o usuário já existe
function verificaUsuario(email) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return !usuarios.some(usuario => usuario.email === email);
}

// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, email, senha, cpf) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const novoUsuario = new Usuario(nome, email, senha, cpf);
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função para exibir usuários
function exibirUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const listaUsuarios = document.getElementById('usuarios-lista');
    listaUsuarios.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        const newButton = document.createElement('button');
        newButton.textContent = 'Deletar';
        newButton.addEventListener('click', () => {
            const novosUsuarios = usuarios.filter(u => u.email !== usuario.email);
            localStorage.setItem('usuarios', JSON.stringify(novosUsuarios));
            exibirUsuarios();
        });
        li.textContent = `${usuario.nome} - ${usuario.email} - ${usuario.senha} - ${usuario.cpf}`;
        li.appendChild(newButton);
        listaUsuarios.appendChild(li);
    });
}

// Evento para deletar todos os usuários
const deletarTudo = document.getElementById('deletarTudo');
deletarTudo.addEventListener('click', () => {
    localStorage.setItem('usuarios', '[]'); // Reseta a lista de usuários no localStorage
    exibirUsuarios(); // Atualiza a exibição dos usuários
});

// Evento para o formulário de cadastro
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;

    // Validação básica
    if (nome === '' || email === '' || senha === '' || cpf === '') {
        alert('Preencha todos os campos!');
        return;
    }

    if (verificaUsuario(email)) {
        cadastrarUsuario(nome, email, senha, cpf);
        exibirUsuarios(); // Atualiza a lista de usuários
        form.reset(); // Limpa os campos do formulário
    } else {
        alert("Usuário já existente!");
    }
});

// Exibe os usuários ao carregar a página
document.addEventListener('DOMContentLoaded', exibirUsuarios);