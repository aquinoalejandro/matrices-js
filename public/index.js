function generarMatriz() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const matrixContainer1 = document.getElementById('matriz-container');
    const matrixContainer2 = document.getElementById('matriz-container2');
    const general = document.getElementById('matrices');
    const resultContainer = document.getElementById('result-container');

    matrixContainer1.innerHTML = ''; // Limpiar contenedor
    matrixContainer2.innerHTML = ''; 
    resultContainer.innerHTML = '';

  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        matrixContainer1.innerHTML += `<input type='number' id='cell-${i}-${j}' />`;
        matrixContainer2.innerHTML += `<input type='number' id='cell2-${i}-${j}' />`;
      }
      matrixContainer1.innerHTML += '<br/>'; // Nueva línea para cada fila
      matrixContainer2.innerHTML += '<br/>';
    }
  
    // Añadir botón para sumar matrices
    matrixContainer2.innerHTML += `<button type="button" onclick="sumMatrices()">Sumar Matrices</button>`;
  }
  function sumMatrices() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    let resultMatrix = []; // Matriz para almacenar el resultado
  
    // Inicializar la matriz de resultados con ceros
    for (let i = 0; i < rows; i++) {
      resultMatrix[i] = [];
      for (let j = 0; j < columns; j++) {
        resultMatrix[i][j] = 0;
      }
    }
  
    // Sumar las matrices y almacenar el resultado
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cell1 = parseInt(document.getElementById(`cell-${i}-${j}`).value) || 0;
        const cell2 = parseInt(document.getElementById(`cell2-${i}-${j}`).value) || 0;
        resultMatrix[i][j] = cell1 + cell2;
      }
    }
  
    // Mostrar la matriz resultante en inputs separados
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = ''; // Limpiar contenedor anterior
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        // Crear un input para cada elemento de la matriz
        const input = document.createElement('input');
        input.type = 'text';
        input.value = resultMatrix[i][j];
        input.id = `result-${i}-${j}`;
        input.readOnly = true; // Hacer el input de solo lectura si es necesario
        resultContainer.appendChild(input);
      }
      // Agregar un salto de línea para cada fila
      resultContainer.appendChild(document.createElement('br'));
    }
  }
  