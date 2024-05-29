// const apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'
const startbtn = document.getElementById('startbtn') //boton start
const header = document.getElementById ('header') // encabezado
const main = document.getElementById('main')// pagina principal
const apiQuestion = document.getElementById ('api-question') //donde se alojan las preguntas
const questionElement = document.getElementById ('question')
const answerButtonsElement = document.getElementById ('answer-buttons')
const scoreElement = document.querySelector(".score");

let currentQuestionIndex

// Botón para comenzar el Quiz.
function startGame() {
  // resetButton();
  startbtn.classList.add("hide");

  axios
    .get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
    .then((res) => {
      questions = res.data.results;
      currentQuestionIndex = 0;
      questionElement.classList.remove("hide");
      setNextQuestion();
    })
    .catch((err) => console.error(err));

} 

//Monstrar pregunta
function showQuestion(questionObj) {
  const pregunta = questionObj.question;
  const preguntaObj = pregunta.replace(/&quot;/g, '"').replace(/&#039;/g, "'");

  questionElement.innerText = preguntaObj;

 }
// Desestructuración del objeto para juntar las respuestas.
const { correct_answer } = questionObj; //revisar
const { incorrect_answers } = questionObj;
const answers = [correct_answer, ...incorrect_answers];


// Creación de botones con las respuestas.
answers.forEach((answer) => {
  const button = document.createElement("button");
  button.innerHTML = answer;
  button.classList.add("btn");
  button.classList.add("btn-outline-primary");

  // Mostrar pregunta siguiente.
function setNextQuestion() {
  // resetState();
  showQuestion(questions[currentQuestionIndex]);

}





  // Setear como respuesta correcta si en el objeto es "correct_answer:".
  if (answer == correct_answer) {
    button.dataset.correct = true;
  }

})



//Eventos 
startbtn.addEventListener('click',startGame)