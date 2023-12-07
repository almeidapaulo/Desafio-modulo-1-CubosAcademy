function processData(input) {
  let palavraFormatada = "";

  let primeiraLetra = input.substr(0, 1);

  let restanteLetra = input.substr(1);

  if (
    primeiraLetra === primeiraLetra.toLowerCase() &&
    restanteLetra === restanteLetra.toUpperCase()
  ) {
    palavraFormatada =
      primeiraLetra.toUpperCase() + restanteLetra.toLowerCase();
    console.log(palavraFormatada);
  } else if (
    primeiraLetra === primeiraLetra.toUpperCase() &&
    restanteLetra === restanteLetra.toUpperCase()
  ) {
    palavraFormatada =
      primeiraLetra.toLowerCase() + restanteLetra.toLowerCase();
    console.log(palavraFormatada);
  } else {
    console.log(input);
  }
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
