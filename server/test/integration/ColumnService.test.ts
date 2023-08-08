import PgPromiseConnection from "../../src/infra/database/connection/PgPromiseConnection";
import ColumnRepositoryDatabase from "../../src/infra/repository/ColumnRepositoryDatabase";
import ColumnService from "../../src/service/ColumnService";

test("Deve listar as colunas", async function () {
    const connection = new PgPromiseConnection();
    const columnsRepository = new ColumnRepositoryDatabase(connection);
    const columnService = new ColumnService(columnsRepository);
    const columns = await columnService.getColumns(1);
    expect(columns).toHaveLength(3);
})