// Search Functionality
function searchProduct() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('product-card');
    let noResult = document.getElementById('noResult');
    let found = false;

    if (!cards.length) return;

    for (let i = 0; i < cards.length; i++) {
        let productName = cards[i].getAttribute('data-name');
        if (productName.includes(input)) {
            cards[i].style.display = "flex";
            found = true;
        } else {
            cards[i].style.display = "none";
        }
    }

    if (noResult) {
        noResult.style.display = found ? "none" : "block";
    }
}

// Live Search
document.addEventListener('keyup', function(e) {
    if (e.target.id === 'searchInput') {
        searchProduct();
    }
});