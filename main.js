// Função de pesquisa para filtrar elementos 'product-card' com base em um termo de pesquisa
function search() {
    // Obtém o valor inserido na barra de pesquisa
    let input = document.getElementById('searchbar').value;

    // Converte o valor para minúsculas para tornar a pesquisa insensível a maiúsculas e minúsculas
    input = input.toLowerCase();

    // Obtém uma coleção de elementos com a classe 'product-card'
    let cards = document.getElementsByClassName('product-card');

    // Itera sobre os elementos 'product-card'
    for (let i = 0; i < cards.length; i++) {
        // Obtém o conteúdo de texto do elemento atual e converte para minúsculas
        let title = cards[i].textContent.toLowerCase();

        // Verifica se o título do elemento não inclui o termo de pesquisa
        if (!title.includes(input)) {
            // Se não incluir, oculta o elemento ('display: none')
            cards[i].style.display = "none";
        } else {
            // Se incluir, exibe o elemento ('display: inline-block')
            cards[i].style.display = "inline-block";
        }
    }
}
