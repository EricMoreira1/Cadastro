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
        return; // funciona caso o email informado seja inválido
    }

    if (nomeUser && emailUser) { // "&&" Faz com que as funções abaixo funcionem também ao email sem que precise reescrever o código duas vezes 
        dadosLista.push(nomeUser); // envia o nome escrito para a tabela dadosLista
        emailLista.push(emailUser); // envia o Email escrito para a tabela emailLista
        criaLista();
        document.getElementById('nomeUser').value = ""; 
        document.getElementById('emailUser').value = "";
        // verifica se os campos forma preenchidos
    } else {
        alert("Favor informar o nome para cadastro e o Email"); // se não forem preenchidos o alert será ativo
    }
}

// FUNÇÃO PARA CRIAR LISTA
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>"; // adiciona as variáveis a tela para serem realizadas as ações
    for(let i = 0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + emailLista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
      // escreve códigos sem uso nescessário do HTML
        document.getElementById('tabela').innerHTML = tabela; // Informa a tabela para a qual os dados serão enviados
    }
}
 
// FUNÇÃO PARA VALIDAR O EMAIL INFORMADO
function checarEmail(email){
    if (email == "" || // Verifica se não há espaços no texto informado
        email.indexOf("@") == -1 || // Verifica se tem @ no texto informado
        email.indexOf(".") == -1) { // Verifica se tem . no texto informado
        alert("Por favor informe um email válido"); // se não houver nenhum dos requisitos NESSESSÁRIOS, o alert será ativado
        return false;
    } else {
        return true; // caso todos os requisitos sejam cumpridos o Email é válido
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
    // linha 66 (explicação do splice)
    document.getElementById('tabela').deleteRow(i);
    // Apaga o contéudo escrito
    document.getElementById('nomeUser').value = "";
    document.getElementById('emailUser').value = "";
    // Identifica o ID na tabela e exclui
}
