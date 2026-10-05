# Relatório de Despesas (TypeScript)

Pequeno módulo em TypeScript que registra as despesas de um mês e gera um relatório por categoria. O programa não lê nada do usuário, o src/index.ts monta um array de despesas de exemplo, chama as funções e imprime o relatório com console.log.

## 1. Como instalar, testar e rodar

npm install          - instala as dependências;
npm test             - roda os testes (Vitest, uma vez e sai);
npm run dev          - roda o programa (src/index.ts) com o tsx;
npx tsc --noEmit     - confere os tipos sem gerar arquivos;


## 2. Arquivos de configuração

| Arquivo | Para que serve |
|---|---|
| package.json | Nome do projeto, scripts (test e dev) e dependências de desenvolvimento. |
| tsconfig.json | Configura o TypeScript, com strict: true e noEmit (só verifica tipos). |
| .gitignore | Diz ao Git quais pastas ignorar (node_modules/ e dist/). |

Não há arquivo de configuração do Vitest, ele funciona com as configurações padrão.

## 3. Registro de uso de IA

| Função | Arquivo | Uso de IA |
|---|---|---|
| tipos Categoria, Despesa e CATEGORIAS | src/tipos.ts | Implementação gerada pelo Claude. Revisei e conferi os comentários. |
| adicionarDespesa | src/despesas.ts | Implementação gerada pelo Claude. Revisei e testei. |
| removerDespesa | src/despesas.ts | Implementação gerada pelo Claude. Revisei e testei. |
| despesasDaCategoria | src/despesas.ts | Implementação gerada pelo Claude. Revisei e testei. |
| totalGasto | src/despesas.ts | Implementação gerada pelo Claude. Revisei e testei. |
| maiorDespesa | src/despesas.ts | Implementação gerada pelo Claude. Revisei e testei. |
| descricaoCategoria | src/relatorio.ts | Implementação gerada pelo Claude. Revisei e testei. |
| matrizCategoriaMes | src/relatorio.ts | Implementação gerada pelo Claude. Revisei e testei. |
| formatarRelatorio | src/relatorio.ts | Implementação gerada pelo Claude. Revisei e testei. |
| programa principal | src/index.ts | Implementação gerada pelo Claude. Revisei e testei. |
| testes | src/*.test.ts | Gerados pelo Claude. Revisei cada caso. |

## 4. Reflexão

A IA gerou todas as funções e, na primeira execução, os testes passaram. Mesmo assim, conferi os pontos em que era fácil errar. Em matrizCategoriaMes, o mês 1 fica na posição 0 do array, por isso é preciso usar mes - 1, e a função só podia usar laços for. Em adicionarDespesa e removerDespesa, conferi que o array original não é alterado. Também desconfiei da soma de valores com centavos, porque em JavaScript 0.1 + 0.2 não dá exatamente 0.3. Por isso acrescentei um teste em totalGasto usando toBeCloseTo. Aprendi que é importante testar os casos de borda (lista vazia, id inexistente, mês inválido), e não só o caso normal.
