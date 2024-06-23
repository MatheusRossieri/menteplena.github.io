const form = document.querySelector('form');
const lista = document.querySelector('li');

cadastrarUsuario('admin', 'admin@utfpr', 'admin');

// Atualiza a função para usar a classe Usuario
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value; // Obtém o valor do campo de senha
    const cpf = document.getElementById('cpf').value;
    // Validação básica (opcional)
    if (nome === '' || email === '' || senha === ''|| cpf === '' ) {
        alert('Preencha todos os campos!');
        return;
    }
    if(verificaUsuario(email)){
        cadastrarUsuario(nome, email, senha, cpf);
    }
    else{
        alert("Usuário Ja existente!")
    }
    // Cadastra o usuário usando a classe Usuario
    exibirUsuarios(); // Atualiza a lista de usuários
    form.reset(); // Limpa os campos do formulário
});

function deletarUsuario(id){

}
function exibirUsuarios() {
    var usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const listaUsuarios = document.getElementById('usuarios-lista');
    listaUsuarios.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
    console.log(usuarios);
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        const newButton = document.createElement('button');
        newButton.textContent = 'Deletar';
        newButton.addEventListener('click', () => {  
            console.log("entrou disgraça");
            usuarios = usuarios.filter(deletar => deletar.email != usuario.email ); 
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            exibirUsuarios();
        })
        li.textContent = `${usuario.nome} - ${usuario.email} - ${usuario.senha} - ${usuario.cpf}`;
        li.appendChild(newButton);
        listaUsuarios.appendChild(li);
    });
}


// Exibe usuários na lista após o cadastro e ao carregar a página
exibirUsuarios();
form.addEventListener('submit', exibirUsuarios);



/*const listaUsuarios = document.querySelector('#lista-usuarios');
const list = document.createElement('ul');

let users = [
    {
        id:0,
        name:'joao',
        email:'jao@mail',
        idade:18,
    },
    {
        id:1,
        name:'joao',
        email:'jao@mail',
        idade:18,
    }
]

const usersLoop = (users) => {
    users.forEach(el => {
        element = configDOM(el);
        appendDOM(element);
    })
}

const configDOM = (data) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.textContent(`${data.name}, ${email}, idade:${idade}`);
    button.title = 'Deletar';
    button.addEventListener('onclick', () => { 
        users = users.filter(el => el.id != data.id); 
        localStorage.setItem('users', JSON.stringify(users));
        const updatedUsers = JSON.parse(localStorage.getItem('users'));
        list.innerHTML = '';
        updatedUsers.forEach(el =>  appendDOM(configDOM(el)))
    })
    li.appendChild(button);
    return li;
}

const appendDOM = (el) => {
    list.appendChild(el);
}

listaUsuarios.innerHTML = list;*/





