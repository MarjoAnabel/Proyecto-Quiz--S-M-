Descripción
Este proyecto consiste en desarrollar un cuestionario (Quiz) que permite a los usuarios responder 10 preguntas de opción múltiple. Cada pregunta tiene 4 opciones, de las cuales solo una es correcta. Al finalizar el cuestionario, los usuarios podrán ver cuáles respuestas fueron correctas y cuáles no.

Las preguntas del cuestionario se obtendrán de la API de Open Trivia Database (OpenTDB) u otras APIs similares que se consideren adecuadas.

La aplicación está diseñada como una SPA (Single-Page Application), de manera que solo una pregunta se muestra en la pantalla en un momento dado.

Características
Single-Page Application (SPA): Navegación fluida sin recargar la página.
Preguntas de opción múltiple: Cada pregunta tiene 4 opciones, con solo una respuesta correcta.
Interfaz intuitiva: Muestra una pregunta a la vez para mantener al usuario enfocado.
Resultados detallados: Al finalizar, muestra un resumen de respuestas correctas e incorrectas.
Tecnologías Utilizadas
Frontend: HTML, CSS, JavaScript, [Framework/Librería SPA (Ej: React, Vue.js, Angular)].
API para preguntas: Open Trivia Database (OpenTDB) u otras APIs adecuadas.


  function showResults() {
      quizContainer.classList.add('hidden');
      resultsContainer.classList.remove('hidden');
      resultsElement.innerHTML = '';
      userAnswers.forEach((item, index) => {
          const div = document.createElement('div');
          div.textContent = `${index + 1}. ${item.question} - Tu respuesta: ${item.answer} - Correcta: ${item.correctAnswer}`;
          div.classList.add(item.answer === item.correctAnswer ? 'correct' : 'incorrect');
          resultsElement.appendChild(div);
      });
  }
});

