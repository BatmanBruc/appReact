<?php
/**
* 
*/
class Days {
	var $db; 

	function __construct(){
		$obj_db = new Db();
		$this->db = $obj_db->connect();
		return;
	}

	public function get(){
		$sql = 'SELECT * FROM days';
		$a = $this->db->prepare($sql);
        $a->execute();
        $result = $a->fetchAll();
        return $result; 
	}

}