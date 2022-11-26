
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
}});

// --------- Exagonales --------------


function checkForEnterKey(){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("buttonE").click();
    }
}



const botonE = document.getElementById("buttonE");
const figuraE = document.getElementById("figuraE").value;
const modalContentE = document.getElementById("modal-contentE");

;
 


const myModalE = new bootstrap.Modal(document.getElementById('exampleModalE'), {
    keyboard: false,

  })




botonE.addEventListener('click', () =>{
    const figuraE = document.getElementById("figuraE").value;
    if (figuraE <= 0) {
   
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese un numero mayor a 0',
        
        
    })
    document.getElementById("figuraE").value=" ";
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
//   Read more about handling dismissals below 
    if (result.dismiss === Swal.DismissReason.timer) {
    
    const exagonos = 1 * figuraE;
    // modalContent.innerHTML='<p>La La figura N° '+ figura + ' va a tener  '+ petalos +' mosaicos</p>';    
    modalContentE.innerHTML='<p>E = Número de Exagonos <br>F = Figura <br><br><b>Datos:</b><table class="table"><thead><tr><th scope="col">Figura</th><th scope="col">Exagonos</th><th scope="col">Patrón</th></tr></thead><tbody><tr><th scope="row">1</th><td>1</td><td>1 . 1</td></tr><tr><th scope="row">2</th><td>2</td><td>1 . 2</td></tr><tr><th scope="row">3</th><td >3</td><td>1 . 3</td></tr></tbody></table> <br><b>M ( f ) = 1 . f </b><br><br>  Tu número de figura es <b>'+ figuraE +'</b> entonces...<br>     <b>1 . '+ figuraE +' = '+ exagonos +'</b><br><br><b>Tu figura tendra '+exagonos+' exagonos !</b></p>';
    myModalE.show();
    document.getElementById("figuraE").value='';

}
})}
}); 

// ------------ Triangulos -------------


function checkForEnterKey(){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button-cuadrado").click();
    }
}

const botonCuadrado = document.getElementById("button-cuadrado");
const figuraCuadrado = document.getElementById("figura-cuadrado").value;
// declaramos esta const para poder rrellenar con informacion mas tarde
const modalContentCuadrado = document.getElementById("modal-content-cuadrado");

// Llamamos al Id del modal para poder manipularlo
const cuadradoModal = new bootstrap.Modal(document.getElementById('exampleModal-cuadrado'), {
    keyboard: false,

  })

// si el usuario deja el 
// input vacio o en 0 le devuelve error con un if

botonCuadrado.addEventListener('click', () =>{
    const figuraCuadrado = document.getElementById("figura-cuadrado").value;
    if (figuraCuadrado <= 0) {

    
    Swal.fire({
        icon: 'error',
        title: 'Formato invalido',
        text: 'Ingrese un numero mayor a 0',
        
        
    })
    // Despues que se muestra la alerta vaciamos el campo del input
    document.getElementById("figura-cuadrado").value=" ";
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
    const Cuadrados = 2 * figuraCuadrado;

    // modalContent.innerHTML='<p>La La figura N° '+ figura + ' va a tener  '+ petalos +' mosaicos</p>';    
    // rellenamos el modal con la respuesta
    modalContentCuadrado.innerHTML='<p>T = Número de Triángulos <br>F = Figura <br><br><b>Datos:</b><table class="table"><thead><tr><th scope="col">Figura</th><th scope="col">Triángulos</th><th scope="col">Patrón</th></tr></thead><tbody><tr><th scope="row">1</th><td>2</td><td>2 . 1 </td></tr><tr><th scope="row">2</th><td>4</td><td>2 . 2</td></tr><tr><th scope="row">3</th><td >6</td><td>2 . 3</td></tr></tbody></table> <br><b>T ( f ) = 2 . f </b><br><br>  Tu número de figura es <b>'+ figuraCuadrado +'</b> entonces...<br>     <b>2 . '+ figuraCuadrado +' = '+ Cuadrados +'</b><br><br><b>Tu figura tendra '+Cuadrados+' triángulos!</b></p>';
    // mostramos el modal con esta funcion de bootstrap
    cuadradoModal.show();
    // si se cierra el timer se imprime esto en la consola
    console.log('I was closed by the timer');
    //borramos los valores del campo 
    document.getElementById("figura-cuadrado").value='';
}
})
}});

// ----------- Cuadrados 2 -------------------

function checkForEnterKey(){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button-cuadrado2").click();
    }
}

const botonCuadrado2 = document.getElementById("button-cuadrado2");
const figuraCuadrado2 = document.getElementById("figura-cuadrado2").value;
// declaramos esta const para poder rrellenar con informacion mas tarde
const modalContentCuadrado2 = document.getElementById("modal-content-cuadrado2");

// Llamamos al Id del modal para poder manipularlo
const cuadradoModal2 = new bootstrap.Modal(document.getElementById('exampleModal-cuadrado2'), {
    keyboard: false,

  })

// si el usuario deja el 
// input vacio o en 0 le devuelve error con un if

botonCuadrado2.addEventListener('click', () =>{
    const figuraCuadrado2 = document.getElementById("figura-cuadrado2").value;
    if (figuraCuadrado2 <= 0) {

    
    Swal.fire({
        icon: 'error',
        title: 'Formato invalido',
        text: 'Ingrese un numero mayor a 0',
        
        
    })
    // Despues que se muestra la alerta vaciamos el campo del input
    document.getElementById("figura-cuadrado2").value=" ";
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
    const Cuadrado2 = 4 * figuraCuadrado2;

    // rellenamos el modal con la respuesta
    modalContentCuadrado.innerHTML='<p>C = Número de Cuadrados <br>F = Figura <br><br><b>Datos:</b><table class="table"><thead><tr><th scope="col">Figura</th><th scope="col">Cuadrados</th><th scope="col">Patrón</th></tr></thead><tbody><tr><th scope="row">1</th><td>4</td><td>4 . 1</td></tr><tr><th scope="row">2</th><td>8</td><td>4 . 2</td></tr><tr><th scope="row">3</th><td>12</td><td>4 . 3</td></tr></tbody></table> <br><b>C ( f ) = 4 . f </b><br><br>  Tu número de figura es <b>'+ figuraCuadrado2 +'</b> entonces...<br>     <b>2 . '+ figuraCuadrado2 +' = '+ Cuadrado2 +'</b><br><br><b>Tu figura tendra '+Cuadrado2+' cuadrados!</b></p>';
    // mostramos el modal con esta funcion de bootstrap
    cuadradoModal.show();
    // si se cierra el timer se imprime esto en la consola
    console.log('I was closed by the timer');
    //borramos los valores del campo 
    document.getElementById("figura-cuadrado").value='';
}
})
}});


// ----------- Mosaicos ----------

function checkForEnterKey(){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button-m").click();
    }
}



const botonM = document.getElementById("button-m");
const figuraM = document.getElementById("figura-m").value;
const modalContentM = document.getElementById("modal-content-m");


 


const myModalM = new bootstrap.Modal(document.getElementById('exampleModal-m'), {
    keyboard: false,

  })




botonM.addEventListener('click', () =>{
    const figuraM = document.getElementById("figura-m").value;
    if (figuraM <= 0) {

    
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese un numero mayor a 0',
        
        
    })
    document.getElementById("figura-m").value=" ";
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
//   Read more about handling dismissals below 
    if (result.dismiss === Swal.DismissReason.timer) {

    const petalos = 4 * figuraM + 2;
    
    modalContentM.innerHTML='<p>M = Número de Mosaicos <br>F = Figura <br><br><b>Datos:</b><table class="table"><thead><tr><th scope="col">Figura</th><th scope="col">Mosaicos</th><th scope="col">Patrón</th></tr></thead><tbody><tr><th scope="row">1</th><td>6</td><td>4 . 1 + 2</td></tr><tr><th scope="row">2</th><td>10</td><td>4 . 2 + 2</td></tr><tr><th scope="row">3</th><td >14</td><td>4 . 3 + 2</td></tr></tbody></table> <br><b>M ( f ) = 4 . f + 2</b><br><br>  Tu número de figura es <b>'+ figuraM +'</b> entonces...<br>     <b>4 . '+ figuraM +' + 2 = '+ petalos +'</b><br><br><b>Tu figura tendra '+petalos+' mosaicos !</b></p>';
    myModalM.show();
    console.log('I was closed by the timer');

    document.getElementById("figura-m").value='';
}}
)}});