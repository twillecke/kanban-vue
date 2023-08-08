import Card from "../../src/domain/entity/Card";

test("Deve criar um card", function(){
    const card = new Card("Atividade 1", 3);
    expect(card.title).toBe("Atividade 1");
    expect(card.estimative).toBe(3);
})

test("Não Deve criar um card sem título", function(){
    expect(() => new Card("", 3)).toThrow(new Error("Title is required"));
})

test("Não Deve criar um card sem estimativa", function(){
    expect(() => new Card("Atividade 1", -3)).toThrow(new Error("Estimative must be positive"));
})