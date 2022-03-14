import './style.css'

const cards = document.querySelectorAll('.cards')
function cardClick(ev){
  const target = ev.target
  target.classList.add('clicked')
  console.log(target)
}

cards.forEach(card =>{
  card.addEventListener('click',cardClick)
})
