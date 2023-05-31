//variáveis de controle de interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricaoGeral = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

//variáveis de controle de ambiente
let etapaAtual = 0;

comecarEtapa()

//funções   
function comecarEtapa(){
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

    for(let i=0; i<etapa.numeros;i++){
        numeroHtml += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricaoGeral.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function clicou (n) {
    alert('clicou em : ' + n);
}

function branco(){

}

function corrige(){

}

function confirma(){

}