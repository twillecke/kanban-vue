import Board from "../entities/Board";
import BoardService, { SaveColumnInput } from "./BoardService";
import HttpClient from "../infra/http/httpClient";

export default class BoardServiceHttp implements BoardService {
	constructor(readonly httpClient: HttpClient) {}

	async getBoard(idBoard: number): Promise<Board> {
		const boardData = await this.httpClient.get(
			`http://localhost:3000/boards/${idBoard}`
		);
		const board = new Board(boardData.name);
		for (const columnData of boardData.columns) {
			board.addColumn(columnData.name, columnData.estimative);
			for (const cardData of columnData.cards) {
				board.addCard(
					columnData.name,
					cardData.cardTitle,
					cardData.estimative
				);
			}
		}
		return board;
	}

	async saveColumn(column: SaveColumnInput): Promise<number> {
		const idColumn = await this.httpClient.post(
			`http://localhost:3000/boards/${column.idBoard}/columns`,
			column
		);
		return idColumn;
	}
}
