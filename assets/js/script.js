// Patrón Módulo mediante IIFE
let videos = (() => {
    // Función PRIVADA recibe la url + el id
    function recibe(url, id){
        var reproductor = document.getElementById(id); // getElementById para obtener una referencia en el HTML
        reproductor.setAttribute('src', url); // setAttribute cambia o añade atributos en el HTML
    }

    // Función pública muestra lo que hay en la función privada
    return function(url, id){
        recibe(url, id);
    }
})();

class Multimedia {
    constructor(url){
        this._url = url;
    }

    get url(){
        return this._url;
    }

    setInicio(){
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id){
        super(url);
        this._id = id;
    }

    get id(){
        return this._id;
    }

    playMultimedia(){
        return videos(this._url, this._id);
    }

    setInicio(puntoInicio){
        this._url = `${this._url}&start=${puntoInicio}`;
    }
}

// Se crean instancias y se llaman los métodos
var playMusica = new Reproductor('https://www.youtube.com/embed/3ssL8vx7Xhg?si=GzmEM5Bmo3Bc0vfZ', 'musica');
playMusica.setInicio(25);
playMusica.playMultimedia();

var playPeliculas = new Reproductor('https://www.youtube.com/embed/uDzfa0w86Vw?si=tRN3vVUgU99MptaN', 'peliculas');
playPeliculas.setInicio(4);
playPeliculas.playMultimedia();

var playSeries = new Reproductor('https://www.youtube.com/embed/-nbh77bt9jY?si=K1Kjrr9xSJbAC6gZ4', 'series');
playSeries.setInicio(30);
playSeries.playMultimedia();
