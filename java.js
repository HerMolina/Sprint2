
const nombres=[];


function operaciones(valores){
    let sumaTotal=0;
valores.forEach(element => {
    sumaTotal+=parseFloat(element.Monto);

});
return{Promedio:(sumaTotal/nombres.length),suma:sumaTotal};
}


function obtenerVal(){ 
    let nom=document.getElementById("Nombre").value;
    let mont=document.getElementById("Monto").value;
return{nombre:nom,Monto:mont}
    }


    function crearP(datos){
        let Elemento=document.getElementById("ListaDatos")
        let p = document.createElement("p");
        let pTexto = document.createTextNode(`${datos.nombre}`+"  Monto:" + `${datos.Monto}`);
        p.appendChild(pTexto);
        Elemento.appendChild(p);
    }
document.getElementById("Env").onclick= function (){

    nombres.push(obtenerVal());
 crearP(obtenerVal());
 //console.log(operaciones(nombres))
 //return{nombres};

    
    

    
 
    
   

        //Elemento.innerHTML="<p>"+`${nombres[i].nombre}`+"  Monto:" + `${nombres[i].Monto}` +"</p>";

}
document.getElementById("Res").onclick=function resultado(){
    
    
    let sum=(operaciones(nombres).suma).toFixed (2);
    let prom=(operaciones(nombres).Promedio).toFixed (2);
let Elemento=document.getElementById("ListaDatos")
        let p = document.createElement("p");
        let pTexto = document.createTextNode("El total del dinero es: $"+sum+" Cada uno debe poner $" + prom);
        p.appendChild(pTexto);
        Elemento.appendChild(p);
        //console.log(resultados);

}


    
    

