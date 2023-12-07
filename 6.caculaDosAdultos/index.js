function solucao(lista) {
  let listaMaior = [];
  let maior = false;
  let resultado = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] >= 18) {
      listaMaior.push(lista[i]);
      maior = true;
    }
  }

  if (!maior) {
    console.log("CRESCA E APARECA");
  } else {
    resultado = Math.min(...listaMaior);
    console.log(resultado);
  }
}

function processData(input) {
  //Enter your code here
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
