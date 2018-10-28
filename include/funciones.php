<?php 
function conexionBD()
{
    try
    {
        mysqli_report(MYSQLI_REPORT_STRICT);
        $conexion = new mysqli("localhost", "root", "", "libreria");
        $conexion->query("SET NAMES 'utf8'");
        return $conexion;
    }catch(Exception $e){
        echo "Error: ".$e->getMessage();
    }
}
function validarDatos($libro, $editorial, $precio, $autor)
{
    if ($libro == '') {
        return false;
    }elseif ($editorial == '') {
        return false;
    }elseif ($precio == '') {
        return false;
    }elseif ($autor == '') {
        return false;
    }
    return true;
}
function limpiarDatos($dato)
{
    $dato = htmlspecialchars($dato);
    $dato = stripslashes($dato);
    $dato = trim($dato);
    return $dato;
}
?>