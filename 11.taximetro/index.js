function solucao(min, km) {
  let valorMin = 0;
  let valorKm = 0;
  let valorFinal = 0;
  if (min > 20) {
    let min1 = min - 20;

    let min2 = min - min1;

    valorMin = min2 * 50 + min1 * 30;
  } else {
    valorMin = min * 50;
  }

  if (km > 10) {
    let km1 = km - 10;
    let km2 = km - km1;
    valorKm = km2 * 70 + km1 * 50;
  } else {
    valorKm = km * 70;
  }

  valorFinal = Math.floor(valorMin + valorKm);
  console.log(valorFinal);
}

function processData(input) {
  const x = input.split(" ");
  const min = parseFloat(x[0], 10);
  const km = parseFloat(x[1], 10);
  solucao(min, km);
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
