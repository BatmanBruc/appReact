<?php
/**
* 
*/
class Tasks {
	var $db; 

	function __construct(){
		$obj_db = new Db();
		$this->db = $obj_db->connect();
		return;
	}

	public function get($id){
		$sql = 'SELECT * FROM tasks WHERE id_day='.$id;
		$a = $this->db->prepare($sql);
        $a->execute();
        $result = $a->fetchAll();
        return $result; 
	}

}