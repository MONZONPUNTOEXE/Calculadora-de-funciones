// T(f) = f.f

const boton = document.getElementById("button");
const figura = document.getElementById("figura").value;

boton.addEventListener('click', () =>{
    const figura = document.getElementById("figura").value;
    if (figura <= 0) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese un numero mayor a 0',
        
    })
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
    
    console.log('I was closed by the timer');
Swal.fire('La figura N° ' + figura + ' va a tener ' + petalos +' mosaicos');
}
})


    // const petalos = 4 * figura + 2;
    // return document.getElementById("resultado").innerHTML=petalos;
    }
}); 

