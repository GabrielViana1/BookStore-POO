//Classe de produtos
module.exports = class Product {
    constructor(name, description, price, inStock = 0) {
        this.name = name
        this.description = description
        this.price = price 
        this.inStock = inStock
    }

    //Metodo para adicionar um produto ao estoque
    addToStock(quantity) {
        this.inStock += quantity
    }
    
    //Metodo para remover um produto do estoque
    removeFromStock(quantity) {
        this.inStock -= quantity
    }
}