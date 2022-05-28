window.addEventListener('scroll', onScroll) // para eliminar um erro
// o add vc ira fazer um evento e o listine e a função que esta ouvindo o evento de onScroll

onScroll()
function onScroll(){
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  //activateMenuAtCurrentSection(home) /* sempre que eu execultar essa função nessa funçao eu estou execultando a linha de baixo nesse codigo */
  activateMenuAtCurrentSection(home)
}

function activateMenuAtCurrentSection(section){
  //linha alvo
  const targetLine = scrollY + innerHeight / 2   //const e uma variavel constante
  
 //verificar se a seção passou da linha
 //quais dados vou precisar? sempre que vc for fazer uma logica de progamação vc precisa saber quais sao os dados que vai precisa pra seguir naquela sequancia logica

  //o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seçao chegou ou ultrapasou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop//targetLine >= e igual ou utrapassou o sectionTop

  //informações dos dados
  console.log(
    'O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetline
  )

  //verificar se a base esta abaixo da linha alvo
  //quais dados vou precisar?
  
  // a seção termina a onde
  const sectionEndsAt = sectionTop + sectionHeight

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  console.log('O fundo da seção passou da linha?',
  sectionEndPassedTargetline )
  // && significa E
  // ! significa nao
  //${} dentro disso vc pode colocar qualquer codigo javascript

  //limites da seção
  const sectionBoundaries =
  sectionTopReachOrPassedTargetline  &&
  !sectionEndPassedTargetline

  const sectionId = section.getAttribut('id')
  const menuElement = document
  .querySelector(`.menu a[href*=${sectionId}]`)

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}











function showNavOnScroll() {
  if(scrollY > 0){
    navigation.classList.add('scroll')
  }else {
    navigation.classList.remove('scroll')
  }
 
}

function showBackToTopButtonOnScroll() {
  if(scrollY > 550){
  backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top', //  ele vai se movimenta do topo para baixo
  distace: '30px',
  duraction: 700,
}).reveal(`#home, 
#home img, 
#home .stats, 
#sevices
#services header,
#services .card,
#about,
#about header
#about content`)

//tudo que eu quiser jogar pra fora tenho que retornar
//funções vai ser um agrupamento de codigos objetos tem propiedades


// add e uma função lista de classe tambem e um objeto