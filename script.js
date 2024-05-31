const startbtn = document.getElementById('startbtn');
const nextbtn = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const containerElement = document.querySelector('.container');
const apiQuestionSection = document.getElementById('api-question');
let currentQuestionIndex;
let questions = [];
let correctAnswersCount = 0;
let answersSummary = [];

// Función para comenzar el juego
function startGame() {
  startbtn.classList.add('hide');
  containerElement.classList.add('hide'); // Ocultar el contenedor
  apiQuestionSection.classList.remove('hide'); // Mostrar la sección de preguntas y respuestas
  correctAnswersCount = 0; // Reiniciar el contador de respuestas correctas
  answersSummary = []; // Reiniciar el resumen de respuestas
  localStorage.removeItem('correctAnswers'); // Limpiar respuestas correctas anteriores del localStorage
  axios
    .get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
    .then((res) => {
      questions = res.data.results;
      currentQuestionIndex = 0;
      setNextQuestion();
    })
    .catch((err) => console.error(err));
}

// Función para mostrar la siguiente pregunta
function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

// Función para mostrar una pregunta y sus respuestas
function showQuestion(questionData) {
  const question = questionData.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  questionElement.innerText = question;

  // Combine correct and incorrect answers and shuffle them
  const answers = [...questionData.incorrect_answers.map(answer => ({
    text: answer,
    correct: false
  })), {
    text: questionData.correct_answer,
    correct: true
  }];
  answers.sort(() => Math.random() - 0.5);

  // Mostrar respuestas
  answers.forEach((individualAnswer) => {
    const button = document.createElement('button');
    button.innerText = individualAnswer.text;
    if (individualAnswer.correct) {
      button.dataset.correct = true;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// Función para seleccionar una respuesta
function selectAnswer(event) {
  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct === 'true';
  if (correct) {
    correctAnswersCount++; // Incrementar el contador de respuestas correctas
  }
  answersSummary.push({
    question: questionElement.innerText,
    answer: selectedButton.innerText,
    correct: correct
  });
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct === 'true');
    button.disabled = true; // Bloquear los botones después de seleccionar una respuesta
  });
  if (questions.length > currentQuestionIndex + 1) {
    nextbtn.classList.remove('hide');
  } else {
    // Almacenar el puntaje en localStorage
    localStorage.setItem('correctAnswers', JSON.stringify(correctAnswersCount));
    showFinalResult(); // Mostrar el resultado final
  }
}

// Función para mostrar el resultado final
function showFinalResult() {
  // Limpiar el estado
  resetState();
  // Mostrar el mensaje de resultado
  let resultHTML = `<div class="card">
    <h5 class="card-header">Resultado</h5>
    <div class="card-body">
      <p class="card-text">Las acertadas han sido: ${correctAnswersCount} de ${questions.length} preguntas correctas</p>
      <ul class="summary-list">`;

  answersSummary.forEach(answer => {
    resultHTML += `<li class="${answer.correct ? 'color-correct' : 'color-wrong'}">
      ${answer.question} - Tu respuesta: ${answer.answer}
    </li>`;
  });

  resultHTML += `</ul>
      <a href="./index.html" class="btn btn-primary">Reset</a>
    </div>
  </div>`;

  questionElement.innerHTML = resultHTML;
}

// Función para almacenar la respuesta correcta en el localStorage
function storeCorrectAnswer(questionIndex) {
  let correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];
  correctAnswers.push(questionIndex);
  localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
}

// Función para restablecer el juego
function resetGame() {
  startbtn.classList.remove('hide'); // Mostrar el botón de inicio
  apiQuestionSection.classList.add('hide'); // Ocultar la sección de preguntas y respuestas
  containerElement.classList.remove('hide'); // Mostrar el contenedor de bienvenida
}

// Función para establecer la clase de estado (correcta/incorrecta) de una respuesta
function setStatusClass(element, correct) {
  element.classList.remove('color-correct', 'color-wrong');
  if (correct) {
    element.classList.add('color-correct');
  } else {
    element.classList.add('color-wrong');
  }
}

function resetState() {
  nextbtn.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// Eventos
startbtn.addEventListener('click', startGame);

nextbtn.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});



//Grafica
// const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) 
 
// const ctx = document.getElementById('myChart');
// const labels = Utils.months({count: 7});
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };







