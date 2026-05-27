// ==========================
// DADOS
// ==========================

const Nome = "Hélio Gabriel Oliveira Castro";

let minhaBio = "Sou estudante de Desenvolvimento de Sistemas na Proz Educação e estou aprendendo tecnologias voltadas para programação.";

let curso = {
    nome: "Desenvolvimento de Sistemas",
    instituicao: "Proz Educação"
};

// ==========================
// FORMATAÇÃO
// ==========================

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 21;

// ==========================
// HABILIDADES
// ==========================

const habilidades = [
    "Criatividade",
    "Adaptabilidade",
    "Trabalho em equipe"
];

// ==========================
// PROJETOS
// ==========================

const projetos = [
    {
        nome: "RECIBO-QR-CODE",
        descricao: "Sistema em Python com interface gráfica para cadastro de pagamentos.",
        tecnologias: ["Python", "Tkinter", "SQLite"],
        link: "https://github.com/gabi915gubi/RECIBO-QR-CODE"
    },
    {
        nome: "SISTEMA-DE-ESTACIONAMENTO",
        descricao: "Sistema de controle de estacionamento.",
        tecnologias: ["Python", "SQLite", "Tkinter"],
        link: "https://github.com/gabi915gubi/SISTEMA-DE-ESTACIONAMENTO"
    }
];

// ==========================
// FUNÇÕES AUXILIARES GLOBAIS
// ==========================

function obterDataAtual() {
    return new Date();
}

function obterElemento(id) {
    return document.getElementById(id);
}

// ==========================
// CONSUMO DE API
// ==========================

async function buscarAPI(url) {
    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Erro http: ${resposta.status} ${resposta.statusText}`);
        }

        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.log("Erro na requisição:", erro);
        return null;
    }
}

// ==========================
// MÉTODOS DE RENDERIZAÇÃO
// ==========================

function mostrarNome() {
    obterElemento("meuNome").innerText = Nome;
}

function mostrarBio() {
    obterElemento("minhaBio").innerText = minhaBio;
}

function mostrarCurso() {
    obterElemento("curso").innerText = "Curso: " + curso.nome;
    obterElemento("instituicao").innerText = "Instituição: " + curso.instituicao;
}

// ==========================
// HABILIDADES
// ==========================

function criarItemLista(texto) {
    const li = document.createElement("li");
    li.innerText = texto;
    return li;
}

function mostrarHabilidades() {
    const lista = obterElemento("lista-habilidades");
    habilidades.forEach(habilidade => {
        lista.appendChild(criarItemLista(habilidade));
    });
}

// ==========================
// CALCULO CRONOMÉTRICO
// ==========================

function calcularTempoRestante() {
    let dataAtual = obterDataAtual();
    let dataFormatura = new Date(anoFormatura, mesFormatura - 1, diaFormatura);

    if (dataFormatura <= dataAtual) {
        return "Parabéns! Já se formou! 🎓";
    }

    let diferencaTempo = dataFormatura - dataAtual;
    let totalDiasRestantes = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

    let anosRestantes = Math.floor(totalDiasRestantes / 365);
    let diasAposAnos = totalDiasRestantes % 365;
    
    let mesesRestantes = Math.floor(diasAposAnos / 30);
    let diasRestantes = diasAposAnos % 30;

    return `Faltam ${anosRestantes} anos, ${mesesRestantes} meses e ${diasRestantes} dias para minha formatura 🎓`;
}

function mostrarTempoRestante() {
    obterElemento("tempoRestante").innerText = calcularTempoRestante();
}

// ==========================
// INTERAÇÃO QUIZ
// ==========================

function atualizarResultadoQuiz(mensagem) {
    obterElemento("resultado-quiz").innerText = message;
}

function configurarQuiz() {
    obterElemento("btn-visual").onclick = function () {
        atualizarResultadoQuiz("🎨 Perfil Front-End selecionado!");
    };

    obterElemento("btn-logica").onclick = function () {
        atualizarResultadoQuiz("⚙️ Perfil Back-End selecionado!");
    };
}

// ==========================
// NOTA E STATUS (ATUALIZADO)
// ==========================

function mostrarNota() {
    let status = "Aguardando Resultado";

    obterElemento("statusNota").innerHTML = `
        Nota: <strong>Pendente</strong> - Status: <strong>${status} ⏳</strong>
    `;
}

// ==========================
// DATA LOCAL
// ==========================

function mostrarDiaSemana() {
    const dias = [
        "Domingo", "Segunda-feira", "Terça-feira", 
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    let diaSemana = obterDataAtual().getDay();
    obterElemento("diaAtual").innerText = "Hoje é: " + dias[diaSemana];
}

// ==========================
// CONFIGURAÇÕES DE TEMA
// ==========================

function configurarModoEscuro() {
    const botao = obterElemento("modo");

    botao.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            botao.textContent = "Modo Claro";
        } else {
            botao.textContent = "Modo Escuro";
        }
    });
}

// ==========================
// INPUTS DE USUÁRIO
// ==========================

function configurarInput() {
    const botao = obterElemento("btnNome");

    botao.addEventListener("click", function () {
        const valorInput = obterElemento("nomeInput").value;
        obterElemento("resultadoNome").innerText = "Olá, " + valorInput;
    });
}

// ==========================
// PROCESSAMENTO DE PROJETOS
// ==========================

function criarProjetoHTML(projeto) {
    return `
        <h4>${projeto.nome}</h4>
        <p>${projeto.descricao}</p>
        <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
        <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
        <hr>
    `;
}

function mostrarProjetos() {
    const listaProjetos = obterElemento("lista-projetos");

    projetos.forEach(projeto => {
        const div = document.createElement("div");
        div.innerHTML = criarProjetoHTML(projeto);
        listaProjetos.appendChild(div);
    });
}

// ==========================
// INTEGRAÇÃO COM APIs EXTERNAS
// ==========================

async function buscarFrase() {
    const elementoFrase = obterElemento("resultado-frase");
    const botaoTraduzir = obterElemento("traduzir-frase");
    
    elementoFrase.textContent = "Carregando frase...";

    const dados = await buscarAPI("https://dummyjson.com/quotes/random"); 

    try {
        if (dados && dados.quote) {
            elementoFrase.textContent = `"${dados.quote}" — ${dados.author}`;
            botaoTraduzir.disabled = false; 
        } else {
            elementoFrase.textContent = "Erro ao carregar frase.";
            botaoTraduzir.disabled = true;
        }
    } catch (erro) {
        console.log("Erro no processamento:", erro);
        elementoFrase.textContent = "Erro ao carregar frase.";
        botaoTraduzir.disabled = true;
    }
}

async function traduzirFrase() {
    const elementoFrase = obterElemento("resultado-frase");
    const textoOriginal = elementoFrase.textContent;

    if (textoOriginal.includes("Clique no botão") || textoOriginal === "") {
        return;
    }

    const partes = textoOriginal.split("—");
    const fraseIngles = partes[0].replace(/"/g, "").trim();
    const autor = partes[1] ? partes[1].trim() : "";

    try {
        elementoFrase.textContent = "Traduzindo...";

        const urlConstruida = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(fraseIngles)}&langpair=en|pt`;
        const dados = await buscarAPI(urlConstruida); 

        if (dados && dados.responseData && dados.responseData.translatedText) {
            const fraseTraduzida = dados.responseData.translatedText;
            elementoFrase.textContent = `"${fraseTraduzida}" — ${autor}`;
            obterElemento("traduzir-frase").disabled = true; 
        } else {
            throw new Error("Falha na estrutura da tradução");
        }
    } catch (erro) {
        console.log("Erro na tradução:", erro);
        elementoFrase.textContent = "Não foi possível traduzir a frase.";
    }
}

function configurarFrase() {
    obterElemento("buscar-frase").addEventListener("click", buscarFrase);
    obterElemento("traduzir-frase").addEventListener("click", traduzirFrase);
}

// ==========================
// INICIALIZAÇÃO DO SISTEMA
// ==========================

function iniciarSistema() {
    mostrarNome();
    mostrarBio();
    mostrarCurso();
    mostrarHabilidades();
    mostrarTempoRestante();
    configurarQuiz();
    mostrarNota();
    mostrarDiaSemana();
    configurarModoEscuro();
    mostrarProjetos();
    configurarInput();
    configurarFrase();
}

iniciarSistema();