import { mount } from "@vue/test-utils";
import BoardViewVue from "../src/views/BoardView.vue";
import BoardServiceHttp from "../src/services/BoardServiceHttp";
import AxiosAdapter from "../src/infra/http/AxiosAdapter";
import BoardService from "../src/services/BoardService";
import Board from "../src/entities/Board";

function sleep(ms: number) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(true);
		}, ms);
	});
}

test("Deve testar o board view", async function () {
	const boardService: BoardService = {
		async getBoard(idBoard: number) {
			const board = new Board(1, "Projeto 1");
			board.addColumn("Todo", true);
			board.addColumn("Doing", true);
			board.addColumn("Done", false);
			board.addCard("Todo", "Atividade 1", 3);
			board.addCard("Todo", "Atividade 2", 2);
			board.addCard("Todo", "Atividade 3", 1);
			return board;
		},
	};
	// const httpClient = new AxiosAdapter();
	// const boardService = new BoardServiceHttp(httpClient, "http://localhost:3000");
	const wrapper = mount(BoardViewVue, {
		global: {
			provide: {
				boardService,
			},
		},
	});
	await sleep(50);
	expect(wrapper.get("#estimative").text()).toBe("6");
});
