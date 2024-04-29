const btnindicadores = document.querySelector('.btnindic')
const btnGpo = document.querySelector('.btngpo')
const telaIndicadores = document.querySelector('.painel')
const telagpo = document.querySelector('.gpo')

btnindicadores.addEventListener('click', ()=>{
    telaIndicadores.classList.remove('ativaGpo')
    telagpo.classList.add('ativaGpo')
})


btnGpo.addEventListener('click', ()=>{
    telagpo.classList.remove('ativaGpo')
    telaIndicadores.classList.add('ativaGpo')
    
})

