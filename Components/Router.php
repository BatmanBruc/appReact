<?php
class Router{
	private $routes;
	public function __construct(){
		$routesPath = ROOT.'/config/routes.php';
		$this->routes = include($routesPath);

	}
	public function run(){
		//Получить строку запроса
		$uri = trim($_SERVER['REQUEST_URI'],'/');
		if(empty($uri))$uri = 'default';

		//Проверка такого запроса в routes.php
		$counterForError = 0;
		foreach($this->routes as $uriPattern => $path){
			//сравниваем $uriPattern и uri
			if(preg_match("~$uriPattern~",$uri)){
				$internalRoute = preg_replace("~$uriPattern~",$path,$uri);
				$internalRoute = explode('?',$internalRoute)[0];
				
				$segments = explode('/',$internalRoute);
				$controllerName = ucfirst(array_shift($segments)).'Controller';
				$actionName = 'action'.ucfirst(array_shift($segments));
            	if($segments==!null) $s = $segments[0];
            	else $s = true;	
            					
				//ВЫзов метода
				$controllerObject = new $controllerName;
				$result = $controllerObject->$actionName($s);
				if($result != null){
					break;
				}
			}else{ 
				
				$counterForError++;
				if(count($this->routes)==$counterForError)return "страница не наидена!";
			}
		}
	}
}
?>