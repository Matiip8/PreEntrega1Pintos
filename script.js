

   



let getData = function() {

    let name = document.getElementById ("name").value;

let peso = document.getElementById ("peso").value;



let estatura = document.getElementById ("estatura").value;

let altura = Math.pow(estatura, 2)


let imc = Math.round(peso / altura)




    const datos = [

        {
            nombre : name ,
            imc: imc,
            parametro: ", estas en situacion de delgadez extrema.",
            recomendaciones: "comer con mas frecuencia, incorporar mas proteina a tu dieta, entrenar la fuerza y contactarte con un profesional."
        },
        
        {
            nombre : name ,
            imc: imc,
            parametro: ", tenes un peso debajo de lo normal.",
            recomendaciones: "comer con mas frecuencia, incorporar mas proteina a tu dieta y entrenar la fuerza."
        },
        
        { 
            nombre : name ,
            imc: imc,
             parametro: ", tenes un peso normal." ,
             recomendaciones: " Muy bien, continua asi."
        },
            
        {
            nombre : name ,
            imc: imc,
             parametro: ", tenes sobrepeso." , 
             recomendaciones: "controlar tus ingestas, entrenar la fuerza y aumentar tu actividad fisica."
        },
        
        {
            nombre : name ,
            imc: imc,
             parametro: ", tenes obesidad grado 1.",
             recomendaciones: "controlar tus ingestas, entrena la fuerza, aumentar tu actividad fisica, evitar el sedentarismo y buscar ayuda de un profesional."
        },
        
          { 
            nombre : name ,
            imc: imc,
            parametro:", tenes obesidad grado 2." ,
            recomendaciones: "controlar tus ingestas, entrena la fuerza, aumentar tu actividad fisica, evitar el sedentarismo y buscar ayuda de un profesional."
        },
        
          {
            nombre : name ,
            imc: imc,
            parametro: ", tenes obesidad grado 3.",
          recomendaciones: "controlar tus ingestas, entrena la fuerza, aumentar tu actividad fisica, evitar el sedentarismo y buscar ayuda de un profesional."
        },
        
        
        
         ] 

     


    
    if ( datos.some (datos => datos.imc >0 && datos.imc <15) ) {
        document.getElementById ('conteiner').innerHTML = "Hola " + datos[0].nombre + " tu IMC es de " + datos[0].imc + datos[0].parametro + " Deberias " + datos[0].recomendaciones  }
    
        
        
    else if ( datos.some (datos => datos.imc >= 15 && datos.imc <18.5) ) { 
        document.getElementById ('conteiner').innerHTML =  "Hola " + datos[1].nombre + " tu IMC es de " + datos[1].imc + datos[1].parametro + " Deberias " + datos[1].recomendaciones  }
    
        
    
    else if ( datos.some (datos => datos.imc >= 18.5 && datos.imc <25) ) {
        document.getElementById ('conteiner').innerHTML = "Hola " + datos[2].nombre + " tu IMC es de " + datos[2].imc + datos[2].parametro + datos[2].recomendaciones  }
    
        
    
    else if ( datos.some (datos => datos.imc >= 25 && datos.imc <30) ) {
        document.getElementById ('conteiner').innerHTML = "Hola " + datos[3].nombre + " tu IMC es de " + datos[3].imc + datos[3].parametro+ " Deberias " + datos[3].recomendaciones  }
    
    
            
    else if ( datos.some (datos => datos.imc >= 30 && datos.imc <35) ) {
        document.getElementById ('conteiner').innerHTML = "Hola " + datos[4].nombre + " tu IMC es de " + datos[4].imc + datos[4].parametro + " Deberias " + datos[4].recomendaciones }
    
    
    else if ( datos.some (datos => datos.imc >= 35 && datos.imc <40 )) {
        document.getElementById ('conteiner').innerHTML = "Hola " + datos[5].nombre + " tu IMC es de " + datos[5].imc + datos[5].parametro + " Deberias " + datos[5].recomendaciones  }
    
        
        else if ( datos.some (datos => datos.imc >= 40) ) {
            document.getElementById ('conteiner').innerHTML = "Hola " + datos[6].nombre + " tu IMC es de " + datos[6].imc + datos[6].parametro + " Deberias " + datos[6].recomendaciones  }
        
            else {
                document.getElementById ('conteiner').innerHTML = "Los datos fueron incorrectos."  }



            
            }

            
            const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})


const toastify = document.querySelector("#color-mode");

toastify.addEventListener("click", () => {
    Toastify({
        text: "El cambio fue exitoso.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})


