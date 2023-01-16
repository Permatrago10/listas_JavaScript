//listas de números del uno al diez

var listas=[]
for(var i=0; i<=10; i++){
    listas.push(i);

}

//lista de frutas
 var numero = 3;
 var texto ="tres";

 var nombreFrutas = ["fresa", "pera", "melocotón"];

 nombreFrutas.push("limón");

 nombreFrutas.unshift("patata");

 nombreFrutas[2] = "higo"


 for(var i=0; i< nombreFrutas.length; i++){
    alert(nombreFrutas[i]);

 }

 while( i < nombreFrutas.length    ){

    alert(nombreFrutas[i]);

 }



 function totalElementosLista(Lista);{
    return listas.length;
 }
    
function seEncuentraEnListaElemento(lista, elemento); {
    for(var i=0; i<lista.length; i++){
          if(lista[i] == elemento){

          }
}

}

function borrarElementoDeLista(lista, elemento){

    for( var i=0; i<lista.length; i++){
        if((lista[i]); ==  elemento){
        }
}

function ListaMayorElemento  (lista);{
    lista.sort();
    return pop();
}