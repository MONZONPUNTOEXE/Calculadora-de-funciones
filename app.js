// T(f) = f.f

const boton = document.getElementById("button");

boton.addEventListener('click', () =>{
    const figura = document.getElementById("figura").value;
    const petalos = 4 * figura + 2;
    return document.getElementById("resultado").innerHTML=petalos;
});     
