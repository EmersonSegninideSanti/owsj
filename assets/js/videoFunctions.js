// video-display é a caixa do <iframe>
// main-content-layout é <main>, caixa das duas colunas
function setVideoDisplay () {
    if (window.innerWidth > (window.innerHeight + 130)) {
        document.querySelector(".video-display").classList.add("video-display-lg");
        document.querySelector(".video-button-container").classList.add("video-button-container-lg");
        document.querySelector(".main-content-layout").classList.add("main-content-layout--two-cols");
    }else {
        document.querySelector(".video-display").classList.remove("video-display-lg");
        document.querySelector(".video-button-container").classList.remove("video-button-container-lg");
        document.querySelector(".main-content-layout").classList.remove("main-content-layout--two-cols");
    }
}

// Funcionando, mas tem um bug que ao diminuir e aumentar a tela no PC, mesmo com o video fechado, o main fica na esquerda
function toggleVideo (){
    if (videoIsDisplayed) {
        document.querySelector(".video-display").classList.remove("active");
        document.querySelector(".main-content-layout").classList.remove("main-content-layout--two-cols");
        videoIsDisplayed = false;

        //Botão - Mostrar
        document.querySelector(".video-button-container").style.bottom = "35px";
        document.querySelector(".video-button").innerText = "Mostrar Vídeo";
        document.querySelector(".yt-icon").style.display = "flex";
    }else {
        document.querySelector(".video-display").classList.add("active");
        setVideoDisplay();
        videoIsDisplayed = true;

        //Botão - Ocultar
        document.querySelector(".video-button-container").style.bottom = "0px";
        document.querySelector(".video-button").innerText = "Ocultar Vídeo";
        document.querySelector(".yt-icon").style.display = "none";
    }
}

document.querySelector(".video-bottom-content-box").addEventListener('click', toggleVideo);
window.addEventListener( 'load' , setVideoDisplay);
window.addEventListener( 'resize', setVideoDisplay);
videoIsDisplayed = true;
// atribuicao do evento