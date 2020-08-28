const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const buttons = Array.from(doc.querySelectorAll('button'));
    const container = doc.querySelector('#container');
    buttons.forEach(function (button){
        button.addEventListener('click', function(){
            let textToShow = button.dataset.text;
            container.innerText = textToShow;
        });
    });
});