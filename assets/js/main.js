console.log(nome,'chamando variavel criada com var');
var nome= 'Fiap'

escreve("Exemplo de função nominal")
 function escreve(título) {
   // alert(título);
 }
 function mudaTitulo(novoTitulo){
   document.querySelector("h1").innerHTML = novoTitulo
 }
 mudaTitulo("Vai Corinthians");

 const mudaTitulo2=  function (novoTitulo){
   document.querySelector("h2").innerHTML = novoTitulo
    
 };
mudaTitulo2("Trocando o subtitulo");
 
