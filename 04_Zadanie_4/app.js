const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
    const button1 = doc.querySelector('#button-1');
    const button2 = doc.querySelector('#button-2');
    const button3 = doc.querySelector('#button-3');
    const parent = doc.querySelector('#shopping-list');
    const newBread = doc.createElement('li');

    button1.addEventListener('click', function () {
        newBread.innerText = 'Chleb';
        parent.appendChild(newBread);
    });

    button2.addEventListener('click', function () {
        let toDelete = parent.lastElementChild;
        parent.removeChild(toDelete);
    });

    button3.addEventListener('click', function () {
        let allChildren = parent.children;
        if (allChildren.length >= 2) {
            let toClone = parent.children[1];
            let newChild = toClone.cloneNode(true);
            parent.appendChild(newChild);
        }
    });
});