const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta = [
    {
        enunciado: "Em um futuro onde a inteligencia artificial domina quase tudo você é chamado para destruir as temidas IAs, mas o valor pago é muito baixo pelo risco que você está correndo, o que você faz nessa situação?",
        alternativas: [
            {
                texto: "vou mesmo assim, afinal se alguém não for o mundo continuara o mesmo",
                afirmação: "afirmação"
            },
            {
                texto: "eu irei, mas precisarei de uma equipe e um aumento na recompensa",
                afirmação: "afirmção"
            }

        ]   
    },
    {
        enunciado: "depois de aceitar o contrato você é levado para uma sala onde será obrigado a levar uma epique com você, a equipe é composta por ciborgues, o que você acha disso",
        alternativas: [
            {
                texto: "não é exatamente o que eu esperava, mas serve",
                afirmação: "afirmação"
            },
            {
                texto: "serão perfeitos pra serem meu escudo meio humano caso algo de errado",
                afirmação: "afirmção"
            }
        ]
    },
    {
        enunciado: "durante a viagem a 'base' das IAs você descobre que pode ser um android com memorias implantadas, o que você faz?",
        alternativas: [
            {
                texto: "farei uma investigação quanto a isso, não posso tomar decisões sem pensar antes",
                afirmação: "afirmação"
            },
            {
                texto: "chegando no 'base' farei um ataque suicida, me recuso a ser parte IA",
                afirmação: "afirmção"
            }
        ]
    },
    {
        enunciado: "durante a missão um dos seus parceiros é atingido e outros dois acabam morrendo, o que você faz?",
        alternativas: [
            {
                texto: "não a nada que eu possa fazer quanto aqueles qe ja morreram, mas posso salvar o que foi ferido",
                afirmação: "afirmação"
            },
            {
                texto: "eles que se fodam, eu sou mais importante",
                afirmação: "afirmção"
            }
            
        ]
    },
    {
        enunciado: "você e sua equipe conseguiram, vocês destroiram a 'base' das IAs, mas aquela era apenas uma de varias, e sua equipe foi fortemente ferida e você esta no seus ultimos momentos de vida",
        alternativas: [
            {
                texto: "durante a fuga, eu me fecho em uma sala branca com equipamentos e aguardo a morte pacientemente, tendo certeza de que fiz as escolhas certas",
                afirmação: "afirmação"
            },
            {
                texto: "já esperava morrer ao final disso tudo mesmo, entao morrerei lutando",
                afirmação: "afirmção"
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= pergunta.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = pergunta[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas()
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelocionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelocionada(opçãoSelecionada) {
    const afirmacoes = opçãoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPergunta.textContent = "Em 2049";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta()
