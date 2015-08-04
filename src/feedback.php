<?php

	$name = $_POST['project-name'];
	$data = array();


	if ($name === '') {
		$data['status'] = 'error';
		$data['text'] = 'непонятная ошибка на сервере';
	}else{
		$data['status'] = 'OK';
		$data['text'] = $name;
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>