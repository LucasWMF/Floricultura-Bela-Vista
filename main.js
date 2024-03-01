function searchFlower() {
    let input = document.getElementById('searchbar-f').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('flower')
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none"
        } else {
            x[i].style.display = "list-item"
        }
    }
}

function searchBoquet() {
    let input = document.getElementById('searchbar-b').value
    input = input.toLowerCase()
    let x = document.getElementsByClassName('Boquet')
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none"
        } else {
            x[i].style.display = "list-item"
        }
    }
}