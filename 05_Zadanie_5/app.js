class Product {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    printInfo() {
        console.log(`${this.constructor.name} - title: ${this.title}, author: ${this.author}`)
    }
}

class Ebook extends Product {
    constructor(title, author) {
        super(title, author);
    }

    download() {
        return console.log(`Ściąganie... ${this.title}`); //Niech ten tekst również będzie zwracany przez metodę oprócz wypisania w konsoli.
        // o to w tym zadaniu chodziło?
    }
}

class Book extends Product {
    constructor(title, author) {
        super(title, author);
    }
    order(){
        return console.log(`Podaj adres dostawy!`);
    }
}

let newEbook = new Ebook( 'Ciemniejsze niebo', 'Ruben Eliassen');
let newBook = new Book('Najdłuższa noc', '');

newBook.printInfo();
newBook.order();
newEbook.printInfo();
newEbook.download();