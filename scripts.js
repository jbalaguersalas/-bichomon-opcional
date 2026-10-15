console.log(document.title);

//1 Y 2.
const titulo = document.querySelector('h2[id="gen-1"]');
titulo.textContent = `Generasión 1 Pokimon`;

const generation1 = document.querySelector('.infocard-list.infocard-list-pkmn-lg');
generation1.style.backgroundColor = 'lightblue';

//3 y 4 URLS.
console.log(window.location.URL, "http://127.0.0.1:5500/index.html");
console.log(window.location.hostname, "127.0.0.1");