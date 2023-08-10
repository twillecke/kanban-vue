import Card from "./Card";
import Column from "./Column";

export default class Board {
	columns: Column[];

	constructor(readonly name: string) {
		this.columns = [];
	}

	addColumn(columnName: string, hasEstimative: boolean) {
		this.columns.push(new Column(columnName, hasEstimative));
	}

	addCard(columnName: string, cardTitle: string, cardEstimative: number) {
		const column = this.columns.find(
			(column) => column.name === columnName
		);
		if (!column) throw new Error("Column not found");
		column.addCard(new Card(cardTitle, cardEstimative));
	}

	increaseEstimative(card: Card) {
		card.increaseEstimative();
	}

	getEstimative() {
		return this.columns.reduce((total: number, column: Column) => {
			total += column.getEstimative();
			return total;
		}, 0);
	}
}