<?php
    require 'bd_mysql.php';
    //$nombre = $_POST['nombre'];
    //$intentos = $_POST['intentos'];

	$nombre = 'prueb';
    $intentos = '5';
	
    $bd = new conectaBD();
	$datos = array(':par0' =>  $_GET["nombre"],':par1' => $_GET["intentos"]);
    $query = 'insert into puntuaciones values( :par0 , :par1 );';
    $q = $bd->getConexion()->prepare($query);
	$q->execute($datos);
	$q->setFetchMode(PDO::FETCH_ASSOC);
	$array = $q->fetchAll();
	$devolver =json_encode($array);
        $query2 = "Select * from puntuaciones order by intentos ASC LIMIT 5;";
        $q = $bd->getConexion()->prepare($query2);
		$q->execute();
		$q->setFetchMode(PDO::FETCH_ASSOC);
		$array = $q->fetchAll();
		$devolver =json_encode($array);
        if($devolver=="[]")
		{
            echo "No existe ninguna puntuación todavía";
        }
        else
        {
            echo $devolver;
        }
    
?>