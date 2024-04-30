const telaGpo = document.querySelector('#gpofrete')
const telaIndicadores = document.querySelector('#indicfrete')
const btnGpo = document.querySelector('.btngpo')
const btnIndicadores = document.querySelector('.btnindic')

btnGpo.addEventListener('click',()=>{
    telaGpo.classList.remove('ativaGpo')
    telaIndicadores.classList.add('ativaGpo')
})

btnIndicadores.addEventListener('click',()=>{
    telaIndicadores.classList.remove('ativaGpo')
    telaGpo.classList.add('ativaGpo')
})