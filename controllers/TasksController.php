<?php 


class TasksController{
	
	function actionMain(){
		$model = new Tasks();
		$arr = $model->get($_GET[id_user]
			);
		
		echo json_encode($arr, JSON_UNESCAPED_UNICODE);

		return true;

	}
}