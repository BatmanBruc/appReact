<?php 


class DaysController{
	
	function actionMain(){
		$model = new Days();
		$arr = $model->get();
		
		echo json_encode($arr, JSON_UNESCAPED_UNICODE);

		return true;

	}
}