<?php
class Db{
	var $dsn = 'mysql:host=127.0.0.1:3306;dbname=targetapp';
	var $user = 'root';
	var $password = '';
	public function connect(){
		try {
	    	$dbh = new PDO($this->dsn, $this->user, $this->password);
	    	return $dbh;
		} catch (PDOException $e) {
	    	echo 'Подключение не удалось: ' . $e->getMessage();
		}
	}
	
}
?>