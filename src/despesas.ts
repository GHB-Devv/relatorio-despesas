import { Despesa, Categoria } from "./tipos";

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  if (nova.valor <= 0) {
    throw new Error("O valor da despesa deve ser maior que zero.");
  }
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error("O mês deve estar entre 1 e 12.");
  }
  return [...despesas, nova];
}

export function removerDespesa(despesas: Despesa[], id: number): Despesa[] {
  return despesas.filter((d) => d.id !== id);
}

export function despesasDaCategoria(
  despesas: Despesa[],
  categoria: Categoria
): Despesa[] {
  return despesas.filter((d) => d.categoria === categoria);
}

export function totalGasto(despesas: Despesa[]): number {
  let total = 0;
  for (const d of despesas) {
    total += d.valor;
  }
  return total;
}

export function maiorDespesa(despesas: Despesa[]): Despesa | undefined {
  if (despesas.length === 0) {
    return undefined;
  }
  let maior = despesas[0];
  for (const d of despesas) {
    if (d.valor > maior.valor) {
      maior = d;
    }
  }
  return maior;
}
