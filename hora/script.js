function menu(){ 
    var menu = document.getElementById("menuMobile");       
    if(menu.style.display === "none"){ 
        menu.style.display = "Block"; 
          menu.style.display = 'flex';
    } else { 
        menu.style.display = "none"; 
      
    }

}


document.getElementById("icona").addEventListener("click", menu); 



var headerImages = ["immagini/header1.webp", "immagini/header2.webp", "immagini/header3.webp"];
var currentImageIndex = 0;
var cerchi = document.querySelectorAll("#pallini circle");

function aggiornaSlider(indice) {
      var immagineHeader = document.getElementById("immagineHeader");

  
  
    immagineHeader.src = headerImages[indice];

  
    cerchi.forEach(function(cerchio, i) {
        if (i === indice) {
            cerchio.style.fill = "#476E78"; 
        } else {
            cerchio.style.fill = "#D9D9D9"; 
        }
    });
    
   
    currentImageIndex = indice;
}


function header() {
    let prossimoIndice = (currentImageIndex + 1) % headerImages.length;
    aggiornaSlider(prossimoIndice);
}


cerchi.forEach(function(pallino, indice) {
    pallino.style.cursor = "pointer"; 
    pallino.addEventListener("click", function() {
        aggiornaSlider(indice);
    });
});

setInterval(header, 4000); 
document.getElementById("immagineHeader").addEventListener("click", header);



var immaginiGalleria = [
    "immagini/orologio1.png",
    "immagini/orologio2.png",
    "immagini/orologio3.png"
];
var indice = 0;


var avantiBtn = document.getElementById("avanti");
var indietroBtn = document.getElementById("indietro");
var immagineGalleriaElem = document.getElementById("galleriaOrologi");
immagineGalleriaElem.style.width= "300px";
indietroBtn.style.border = "none";
avantiBtn.style.border = "none";


if (avantiBtn && indietroBtn && immagineGalleriaElem) {
    
    function aggiornaGalleria() {
        immagineGalleriaElem.src = immaginiGalleria[indice];
    }

    avantiBtn.addEventListener("click", function() {
        indice = (indice + 1) % immaginiGalleria.length;
        aggiornaGalleria();
    });

    indietroBtn.addEventListener("click", function() {
        indice = (indice - 1 + immaginiGalleria.length) % immaginiGalleria.length;
        aggiornaGalleria();
    });
    
} else {
    console.error("Errore: Assicurati che gli ID 'avanti', 'indietro' e 'galleriaOrologi' esistano nell'HTML.");
}
function aggiornaGalleria() {
    
   
var immagine = document.getElementById("galleriaOrologi");
 immagine.src = immaginiGalleria[indice];
}


function avanti() {
    
    indice = (indice + 1) % immaginiGalleria.length;
    aggiornaGalleria();
}


function indietro() {
    indice = (indice - 1 + immaginiGalleria.length) % immaginiGalleria.length;
    aggiornaGalleria();
}

avantiBtn.addEventListener("click", avanti);
indietroBtn.addEventListener("click", indietro);




const formNewsletter = document.querySelector('#newsletter-form');
const inputEmail = document.querySelector('#user-email');
const feedbackMessaggio = document.querySelector('#feedback-messagio');
const defaultMessaggio = feedbackMessaggio.textContent;


formNewsletter.addEventListener('submit', function(event) {
    
   
    event.preventDefault();

    
    const emailInserita = inputEmail.value.trim();

  
    if (emailInserita === "" || !emailInserita.includes("@") || !/^[^\s@]+@[^\s@]+\.(it|com|org|net)$/i.test(emailInserita)) {
        feedbackMessaggio.textContent = "*Indirizzo email non valido. Riprova.";
       
        feedbackMessaggio.style.fontWeight= "#bold";
         feedbackMessaggio.style.textDecoration="underline"
        setTimeout(() => {
        feedbackMessaggio.textContent = defaultMessaggio;
         feedbackMessaggio.removeAttribute("style");
    }, 5000);
     
        return; 
    }

    
    console.log("Dati pronti per l'invio:", emailInserita);
  
    feedbackMessaggio.textContent = "Benvenuto! Grazie per esserti iscritto. Riceverai promozioni esclusive e contenuti riservati solo ai membri della nostra community.";
    feedbackMessaggio.style.textDecoration="underline"
    setTimeout(() => {
        feedbackMessaggio.textContent = defaultMessaggio;
        feedbackMessaggio.removeAttribute("style");
    }, 5000);

   

});