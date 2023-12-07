function solucao(jogadores) {
  let listaJogadores1 = [];
  let listaJogadores0 = [];
  for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].jogada === 1) {
      listaJogadores1.push(jogadores[i].nome);
    } else {
      listaJogadores0.push(jogadores[i].nome);
    }
  }
  if (listaJogadores1.length === listaJogadores0.length) {
    console.log("NINGUEM");
  } else if (listaJogadores1.length === 1) {
    console.log(listaJogadores1[0]);
  } else if (listaJogadores0.length === 1) {
    console.log(listaJogadores0[0]);
  } else {
    console.log("NINGUEM");
  }
}

function processData(input) {
  solucao(JSON.parse(input));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
