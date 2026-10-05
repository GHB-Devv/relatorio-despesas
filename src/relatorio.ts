import { Despesa, Categoria, CATEGORIAS } from "./tipos";
import { despesasDaCategoria, totalGasto, maiorDespesa } from "./despesas";

export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case "alimentacao":
      return "Alimentação";
    case "transporte":
      return "Transporte";
    case "lazer":
      return "Lazer";
    case "moradia":
      return "Moradia";
  }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  
  for (let i = 0; i < CATEGORIAS.length; i++) {
    const linha: number[] = [];
    for (let mes = 0; mes < 12; mes++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  
  for (let i = 0; i < CATEGORIAS.length; i++) {
    for (let j = 0; j < despesas.length; j++) {
      if (despesas[j].categoria === CATEGORIAS[i]) {
        
        matriz[i][despesas[j].mes - 1] += despesas[j].valor;
      }
    }
  }

  return matriz;
}
export function formatarRelatorio(despesas: Despesa[]): string {
  const linhas: string[] = [];
  const separador = "-".repeat(32);

  linhas.push("RELATÓRIO DE DESPESAS".toUpperCase());
  linhas.push(separador);

  for (const categoria of CATEGORIAS) {
    const nome = descricaoCategoria(categoria).padEnd(14);
    const total = totalGasto(despesasDaCategoria(despesas, categoria));
    const valor = `R$ ${total.toFixed(2)}`.padStart(16);
    linhas.push(nome + valor);
  }

  linhas.push(separador);
  linhas.push(
    "Total geral".padEnd(14) + `R$ ${totalGasto(despesas).toFixed(2)}`.padStart(16)
  );

  const maior = maiorDespesa(despesas);
  if (maior === undefined) {
    linhas.push("Maior despesa: nenhuma");
  } else {
    linhas.push(`Maior despesa: ${maior.descricao} (R$ ${maior.valor.toFixed(2)})`);
  }

  return linhas.join("\n");
}
