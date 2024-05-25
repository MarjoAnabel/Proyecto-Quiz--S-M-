const startbtn = document.getElementById('startbtn') //boton start
const header = document.getElementById ('header') // encabezado
const main = document.getElementById('main')// pagina principal
const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'

function startgame() {
    header.classList.remove('hide')
    main.classList.add('hide')
}  







startbtn.addEventListener('click',startgame )