/* Construye una interfaz web (HTML + CSS) con un layout de dos columnas con tamaños
relativos y responsive (en pantallas pequeñas debe pasar a una columna).
Adicionalmente, un boton con la siguiente logica: el boton debe generar un texto (puede ser un lorem).
El texto debe tener una particularidad y es que no permite copiar el contenido;
es decir, al momento de copiar el texto debe cambiar el texto y pegar la siguiente frase:
"no puedes pegar este texto".*/
const LoremGenerado= document.getElementById('loremGenerado');

function lorem(){
    LoremGenerado.value= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

};

const button= document.getElementById('button');
button.addEventListener('click',()=> {
    lorem()
});

LoremGenerado.oncut = LoremGenerado.oncopy = function(e) {
    alert('no puedes pegar este texto');
    e.preventDefault();
  };

document.addEventListener('copy',  function paste (e) {
    const text= e.clipboardData.setData('text/html',"");
    LoremGenerado.value= "no puedes pegar este texto";   
})


/* function logPaste(event) {
    event.clipboardData.setData("text/plain", "no puedes pegar este texto");
  }
 */
