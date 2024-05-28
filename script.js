const startbtn = document.getElementById('startbtn') //boton start
 const header = document.getElementById ('header') // encabezado
const main = document.getElementById('main')// pagina principal
const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'

function startgame() {
    header.classList.remove('hide')
    main.classList.add('hide')
}  







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