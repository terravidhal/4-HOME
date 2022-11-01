/********** GESTION AFFICHAGE/MASQUAGE DES PAGES **************/

/******** DECLARATION DES VARIABLES ************/
var backgroundImage = document.getElementById("background");
var Menulists = document.querySelectorAll("ul.menu-lists li");
var pages = document.querySelectorAll(".page");

/******** FONCTION QUI AFFICHE LA PAGE CLIQUÉE ET AJOUTE LA CLASSE ".active" ************/

var showPage = () =>{
    for (let index = 0; index < Menulists.length; index++) {
        const eachelement = Menulists[index];
        eachelement.addEventListener("click", (ev) => {
            let element = ev.target;

            if(element.classList.contains("pagelink")){ 
                element = element
            }
            else{
                element = element.parentNode;
            } 
      
            element.classList.add("active"); 
            pages[index].style.zIndex = 3; 
            backgroundImage.style.zIndex = 3; 
            var Position = index; 
            hidePage(Position); 
        });      
    }
     
}

/******** FONCTION QUI CACHE LES PAGES NON CLIQUÉES ************/
var hidePage = (Position) =>{
    for (let index = 0; index < Menulists.length; index++) {
        const element = Menulists[index];
        if(Position !== index){
            element.classList.remove("active");
        }
    }
    for (let index = 0; index < pages.length; index++) {
        const element = pages[index];
        if(Position !== index){
            element.style.zIndex = 2; 
        }
    }
}
