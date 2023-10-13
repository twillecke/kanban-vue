import Column from "../../domain/entity/Column";

export default interface ColumnRepository {
	findAllbyIdBoard(idBoard: number): Promise<Column[]>;
	save(column: Column): Promise<number>;
	get(idColumn: number): Promise<Column>;
    delete(idColumn: number): Promise<void>;
}
