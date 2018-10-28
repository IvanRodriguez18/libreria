<?php 
include '../include/funciones.php';
header('Content-Type: application/json; charset=utf-8');
error_reporting(0);
$conecta = conexionBD();
if ($conecta->connect_errno) 
{
    $respuesta = ['error' => true];
}else{
    $sql = "SELECT libros.*, autor.nombre
                FROM libros
                    INNER JOIN autor
                        ON libros.id_autor=autor.id_autor";
    $statement = $conecta->prepare($sql);
    $statement->execute();
    $resultado = $statement->get_result();
    $respuesta = [];
    if ($resultado->num_rows > 0) 
    {
        while ($fila = $resultado->fetch_assoc()) 
        {
            $usuario = ['id' => $fila['id_libro'],
                        'libro' => $fila['libro'],
                        'editorial' => $fila['editorial'],
                        'precio' => $fila['precio'],
                        'autor' => $fila['nombre']];
            array_push($respuesta, $usuario);
        }
    }else{
        $respuesta = ['error' => true];
    }
    echo json_encode($respuesta);
}
?>