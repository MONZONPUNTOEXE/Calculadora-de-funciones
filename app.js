
// ---------- funcion puntos ----------

function checkForEnterKey(){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button-puntos").click();
    }
}

const boton = document.getElementById("button-puntos");
const figuraP = document.getElementById("figuraPuntos").value;
// declaramos esta const para poder rrellenar con informacion mas tarde
const modalContent = document.getElementById("modal-content-puntos");

// Llamamos al Id del modal para poder manipularlo
const puntosModal = new bootstrap.Modal(document.getElementById('exampleModal-puntos'), {
    keyboard: false,

  })

// si el usuario deja el 
// input vacio o en 0 le devuelve error con un if

boton.addEventListener('click', () =>{
    const figuraP = document.getElementById("figuraPuntos").value;
    if (figuraP <= 0) {

    
    Swal.fire({
        icon: 'error',
        title: 'Formato invalido',
        text: 'Ingrese un numero mayor a 0',
        
        
    })
    // Despues que se muestra la alerta vaciamos el campo del input
    document.getElementById("figuraPuntos").value=" ";
    }
    
    else{ // si no se ejecuta este codigo de SweetAlert2
        let timerInterval
Swal.fire({
    title: 'Cargando su figura',
    html: 'Calculando <b></b> Aguarde un momento...',
    timer: 2500,
    // Argumentos agregados
    allowOutsideClick:false, // No cierra haciendo click por fuera del modal
    allowEscapeKey: false,  //No cierra apretando ESC
    timerProgressBar: true,
    didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
    b.textContent = Swal.getTimerLeft()
    }, 100)
},
    // aparece un alert de que esta cargando el codigo
    willClose: () => {
    clearInterval(timerInterval)
}
}).then((result) => {
//   Read more about handling dismissals below 
    if (result.dismiss === Swal.DismissReason.timer) {

    // ponemos la formula y el numero de figura del usuario
    const puntos = 2 * figuraP + 1;

    // modalContent.innerHTML='<p>La La figura N° '+ figura + ' va a tener  '+ petalos +' mosaicos</p>';    
    // rellenamos el modal con la respuesta
    modalContent.innerHTML='<p>P = Número de Puntos <br>F = Figura <br><br><b>Datos:</b><table class="table"><thead><tr><th scope="col">Figura</th><th scope="col">Puntos</th><th scope="col">Patrón</th></tr></thead><tbody><tr><th scope="row">1</th><td>3</td><td>2 . 1 + 1</td></tr><tr><th scope="row">2</th><td>5</td><td>2 . 2 + 1</td></tr><tr><th scope="row">3</th><td >7</td><td>2 . 3 + 1</td></tr></tbody></table> <br><b>P ( f ) = 2 . f + 1</b><br><br>  Tu número de figura es <b>'+ figuraP +'</b> entonces...<br>     <b>2 . '+ figuraP +' + 1 = '+ puntos +'</b><br><br><b>Tu figura tendra '+puntos+' puntos !</b></p>';
    // mostramos el modal con esta funcion de bootstrap
    puntosModal.show();
    // si se cierra el timer se imprime esto en la consola
    console.log('I was closed by the timer');
    //borramos los valores del campo 
    document.getElementById("figuraPuntos").value='';

// Swal.fire('La figura N° ' + figura + ' va a tener ' + petalos +' mosaicos');
}
})


    // const petalos = 4 * figura + 2;
    // return document.getElementById("resultado").innerHTML=petalos;
    }
}); 






// T(f) = f.f
/*
function checkForEnterKey(){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
}



const boton = document.getElementById("button");
const figura = document.getElementById("figura").value;
const modalContent = document.getElementById("modal-content");


 


const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false,

  })




boton.addEventListener('click', () =>{
    const figura = document.getElementById("figura").value;
    if (figura <= 0) {

    
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese un numero mayor a 0',
        
        
    })
    document.getElementById("figura").value=" ";
    }
    else{
        let timerInterval
Swal.fire({
    title: 'Cargando su figura',
    html: 'Calculando <b></b> Aguarde un momento...',
    timer: 2500,
    // Argumentos agregados
    allowOutsideClick:false, // No cierra haciendo click por fuera del modal
    allowEscapeKey: false,  //No cierra apretando ESC
    timerProgressBar: true,
    didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
    b.textContent = Swal.getTimerLeft()
    }, 100)
},
    willClose: () => {
    clearInterval(timerInterval)
}
}).then((result) => {
  Read more about handling dismissals below 
    if (result.dismiss === Swal.DismissReason.timer) {
    
    const petalos = 4 * figura + 2;
    document.getElementById("resultado");
    // modalContent.innerHTML='<p>La La figura N° '+ figura + ' va a tener  '+ petalos +' mosaicos</p>';    
    modalContent.innerHTML='<p>M = Número de Mosaicos <br>F = Figura <br><br><b>Datos:</b><table class="table"><thead><tr><th scope="col">Figura</th><th scope="col">Mosaicos</th><th scope="col">Patrón</th></tr></thead><tbody><tr><th scope="row">1</th><td>6</td><td>4 . 1 + 2</td></tr><tr><th scope="row">2</th><td>10</td><td>4 . 2 + 2</td></tr><tr><th scope="row">3</th><td >14</td><td>4 . 3 + 2</td></tr></tbody></table> <br><b>M ( f ) = 4 . f + 2</b><br><br>  Tu número de figura es <b>'+ figura +'</b> entonces...<br>     <b>4 . '+ figura +' + 2 = '+ petalos +'</b><br><br><b>Tu figura tendra '+petalos+' mosaicos !</b></p>';
    myModal.show();
    console.log('I was closed by the timer');

    document.getElementById("figura").value='';

// Swal.fire('La figura N° ' + figura + ' va a tener ' + petalos +' mosaicos');
}
})


    // const petalos = 4 * figura + 2;
    // return document.getElementById("resultado").innerHTML=petalos;
    }
}); 

*/