function onSubmit() {
    document.getElementById('separator').hidden = true;
    document.getElementById('recomenacions').hidden = false;
    const duracio = document.getElementById('estudis').selectedIndex;
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
}


function onLoad2() {
    document.getElementById('recomenacions').hidden = true;
}