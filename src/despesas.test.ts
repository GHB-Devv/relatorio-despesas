import { describe, it, expect } from "vitest";
import { Despesa } from "./tipos";
import {
  adicionarDespesa,
  removerDespesa,
  despesasDaCategoria,
  totalGasto,
  maiorDespesa,
} from "./despesas";

const mercado: Despesa = { id: 1, descricao: "Mercado", valor: 100, categoria: "alimentacao", mes: 1 };
const onibus: Despesa = { id: 2, descricao: "Ônibus", valor: 50, categoria: "transporte", mes: 2 };

describe("adicionarDespesa", () => {
  it("adiciona uma despesa e retorna um novo array", () => {
    const resultado = adicionarDespesa([mercado], onibus);
    expect(resultado).toHaveLength(2);
    expect(resultado[1]).toEqual(onibus);
  });

  it("NÃO altera o array original", () => {
    const original = [mercado];
    adicionarDespesa(original, onibus);
    expect(original).toHaveLength(1);
  });

  it("lança erro se o valor for zero ou negativo", () => {
    expect(() => adicionarDespesa([], { ...mercado, valor: 0 })).toThrow();
    expect(() => adicionarDespesa([], { ...mercado, valor: -10 })).toThrow();
  });

  it("lança erro se o mês estiver fora de 1 a 12", () => {
    expect(() => adicionarDespesa([], { ...mercado, mes: 0 })).toThrow();
    expect(() => adicionarDespesa([], { ...mercado, mes: 13 })).toThrow();
  });
});

describe("removerDespesa", () => {
  it("remove a despesa com o id informado", () => {
    const resultado = removerDespesa([mercado, onibus], 1);
    expect(resultado).toEqual([onibus]);
  });

  it("com id inexistente retorna uma cópia igual (e não o mesmo array)", () => {
    const original = [mercado, onibus];
    const resultado = removerDespesa(original, 999);
    expect(resultado).toEqual(original);
    expect(resultado).not.toBe(original);
  });

  it("não altera o array original", () => {
    const original = [mercado, onibus];
    removerDespesa(original, 1);
    expect(original).toHaveLength(2);
  });
});

describe("despesasDaCategoria", () => {
  it("retorna só as despesas da categoria", () => {
    const resultado = despesasDaCategoria([mercado, onibus], "transporte");
    expect(resultado).toEqual([onibus]);
  });

  it("retorna lista vazia se não houver despesas da categoria", () => {
    expect(despesasDaCategoria([mercado], "lazer")).toEqual([]);
  });
});

describe("totalGasto", () => {
  it("soma os valores das despesas", () => {
    expect(totalGasto([mercado, onibus])).toBe(150);
  });

  it("retorna 0 para lista vazia", () => {
    expect(totalGasto([])).toBe(0);
  });

  it("soma valores com centavos sem erro de arredondamento", () => {
    const a: Despesa = { ...mercado, id: 10, valor: 0.1 };
    const b: Despesa = { ...mercado, id: 11, valor: 0.2 };
    expect(totalGasto([a, b])).toBeCloseTo(0.3, 2);
  });
});

describe("maiorDespesa", () => {
  it("retorna a despesa de maior valor", () => {
    expect(maiorDespesa([onibus, mercado])).toEqual(mercado);
  });

  it("retorna undefined para lista vazia", () => {
    expect(maiorDespesa([])).toBeUndefined();
  });
});
