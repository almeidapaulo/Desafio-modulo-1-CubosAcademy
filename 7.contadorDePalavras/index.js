function solucao(texto) {
  let cont = 0;
  let palavras = texto.trim();
  palavras = palavras.split(/\s+/);
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i] !== "") {
      cont++;
    }
  }
  console.log(cont);
}

function processData(input) {
  solucao(input);
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
