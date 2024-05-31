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


function showQuestion() {
      const question = questions[currentQuestionIndex];
      questionElement.textContent = question.question;
      answersContainer.innerHTML = '';
      const answers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
      answers.forEach(answer => {
          const button = document.createElement('button');
          button.classList.add('button');
          button.textContent = answer;
          button.addEventListener('click', () => selectAnswer(answer, button, question.correct_answer));
          answersContainer.appendChild(button);
      });
      nextButton.classList.add('hidden');
  }
