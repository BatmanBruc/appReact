<?php 


class DaysController{
	
	function actionIndex(){

		$model = new Days();
		$arr = $model->get();
		
		

		echo json_encode($arr, JSON_UNESCAPED_UNICODE);

		return true;

	}
}