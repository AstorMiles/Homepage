let craima = document.querySelector("#craim")
let craimHolda = document.querySelector("#craimHold")
let spideya = document.querySelector("#spidey")
let spideyHolda = document.querySelector("#spideyHold")
let daliaa = document.querySelector("#dalia")
let daliaHolda = document.querySelector("#daliaHold")
let arta = document.querySelector("#theart")
let artista = document.querySelector("#theartist")
let artist2a = document.querySelector("#theartist2")
let decka = document.querySelector("#thedeck")
let nicka = document.querySelector("#justbe")
let justbeHolda = document.querySelector("#justbeHold")
let kristisa = document.querySelector("#kristis")
let krisa = document.querySelector("#kris")
let kris2a = document.querySelector("#kris2")
let lovebirdsa = document.querySelector("#lovebirds")
let lovebirdsHolda = document.querySelector("#lovebirdsHold")
let sonyaa = document.querySelector("#sonya")
let sonyaHolda = document.querySelector("#sonyaHold")
let rightSideCardsa = document.querySelector(".rightSide")
let secBaga = document.querySelector("#secBag")
let holdera = document.querySelector(".holder")


artOna=false
artistOna=false
cardclickeda=false
krisOna = false



artist2a.addEventListener("click",function(){
    if(artistOna===false){
        krisa.style="visibility:visible;opacity:1; z-index:3"      
        artistOna=true
        artOna=false
        craima.style="opacity:0"
        spideya.style="opacity:0"
        daliaa.style="opacity:0"
        nicka.style="opacity:0"
        lovebirdsa.style="opacity:0"
        sonyaa.style="opacity:0"

    }else if(artistOna===true){
        craima.style=""
        spideya.style=""
        daliaa.style=""
        nicka.style=""
        lovebirdsa.style=""
        sonyaa.style=""
        krisa.style="opacity:0"
        artistOna=false
        krisOna=false

    }

})

function pickCard(){

    craima.classList.add("noPointer")
    spideya.classList.add("noPointer")
    daliaa.classList.add("noPointer")
    nicka.classList.add("noPointer")
    lovebirdsa.classList.add("noPointer")
    sonyaa.classList.add("noPointer") 
    arta.classList.add("noPointer") 
    artista.classList.add("noPointer") 
    artist2a.classList.add("noPointer") 
    kristisa.classList.add("noPointer") 
    
}

function putCard(){

    craima.classList.remove("noPointer")
    spideya.classList.remove("noPointer")
    daliaa.classList.remove("noPointer")
    nicka.classList.remove("noPointer")
    lovebirdsa.classList.remove("noPointer")
    sonyaa.classList.remove("noPointer") 
    arta.classList.remove("noPointer") 
    artista.classList.remove("noPointer") 
    artist2a.classList.remove("noPointer")
    kristisa.classList.remove("noPointer")
}


craima.addEventListener("click",function(){

    if(cardclickeda===false){
        this.style="transform:scale(200%);left:40.5%;top:33%;z-index:7;"    
        secBaga.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        craimHolda.classList.add("noRotate")          
        cardclickeda=true


    } else if(cardclickeda===true){        
        secBaga.style="opacity: 0"        
        this.style="top: 10%;z-index:5"
        cardclickeda=false
        craimHolda.classList.remove("noRotate")     
        putCard()
    }
} )

spideya.addEventListener("click",function(){

    if(cardclickeda===false){
        this.style="transform:scale(200%);left:40.5%;top:33%;z-index:7;"
        secBaga.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        spideyHolda.classList.add("noRotate")  
        cardclickeda=true

    } else if(cardclickeda===true){        
        secBaga.style="opacity: 0"        
        this.style="top: 40%;z-index:5"
        cardclickeda=false
        spideyHolda.classList.remove("noRotate")  
        putCard()
    }
} )

daliaa.addEventListener("click",function(){

    if(cardclickeda===false){
        this.style="transform:scale(200%);left:40.5%;top:33%;z-index:7;"
        secBaga.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        daliaHolda.classList.add("noRotate")  
        cardclickeda=true

    } else if(cardclickeda===true){        
        secBaga.style="opacity: 0"        
        this.style="top: 70%;z-index:5"
        cardclickeda=false
        daliaHolda.classList.remove("noRotate")  
        putCard()
    }
} )

nicka.addEventListener("click",function(){

    if(cardclickeda===false){
        this.style="transform:scale(200%);right:40.5%;top:33%;z-index:7;"    
        secBaga.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        justbeHolda.classList.add("noRotate")  
        cardclickeda=true

    } else if(cardclickeda===true){        
        secBaga.style="opacity: 0"        
        this.style="bottom: -30%;"
        cardclickeda=false
        justbeHolda.classList.remove("noRotate")  
        putCard()

    }
} )

lovebirdsa.addEventListener("click",function(){

    if(cardclickeda===false){
        this.style="transform:scale(200%);right:40.5%;top:33%;z-index:7;"    
        secBaga.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        lovebirdsHolda.classList.add("noRotate")  
        cardclickeda=true

    } else if(cardclickeda===true){        
        secBaga.style="opacity: 0"        
        this.style="top: 40%;"
        cardclickeda=false
        lovebirdsHolda.classList.remove("noRotate")  
        putCard()
    }
} )

sonyaa.addEventListener("click",function(){

    if(cardclickeda===false){
        this.style="transform:scale(200%);right:40.5%;top:33%;z-index:7;"    
        secBaga.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        sonyaHolda.classList.add("noRotate")  
        cardclickeda=true

    } else if(cardclickeda===true){        
        secBaga.style="opacity: 0"        
        this.style="top: 70%;"
        cardclickeda=false
        sonyaHolda.classList.remove("noRotate")  
        putCard()
    }
} )

kristisa.addEventListener("click", function(){

    if(krisOna===false){
        krisa.style="opacity:0;z-index:-1;"
        kris2a.style="visibility: visible;opacity:1;z-index:2;"
        krisOna=true
    } else if(krisOna===true){

        krisa.style="opacity:1;z-index:2;"
        kris2a.style="opacity:0;z-index:-1;visibility: hidden;"
        krisOna=false
    }

})







