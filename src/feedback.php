<?php

	$name = $_POST['user-name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$data = array();


	if ($name == '') {
		$data['status'] = 'error';
		$data['text'] = 'Вы не ввели своё имя';
		}
	elseif ($email == '') {
			$data['status'] = 'error';
			$data['text'] = 'Вы не указали email';
			}
	elseif ($message == '') {
			$data['status'] = 'error';
			$data['text'] = 'Вы не написали сообщение';
			}
	else {
			$data['status'] = 'OK';
			$data['text'] = $name;
		}

	// здесь функция отправки имейла с сообщением

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>