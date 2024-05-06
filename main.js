const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="image/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="image/reprovado.png" alt="Emoji triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima  = parseFloat(prompt("Digita a nota minima:"));


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adicionaLinha() {
   const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já existe!`);
    } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = ''; 
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = caculaMediaFinal();

    document.getElementById('valorMediaFinal').innerHTML = mediaFinal;
    document.getElementById('resultMediaFinal').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function caculaMediaFinal() {
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}