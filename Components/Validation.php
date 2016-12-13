<?php
class Validation{
	public function ValidRegUser($user_name,$user_password){
		$error_valid = [
			'noLettersInName'=>'Допустмы, только латинские буквы!',
			'onlyNumeral'=>'Недопустимо содержание, только цифр в нике!',
			'shortName'=>'Короткое имя',
			'noLettersInPassword'=>'Отсутсвие латинских букв в пароле!',
			'noNumeralInPassword'=>'Отсутсвие цифр в пароле!',
			'shortPassword'=>'Короткий пароль!'
		];

		$response = [];
		if(strlen($user_name)<3){
			$response[$error_valid['shortName']] = $error_valid['shortName'];
		}
		if(!preg_match('|^[A-Z0-9]+$|i', $user_name)){
			$response[$error_valid['noLettersInName']] = $error_valid['noLettersInName'];
		}else{
			if(preg_replace("/[0-9]{1}/", "", $user_name)==""){
				$response[$error_valid['onlyNumeral']] = $error_valid['onlyNumeral'];
			}
		}
	}
}