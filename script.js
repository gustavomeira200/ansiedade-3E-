const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        Enunciado: "1.Com que frequência você sente que está prestes a perder o controle?"                                                                                                                                                                                                                                  ",
        alternativas: [
            {
                texto:"Sim - Frequêntemente- Você sente que as situações escapam do seu controle frequentemente",
                afirmação: ""
            },
            {
                texto:"Não - Raramente - Você sente que consegue manter o controle na maioria das vezes.",
                afirmação: ""
            }
        ]
    },
    {
        {
        Enunciado: "2.Você tem dificuldade para dormir devido à preucupação?",
        alternativas: [
            {
                texto:"Sim - A preucupação atrapalha seu sono e causa insônnia.",
                afirmação: ""
            },
            {
                texto:"Não - Você consegue relaxar o suficiente para dormir bem.",
                afirmação: ""
            }
        ]
    },
    {
        {
        Enunciado: "3. Quando algo inesperado acontece,como você reage ?",
        alternativas: [
            {
                texto:"Sim - • Fico muito ansioso(a) → Você se sente muito ansioso(a) e tem dificuldade para lidar com mudanças.",
                afirmação: ""
            },
            {
                texto:"Não - Tento me adaptar com calma → Você tenta se adaptar com calma à nova situação.",
                afirmação: ""
            }
        ]
    },
    {
        {
        Enunciado: "4. Seus pensamentos aceleram e você sente o coração disparar?",
        alternativas: [
            {
                texto:"	Sim → Seu corpo responde intensamente ao estresse, com sintomas físicos claros.",
                afirmação: ""
            },
            {
                texto:"Não - Às vezes, mas consigo me acalmar → Você sente sintomas leves e consegue se acalmar.",
                afirmação: ""
            }
        ]
    },
    {
        {
        Enunciado: "5. Você evita situações sociais por medo ou vergonha?",
        alternativas: [
            {
                texto:"Sim → Você evita muitas situações sociais por medo de julgamento.",
                afirmação: ""
            },
            {
                texto:"Não → Você se sente confortável na maioria das situações sociais.",
                afirmação: ""
            }
        ]
    },
    {
        {
        Enunciado: "6. Você busca ajuda quando sente que está sobrecarregado?",
        alternativas: [
            {
                texto:"Sim → Você reconhece seus limites e procura apoio quando necessário.",
                afirmação: ""
            },
            {
                texto:"Não → Você costuma guardar tudo para si e evita pedir ajuda.",
                afirmação: ""
            }
        ]
    },
    {

        
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
