for (let i = 0; i <10; i++)  {

    alert("Hola,¡Bienvenidxs a la calculadora de IMC!")

    alert("El índice de masa corporal (IMC) es un indicador simple de la relación entre el peso y la talla que se utiliza frecuentemente para identificar el sobrepeso y la obesidad en los adultos." )
    
    alert("Desde 1975, la obesidad se ha casi triplicado en todo el mundo.")

let nombre = prompt("Introduzca su Nombre y Apellido.")

let peso = prompt("Introduzca su peso en kg.")

if (peso > 635) {
    alert("El peso es incorrecto.")
}
else {alert("Agregado a la calculadora.")}

let estatura = prompt("Introduzca su estatura en mts.")

if (estatura > 2.73) {
    alert("La altura es incorrecta.")
}
else {alert("Agregado a la calculadora.")}

alert("¡Calculando IMC! Por favor espere...")

let altura = Math.pow(estatura, 2)
let imc2 = peso / altura 
let imc = Math.round(imc2)

const datos = [

{
    nombre: nombre,
    imc: imc, 
},

{
    parametro: ", estas en situacion de delgadez extrema.",
    recomendaciones: "comer con mas frecuencia, incorporar mas proteina a tu dieta, entrenar la fuerza y contactarte con un profesional."
},

{
    parametro: ", tenes un peso debajo de lo normal.",
    recomendaciones: "comer con mas frecuencia, incorporar mas proteina a tu dieta y entrenar la fuerza."
},

{ 
     parametro: ", tenes un peso normal." ,
     recomendaciones: " Muy bien, continua asi."
},
    
{
     parametro: ", tenes sobrepeso." , 
     recomendaciones: "controlar tus ingestas, entrenar la fuerza y aumentar tu actividad fisica."
},

{
     parametro: ", tenes obesidad grado 1.",
     recomendaciones: "controlar tus ingestas, entrena la fuerza, aumentar tu actividad fisica, evitar el sedentarismo y buscar ayuda de un profesional."
},

  { 
    parametro:", tenes obesidad grado 2." ,
    recomendaciones: "controlar tus ingestas, entrena la fuerza, aumentar tu actividad fisica, evitar el sedentarismo y buscar ayuda de un profesional."
},

  { parametro: ", tenes obesidad grado 3.",
  recomendaciones: "controlar tus ingestas, entrena la fuerza, aumentar tu actividad fisica, evitar el sedentarismo y buscar ayuda de un profesional."
},



 ] 



if ( datos.some (datos => datos.imc >0 && datos.imc <15) ) {
    alert ("Hola " + datos[0].nombre + " tu IMC es de " + datos[0].imc + datos[1].parametro + " Deberias " + datos[1].recomendaciones ) }

    
    
else if ( datos.some (datos => datos.imc >= 15 && datos.imc <18.5) ) { 
    alert ("Hola " + datos[0].nombre + " tu IMC es de " + datos[0].imc + datos[2].parametro + " Deberias " + datos[2].recomendaciones ) }

    

else if ( datos.some (datos => datos.imc >= 18.5 && datos.imc <25) ) {
    alert ("Hola " + datos[0].nombre + " tu IMC es de " + datos[0].imc + datos[3].parametro + datos[3].recomendaciones ) }

    

else if ( datos.some (datos => datos.imc >= 25 && datos.imc <30) ) {
        alert ("Hola " + datos[0].nombre + " tu IMC es de " + datos[0].imc + datos[4].parametro+ " Deberias " + datos[4].recomendaciones ) }


        
else if ( datos.some (datos => datos.imc >= 30 && datos.imc <35) ) {
        alert ("Hola " + datos[0].nombre + " tu IMC es de " + datos[0].imc + datos[5].parametro + " Deberias " + datos[5].recomendaciones ) }


else if ( datos.some (datos => datos.imc >= 35 && datos.imc <40 )) {
    alert ("Hola " + datos[0].nombre + " tu IMC es de " + datos[0].imc + datos[6].parametro + " Deberias " + datos[6].recomendaciones ) }

    
    else if ( datos.some (datos => datos.imc >= 40) ) {
        alert ("Hola " + datos[0].nombre + " tu IMC es de " + datos[0].imc + datos[7].parametro + " Deberias " + datos[7].recomendaciones ) }
    
        else {
            alert ("Los datos fueron incorrectos." ) }

            
            alert("Tenga en cuenta que el IMC obtenido puede variar dependiendo de la grasa corporal o la masa muscular que usted tenga, lo aconsejable es realizarse una ANTROPOMETRIA para obtener datos mas precisos.")

            alert("Para mas consultas contactenos.")

            let seguir = prompt ("¿desea seguir calculando su IMC?")
            if (seguir == "no" ) {
            break;
            } else {
                continue;
            }


}

 
