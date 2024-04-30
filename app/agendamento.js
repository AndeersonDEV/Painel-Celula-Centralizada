const painelGpo = document.querySelector('.painelGeralGpo')
const painelCentralizados = document.querySelector('.painelCentralizados')
const painelPerformance = document.querySelector('.painelPerformance')
const painelProdutividade = document.querySelector('.painelProdutividade')
const painelArquivoGa = document.querySelector('.painelArquivoGA')
const painelBook = document.querySelector('.painelbook')
const btnGPo = document.querySelector('.btnGpo')
const btnIndicadores = document.querySelector('.btnIndGPo')
const btnPerformance = document.querySelector('.btnPerf')
const btnProdutivade = document.querySelector('.btnProdutividade')
const btnArquivoGA = document.querySelector('.btnArquivoGA')
const btnBook = document.querySelector('.btnbook')


btnGPo.addEventListener('click', ()=>{
    painelGpo.classList.remove('ativaGpo')
    painelCentralizados.classList.add('ativaGpo')
    painelPerformance.classList.add('ativaGpo')
    painelProdutividade.classList.add('ativaGpo')
    painelArquivoGa.classList.add('ativaGpo')
    painelBook.classList.add('ativaGpo')
})

btnIndicadores.addEventListener('click', ()=>{
    painelCentralizados.classList.remove('ativaGpo')
    painelGpo.classList.add('ativaGpo')
    painelPerformance.classList.add('ativaGpo')
    painelProdutividade.classList.add('ativaGpo')
    painelArquivoGa.classList.add('ativaGpo')
    painelBook.classList.add('ativaGpo')

})

btnPerformance.addEventListener('click', ()=>{
    painelPerformance.classList.remove('ativaGpo')
    painelGpo.classList.add('ativaGpo')
    painelCentralizados.classList.add('ativaGpo')
    painelProdutividade.classList.add('ativaGpo')
    painelArquivoGa.classList.add('ativaGpo')
    painelBook.classList.add('ativaGpo')
})

btnProdutivade.addEventListener('click',()=>{
    painelProdutividade.classList.remove('ativaGpo')
    painelPerformance.classList.add('ativaGpo')
    painelGpo.classList.add('ativaGpo')
    painelCentralizados.classList.add('ativaGpo')
    painelArquivoGa.classList.add('ativaGpo')
    painelBook.classList.add('ativaGpo')
    
})

btnArquivoGA.addEventListener('click',()=>{
    painelArquivoGa.classList.remove('ativaGpo')
    painelProdutividade.classList.add('ativaGpo')
    painelPerformance.classList.add('ativaGpo')
    painelGpo.classList.add('ativaGpo')
    painelCentralizados.classList.add('ativaGpo')
    painelBook.classList.add('ativaGpo')
})

btnBook.addEventListener('click',()=>{
    painelBook.classList.remove('ativaGpo')
    painelArquivoGa.classList.add('ativaGpo')
    painelProdutividade.classList.add('ativaGpo')
    painelPerformance.classList.add('ativaGpo')
    painelGpo.classList.add('ativaGpo')
    painelCentralizados.classList.add('ativaGpo')
})

