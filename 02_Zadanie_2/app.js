const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const divs = Array.from(doc.querySelectorAll('div.color'));

    divs.forEach(function (div) {
        // event sie uruchamia jak najeżdżam myszką
        div.addEventListener('mouseover', function () {
            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            div.style.background = randomColor; // tuaj nie powinno byc? div.style.backgroundColor ?
            let showText = div.dataset.text;
            div.innerText = showText;
        });
    });

    divs.forEach(function (div) {
        div.addEventListener('mouseout', function () {
            div.style.background = 'none'; // gdybym użyl div.style.backgroundColor to nie zmienia mi koloru
            div.innerText = '';
        });
    });
});