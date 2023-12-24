var ress = 2000;
var salario7 = ress * 0.075;
var salario9 = ress * 0.09;
var salario12 = ress * 0.12;
var salario14 = ress * 0.14;
var resultados = [];
resultados.push(
  Math.trunc(salario7),
  Math.trunc(salario9),
  Math.trunc(salario12),
  Math.trunc(salario14)
);
console.log(resultados);
if (ress >= 1.32) {
  console.log(resultados[0]);
} else if (ress >= 1.32 || ress <= 2.571) {
  console.log(resultados[1]);
} else if (ress >= 2.571 || ress <= 3.856) {
  console.log(resultados[2]);
} else if (ress >= 3.856 || ress <= 7.507) {
  console.log(resultados[3]);
}
//subitracao do valor
if (ress >= 1.32) {
    console.log(ress - resultados[0]);
  } else if (ress >= 1.32 || ress <= 2.571) {
    console.log(ress - resultados[1]);
  } else if (ress >= 2.571 || ress <= 3.856) {
    console.log(ress - resultados[2]);
  } else if (ress >= 3.856 || ress <= 7.507) {
    console.log(ress - resultados[3]);
  }