var btn_carga = document.getElementById('cargarDatos');
var loader = document.getElementById('loader');
var tabla = document.getElementById('tabla');
var error_box = document.getElementById('error_box');
btn_carga.addEventListener('click', () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.json-generator.com/api/json/get/bVVCauoBAi?indent=2');
    // xhr.open('GET', 'index.php');
    loader.classList.add('active');
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        console.log(xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            loader.classList.remove('active');
            xhr.onload = () => {
                var datos = JSON.parse(xhr.responseText);
                console.log(datos);
                for (var i = 0; i < datos.length; i++) {
                    var fila = document.createElement('tr');
                    fila.innerHTML += ("<td>" + datos[i].id + "</td>");
                    fila.innerHTML += ("<td>" + datos[i].nombre + "</td>");
                    fila.innerHTML += ("<td>" + datos[i].edad + "</td>");
                    fila.innerHTML += ("<td>" + datos[i].pais + "</td>");
                    fila.innerHTML += ("<td>" + datos[i].mail + "</td>");
                    tabla.appendChild(fila);
                }
            }
        }
    }
    xhr.send();
});