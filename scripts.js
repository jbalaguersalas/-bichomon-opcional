console.log(document.title);

//1 Y 2.
const titulo = document.querySelector('h2[id="gen-1"]');
titulo.textContent = `Generasión 1 Pokimon`;

const generation1 = document.querySelector('.infocard-list.infocard-list-pkmn-lg');
generation1.style.backgroundColor = 'lightblue';

//3 y 4 URLS.
console.log(window.location.href);
console.log(window.location.hostname);
//5.
const imagenes = document.querySelectorAll('img');
console.log(imagenes);
//6.
imagenes.forEach((imagen) => {
    imagen.setAttribute(`src`,`https://media.giphy.com/media/2v170e71aanfi/giphy.gif`)
})
//7.
const voladores = document.querySelectorAll('.infocard-lg-data.text-muted');
voladores.forEach((flying) => {
    if (flying.textContent.includes("Flying")) {
        flying.style.backgroundColor = 'lightgreen';
    }
});