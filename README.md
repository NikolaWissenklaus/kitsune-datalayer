# 🦊 Kitsune: DataLayer Tree Viewer

**Kitsune** (raposa na mitologia japonesa: ágil, inteligente e atenta) é um snippet JavaScript projetado para analistas de Web Analytics, engenheiros de dados e desenvolvedores que trabalham com Google Tag Manager (GTM) e Google Analytics 4 (GA4). 

Ele intercepta os eventos disparados no `dataLayer` da página em tempo real e os transforma em uma Árvore de Visualização (Tree View) limpa, colorida e estruturada direto no console do navegador. Diga adeus aos objetos poluídos e tabelas espremidas!

## ✨ Funcionalidades

* **Escuta em Tempo Real:** Captura e exibe instantaneamente qualquer novo evento enviado via `dataLayer.push()`.
* **Tree View Inteligente:** Transforma objetos complexos e arrays longos (como a lista de `items` do GA4) em blocos retráteis (`console.groupCollapsed`), organizados verticalmente para leitura perfeita.
* **Syntax Highlighting (Cores):** Codificação por cores nativa no console:
  * 🟠 Strings em laranja.
  * 🟢 Números em verde brilhante.
  * 🔴 Nulos e booleanos em vermelho itálico.
* **Nomenclatura Automática:** Extrai nomes amigáveis (como `item_name` ou `id`) para rotular visualmente os produtos em arrays de e-commerce.
* **Histórico sob Demanda:** Inclui a função global `kitsune_agora()` para mapear e visualizar tudo o que já estava no dataLayer antes da execução do script.

## 🚀 Como usar

A melhor forma de utilizar o Kitsune é salvá-lo como um **Snippet** no seu navegador para uso em qualquer site.

1. Abra o DevTools (`F12` ou `Ctrl + Shift + I`).
2. Acesse a aba **Sources** (Fontes) e procure pela sub-aba **Snippets** no painel esquerdo.
3. Clique em **+ New snippet** e nomeie como `Kitsune`.
4. Cole todo o código do repositório e salve (`Ctrl + S` / `Cmd + S`).

**Para rodar:** Sempre que precisar debugar uma página, abra o DevTools, pressione `Ctrl + P` (ou `Cmd + P`), digite `!Kitsune` e aperte Enter. 

## 🛠️ Exemplo de Uso (Histórico)

Caso você queira visualizar todos os eventos que aconteceram desde o carregamento da página até o momento atual, basta digitar no console:

```javascript
kitsune_agora()
