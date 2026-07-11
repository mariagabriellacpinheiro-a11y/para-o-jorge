
function scrollToHistoria() {
    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });
}


function mostrarMensagem(){

    alert(
        "Jorge Fernando ❤️\n\n" +
        "Você é uma das melhores partes da minha vida.\n\n" +
        "Obrigada por existir e por caminhar comigo.\n\n" +
        "Eu te amo! ✨\n\n" +
        "Com amor,\nMaria Gabriela"
    );

}


/* Criando estrelas */

const stars = document.getElementById("stars");

for(let i = 0; i < 80; i++){

    let estrela = document.createElement("span");

    estrela.style.position = "absolute";
    estrela.style.width = "3px";
    estrela.style.height = "3px";
    estrela.style.background = "white";
    estrela.style.borderRadius = "50%";

    estrela.style.left = Math.random() * 100 + "%";
    estrela.style.top = Math.random() * 100 + "%";

    estrela.style.animation =
    "piscar " + (2 + Math.random()*3) + "s infinite";

    stars.appendChild(estrela);

}


/* Corações flutuando */

function criarCoracao(){

    const coracao = document.createElement("div");

    coracao.innerHTML = "❤️";

    coracao.style.position = "fixed";
    coracao.style.bottom = "-20px";
    coracao.style.left = Math.random()*100 + "%";
    coracao.style.fontSize = "20px";
    coracao.style.animation = "subir 5s linear";

    document.body.appendChild(coracao);


    setTimeout(()=>{

        coracao.remove();

    },5000);

}


setInterval(criarCoracao,1200);
