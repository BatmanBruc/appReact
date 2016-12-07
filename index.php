<?php
session_start();
//Подключение файлов системы
define('ROOT',dirname(__FILE__));
require_once(ROOT.'\Components\Autoload.php');
if($_SERVER['HTTP_X_REQUESTED_WITH']=='XMLHttpRequest'){

	$router = new Router();
	echo $router->run();
}else{

	require_once(ROOT.'\view\public/index.html');
}

?>