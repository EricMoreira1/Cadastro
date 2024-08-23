// validar acesso em tela de login
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert("favor preencher todos os campos")
    } else {
        alert("campos preenchidos com sucesso")
        window.location.href = 'cadastro.html'
        //linka a página de login com a de cadastro
    }
}

var dadosLista = [];
var emailLista = [];

function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    // Validar email antes de continuar
    if (!checarEmail(emailUser)) {
        return; // funciona se o email for inválido
    }

    if (nomeUser && emailUser) {
        dadosLista.push(nomeUser);
        emailLista.push(emailUser);
        criaLista();
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
    } else {
        alert("Favor informar o nome para cadastro e o Email");
    }
}

// FUNÇÃO PARA CRIAR LISTA
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + emailLista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
      // escreve códigos sem uso nescessário do HTML
        document.getElementById('tabela').innerHTML = tabela;
    }
}
 
function checarEmail(email){
    if (email == "" || 
        email.indexOf("@") == -1 || 
        email.indexOf(".") == -1) {
        alert("Por favor informe um email válido");
        return false;
    } else {
        return true;
    }
}

// FUNÇÃO PARA EDITAR NOMES DA LISTA
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);

    //altera a tabela e adicionando ou excluindo 
    document.getElementById('emailUser').value = emailLista[(i - 1)];
    emailLista.splice(emailLista[(i - 1)], 1);
}

// FUNÇÃO PARA EXCLUIR NOMES DA LISTA
function excluir(i){
    dadosLista.splice((i - 1), 1);
    // linha 46 (explicação do splice)
    document.getElementById('tabela').deleteRow(i);
    // Apaga o contéudo escrito
    document.getElementById('nomeUser').value = "";
    document.getElementById('emailUser').value = "";
}
