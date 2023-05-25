const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const nomeInput = document.querySelector('input[type="text"]');
const nomeError = document.querySelector('.nome-error');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
})

function validaForm() {
            var nome = document.getElementById("nome").value;
            var email = document.getElementById("email").value;
            var telefone = document.getElementById("telefone").value;
            var senha = document.getElementById("senha").value;
            
            if (nome.length < 4) {
                alert("Nome deve ter pelo menos 4 caracteres!");
                return false;
            }
            
            if (senha.length < 4) {
                alert("Senha deve ter pelo menos 4 caracteres!");
                return false;
            }
            
            alert("Cadastro realizado com sucesso!");
            return true;
        }















