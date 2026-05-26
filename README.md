```markdown
# 💼 Meu Portfólio de Desenvolvedor

Projeto de portfólio pessoal desenvolvido com **HTML5, CSS3 e JavaScript (ES6+)**, focado na aplicação prática de conceitos fundamentais do desenvolvimento Web Front-End e integração com APIs.

---

# 🚀 Sobre o Projeto

Este projeto apresenta informações pessoais, acadêmicas e projetos de forma dinâmica e interativa, centralizando a lógica de renderização e comportamento inteiramente no JavaScript (manipulação do DOM).

O sistema possui as seguintes funcionalidades:
* **Exibição dinâmica de dados:** Informações de perfil injetadas via script.
* **Interação com Input:** Saudação personalizada baseada no nome digitado pelo usuário.
* **Quiz de Perfil Tech:** Escolha interativa de orientação de carreira (Front-End ou Back-End).
* **Contador para Formatura:** Cálculo dinâmico do tempo restante (anos, meses e dias) até a data da formatura.
* **Exibição de Status e Data:** Mostra o dia da semana atual e o status de aprovação acadêmica de forma automatizada.
* **Lista de Habilidades e Projetos:** Renderização dinâmica a partir de arrays e objetos JavaScript.
* **Consumo de API Externa:** Busca de frases motivacionais aleatórias em inglês.
* **Tradução Assíncrona:** Integração com API de tradução para converter a frase capturada para o português em tempo real.
* **Alternador de Tema (Modo Escuro):** Transição de layout e cores de forma fluida.

---

# 📂 Estrutura do Projeto

A organização dos arquivos segue a estrutura de diretórios abaixo:

```text
Portfólio/
│
├── Pages/
│   └── index.html
│
├── Style/
│   └── style.css
│
└── Script/
    └── script.js

```

---

# ✨ Detalhes das Funcionalidades

## 👤 Perfil Dinâmico

Insere dinamicamente na página os dados estruturados no código:

* **Nome:** Hélio Gabriel Oliveira Castro
* **Instituição:** Proz Educação
* **Curso:** Desenvolvimento de Sistemas

## ⌨️ Input Interativo

O usuário pode digitar seu nome no campo de texto e, ao clicar em "Mostrar Nome", a interface exibe uma saudação personalizada:

```text
Olá, [Nome do Usuário]

```

## 🧠 Quiz de Perfil Tech

Dois botões interativos alteram o estado da seção de quiz para indicar a preferência do usuário:

* 🎨 **Front-End:** Exibe *"🎨 Perfil Front-End selecionado!"*
* ⚙️ **Back-End:** Exibe *"⚙️ Perfil Back-End selecionado!"*

## 🎓 Contador para Formatura

Utiliza o objeto `Date` do JavaScript para calcular o tempo restante com base na data atual do sistema do usuário.

* **Data da Formatura:** 21/12/2026
* **Retorno:** Exibe a quantidade exata de anos, meses e dias restantes. Caso a data já tenha passado, exibe: *"Parabéns! Já se formou! 🎓"*.

## 🕒 Informações Locais e Acadêmicas

* **Dia da Semana:** Identifica o dia atual do sistema e mapeia para um formato amigável em português (ex: *"Hoje é: Sexta-feira"*).
* **Status da Nota:** Avalia a nota atual (definida como `8`) e exibe o status com base na média 7: **Nota: 8 - Aprovado**.

## ⚡ Habilidades Dinâmicas

As competências mapeadas em uma array JavaScript são injetadas dinamicamente como elementos de lista (`<li>`):

* Criatividade
* Adaptabilidade
* Trabalho em equipe

## 📁 Projetos Dinâmicos

Os projetos estão estruturados como uma coleção de objetos e são renderizados na tela gerando blocos HTML estruturados com links diretos para o GitHub:

1. **RECIBO-QR-CODE:** Sistema em Python com interface gráfica para cadastro de pagamentos. *(Tecnologias: Python, Tkinter, SQLite)*
2. **SISTEMA-DE-ESTACIONAMENTO:** Sistema de controle de estacionamento. *(Tecnologias: Python, SQLite, Tkinter)*

## 💬 Frase Motivacional & Tradução Automática

Seção assíncrona que demonstra o poder de conectar serviços externos:

* **Buscar Frase:** Realiza um `fetch` na API *DummyJSON* para obter uma citação aleatória em inglês e seu respectivo autor.
* **Traduzir Frase:** Trata a string da interface, isola a frase do autor e envia o texto em inglês para a API *MyMemory*, traduzindo o conteúdo para o português e gerenciando o estado do botão (`disabled`) para evitar requisições redundantes.

## 🌓 Modo Escuro

Gerencia a alternância da classe `.dark-mode` no corpo da página (`<body>`), atualizando as cores de fundo, textos e mudando o rótulo do botão dinamicamente entre *"Modo Escuro"* e *"Modo Claro"*.

---

# 🛠️ Tecnologias Utilizadas

* **HTML5** – Estruturação semântica do portfólio.
* **CSS3** – Estilização moderna, efeitos de hover, manipulação de estados (`:disabled`) e transições suaves de cor.
* **JavaScript (ES6+)** – Lógica de programação, funções assíncronas, manipulação do DOM e controle de eventos.
* **DummyJSON Quotes API** – Serviço público para consumo de frases aleatórias.
* **MyMemory API** – API de tradução gratuita utilizada para traduzir textos de inglês para português (`en|pt`).

---

# 📸 Conceitos Praticados

* Manipulação avançada do DOM (`document.getElementById`, `document.createElement`, `appendChild`, `innerHTML`, `innerText`)
* Escutadores de eventos (`addEventListener` e propriedade `onclick`)
* Controle e manipulação de propriedades de elementos HTML (`disabled`, `textContent`)
* Requisições assíncronas assentes em promessas (`fetch`, `async/await`)
* Tratamento robusto de exceções (`try/catch`)
* Manipulação de Strings e Arrays (`split`, `replace`, `trim`, `join`, `forEach`)
* Utilização do Objeto nativo `Date` para cálculos cronométricos

---

# ▶️ Como Executar o Projeto

1. Clone este repositório para sua máquina local:
```bash
git clone [https://github.com/gabi915gubi/Portfolio.git](https://github.com/gabi915gubi/Portfolio.git)

```


2. Navegue até a pasta do projeto.
3. Abra o arquivo de visualização no seu navegador:
```text
Pages/index.html

```



---

# 📚 Objetivo do Projeto

Este repositório possui finalidade puramente **acadêmica**, desenvolvido para consolidar os fundamentos do desenvolvimento web front-end e demonstrar a integração bem-sucedida entre aplicações cliente e APIs REST de terceiros.

---

# 👨‍💻 Autor

**Hélio Gabriel Oliveira Castro** – Estudante de Desenvolvimento de Sistemas na Proz Educação.

[Meu GitHub](https://github.com/gabi915gubi)

---

# 🤝 Colaboração

Este projeto foi desenvolvido com a colaboração e parceria de **Kaiky de Souza Oliveira**.

---

# 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo correspondente para mais detalhes.

```

```