function carregar() {
    const msg = window.document.getElementById('msg');
    const img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = '/exc1/img/manha.png';
        document.body.style.background = '#f4ce73';
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = '/exc1/img/tarde.png';
        document.body.style.background = '#a47553';

    } else {
        //Boa Noite
        img.src = '/exc1/img/noite.png';
        document.body.style.background = '#050917';

    }
}