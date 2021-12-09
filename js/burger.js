let panel = document.getElementById("panelNav");
let burguer = document.getElementById("hamburguesa");

const header = document.getElementById("header");

const l1 = document.getElementById("work");
const l2 = document.getElementById("testimonios");
const l3 = document.getElementById("aboutme");
const l4 = document.getElementById("contacto");

let buno = document.getElementById("barraUno");
let bdos = document.getElementById("barraDos");
let btres = document.getElementById("barraTres");

window.addEventListener("load", visualizarBurguer);
window.addEventListener("resize", visualizarBurguer);
burguer.addEventListener("click", toggleMenu);

console.log(l1);
function toggleMenu() {
    let menu = document.getElementById("menu");
    console.log(menu);
    if (!menu) {
        generar();
    }else{
        cerrarDiv();
    }
}

function generar() {
    console.log(generar);
    const div = document.createElement("div");
    div.setAttribute("id", "page");

    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.setAttribute("id", "barraUno");
    li1.className = "barra";

    const li2 = document.createElement("li");
    li2.setAttribute("id", "barraDos");
    li2.className = "barra";

    const li3 = document.createElement("li");
    li3.setAttribute("id", "barraTres");
    li3.className = "barra";


    const div2 = document.createElement("div");
    div2.setAttribute("id", "menu");

    const div3 = document.createElement("div");
    div3.setAttribute("id", "containerMenu");

    const a = document.createElement("a");
    a.className = "menuItem";
    a.setAttribute("href", "#work");
    const newContent =document.createTextNode("PROYECTOS");
    a.appendChild(newContent);


    const a1 = document.createElement("a");
    a1.className = "menuItem";
    a1.setAttribute("href", "#testimonios");
    const newContent1 =document.createTextNode("TESTIMONIOS");
    a1.appendChild(newContent1);


    const a2 = document.createElement("a");
    a2.className = "menuItem";
    a2.setAttribute("href", "#aboutme");
    const newContent2 =document.createTextNode("SOBRE MÍ");
    a2.appendChild(newContent2);

    const a3 = document.createElement("a");
    a3.setAttribute("href", "#contacto");
    a3.className = "menuItem";
    a3.textContent = "CONTACTO";


    div3.appendChild(a);
    div3.appendChild(a1);
    div3.appendChild(a2);
    div3.appendChild(a3);

    div2.appendChild(div3);
    header.appendChild(div2);
    buno.style.transform = "translateY(140%) rotate(45deg)";
    btres.style.transform = "translateY(-146%) rotate(135deg)";
    bdos.style.opacity = "0";


}

function cerrarDiv() {
    const div = document.querySelector("#menu");
    console.log(div);
    div.remove();
    buno.style.transform = "";
    btres.style.transform = "";
    bdos.style.opacity = "100";
    console.log(div);
}



function visualizarBurguer() { //Hecho con media query

}

//
//function abrir() {
//    buno.style.transform = "";
//    btres.style.transform = "";
//    bdos.style.opacity = "100";
//}
//
//function cerrar() {
//
//    buno.style.transform = "translateY(136%) rotate(45deg)";
//    btres.style.transform = "translateY(-136%) rotate(135deg)";
//    bdos.style.opacity = "0";
//}
