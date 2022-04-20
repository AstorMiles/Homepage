

let craim = document.querySelector("#craim")
let craimHold = document.querySelector("#craimHold")
let spidey = document.querySelector("#spidey")
let spideyHold = document.querySelector("#spideyHold")
let dalia = document.querySelector("#dalia")
let daliaHold = document.querySelector("#daliaHold")
let art = document.querySelector("#theart")
let artist = document.querySelector("#theartist")
let artist2 = document.querySelector("#theartist2")
let deck = document.querySelector("#thedeck")
let nick = document.querySelector("#justbe")
let justbeHold = document.querySelector("#justbeHold")
let kristis = document.querySelector("#kristis")
let kris = document.querySelector("#kris")
let kris2 = document.querySelector("#kris2")
let lovebirds = document.querySelector("#lovebirds")
let lovebirdsHold = document.querySelector("#lovebirdsHold")
let sonya = document.querySelector("#sonya")
let sonyaHold = document.querySelector("#sonyaHold")
let rightSideCards = document.querySelector(".rightSide")
let secBag = document.querySelector("#secBag")
let holder = document.querySelector(".holder")







artOn=false
artistOn=false
cardclicked=false
krisOn = false

function cardsIn(){

    craim.style="top: 10%"
    spidey.style="top: 40%"
    dalia.style="top: 70%"
    nick.style="bottom: 67.5%"
    lovebirds.style="bottom: 37.5%"
    sonya.style="bottom: 7.5%"
}

function normalRight() {


        craim.style="top: 10%"
        spidey.style="top: 40%"
        dalia.style="top: 70%"
        nick.style="top:10%"
        lovebirds.style="top:40%"
        sonya.style="top: 70%"    
}

artist.addEventListener("click",function(){
    if(artistOn===false){
        kris.style="visibility:visible;opacity:1;"      
        artistOn=true
        artOn=false
        cardsOut()
    }else if(artistOn===true){
        kris.style="opacity:0"
        kris2.style=""
        artistOn=false
        krisOn = false

    }

})


art.addEventListener("click", function(){

    if(artOn===false){        
    
    setTimeout(cardsIn,150)
    // setTimeout(rightCenter,250)
    cardsIn()
    // setTimeout(normalRight,2000)




artOn=true
artistOn=false
krisOn=false
kris.style="opacity:0"
kris2.style=""
    }else if(artOn===true){
        cardsOut()
        artOn=false
    }

})


function cardsOut(){
    craim.style=""
    spidey.style=""
    dalia.style=""
    nick.style=""
    lovebirds.style=""
    sonya.style=""

}

artist2.addEventListener("click",function(){
    if(artistOn===false){
        kris.style="visibility:visible;opacity:1; z-index:10"      
        artistOn=true
        artOn=false
        craim.style="opacity:0;z-index:0"
        spidey.style="opacity:0;z-index:0"
        dalia.style="opacity:0;z-index:0"
        nick.style="opacity:0;z-index:0"
        lovebirds.style="opacity:0;z-index:0"
        sonya.style="opacity:0;z-index:0"

    }else if(artistOn===true){
        craim.style=""
        spidey.style=""
        dalia.style=""
        nick.style=""
        lovebirds.style=""
        sonya.style=""
        kris.style="opacity:0; z-index: 3"
        kris2.style="opacity:0; z-index: 3"
        artistOn=false
        krisOn=false

    }

})

function pickCard(){

    craim.classList.add("noPointer")
    spidey.classList.add("noPointer")
    dalia.classList.add("noPointer")
    nick.classList.add("noPointer")
    lovebirds.classList.add("noPointer")
    sonya.classList.add("noPointer") 
    art.classList.add("noPointer") 
    artist.classList.add("noPointer") 
    artist2.classList.add("noPointer") 
    kristis.classList.add("noPointer") 
    
}

function putCard(){

    craim.classList.remove("noPointer")
    spidey.classList.remove("noPointer")
    dalia.classList.remove("noPointer")
    nick.classList.remove("noPointer")
    lovebirds.classList.remove("noPointer")
    sonya.classList.remove("noPointer") 
    art.classList.remove("noPointer") 
    artist.classList.remove("noPointer") 
    artist2.classList.remove("noPointer")
    kristis.classList.remove("noPointer")
}


craim.addEventListener("click",function(){

    if(cardclicked===false){
        this.style="transform:scale(200%);left:40.5%;top:33%;z-index:7;"    
        secBag.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        craimHold.classList.add("noRotate")          
        cardclicked=true


    } else if(cardclicked===true){        
        secBag.style="opacity: 0"        
        this.style="top: 10%;z-index:5"
        cardclicked=false
        craimHold.classList.remove("noRotate")     
        putCard()
        normalRight()
    }
} )

nick.addEventListener("click",function(){

    if(cardclicked===false){

        this.style="transform:scale(200%);right:40.5%; top:33%;z-index:7;" 
        secBag.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        justbeHold.classList.add("noRotate")  
        cardclicked=true

    } else if(cardclicked===true){        
        secBag.style="opacity: 0"        
        this.style="bottom: -30%;"
        cardclicked=false
        justbeHold.classList.remove("noRotate")  
        putCard()
        normalRight()
    }
} )

spidey.addEventListener("click",function(){

    if(cardclicked===false){
        this.style="transform:scale(200%);left:40.5%;top:33%;z-index:7;"
        secBag.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        spideyHold.classList.add("noRotate")  
        cardclicked=true

    } else if(cardclicked===true){        
        secBag.style="opacity: 0"        
        this.style="top: 40%;z-index:5"
        cardclicked=false
        spideyHold.classList.remove("noRotate")  
        putCard()
        normalRight()
    }
} )

dalia.addEventListener("click",function(){

    if(cardclicked===false){
        this.style="transform:scale(200%);left:40.5%;top:33%;z-index:7;"
        secBag.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        daliaHold.classList.add("noRotate")  
        cardclicked=true

    } else if(cardclicked===true){        
        secBag.style="opacity: 0"        
        this.style="top: 70%;z-index:5"
        cardclicked=false
        daliaHold.classList.remove("noRotate")  
        putCard()
        normalRight()
    }
} )



lovebirds.addEventListener("click",function(){

    if(cardclicked===false){
        this.style="transform:scale(200%);right:40.5%;top:33%;z-index:7;"    
        secBag.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        lovebirdsHold.classList.add("noRotate")  
        cardclicked=true

    } else if(cardclicked===true){        
        secBag.style="opacity: 0"        
        this.style="top: 40%;"
        cardclicked=false
        lovebirdsHold.classList.remove("noRotate")  
        putCard()
        normalRight()
    }
} )

sonya.addEventListener("click",function(){

    if(cardclicked===false){
        this.style="transform:scale(200%);right:40.5%;top:33%;z-index:7;"    
        secBag.style="opacity:1"
        pickCard()
        this.classList.remove("noPointer") 
        sonyaHold.classList.add("noRotate")  
        cardclicked=true

    } else if(cardclicked===true){        
        secBag.style="opacity: 0"        
        this.style="top: 70%;"
        cardclicked=false
        sonyaHold.classList.remove("noRotate")  
        putCard()
        normalRight()
    }
} )

kristis.addEventListener("click", function(){

    if(krisOn===false){
        kris.style="opacity:0;z-index:-1;"
        kris2.style="visibility: visible;opacity:1;z-index:2;"
        krisOn=true
    } else if(krisOn===true){

        kris.style="opacity:1;z-index:2;"
        kris2.style="opacity:0;z-index:-1;visibility: hidden;"
        krisOn=false
    }

})

 









