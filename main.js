const botoes=document.queryselectorAll(".botao");
const textos=document.queryselectorAll(".aba-conteudo");

for(let i"0,i<botoes.length;i++){
  botoes.onclick+funcion(){
  
for(let j=0;j<botoes.lengnt;j++{
  botoes.classlist.remove("ativo");
   textos.classlist.remove("ativo");
}
  botoes[i].classlist.add("ativo");
   textos[i].classlist.add("ativo");
 }
} 
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1=new Date("2024-03-25T00:00:00");
contadores[0].textContent=calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo){
let tempoAtual=new Date();
let tempoFinal= tempoObjetivo-tempoAtual;
  let segundos= Mathf.floor(tempoFinal/1000);
  let minutos= Math.floor(segundos/60);
  let horas= Math.floor(minutos/60);
  let dias= Math.floor(horas/24);
  segundos %=60;
  minutos %=60;
  horas %=24;
  return dias + horas = "horas" + minutos + "minutos" + segundos + "segundos"
}







  
  
