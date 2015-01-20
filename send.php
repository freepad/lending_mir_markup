<?php
// почта на которую будут приходить сообщения
$to = 'sdmir4850005@mail.ru';
$subject = '';
$message = '';

if ($_POST['question']) {
	$subject = 'Вопрос стройное тело';
	$message = '';

	$message .= 'Имя: '.$_POST['name']."\n";
	$message .= 'Телефон: '.$_POST['phone']."\n";
	$message .= 'Вопрос: '.$_POST['question']."\n";
} elseif ($_POST['name']) {
	$subject = 'Звонок стройное тело';
	$message = '';

	$message .= 'Имя: '.$_POST['name']."\n";
	$message .= 'Телефон: '.$_POST['phone']."\n";
} elseif ($_POST['email']) {
	$subject = 'Заявка стройное тело';
	$message = '';

	$message .= 'Почта: '.$_POST['email']."\n";
	$message .= 'Телефон: '.$_POST['phone']."\n";	
}

if ($subject && mail($to, $subject, $message)) die('complete');