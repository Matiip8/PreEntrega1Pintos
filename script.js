for (let i = 0; i <50; i++)  {

    alert("Si desea continuar en esta pagina presione ACEPTAR, si desea salir cierre la pestaña de la pagina.")

    alert("Hola, usted decidio continuar en esta pagina. ¡Bienvenidxs a la calculadora de IMC!")

    alert("El índice de masa corporal (IMC) es un indicador simple de la relación entre el peso y la talla que se utiliza frecuentemente para identificar el sobrepeso y la obesidad en los adultos." )
    
    alert("Desde 1975, la obesidad se ha casi triplicado en todo el mundo.")

let nombre = prompt("Introduzca su Nombre y Apellido.")

let peso = prompt("Introduzca su peso en kg.")

if (peso > 635) {
    alert("La altura es incorrecta.")
}
else {alert("Agregado a la calculadora.")}

let estatura = prompt("Introduzca su estatura en mts.")

if (estatura > 2.73) {
    alert("La altura es incorrecta.")
}
else {alert("Agregado a la calculadora.")}

alert("¡Calculando IMC! Por favor espere...")

alert("...")

let altura = Math.pow(estatura, 2)
let imc2 = peso / altura 
let imc = Math.round(imc2)

if ( imc > 0 && imc < 15  ) {
    alert ("Hola " + nombre + " tu indice de masa corporal es " + imc + ", estas en situacion de  delgadez extrema." ) }

else if ( imc >= 15 && imc < 18.5  ) {
    alert ("Hola " + nombre + " tu indice de masa corporal es " + imc + ", tenes un peso debajo de lo normal." ) }

else if ( imc >= 18.5 && imc < 25)  {
    alert ("Hola " + nombre + " tu indice de masa corporal es " + imc + ", tenes un peso normal." ) }

else if (imc >= 25 && imc < 30 )  {
        alert ("Hola " + nombre + " tu indice de masa corporal es " + imc + ", tenes sobrepeso." ) }

else if (imc >= 30 &&  imc < 35)  {
        alert ("Hola " + nombre + " tu indice de masa corporal es " + imc + ", tenes obesidad grado 1." ) }

else if ( imc >= 35 && imc <40)  {
    alert ("Hola " + nombre + " tu indice de masa corporal es " + imc + ", tenes obesidad grado 2." ) }

    else if (imc >= 40) {
        alert ("Hola " + nombre + " tu indice de masa corporal es " + imc + ", tenes obesidad grado 3." ) }
    
        else {
            alert ("Los datos fueron incorrectos." ) }

            
            alert("Tenga en cuenta que el IMC obtenido puede variar dependiendo de la grasa corporal o la masa muscular que usted tenga, lo aconsejable es realizarse una ANTROPOMETRIA para obtener datos mas fiables.")

            alert("Para mas consultas contactenos en IMC@hotmail.com.ar .")


}

 
