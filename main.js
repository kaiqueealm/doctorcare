window.addEventListener('scroll', onScroll) // para eliminar um erro

function onScroll() {  
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  
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