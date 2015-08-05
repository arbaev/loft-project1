<?php

	$login = $_POST['user-login'];
	$password = $_POST['password'];
	$data = array();


	if ($login == '') {
		$data['status'] = 'error';
		$data['text'] = 'Вы не ввели логин';
		}
	elseif ($password == '') {
			$data['status'] = 'error';
			$data['text'] = 'Вы не указали пароль';
			}
	else {
			$data['status'] = 'OK';
			$data['text'] = $login;
		}

	// здесь функция авторизации

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>