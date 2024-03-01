function search() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let cards = document.getElementsByClassName('bouquet-card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].textContent.toLowerCase();

        if (!title.includes(input)) {
            cards[i].style.display = "none";
        } else {
            cards[i].style.display = "inline-block";
        }
    }
}
