document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.calculadora input');
    const botoes = document.querySelectorAll('.botoes button');

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            const valorBotao = this.innerText;

            if (valorBotao === 'C') {
                input.value = '';
            } else if (valorBotao === '=') {
                try {
                    input.value = eval(input.value);
                } catch (error) {
                    alert('Expressão inválida.');
                    input.value = '';
                }
            } else {
                const valorParaAdicionar = valorBotao === ',' ? '.' : valorBotao;
                input.value += valorParaAdicionar;
            }
        });
    });
});
