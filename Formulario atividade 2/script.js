const form=document.getElementById('meuFormulario');
form.addEventListener('submit', function(event) {
event.preventDefault(); //Previne o envio do frmulário
validaFormulario();
})

function validaFormulario() {
    const email=document.getElementById('email').value;
    const senha=document.getElementById('senha').value;
    const confirmaSenha=document.getElementById('confirmarSenha').value;
    let mensagemErro= '';

    // Validação do email
    if(!email){
        mensagemErro+='Email é obrigatório.\n';
    }else if(!/^\S+@\.\S+$/.test(email)){
        mensagemErro+='Email inválido.\n';
    }

    //Validação da senha
    if(senha.length <8){
        mensagemErro += 'A senha deve ter pelo menos 8 caracteres.\n';
        }

        //Confirmaçãoda senha
        if(senha !==confirmarSenha){
            mensagemErro+='As senhas não coincidem.\n';
            }
    
        if(mensagemErro){
            document.getElementById('mensagemErro').textContent=mensagemErro;
            return false; //Impede o envio do formulário
        } else {
            //Aqui, você pode prosseguir com o envio de formulário ou processamento adicional
            alert('Formulário validado com sucesso!!!!!!!!!!!!!!!!!!!!!!');
        }




    }