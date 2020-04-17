

export default class TrelloService {

    trelloClient;

    constructor() {
        
        var Trello = require("trello");
        this.trelloClient = new Trello("MY APPLICATION KEY", "MY USER TOKEN");
    }

    /** Recuperar listas de um quadro */
    getListsOnBoard(boardId) {
        return this.trelloClient.getListsOnBoard(boardId);
    }

    /** Recuperar cartões de uma lista */
    getCardsOnList(listId) {
        return this.trelloClient.getCardsOnList(listId);
    }

}