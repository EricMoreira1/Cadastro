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

function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;

    if (nomeUser) {

        dadosLista.push(nomeUser);
        //envia o nome escrito para a tabela da lista de nomes
        //console.log (dadosLista);
        criaLista();
        document.getElementById('nomeUser').value = "";
    } else {
        alert("favor informar o nome para cadastro");
    }
}

// FUNÇÃO PARA CRIAR LISTA
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>excluir</button></td></tr>";
        // escreve códigos sem uso nescessário do HTML
        document.getElementById('tabela').innerHTML = tabela;
    }
}
 
 
// FUNÇÃO PARA EDITAR NOMES DA LISTA
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
    //altera a tabela e adicionando ou excluindo
}

// FUNÇÃO PARA EXCLUIR NOMES DA LISTA
function excluir(i){
    dadosLista.splice((i-1), 1);
    // linha 46 (explicação do splice)
    document.getElementById('tabela').deleteRow(i);
    // Apaga o contéudo escrito
    document.getElementById('nomeUser').value = "";
}