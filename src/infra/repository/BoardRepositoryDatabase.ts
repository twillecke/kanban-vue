import Board from "../../domain/entity/Board";
import BoardRepository from "../../domain/repository/BoardRepository";
import Connection from "../database/connection/Connection";


export default class BoardRepositoryDatabase implements BoardRepository {
    
    constructor (readonly connection: Connection) {
    }
    
    async findAll(): Promise<Board[]> {
        const boardsData = await this.connection.query("select id_board, name from thiago.board", []);
        const boards: Board[] = [];
        for (const boardData of boardsData) {           
            const board = new Board(boardData.name);
            boards.push(board);
        }
        return boards;
    }
    
}