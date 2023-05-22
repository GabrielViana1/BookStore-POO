//Classe simples para informações do autor do livro
module.exports = class Author {
    constructor(name, nationality, bio) {
        this.name = name
        this.nationality = nationality
        this.bio = bio
    }
}