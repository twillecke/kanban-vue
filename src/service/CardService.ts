import CardRepository from "../domain/repository/CardRespository";

export default class CardService {

    constructor(readonly cardRepository: CardRepository) {
    }

    async getCards(idColumn: number) {
        const cards = await this.cardRepository.findAllByIdColumn(idColumn); 
        return cards;
    }
}