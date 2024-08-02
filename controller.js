// validar acesso em tela de login
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert("favor preencher todos os campos")
    } else {
        //alert("campos preenchidos com sucesso")
        window.location.href = 'cadastro.html'
    }
}

var dadosLista = [];

function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;

    if (nomeUser) {

        dadosLista.push(nomeUser);
        //console.log (dadosLista);
        criaLista();
        document.getElementById('nomeUser').value = "";
    } else {
        alert("favor informar o nome para cadastro");
    }
}

//função para criar lista
function criaLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for (let i = 0; i <= (dadosLista.length - 1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td></td><tr>";
        document.getElementById('tabela').innerHTML = tabela;
        // coloca dentro da tabela um dado dentro do array
    }
}

