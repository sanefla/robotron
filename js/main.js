/* querySelectorAll busca todos os elementos com aquela classe
   é criado um array com esses elementos
*/

const controles = document.querySelectorAll('[data-controle]');

/* forEach é uma função que serve especificamente para manipular arrays
   ao utilizar, ela irá iterar por todos os elementos e realizar a ação que estiver entre ()
    
   "controle" é um nome generico para o elemento atual do array que está sendo percorrido pelo forEach, ele foi passado como parametro na função anônima que executa um evento* para cada um dos itens dentro do array

   add event listener é um *evento realizado sempre que uma ação é executada
   recebe dois parametros: a ação necessária (um clique), e o que ela faz (nesse caso, uma função)
*/

controles.forEach ( (controle) => 
{ 
    controle.addEventListener('click', function (botao)  
    {
        /* assim, a cada clique em um sinal - ou +, será chamada a função manipulaDados
            a função recebe dois parâmetros
            botao.target.dataset.controle: irá analisar no html se o data-atribute para aquele botão é positivo ou negativo
            botao.target.parentNode: irá analisar na árvore do html qual dos botões foi clicado através do pai do elemento
        */
        manipulaDados(botao.target.dataset.controle, botao.target.parentNode);
        atualizaEstatisticas(botao.target.dataset.peca, botao.target.dataset.controle);
    })
})

// o parâmetro "controle" será a resposta do botao.target.parentNode

function manipulaDados(sinal, controle) {

    // querySelector faz uma busca no documento atraves da classe
    const numPecas = controle.querySelector('[data-contador]');

    if (sinal === '-') {
        numPecas.value = parseInt(numPecas.value) - 1;
    } else {
        numPecas.value = parseInt(numPecas.value) + 1;
    }
}

// a partir daqui mexemos com as estatisticas, a constante peças foi retirada do github

const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach( (estatistica) => {
        if(operacao === "+") {
            estatistica.textContent = parseInt(estatistica.textContent) + pecas[peca][estatistica.dataset.estatistica];
        } else {
            estatistica.textContent = parseInt(estatistica.textContent) - pecas[peca][estatistica.dataset.estatistica];
        }
    })
}
