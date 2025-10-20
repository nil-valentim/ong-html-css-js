const cadastroForm = document.getElementById('cadastro-form');

cadastroForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    validarFormulario();
});

function validarFormulario() {
    let formValido = true;

    // --- Validação do Nome ---
    const nomeInput = document.getElementById('nome');
    const erroNomeSpan = document.getElementById('erro-nome');
    const nome = nomeInput.value.trim(); 

    if (nome === '' || nome.length < 3) {
        erroNomeSpan.textContent = 'O Nome Completo deve ter pelo menos 3 caracteres.';
        nomeInput.classList.add('invalido'); 
        formValido = false;
    } else {
        erroNomeSpan.textContent = '';
        nomeInput.classList.remove('invalido');
    }
    
    // --- Validação do CPF ---
    const cpfInput = document.getElementById('cpf');
    const erroCpfSpan = document.getElementById('erro-cpf');
    const cpf = cpfInput.value.trim(); 
    
    if (cpf === '' || cpf.length !== 14) { 
        erroCpfSpan.textContent = 'O CPF deve estar no formato 999.999.999-99 (14 caracteres).';
        cpfInput.classList.add('invalido'); 
        formValido = false; 
    } else {
        erroCpfSpan.textContent = '';
        cpfInput.classList.remove('invalido');
    }
    
    // --- Validação do E-mail ---
    const emailInput = document.getElementById('email');
    const erroEmailSpan = document.getElementById('erro-email');
    const email = emailInput.value.trim(); 
    
    if (email === '' || !email.includes('@')) { 
        erroEmailSpan.textContent = 'Por favor, insira um e-mail válido (deve conter @).';
        emailInput.classList.add('invalido'); 
        formValido = false; 
    } else {
        erroEmailSpan.textContent = '';
        emailInput.classList.remove('invalido');
    }
    
    // --- Checagem Final ---
    if (!formValido) {
        return; 
    }

    // --- Envio Simulado (Sucesso) ---
    if (formValido) {
        const mensagemSucesso = document.createElement('p');
        mensagemSucesso.textContent = '✅ Cadastro enviado com sucesso! Simulação concluída.';
        mensagemSucesso.style.color = 'var(--cor-sucesso)';
        mensagemSucesso.style.fontWeight = 'bold';
        
        const main = document.querySelector('main.container');
        main.prepend(mensagemSucesso); 
        
        document.getElementById('cadastro-form').reset();    
    }
}