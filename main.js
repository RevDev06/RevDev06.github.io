// Filtros
$(document).ready(function(){
    $('.selection-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'todo') {
            $ ('.content-box').show('500');
        }
        else {
            $ ('.content-box').not('.' + value).hide('500');
            $ ('.content-box').filter('.' + value).show('500');
        }
    });
    // Modificar etiqueta con clase 'active-'
    $('.selection-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Cambiar findo al scrollear en el encabezado
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
