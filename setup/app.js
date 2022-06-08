let btnIncrementar = document.querySelector(".increase");
let btnDecrementar = document.querySelector(".decrease");
let btnLimpiar = document.querySelector(".reset");
let valor = document.getElementById("value");

let c = 0;

btnIncrementar.addEventListener("click", ()=>{
    c++;
    if(c < 0){ 
        valor.style.color = "red";
    }else if(c > 0 ){
        valor.style.color = "green";
    }else{
        c = 0;
        valor.style.color = "blue";
    }
    console.log(valor);
    valor.textContent = c;
});

btnDecrementar.addEventListener("click", ()=>{
    c--;
    if(c < 0){ 
        valor.style.color = "red";
    }else if(c > 0 ){
        valor.style.color = "green";
    }else{
        c = 0;
        valor.style.color = "blue";
    }
    console.log(valor);
    valor.textContent = c;
});


btnLimpiar.addEventListener("click",()=>{
    c=0;
    valor.style.color = "blue";
    valor.textContent = c;
})
