<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Tabla de Usuarios con AJAX</title>
      <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
      <div class="contenedor">
            <header class="cabecera">
                  <h4>Tabla de Libros</h4>
                  <div>
                        <button type="button" class="btn active" id="cargarDatos">Mostrar Libros</button>
                  </div>
            </header>
            <main>
                  <form id="formulario" class="formulario">
                        <input type="text" name="titulo" id="titulo" placeholder="Libro">
				<input type="text" name="editorial" id="editorial" placeholder="Editorial">
				<input type="text" name="precio" id="precio" placeholder="Precio">
				<input type="text" name="autor" id="autor" placeholder="Autor">
				<button type="submit" class="btn">Agregar</button>
                  </form>
                  <div class="error_box" id="error_box">
                        <p>Se ha producido un error.</p>
                  </div>
                  <table id="tabla" class="tabla">
                        <thead>
                              <tr>
                                    <th>No.</th>
                                    <th>Libro</th>
                                    <th>Edaditorial</th>
                                    <th>Precio</th>
                                    <th>Autor</th>
                              </tr>
                        </thead>
                        <tbody id="cuerpo_tabla"></tbody>
                  </table>
                  <div class="loader" id="loader"></div>
            </main>
      </div>
      <script src="js/app.js"></script>
</body>
</html>