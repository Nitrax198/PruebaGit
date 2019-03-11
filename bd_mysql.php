<?php

class conectaBD {

    private $conn = null;

    public function __construct($database = 'juego') {
        $dsn = "mysql:host=localhost;dbname=$database;charset=utf8";
        try {
            $this->conn = new PDO($dsn, 'root', '');
        } catch (PDOException $e) {
            die("¡ERROR!" . $e->getMessage() . "<br/>");
        }
    }

    public function __destruct() {
        $this->conn = null;
    }
    
    public function getConexion(){
        return $this->conn;
    }

}