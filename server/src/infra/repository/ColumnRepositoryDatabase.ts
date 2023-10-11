import Column from "../../domain/entity/Column";
import ColumnRepository from "../../domain/repository/ColumnRepository";
import Connection from "../database/connection/Connection";

export default class ColumnRepositoryDatabase implements ColumnRepository {

	constructor (readonly connection: Connection) {
	}
    async findAllbyIdBoard(idBoard: number): Promise<Column[]> {
        const columnsData = await this.connection.query("select id_column, name, has_estimative from thiago.column where id_board = $1", [idBoard]);
		const columns: Column[] = [];
		for (const columnData of columnsData) {
			columns.push(new Column(columnData.id_board, columnData.id_column, columnData.name, columnData.has_estimative));
		}
		return columns;
    }

}