function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert(' [ERRO]Verifique os dados e tente novamente');
    } else {
        mudaImagem()
    }
}

function mudaImagem() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');
    let fsex = document.querySelectorAll('input[name="radsex"]');
    let idade = fano.value;
    let anoNascimento = ano - idade;
    let img = document.createElement('img');
    switch (fsex[0].checked == true) {
        case idade >= 50:
            img.setAttribute('src', 'idoso-masculino.png');
            break;
        case idade > 21:
            img.setAttribute('src', 'adulto-masculino.png');
            break;
        case idade >= 10 && idade < 21:
            img.setAttribute('src', 'jovem-masculino.png');
            break;
        default:
        img.setAttribute('src', 'bebe-feminina.png');
    }
    switch (fsex[1].checked == true) {
        case idade >= 50:
            img.setAttribute('src', 'idoso-feminino.png');
            break;
        case idade > 21:
            img.setAttribute('src', 'adulto-feminina.png');
            break;
        case idade >= 10 && idade < 21:
            img.setAttribute('src', 'jovem-feminina.png');
            break;
        default:
        img.setAttribute('src', 'bebe-feminina.png');
    }
    res.innerHTML = `Nascido(a) em ${anoNascimento}.`
    res.appendChild(img);
}
