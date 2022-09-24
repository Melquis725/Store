window.onload = function () {

    /* ------ codigo menu ------ */
    let menu = document.getElementById('menu');
    let icon = document.getElementById('icon');

    icon.addEventListener('click', function () {
        menu.classList.toggle('show-menu');
    });


    /* ------codigo slider------ */
    const imgs = ['img/motion-2.jpg', 'img/air-max-97.jpg'];

    let posicionActual = 0;
    let $retroceder = document.querySelector('#retroceder');
    let $avanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');

    function avanzarF() {
        if (posicionActual >= imgs.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizar();
    }

    function retrocederF() {
        if (posicionActual <= 0) {
            posicionActual = imgs.length - 1;
        } else {
            posicionActual--;
        }
        renderizar();
    }

    function renderizar() {
        document.querySelector('.imagen').src = `${imgs[posicionActual]}`;
    }

    $retroceder.addEventListener('click', retrocederF);
    $avanzar.addEventListener('click', avanzarF);
    renderizar();
}

