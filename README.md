# Quicklist

Aplicação web para organizar uma lista de compras, desenvolvida como desafio da formação Full-Stack da Rocketseat.

O projeto utiliza HTML, CSS e JavaScript para praticar estrutura semântica, layouts responsivos, manipulação do DOM e tratamento de eventos.

## Funcionalidades

- Lista inicial com Pão de forma, Café preto, Suco de laranja e Bolacha.
- Adição de novos itens pelo botão ou pela tecla Enter.
- Validação para impedir itens vazios ou compostos apenas por espaços.
- Limpeza do campo após adicionar um item.
- Marcação e desmarcação de itens, com texto riscado para indicar conclusão.
- Remoção de itens iniciais e adicionados durante o uso.
- Aviso de remoção com fechamento manual ou automático após 3 segundos.
- Reinício da contagem do aviso a cada nova remoção.
- Layout adaptado para desktop e celular.

## Tecnologias

- **HTML5:** estrutura da página, formulário e lista.
- **CSS3:** variáveis, Flexbox, media queries e estados visuais.
- **JavaScript:** manipulação do DOM, eventos e temporizadores.
- **Git e GitHub:** versionamento do projeto.

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.

Também é possível abrir o projeto no VS Code e executá-lo com a extensão Live Server.

## Organização dos arquivos

| Arquivo ou pasta | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura da aplicação e itens iniciais. |
| `script.js` | Adição, validação e remoção de itens, além do controle do aviso. |
| `styles/index.css` | Importação dos arquivos de estilos. |
| `styles/global.css` | Reset e variáveis de cores e tipografia. |
| `styles/header.css` | Estilos do cabeçalho. |
| `styles/main.css` | Layout, componentes, estados e responsividade. |
| `assets/` | Ícones utilizados na interface. |
| `logo.svg` | Logotipo da aplicação. |

## Aprendizados

- Selecionar, criar e inserir elementos na página.
- Usar `textContent` para preencher o nome dos produtos.
- Tratar o envio do formulário com `submit` e `preventDefault()`.
- Validar entradas com `trim()` e encerrar envios inválidos com `return`.
- Usar delegação de eventos e `closest()` para remover itens iniciais e novos.
- Controlar o aviso com `hidden`, `setTimeout()` e `clearTimeout()`.
- Aplicar estilos de conclusão com `:checked` e adaptar o layout com media queries.

## Comportamento dos dados

As alterações ficam na memória da página durante o uso. Ao recarregar, a lista retorna aos quatro itens iniciais.

## Créditos

Desafio e layout propostos pela **Rocketseat** durante a formação Full-Stack.

Desenvolvido por **Carlos Leonello** como projeto de estudo.
