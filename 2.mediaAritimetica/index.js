function solucao(lista) {
  let contador = 0;
  let soma = 0;
  let media = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
    contador++;
  }
  media = soma / contador;
  console.log(media);
}

function processData(input) {
  const strings = input.split(" ");
  const numeros = [];
  for (let i = 0; i < strings.length; i++) {
    numeros.push(parseInt(strings[i], 10));
  }
  solucao(numeros);
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
