// Função Atulizar Hora 
function updateClock() {
    let now = new Date();
    let diasDaSemana = ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta','Sexta','Sabado'];
    let mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julio', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    let diaDaSemana = diasDaSemana[now.getDay()];
    let diaDoMes = now.getDate();
    let ano = now.getFullYear();
    
    let timeString = now.toLocaleTimeString();
    
    let clockDiv = document.getElementById('clock');
    let month = mesesDoAno[now.getMonth()];

    clockDiv.innerText = diaDoMes  + ' de '+ month + ' ' + ' de ' + ano + ' '  + diaDaSemana + ' ' + timeString;
}
 
  setInterval(updateClock, 1000);
  updateClock();
// Função Atulizar Hora 
  