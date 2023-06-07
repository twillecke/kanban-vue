import Card from "../../domain/entity/Card";
import CardRepository from "../../domain/repository/CardRespository";
import Connection from "../database/connection/Connection";

export default class CardRepositoryDatabase implements CardRepository {
    
    constructor(readonly connection: Connection) {
    }
    
    async findAllByIdColumn(idColumn: number): Promise<Card[]> {
        const cardsData = await this.connection.query("select title, estimative from thiago.card where id_column = $1", [idColumn]);
        const cards: Card[] = [];
        for (const cardData of cardsData) {
            cards.push(new Card(cardData.title, cardData.estimative));
        }
        return cards;
    }


}