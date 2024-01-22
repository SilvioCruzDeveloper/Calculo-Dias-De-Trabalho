function calcular() {
  var faltasInput = document.getElementById("idfaltas").value;
  var salarioInformado = document.getElementById("salarioInformado").value;
  var date1 = new Date(document.getElementById("date1").value);
  var date2 = new Date(document.getElementById("date2").value);

  var diferenca = Math.abs(date1 - date2);
  var dia = 1000 * 60 * 60 * 24;
  var total = Math.round(diferenca / dia);
  5;

  var varTrabalhoDia = Math.round(salarioInformado / 30);
  var ress = total * varTrabalhoDia;

  var ressInteiro = parseInt(ress);
  var faltasInteiro = parseInt(faltasInput);
  var valorFalta = faltasInteiro * varTrabalhoDia;
  var ress = ressInteiro - valorFalta;

  console.log("Ress Final:", ress);
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

  if (ress >= 1.32) {
    alert(ress - resultados[0]);
  } else if (ress >= 1.32 || ress <= 2.571) {
    alert(ress - resultados[1]);
  } else if (ress >= 2.571 || ress <= 3.856) {
    alert(ress - resultados[2]);
  } else if (ress >= 3.856 || ress <= 7.507) {
    alert(ress - resultados[3]);
  }
}
