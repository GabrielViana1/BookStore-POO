module.exports =  class Order {
    #items
    #user
    #total

    constructor(items, user, total) {
        items.forEach(({quantity, product}) => {
            if(quantity > product.inStock) {
                throw new Error('Quantidade insuficiente em estoque!')
            }
        })
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, {quantity, product})=> sum + (quantity * product.price), 0) /*Os items serão desestruturado em quantity
        e product e a soma total será quantity * o preço do product*/
    }

    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}