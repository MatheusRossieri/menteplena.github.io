const form = document.querySelector('form');
const lista = document.querySelector('li');
const deletarTudo = document.querySelector('#deletarTudo')

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
            usuarios = usuarios.filter(deletar => deletar.email != usuario.email ); 
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            exibirUsuarios();
        })
        li.textContent = `${usuario.nome} - ${usuario.email} - ${usuario.senha} - ${usuario.cpf}`;
        li.appendChild(newButton);
        listaUsuarios.appendChild(li);
    });
}

deletarTudo.addEventListener('click', () =>{
    localStorage.setItem('usuarios',"[]");
    exibirUsuarios();
});
// Exibe usuários na lista após o cadastro e ao carregar a página
exibirUsuarios();
form.addEventListener('submit', exibirUsuarios);