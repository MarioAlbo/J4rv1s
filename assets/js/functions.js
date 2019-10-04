function onSubmit() {
    const tech = document.getElementById('Tecnologia').checked;
    document.getElementById('separator').hidden = true;
    document.getElementById('recomenacions').hidden = false;
    const duracio = document.getElementById('estudis').selectedIndex;
    if (tech) {
        document.getElementById('noRecomendations').hidden = true;
        switch (duracio) {
            case 0:
                document.getElementById('bootcamp').hidden = false;
                document.getElementById('superior').hidden = true;
                document.getElementById('grau').hidden = true;
                break;
            case 1:
                document.getElementById('bootcamp').hidden = true;
                document.getElementById('superior').hidden = false;
                document.getElementById('grau').hidden = true;
                break;
            case 2:
                document.getElementById('bootcamp').hidden = true;
                document.getElementById('superior').hidden = true;
                document.getElementById('grau').hidden = false;
                break;
        }
    } else {
        document.getElementById('bootcamp').hidden = true;
        document.getElementById('superior').hidden = true;
        document.getElementById('grau').hidden = true;
        document.getElementById('noRecomendations').hidden = false;
    }
}


function onLoad2() {
    document.getElementById('bootcamp').hidden = true;
    document.getElementById('superior').hidden = true;
    document.getElementById('grau').hidden = true;
    document.getElementById('noRecomendations').hidden = true;
    document.getElementById('recomenacions').hidden = true;
}