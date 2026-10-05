import { Despesa } from "./tipos";
import { adicionarDespesa, removerDespesa } from "./despesas";
import { matrizCategoriaMes, formatarRelatorio } from "./relatorio";

let despesas: Despesa[] = [
  { id: 1, descricao: "Supermercado", valor: 450.5, categoria: "alimentacao", mes: 1 },
  { id: 2, descricao: "Restaurante", valor: 120, categoria: "alimentacao", mes: 2, observacao: "Aniversário" },
  { id: 3, descricao: "Gasolina", valor: 200, categoria: "transporte", mes: 1 },
  { id: 4, descricao: "Ônibus", valor: 85.9, categoria: "transporte", mes: 3 },
  { id: 5, descricao: "Cinema", valor: 60, categoria: "lazer", mes: 2 },
  { id: 6, descricao: "Show", valor: 250, categoria: "lazer", mes: 3 },
  { id: 7, descricao: "Aluguel", valor: 1200, categoria: "moradia", mes: 1 },
  { id: 8, descricao: "Conta de luz", valor: 150.75, categoria: "moradia", mes: 2 },
];

despesas = adicionarDespesa(despesas, {
  id: 9,
  descricao: "Padaria",
  valor: 35.4,
  categoria: "alimentacao",
  mes: 3,
});
despesas = removerDespesa(despesas, 5);

console.log(formatarRelatorio(despesas));
console.log("\nMatriz categoria x mês:");
console.table(matrizCategoriaMes(despesas));
