const painelGpo = document.querySelector('.painelGeralGpo')
const painelCentralizados = document.querySelector('.painelCentralizados')
const painelPerformance = document.querySelector('.painelPerformance')
const btnGPo = document.querySelector('.btnGpo')
const btnIndicadores = document.querySelector('.btnIndGPo')
const btnPerformance = document.querySelector('.btnPerf')

btnGPo.addEventListener('click', ()=>{
    painelGpo.classList.remove('ativaGpo')
    painelCentralizados.classList.add('ativaGpo')
    painelPerformance.classList.add('ativaGpo')
})

btnIndicadores.addEventListener('click', ()=>{
    painelGpo.classList.add('ativaGpo')
    painelCentralizados.classList.remove('ativaGpo')
    painelPerformance.classList.add('ativaGpo')
})

btnPerformance.addEventListener('click', ()=>{
    painelGpo.classList.add('ativaGpo')
    painelCentralizados.classList.add('ativaGpo')
    painelPerformance.classList.remove('ativaGpo')
})

