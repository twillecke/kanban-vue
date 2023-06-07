import Column from "../../domain/entity/Column";

export default interface ColumnRepository {
    findAllbyIdBoard (idBoard: number): Promise<Column[]>;
}