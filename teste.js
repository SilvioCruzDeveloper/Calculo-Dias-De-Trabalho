function calcular() {
  // ... (seu código existente)

  // Exibir o resultado no console para depuração
  console.log("Ress Final:", ress);

  // Obter a referência da div de resultados no HTML
  var resultadoDiv = document.getElementById("resultado");

  // Criar um parágrafo para exibir o resultado
  var resultadoParagrafo = document.createElement("p");

  // Adicionar o resultado ao parágrafo
  resultadoParagrafo.textContent = "Ress Final: R$ " + ress;

  // Adicionar o parágrafo à div de resultados
  resultadoDiv.innerHTML = ""; // Limpar o conteúdo anterior
  resultadoDiv.appendChild(resultadoParagrafo);

  // ... (seu código existente)

  // Criar parágrafos para exibir os resultados dos descontos
  var descontosParagrafo = document.createElement("p");
  descontosParagrafo.textContent = "Descontos: R$ " + resultados.join(", R$ ");
  resultadoDiv.appendChild(descontosParagrafo);

  // ... (seu código existente)

  // Lógica para exibir o resultado baseado nas condições
  var descontoFinal = 0;

  if (ress >= 1.32) {
    descontoFinal = ress - resultados[0];
  } else if (ress > 1.32 && ress <= 2.571) {
    descontoFinal = ress - resultados[1];
  } else if (ress > 2.571 && ress <= 3.856) {
    descontoFinal = ress - resultados[2];
  } else if (ress > 3.856 && ress <= 7.507) {
    descontoFinal = ress - resultados[3];
  }

  // Criar parágrafo para exibir o desconto final
  var descontoFinalParagrafo = document.createElement("p");
  descontoFinalParagrafo.textContent = "Desconto Final: R$ " + descontoFinal;
  resultadoDiv.appendChild(descontoFinalParagrafo);
}
