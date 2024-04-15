const creardom1 = () => {
    const seccion = document.createElement('div');
    seccion.classList.add('seccion');
    
    const titulo = document.createElement('h1');
    titulo.textContent = 'Pinturas Color & Lacas';
    const imagen = document.createElement('img');
    imagen.src = 'img/LOGO.PNG';

    const parrafo = document.createElement('p');
    parrafo.textContent = 'MEDELLIN';

    const mapa = document.createElement('iframe');
    mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.612971157644!2d-75.573507!3d6.252716799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428fe895def59%3A0xe2f4b6fc24ca170e!2sPinturas%20Color%20%26%20Lacas!5e0!3m2!1sen!2s!4v1618742525652!5m2!1sen!2s'; 
    mapa.width = '500';
    mapa.height = '350';
    mapa.style.border = '0';
    mapa.allowFullscreen = '';
    mapa.loading = 'lazy';
    
    

    
    seccion.appendChild(titulo);
    seccion.appendChild(imagen);
    seccion.appendChild(parrafo);
    seccion.appendChild(mapa);
    
    return seccion;
}

document.body.appendChild(creardom1());


