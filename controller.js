// validar acesso em tela de login
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert("favor preencher todos os campos")
    }else{
                //alert("campos preenchidos com sucesso")
                window.location.href = 'cadastro.html'
            }
     }