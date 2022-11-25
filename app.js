// T(f) = f.f

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
  /* Read more about handling dismissals below */
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

