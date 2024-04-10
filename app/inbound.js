const btnindicadores = document.querySelector('.indic')
const btnGpo = document.querySelector('.btngpo')
const telaIndicadores = document.querySelector('.painel')
const telagpo = document.querySelector('.gpo')

btnindicadores.addEventListener('click', ()=>{
    telaIndicadores.classList.remove('ativaGpo')
    telagpo.classList.add('ativaGpo')
})


btnGpo.addEventListener('click', ()=>{
    telaIndicadores.classList.add('ativaGpo')
    telagpo.classList.remove('ativaGpo')
})

