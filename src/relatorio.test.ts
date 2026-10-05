import { describe, it, expect } from "vitest";
import { Despesa } from "./tipos";
import {
  descricaoCategoria,
  matrizCategoriaMes,
  formatarRelatorio,
} from "./relatorio";

const despesas: Despesa[] = [
  { id: 1, descricao: "Mercado", valor: 100, categoria: "alimentacao", mes: 1 },
  { id: 2, descricao: "Padaria", valor: 20, categoria: "alimentacao", mes: 1 },
  { id: 3, descricao: "Ônibus", valor: 50, categoria: "transporte", mes: 12 },
  { id: 4, descricao: "Aluguel", valor: 900, categoria: "moradia", mes: 3 },
];

describe("descricaoCategoria", () => {
  it("retorna o nome de exibição da categoria", () => {
    expect(descricaoCategoria("alimentacao")).toBe("Alimentação");
    expect(descricaoCategoria("transporte")).toBe("Transporte");
  });

  it("funciona para todas as categorias", () => {
    expect(descricaoCategoria("lazer")).toBe("Lazer");
    expect(descricaoCategoria("moradia")).toBe("Moradia");
  });
});

describe("matrizCategoriaMes", () => {
  it("soma os valores na categoria e no mês corretos", () => {
    const matriz = matrizCategoriaMes(despesas);
    expect(matriz[0][0]).toBe(120); 
    expect(matriz[1][11]).toBe(50); 
    expect(matriz[3][2]).toBe(900); 
  });

  it("para lista vazia retorna 4 linhas x 12 colunas de zeros", () => {
    const matriz = matrizCategoriaMes([]);
    expect(matriz).toHaveLength(4);
    for (const linha of matriz) {
      expect(linha).toHaveLength(12);
      expect(linha.every((valor) => valor === 0)).toBe(true);
    }
  });
});

describe("formatarRelatorio", () => {
  it("traz o título em maiúsculas, os totais e a maior despesa", () => {
    const texto = formatarRelatorio(despesas);
    expect(texto).toContain("RELATÓRIO DE DESPESAS");
    expect(texto).toContain("Alimentação");
    expect(texto).toContain("R$ 120.00");
    expect(texto).toContain("Total geral");
    expect(texto).toContain("R$ 1070.00");
    expect(texto).toContain("Maior despesa: Aluguel");
  });

  it("funciona com lista vazia", () => {
    const texto = formatarRelatorio([]);
    expect(texto).toContain("Total geral");
    expect(texto).toContain("R$ 0.00");
    expect(texto).toContain("Maior despesa: nenhuma");
  });
});
