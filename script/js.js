function playSong() {
    var cancion = document.getElementById('cancion');
    cancion.play();
}

const fechaBoda = new Date("July 17, 2025 17:00:00").getTime();

const x = setInterval(function() {
    
    const ahora = new Date().getTime();
    
    const distancia = fechaBoda - ahora;
    
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
    document.getElementById("dias").innerHTML = `${dias} <span>Días</span>`;
    document.getElementById("horas").innerHTML = `${horas} <span>Horas</span>`;
    document.getElementById("minutos").innerHTML = `${minutos} <span>Minutos</span>`;
    document.getElementById("segundos").innerHTML = `${segundos} <span>Segundos</span>`;
    
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("contador").innerHTML = "¡Es el gran día!";
    }
}, 1000);

