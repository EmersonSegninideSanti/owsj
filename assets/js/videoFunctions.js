// video-display é a caixa do <iframe>
// main-content-layout é <main>, caixa das duas colunas
function setVideoDisplay() {
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

let button = true;

// video-button-content-box, faz aparecer o video-display
function toggleVideo() {
    if (!button) {
        //Botão - Tornar o Vídeo ATIVO/Vira Ocultar
        document.querySelector(".video-display").classList.add("active");
        setVideoDisplay();
        button = true;
        
        document.querySelector(".video-button-container").style.bottom = "0px";
        document.querySelector(".video-button").innerText = "Ocultar Vídeo";
        document.querySelector(".yt-icon").style.display = "none";
    }else {
        //Botão - Tornar o Vídeo DESATIVO/Vira Mostrar
        document.querySelector(".video-display").classList.remove("active");
        document.querySelector(".main-content-layout").classList.remove("main-content-layout--two-cols");
        button = false;

        document.querySelector(".video-button-container").style.bottom = "35px";
        document.querySelector(".video-button").innerText = "Mostrar Vídeo";
        document.querySelector(".yt-icon").style.display = "flex";
    }
}

// atribuicao dos eventos
document.querySelector(".video-bottom-content-box").addEventListener('click', toggleVideo);
window.addEventListener('load', setVideoDisplay);
window.addEventListener('resize', ()=>{if (button){setVideoDisplay()}});