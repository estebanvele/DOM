const crearSeccion3 = () => {
    const seccion = document.createElement('div');
    seccion.classList.add('seccion');
    
    const titulo = document.createElement('h1');
    titulo.textContent = 'Quienes somos';
    
    const parrafo = document.createElement('h2');
    parrafo.textContent = 'Pinturas Color & Lacas';

    const parrafo2 = document.createElement('p');
    parrafo2.textContent = 'Distribuidores direcctos de  : Pinturas prolac, pituras every y vinilos';



    const titulo2 = document.createElement('h1');
    titulo2.textContent = 'Redes sociales';

    const whatsapp = document.createElement('img');
    whatsapp.src = 'img/whatsapp.PNG';
    whatsapp.style.width = '50px'; // Ajusta el tamaño 
    whatsapp.style.height = '50px';

    const facebook = document.createElement('img');
    facebook.src = 'img/facebook.PNG';
    facebook.style.width = '50px'; // Ajusta el tamaño
    facebook.style.height = '50px';

    const instagram = document.createElement('img');
    instagram.src = 'img/instagram.PNG';
    instagram.style.width = '50px'; // Ajusta el tamaño 
    instagram.style.height = '50px';
 
    
    seccion.appendChild(titulo);
    seccion.appendChild(parrafo);
    seccion.appendChild(parrafo2);
    seccion.appendChild(titulo2);
    seccion.appendChild(whatsapp);
    seccion.appendChild(facebook);
    seccion.appendChild(instagram);



    
    return seccion;
}

document.body.appendChild(crearSeccion3());
