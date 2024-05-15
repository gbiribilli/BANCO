function check(){
    var user = document.getElementById('txtUsuario').value.trim();
    let senha = document.getElementById('txtSenha').value.trim();
    var nomeError = document.getElementById('nomeError');
    var senhaError = document.getElementById('senhaError');
    var cpfErro = document.getElementById('cpfError');
    var cpf = document.getElementById('cpf');
    var isValid = true;
   
    if (user === '') {
        nomeError.textContent = 'Nome obrigatório';
        isValid = false;
    }else{
        nomeError.textContent = '';
    }
    
    if(senha === ''){
        senhaError.textContent = 'Senha obrigatória';
        isValid = false;
    }else{
        senhaError.textContent = '';
    }
    
    if(cpf === ''){
        cpfErro.textContent = 'CPF obrigatório';
        isValid = false;
    }else{
        cpfErro.textContent = '';
    }
    
}