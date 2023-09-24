document.getElementById('PA').style.display ="block";
document.getElementById('PAB').style.display ="block";
document.getElementById('PAC').style.display ="block";
document.getElementById("PA").classList.add("active");
document.getElementById("PAB").classList.remove("active");
document.getElementById("PAC").classList.remove("active");
document.getElementById('bd').style.display="block";
document.getElementById('tp').style.display="block";

//Botones de posición

function mostrarA(){

    document.getElementById('articulo-bd').style.display="none";
    document.getElementById('articulo-tp').style.display="none";
    document.getElementById('articulo-lc').style.display="none";
    document.getElementById('articulo-dm').style.display="none";
    document.getElementById('articulo-mp').style.display="none";
    document.getElementById('articulo-poo').style.display="none";

    document.getElementById('PA').style.display ="block";
    document.getElementById('PAB').style.display ="block";
    document.getElementById('PAC').style.display ="block";
    document.getElementById("PAB").classList.remove("active");
    document.getElementById("PAC").classList.remove("active");
    document.getElementById("PA").classList.add("active");
    document.getElementById('bd').style.display ="block";
    document.getElementById('tp').style.display ="block";
    document.getElementById('lg').style.display ="none";
    document.getElementById('am').style.display ="none";
    document.getElementById('mp').style.display ="none";
    document.getElementById('poo').style.display ="none";
    document.getElementById('next').style.display ="block";
    document.getElementById('after').style.display ="block";
}

function mostrarB(){
    document.getElementById('articulo-bd').style.display="none";
    document.getElementById('articulo-tp').style.display="none";
    document.getElementById('articulo-lc').style.display="none";
    document.getElementById('articulo-dm').style.display="none";
    document.getElementById('articulo-mp').style.display="none";
    document.getElementById('articulo-poo').style.display="none";

    document.getElementById('PAB').style.display ="block";
    document.getElementById('PA').style.display ="block";
    document.getElementById('PAC').style.display ="block";
    document.getElementById("PA").classList.remove("active");
    document.getElementById("PAC").classList.remove("active");
    document.getElementById("PAB").classList.add("active");
    document.getElementById('bd').style.display ="none";
    document.getElementById('tp').style.display ="none";
    document.getElementById('lg').style.display ="block";
    document.getElementById('am').style.display ="block";
    document.getElementById('mp').style.display ="none";
    document.getElementById('poo').style.display ="none";
    document.getElementById('next').style.display ="block";
    document.getElementById('after').style.display ="block";  
}

function mostrarC(){
    document.getElementById('articulo-bd').style.display="none";
    document.getElementById('articulo-tp').style.display="none";
    document.getElementById('articulo-lc').style.display="none";
    document.getElementById('articulo-dm').style.display="none";
    document.getElementById('articulo-mp').style.display="none";
    document.getElementById('articulo-poo').style.display="none";

    document.getElementById('PA').style.display ="block";
    document.getElementById('PAB').style.display ="block";
    document.getElementById('PAC').style.display ="block";
    document.getElementById("PAB").classList.remove("active");
    document.getElementById("PA").classList.remove("active");
    document.getElementById("PAC").classList.add("active");
    document.getElementById('bd').style.display ="none";
    document.getElementById('tp').style.display ="none";
    document.getElementById('lg').style.display ="none";
    document.getElementById('am').style.display ="none";
    document.getElementById('mp').style.display ="block";
    document.getElementById('poo').style.display ="block";
    document.getElementById('after').style.display ="block";
     
}

//Botones de desplazamiento



function goA() {
    document.getElementById('articulo-bd').style.display="none";
    document.getElementById('articulo-tp').style.display="none";
    document.getElementById('articulo-lc').style.display="none";
    document.getElementById('articulo-dm').style.display="none";
    document.getElementById('articulo-mp').style.display="none";
    document.getElementById('articulo-poo').style.display="none";
    
    let mostrarA = document.getElementById('bd').style.display;
    let mostrarB = document.getElementById('tp').style.display;
    let mostrarC = document.getElementById('lg').style.display;
    let mostrarD = document.getElementById('am').style.display;
    let mostrarE = document.getElementById('mp').style.display;
    let mostrarF = document.getElementById('poo').style.display;
    
    if (mostrarE == "block" && mostrarF== "block") {
    document.getElementById('PAB').style.display ="block";
    document.getElementById('PA').style.display ="block";
    document.getElementById('PAC').style.display ="block";
    document.getElementById("PA").classList.remove("active");
    document.getElementById("PAC").classList.remove("active");
    document.getElementById("PAB").classList.add("active");
    document.getElementById('bd').style.display ="none";
    document.getElementById('tp').style.display ="none";
    document.getElementById('lg').style.display ="block";
    document.getElementById('am').style.display ="block";
    document.getElementById('mp').style.display ="none";
    document.getElementById('poo').style.display ="none";
    document.getElementById('next').style.display ="block";
    document.getElementById('after').style.display ="block";  
    } 
    if(mostrarC == "block" && mostrarD == "block"){
        document.getElementById('PA').style.display ="block";
        document.getElementById('PAB').style.display ="block";
        document.getElementById('PAC').style.display ="block";
        document.getElementById("PAB").classList.remove("active");
        document.getElementById("PAC").classList.remove("active");
        document.getElementById("PA").classList.add("active");
        document.getElementById('bd').style.display ="block";
        document.getElementById('tp').style.display ="block";
        document.getElementById('lg').style.display ="none";
        document.getElementById('am').style.display ="none";
        document.getElementById('mp').style.display ="none";
        document.getElementById('poo').style.display ="none";
        document.getElementById('after').style.display ="block";
        document.getElementById('next').style.display ="block";
    } 

    if (mostrarA == "none" && mostrarB == "none" && mostrarC == "none" && mostrarD == "none" && mostrarE == "none" && mostrarF == "none") {
        document.getElementById('PA').style.display ="block";
        document.getElementById('PAB').style.display ="block";
        document.getElementById('PAC').style.display ="block";
        document.getElementById("PAB").classList.remove("active");
        document.getElementById("PAC").classList.remove("active");
        document.getElementById("PA").classList.add("active");
        document.getElementById('bd').style.display ="block";
        document.getElementById('tp').style.display ="block";
       }
}

function goN() {

    document.getElementById('articulo-bd').style.display="none";
    document.getElementById('articulo-tp').style.display="none";
    document.getElementById('articulo-lc').style.display="none";
    document.getElementById('articulo-dm').style.display="none";
    document.getElementById('articulo-mp').style.display="none";
    document.getElementById('articulo-poo').style.display="none";
    
    let mostrarA = document.getElementById('bd').style.display;
    let mostrarB = document.getElementById('tp').style.display;
    let mostrarC = document.getElementById('lg').style.display;
    let mostrarD = document.getElementById('am').style.display;
    let mostrarE = document.getElementById('mp').style.display;
    let mostrarF = document.getElementById('poo').style.display;
    
    if(mostrarA == "block" && mostrarB == "block"){
        document.getElementById('PAB').style.display ="block";
        document.getElementById('PA').style.display ="block";
        document.getElementById('PAC').style.display ="block";
        document.getElementById("PA").classList.remove("active");
        document.getElementById("PAC").classList.remove("active");
        document.getElementById("PAB").classList.add("active");
        document.getElementById('bd').style.display ="none";
        document.getElementById('tp').style.display ="none";
        document.getElementById('lg').style.display ="block";
        document.getElementById('am').style.display ="block";
        document.getElementById('mp').style.display ="none";
        document.getElementById('poo').style.display ="none";
        document.getElementById('next').style.display ="block";
        document.getElementById('after').style.display ="block";}

        if(mostrarC == "block" && mostrarD == "block"){
        document.getElementById('PA').style.display ="block";
        document.getElementById('PAB').style.display ="block";
        document.getElementById('PAC').style.display ="block"; 
        document.getElementById("PAB").classList.remove("active");
        document.getElementById("PA").classList.remove("active");
        document.getElementById("PAC").classList.add("active");
        document.getElementById('bd').style.display ="none";
        document.getElementById('tp').style.display ="none";
        document.getElementById('lg').style.display ="none";
        document.getElementById('am').style.display ="none";
        document.getElementById('mp').style.display ="block";
        document.getElementById('poo').style.display ="block";
        document.getElementById('next').style.display ="block";
        document.getElementById('after').style.display ="block"; 
    } 
   if (mostrarA == "none" && mostrarB == "none" && mostrarC == "none" && mostrarD == "none" && mostrarE == "none" && mostrarF == "none") {
    document.getElementById('PA').style.display ="block";
    document.getElementById('PAB').style.display ="block";
    document.getElementById('PAC').style.display ="block";
    document.getElementById("PAB").classList.remove("active");
    document.getElementById("PAC").classList.remove("active");
    document.getElementById("PA").classList.add("active");
    document.getElementById('bd').style.display ="block";
    document.getElementById('tp').style.display ="block";
   }
}


//Mostrar articulo seleccionado

var a1 = document.getElementById("btn-bd");
var b1 = document.getElementById("btn-tp");
var c1 = document.getElementById("btn-lc");
var d1 = document.getElementById("btn-dm");
var e1 = document.getElementById("btn-mp");
var f1 = document.getElementById("btn-poo");

//Captura del evento btn

a1.addEventListener("click", mostrarai);
b1.addEventListener("click", mostrarbi);
c1.addEventListener("click", mostrarci);
d1.addEventListener("click", mostrardi);
e1.addEventListener("click", mostrarei);
f1.addEventListener("click", mostrarfi);
 


function mostrarai (){
    document.getElementById('articulo-bd').style.display="block";
    document.getElementById('bd').style.display ="none";
    document.getElementById('tp').style.display ="none";
    document.getElementById('lg').style.display ="none";
    document.getElementById('am').style.display ="none";
    document.getElementById('mp').style.display ="none";
    document.getElementById('poo').style.display ="none";
        
    }
    
    
function mostrarbi() {
    document.getElementById('articulo-tp').style.display="block";
    document.getElementById('bd').style.display ="none";
    document.getElementById('tp').style.display ="none";
    document.getElementById('lg').style.display ="none";
    document.getElementById('am').style.display ="none";
    document.getElementById('mp').style.display ="none";
    document.getElementById('poo').style.display ="none";
    document.getElementById('articulo-bd').style.display="none";
    } 

function mostrarci() {
    document.getElementById('articulo-lc').style.display="block";
    document.getElementById('bd').style.display ="none";
    document.getElementById('tp').style.display ="none";
    document.getElementById('lg').style.display ="none";
    document.getElementById('am').style.display ="none";
    document.getElementById('mp').style.display ="none";
    document.getElementById('poo').style.display ="none";
    document.getElementById('articulo-bd').style.display="none";
    document.getElementById('articulo-tp').style.display="none";
    } 


function mostrardi() {
    document.getElementById('articulo-dm').style.display="block";
    document.getElementById('bd').style.display ="none";
    document.getElementById('tp').style.display ="none";
    document.getElementById('lg').style.display ="none";
    document.getElementById('am').style.display ="none";
    document.getElementById('mp').style.display ="none";
    document.getElementById('poo').style.display ="none";
    document.getElementById('articulo-bd').style.display="none";
    document.getElementById('articulo-tp').style.display="none";
    document.getElementById('articulo-lc').style.display="none";
    } 


function mostrarei() {
    document.getElementById('articulo-mp').style.display="block";
    document.getElementById('bd').style.display ="none";
    document.getElementById('tp').style.display ="none";
    document.getElementById('lg').style.display ="none";
    document.getElementById('am').style.display ="none";
    document.getElementById('mp').style.display ="none";
    document.getElementById('poo').style.display ="none";
    document.getElementById('articulo-bd').style.display="none";
    document.getElementById('articulo-tp').style.display="none";
    document.getElementById('articulo-lc').style.display="none";
    document.getElementById('articulo-dm').style.display="none";
    } 

function mostrarfi() {
    document.getElementById('articulo-poo').style.display="block";
    document.getElementById('bd').style.display ="none";
    document.getElementById('tp').style.display ="none";
    document.getElementById('lg').style.display ="none";
    document.getElementById('am').style.display ="none";
    document.getElementById('mp').style.display ="none";
    document.getElementById('poo').style.display ="none";
    document.getElementById('articulo-bd').style.display="none";
    document.getElementById('articulo-tp').style.display="none";
    document.getElementById('articulo-lc').style.display="none";
    document.getElementById('articulo-dm').style.display="none";
    document.getElementById('articulo-mp').style.display="none";
    
    } 

    
    function mostrarArt(){
        document.getElementById("PAB").classList.remove("active");
        document.getElementById("PAC").classList.remove("active");
        document.getElementById("PA").classList.add("active");
        document.getElementById('PA').style.display ="block";
        document.getElementById('PAB').style.display ="block";
        document.getElementById('PAC').style.display ="block";
        document.getElementById('articulo-poo').style.display="none";
        document.getElementById('bd').style.display ="block";
        document.getElementById('tp').style.display ="block";
        document.getElementById('lg').style.display ="none";
        document.getElementById('am').style.display ="none";
        document.getElementById('mp').style.display ="none";
        document.getElementById('poo').style.display ="none";
        document.getElementById('articulo-bd').style.display="none";
        document.getElementById('articulo-tp').style.display="none";
        document.getElementById('articulo-lc').style.display="none";
        document.getElementById('articulo-dm').style.display="none";
        document.getElementById('articulo-mp').style.display="none";  
    }