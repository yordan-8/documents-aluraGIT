const textArea = document.querySelector(".texto-area");
const  mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiarr");



function btnEncriptar(){ 
    if(!validarTexto()) { 
    } 
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado 
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
   
}

function encriptar(stringEncriptado){

    let matrizcodigo = [["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringEncriptado.includes(matrizcodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }

    }
    return stringEncriptado
}




function btnDesencriptar(){
    const textoDesencriptado= desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";

}
   

function desencriptar(stringDesencriptado){

    let matrizcodigo = [["a", "ai"],
     ["e", "enter"],
     ["i", "imes"], 
     ["o", "ober"], 
     ["u", "ufat"],];

    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringDesencriptado.includes(matrizcodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1] , matrizcodigo[i][0])

        }

    }
    return stringDesencriptado
}

//copiado

function copy() {
    let stringDesencriptado = document.querySelector("#input");
    stringDesencriptado.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);

  // acentos 
  

  
  function validarTexto(){
    let textoEscrito = document.querySelector(".texto-area").value;
    let validador = textoEscrito.match(/^[a-z, '']*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
     }