const Product = require("./Product")

//Classe para criar um livro
module.exports = class Book extends Product{ //É uma subclasse de produtos
    constructor(title, synopsis, genre, pages, author, description, price, inStock = 0) {
        super(`Livro: ${title}`, description, price, inStock) //Todo livro tera seu nome como "Livro: 'Titulo'"
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}