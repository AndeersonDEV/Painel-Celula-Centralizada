const btnHome = document.querySelector('.btnTelaInicial')
const btnCenso = document.querySelector('.btnCensoGeral')
const btnOrgano = document.querySelector('.btnOrgano')
const telaCenso = document.querySelector('#censo')
const telaOrganograma = document.querySelector('.organograma')
const telaInicial = document.querySelector('.quadro__opcoes')

btnHome.addEventListener('click', ()=>{
    telaInicial.classList.remove('ativaGpo')
    telaCenso.classList.add('ativaGpo')
    telaOrganograma.classList.add('ativaGpo')
})
btnCenso.addEventListener('click',()=>{
    telaCenso.classList.remove('ativaGpo')
    telaInicial.classList.add('ativaGpo')
    telaOrganograma.classList.add('ativaGpo')
})

btnOrgano.addEventListener('click',()=>{
    telaOrganograma.classList.remove('ativaGpo')
    telaInicial.classList.add('ativaGpo')
    telaCenso.classList.add('ativaGpo')
})



// const urlAvalara = 'file://1965dep01939848/Users/4351460/Desktop/Painel%20Avalara/Geral1.html'
// const urlMotorista = 'file://1965dep01939848/Users/4351460/Desktop/Painel%20Motoristas/index.html'
// const urlServiceNow = 'https://gpabr.service-now.com/nav_to.do?uri=%2F$pa_dashboard.do%3Fsysparm_dashboard%3D806bf3201bccb954ed7a53dc4b4bcbf0%26sysparm_tab%3D7a7bff201bccb954ed7a53dc4b4bcbd6%26sysparm_cancelable%3Dtrue%26sysparm_editable%3Dundefined%26sysparm_active_panel%3Dfalse'


// btnAvalara.addEventListener('click',() =>{
//     iframe.setAttribute('src',urlAvalara)
// }) 

// btnMotorista.addEventListener('click',() =>{
//     iframe.setAttribute('src',urlMotorista)
// }) 
// btnServiceNow.addEventListener('click',() =>{
//     iframe.setAttribute('src',urlServiceNow)
// }) 
// let senha = 'Adm@2024'
// let texto = 'href=""'

// let href = 'https://app.powerbi.com/reportEmbed?reportId=81bec09b-a793-4bce-8aa2-a82f5a63d22d&autoAuth=true&ctid=1a53e6b6-7562-4b9f-83d0-e71a8891667e'
// let 
// function exibirCenso(){
//     let campoSenha = prompt('Digite a senha para acesso:')
//     if(campoSenha == senha){
//         document.getElementById('censo').setAttribute('href',href)
//         // alert('Acesso liberado!!')
//     }else{
//         alert('Você não possui acesso !!')
//     }
// }

