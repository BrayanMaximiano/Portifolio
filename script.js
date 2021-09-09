document.querySelector(".hamburguer").addEventListener("click", ()=>{
    document.querySelector(".container").classList.toggle("show-menu")
});

//    Evento no botao "saiba Mais do banner"
document.querySelector("#btn1").addEventListener("click", ()=>{
    open("index.html", "_self")
})