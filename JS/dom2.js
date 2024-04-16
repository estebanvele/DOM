const crearSeccion2 = () => {
    const seccion = document.createElement('div');
    seccion.classList.add('seccion');
    
    const titulo = document.createElement('h1');
    titulo.textContent = 'Selecciona los productos que deseas ver';
    

    const boton1 = document.createElement('button');
    boton1.textContent = 'Color & Lacas';
    boton1.addEventListener('click', () => {
        alert('vas a ver los productos de color & lacas');
    });
    
    const boton2 = document.createElement('button');
    boton2.textContent = 'Prolac';
    boton2.addEventListener('click', () => {
        alert('vas a ver los productos de Prolac');
    });

    const boton3 = document.createElement('button');
    boton3.textContent = 'Every';
    boton2.addEventListener('click', () => {
        alert('vas a ver los productos de Every');
    });
    
    
    seccion.appendChild(titulo);
    seccion.appendChild(boton1);
    seccion.appendChild(boton2);
    seccion.appendChild(boton3);

    
    return seccion;
}

document.body.appendChild(crearSeccion2());
