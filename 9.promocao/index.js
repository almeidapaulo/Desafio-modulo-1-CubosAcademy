function solucao(precos) {
  let valorAPagar = 0;
  let menorValor = Math.min(...precos);
  for (let i = 0; i < precos.length; i++) {
    valorAPagar += precos[i];
  }
  if (precos.length < 3) {
    console.log(valorAPagar);
  } else if (precos.length > 2) {
    valorAPagar = valorAPagar - menorValor / 2;
    console.log(valorAPagar);
  }
}

function processData(input) {
  const lista = input.split(" ");
  lista.forEach((x, i, a) => (a[i] = parseInt(x, 10)));
  solucao(lista);
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
