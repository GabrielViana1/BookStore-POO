const App = require('./App')

module.exports = class Database {
    //O 'banco de dados' é um objeto com arrays
    #storage = {
        authors: [],
        books: [],
        orders: [],
        posters: [],
        products: [],
        users: []
    }

    //Metodo para procurar um objeto no storage
    find(key) {
        return this.#storage[key] //retorna o storage na posição do parametro 
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    findBookName(bookName) {
        //Utilizamos o metodo find para achar um livro no Storage
         return this.#storage.books.find(b => b.name === bookName) //Verifica se o parametro é igual ao book no storage
    }

    saveBook(book) {
        //Aqui utiliza o metodo para achar um livro e ver se ele ja exite no storage
        const bookExists = this.findBookName(book.name) //Se o book.name (que vem da class Book) ja existir no storage ele não puxa novamente 
        if (!bookExists) { //Se o livro não existir
            this.#storage.books.push(book) //O livros é puxado para o array de livros
        }
    } 

    addBooksToStock(bookName, quantity) {
        const book = this.findBookName(bookName) //Utilizamos o metodo de achar o livro
        book?.addToStock(quantity) //Se nao retornar 'undefined' ele adiciona a quantidade ao estoque com metodo "addToStock" -> herdado de Product.js
    }

    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookName(bookName) //Utilizamos o metodo de achar o livro
        book?.removeFromStock(quantity) //Se nao retornar 'undefined' ele remove a quantidade do estoque com metodo "removeFromStock" -> herdado de Product.js
    }

    saveUser(user) {
        //User = email
        const userExist = this.#storage.users.find(u => u.email === user.email) //Verificação se o user existe 
        if(!userExist) { //Se não existir
            this.#storage.users.push(user) //Adiciona o user ao array de users
        } else {
            console.log("Esse usuario ja existe no nosso sistema")
        }
    }

    saveOrder(order) {
        this.#storage.orders.push(order) //Adiciona a compra no array de orders
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.products)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data)) //Utilizamos o metodo get data de Order.js
    }
}