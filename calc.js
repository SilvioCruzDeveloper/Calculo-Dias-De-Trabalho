// Função para calcular ress e faltas
function calcular() {
  // Obter valores dos inputs
  var faltasInput = document.getElementById("idfaltas").value; // Captura o número de faltas do input
  var salarioInformado = document.getElementById("salarioInformado").value; // Captura o salário informado do input
  var date1 = new Date(document.getElementById("date1").value); // Captura a data inicial do input
  var date2 = new Date(document.getElementById("date2").value); // Captura a data final do input

  // Converter datas para diferença em dias
  var diferenca = Math.abs(date1 - date2); // Calcula a diferença em milissegundos entre as datas
  var dia = 1000 * 60 * 60 * 24; // Define a quantidade de milissegundos em um dia
  var total = Math.round(diferenca / dia); // Calcula o total de dias entre as datas

  // Calcular variáveis
  var varTrabalhoDia = Math.round(salarioInformado / 30); // Calcula o valor do trabalho por dia, assumindo 30 dias no mês
  var ress = total * varTrabalhoDia; // Calcula o ress multiplicando o total de dias pelo valor do trabalho por dia

  // Converter ress e faltas para números inteiros
  var ressInteiro = parseInt(ress); // Converte o ress para um número inteiro
  var faltasInteiro = parseInt(faltasInput); // Converte o número de faltas para um número inteiro
  var valorFalta = faltasInteiro * varTrabalhoDia; // Calcula o valor das faltas multiplicando o número de faltas pelo valor do trabalho por dia
  var ress = ressInteiro - valorFalta; // Calcula o ress final subtraindo o valor das faltas do ress

  // Exibir o resultado no console para depuração
  console.log("Ress Final:", ress);

  // Alerta temporário para verificar o resultado (substituir por lógica para exibição no HTML)
  alert("Ress Final: R$ " + ress);
  // calcula os valores descontados
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
// aticoes de teste
