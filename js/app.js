var btnCargaUsuarios = document.getElementById('cargarDatos'),
    loader = document.getElementById('loader'),
    cuerpo_tabla = document.getElementById('cuerpo_tabla'),
    box_error = document.getElementById('error_box');

var libro_titulo,
    libro_editorial,
    libro_precio,
    libro_autor;

btnCargaUsuarios.addEventListener('click', () => {
    cargarUsuarios();
});

formulario.addEventListener('submit', (event) => {
    ingresarLibro(event);
});

function cargarUsuarios() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'php/cargarLibros.php');

    loader.classList.add('active');

    xhr.onreadystatechange = () => {
        xhr.onload = () => {
            var datos = JSON.parse(xhr.responseText);

            // console.log(datos);

            if (datos.error) {
                box_error.classList.add('active');
                box_error.innerHTML = "No hay resultados para mostrar";
            } else {

                for (var i = 0; i < datos.length; i++) {
                    var fila = document.createElement('tr');
                    fila.innerHTML += ("<td>" + datos[i].id + "</td>");
                    fila.innerHTML += ("<td>" + datos[i].libro + "</td>");
                    fila.innerHTML += ("<td>" + datos[i].editorial + "</td>");
                    fila.innerHTML += ("<td>" + "$ " + datos[i].precio + "</td>");
                    fila.innerHTML += ("<td>" + datos[i].autor + "</td>")
                    cuerpo_tabla.appendChild(fila);
                }
            }

        }
        if (xhr.readyState == 4 && xhr.status == 200) {
            loader.classList.remove('active');
        }
    }
    xhr.send();
}

function ingresarLibro(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/insertaLibro.php');

    libro_titulo = formulario.titulo.value.trim();
    libro_editorial = formulario.editorial.value.trim().toUpperCase();
    libro_precio = parseFloat(formulario.precio.value.trim());
    libro_autor = parseInt(formulario.autor.value.trim());
    if (formularioValidado()) {
        box_error.classList.remove('active');
        var parametros = 'titulo=' + libro_titulo + '&editorial=' + libro_editorial + '&precio=' + libro_precio + '&autor=' + libro_autor;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        loader.classList.add('active');
        xhr.onload = () => {
            cargarUsuarios();
            formulario.titulo.value = '';
            formulario.editorial.value = '';
            formulario.precio.value = '';
            formulario.autor.value = '';
        }
        xhr.onreadystatechange = () => {
            console.log(xhr.readyState);
            console.log(xhr.status);
            if (xhr.readyState == 4 && xhr.status == 200) {
                loader.classList.remove('active');
            }
        }
        xhr.send(parametros);
    } else {
        box_error.classList.add('active');
        box_error.innerHTML = "Completa los campos del formulario";
    }
}

function formularioValidado() {
    if (libro_titulo == '') {
        return false;
    } else if (libro_editorial == '') {
        return false;
    } else if (libro_precio == '') {
        return false;
    } else if (libro_autor == '') {
        return false;
    }
    return true;
}