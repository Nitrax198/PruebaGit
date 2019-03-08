<?php
    require '/../conexion/conectaDB.php';
    $nombre = $_POST['nombre'];
    $intentos = $_POST['intentos'];

    $bd = new conectaBD();
    $query = "INSERT INTO puntuaciones (nombre,intentos) VALUES($nombre,$intentos);";
    $consulta = $bd->consulta($query);
    if($consulta==NULL)
    {
        echo "Error al insertar";
    }
    else
    {
        $query2 = "Select * from puntuaciones order by intentos ASC LIMIT 5;";
        $consulta2 = $bd->consulta($query);
        if($consulta2==NULL)
        {
            echo "No existe ninguna puntuación todavía";
        }
        else
        {
            $respuesta = [];
            $respuesta['puntuaciones'] = $consulta2;
            $devolver = json_encode($respuesta);
            echo $devolver;
        }
    }
?>