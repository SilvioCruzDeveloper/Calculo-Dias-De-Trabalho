function obterValoresDoFormulario() {
  var faltasInput = parseInt(document.getElementById("idfaltas").value);
  var salarioInformado = parseFloat(
    document.getElementById("salarioInformado").value
  );
  var date1 = new Date(document.getElementById("date1").value);
  var date2 = new Date(document.getElementById("date2").value);

  return { faltasInput, salarioInformado, date1, date2 };
}

function calcularDiferencaEmDias(date1, date2) {
  var diferenca = Math.abs(date1 - date2);
  return Math.round(diferenca / (1000 * 60 * 60 * 24));
}

function calcularValorTrabalhoDia(salarioInformado) {
  return Math.round(salarioInformado / 30);
}

function calcularValorFinal(totalDias, varTrabalhoDia, faltasInput) {
  return Math.round(totalDias * varTrabalhoDia) - faltasInput * varTrabalhoDia;
}

function calcularDescontos(ress) {
  var salario7 = Math.trunc(ress * 0.075);
  var salario9 = Math.trunc(ress * 0.09);
  var salario12 = Math.trunc(ress * 0.12);
  var salario14 = Math.trunc(ress * 0.14);

  return [salario7, salario9, salario12, salario14];
}

function exibirAlertaComDiferenca(ress, resultado) {
  if (ress >= 1.32) {
    alert(ress - resultado);
  } else if (ress >= 1.32 || ress <= 2.571) {
    alert(ress - resultado);
  } else if (ress >= 2.571 || ress <= 3.856) {
    alert(ress - resultado);
  } else if (ress >= 3.856 || ress <= 7.507) {
    alert(ress - resultado);
  }
}

function calcular() {
  var { faltasInput, salarioInformado, date1, date2 } =
    obterValoresDoFormulario();
  var totalDias = calcularDiferencaEmDias(date1, date2);
  var varTrabalhoDia = calcularValorTrabalhoDia(salarioInformado);
  var ress = calcularValorFinal(totalDias, varTrabalhoDia, faltasInput);
  console.log("Ress Final:", ress);

  var resultados = calcularDescontos(ress);

  exibirAlertaComDiferenca(ress, resultados[0]);
}
