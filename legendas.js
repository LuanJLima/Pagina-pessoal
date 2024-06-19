// Seleciona todos os ícones de linguagem
const iconesLinguagem = document.querySelectorAll('.icone-linguagem');

// Para cada ícone de linguagem, adiciona eventos de mouseover e mouseout
iconesLinguagem.forEach((icone) => {
    icone.addEventListener('mouseover', () => {
        // Mostra a legenda quando o mouse passa sobre o ícone
        const legenda = icone.dataset.legenda;
        mostrarLegenda(icone, legenda);
    });

    icone.addEventListener('mouseout', () => {
        // Oculta a legenda quando o mouse sai do ícone
        ocultarLegenda();
    });
});

// Função para mostrar a legenda
function mostrarLegenda(icone, legenda) {
    const posicao = icone.getBoundingClientRect(); // Obtém a posição do ícone
    const divLegenda = document.createElement('div'); // Cria um elemento <div> para a legenda
    divLegenda.classList.add('legenda'); // Adiciona a classe 'legenda' para estilização CSS
    divLegenda.textContent = legenda; // Define o texto da legenda
    divLegenda.style.top = posicao.top - 30 + 'px'; // Posiciona a legenda acima do ícone
    divLegenda.style.left = posicao.left + 'px'; // Alinha a legenda com a esquerda do ícone
    document.body.appendChild(divLegenda); // Adiciona a legenda ao corpo do documento
}

// Função para ocultar a legenda
function ocultarLegenda() {
    const legenda = document.querySelector('.legenda'); // Seleciona a legenda
    if (legenda) {
        legenda.remove(); // Remove a legenda se existir
    }
}