<?php
class conectaBD 
{
    private $conn = null;
    
    public function __construct($database = 'juego') 
    {
        $dsn = "mysql:host=localhost;dbname=$database";
        try
        {
            $this->conn = new PDO($dsn,'root','1234');
        } catch (PDOException $e)
        {
            die("¡Error!: " . $e->getMessage() . "<br/>");
        }
    }
    
    public function __destruct()
    { // Cierra conexión asignándole valor null
        $this->conn = null;
    }
    
    public function consulta($orden)
    { // Ejecuta consulta y devuelve array de resultados o NULL sí falla ejecución
        $filas = array();
        $q = $this->conn->query($orden);
        if($q !== false)
        {
            $q->setFetchMode(PDO::FETCH_ASSOC);
            while ($r = $q->fetch())
            {
                $filas[] = $r;
            }
        }
        return $filas;
    }
}
?>
