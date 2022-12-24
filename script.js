

   



let getData = function() {

    let name = document.getElementById ("name").value;

let peso = document.getElementById ("peso").value;



let estatura = document.getElementById ("estatura").value;

let altura = Math.pow(estatura, 2)


let imc = Math.round(peso / altura)




    const datos = [

        { 
    
            imcMin: 0 ,
            imcMax: 15,
            nombre : name ,
            imc: imc,
            parametro: ", estas en situacion de delgadez extrema.",
            recomendaciones: "Deberias comer con mas frecuencia, incorporar mas proteina a tu dieta, entrenar la fuerza y contactarte con un profesional."
        },
        
        {
         
            imcMin: 15 ,
            imcMax: 18.5,
            nombre : name ,
            imc: imc,
            parametro: ", tenes un peso debajo de lo normal.",
            recomendaciones: "Deberias comer con mas frecuencia, incorporar mas proteina a tu dieta y entrenar la fuerza."
        },
        
        { 
         
            imcMin: 18.5 ,
            imcMax: 25,
            nombre : name ,
            imc: imc,
             parametro: ", tenes un peso normal." ,
             recomendaciones: " Muy bien, continua asi."
        },
            
        {
        
            imcMin: 25 ,
            imcMax: 30,
            nombre : name ,
            imc: imc,
             parametro: ", tenes sobrepeso." , 
             recomendaciones: "Deberias controlar tus ingestas, entrenar la fuerza y aumentar tu actividad fisica."
        },
        
        {
        
            imcMin: 30 ,
            imcMax: 35,
            nombre : name ,
            imc: imc,
             parametro: ", tenes obesidad grado 1.",
             recomendaciones: "Deberias controlar tus ingestas, entrena la fuerza, aumentar tu actividad fisica, evitar el sedentarismo y buscar ayuda de un profesional."
        },
        
          { 
    
            imcMin: 35 ,
            imcMax: 40,
            nombre : name ,
            imc: imc,
            parametro:", tenes obesidad grado 2." ,
            recomendaciones: "Deberias controlar tus ingestas, entrena la fuerza, aumentar tu actividad fisica, evitar el sedentarismo y buscar ayuda de un profesional."
        },
        
          {
    
            imcMin: 40 ,
            imcMax: 210,
            nombre : name ,
            imc: imc,
            parametro: ", tenes obesidad grado 3.",
          recomendaciones: "Deberias controlar tus ingestas, entrena la fuerza, aumentar tu actividad fisica, evitar el sedentarismo y buscar ayuda de un profesional."
        },
        
        
        
         ] 

     
        const indice = datos.find(datos => datos.imc >= datos.imcMin && datos.imc < datos.imcMax);
        document.getElementById ('conteiner').innerHTML = "Hola " + indice.nombre + " tu IMC es de " + indice.imc + indice.parametro + " " + indice.recomendaciones  
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


    