window.onload = function(){
    
    const imgs = ['/img/air-max-97.jpg', '/img/motion-2.jpg'];

    let posicionActual = 0;
    let $retroceder = document.querySelector('#retroceder');
    let $avanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');

    function avanzarF(){
        if(posicionActual >= imgs.length - 1){
            posicionActual=0;
        }else{
            posicionActual++;
        }
        renderizar();
    }

    function retrocederF(){
        if(posicionActual <= 0){
            posicionActual= imgs.length - 1;
        }else{
            posicionActual--;
        }
        renderizar();
    }

    function renderizar(){
        $imagen.style.backgroundImage = `url(${imgs[posicionActual]})`;
    }

    $retroceder.addEventListener('click', retrocederF);
    $avanzar.addEventListener('click', avanzarF);
    renderizar();
}   