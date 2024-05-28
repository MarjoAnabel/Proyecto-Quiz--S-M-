// const apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'
const startbtn = document.getElementById('startbtn') //boton start
 const header = document.getElementById ('header') // encabezado
const main = document.getElementById('main')// pagina principal
const apiQuestion = document.getElementById ('api-question') //donde se alojan las preguntas
const questionElement = document.getElementById ('question')
const answerButtonsElement = document.getElementById ('answer-buttons')


function startgame() {
    header.classList.remove('hide')
    main.classList.add('hide')
    // setNextQuestion()
} 

let currentQuestionIndex

function startGame() {
    startbtn.classList.add('hide')
    currentQuestionIndex = 0
    questionElement.classList.remove('hide')
    
}

// // let dataGlobal = []
// const getQuestions = () => {
//   axios 
// .get ('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean')
// .then ((res) => {
//   const {data} = res
// const getQuestion = () => {
//   dataGlobal.forEach ((item) => {
//     question.innerHTML += `
//     <h2>${item.question} </h2>
//     `
//   })
// }
// })
// .catch((err) => console.error (err))
// }


function startGame() {
  startbtn.classList.add ('hide')
  questionElement.classList.remove ('hide')
}

startbtn.addEventListener('click',startGame)

// document.getElementById('startbtn').addEventListener ('click',function() {
//   document.getElementById ('container').style.display= 'none'

// })



<<<<<<< HEAD




startbtn.addEventListener('click',startgame )

const getPosts = () => {
axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean')
.then((res) => { 
  const {data} = res
  data.forEach((item) => {
    content.innerHTML += `
    <h1>${item.title}</h1>
    <p>${item.body}</p>`
  })
})
.catch((err) => console.error(err))
}
=======
// startbtn.addEventListener ('click', () => {
//     const apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'
//     axios.get(apiUrl)
//   .then(response => {
//     let questions = [];
//     response.data.results.forEach(result => {
//             questions.innerHTML += `
//             <h2>${result.question} </h2>
//             `
//           })
//       // questions.push(result.question);
//     });
//     console.log(questions);
//     return questions
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
>>>>>>> 738c690ca272022ce350d7d447a3561feda17ac6
