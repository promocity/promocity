<?php
	/*	escape_chars	очищает строку от инъекций кода
	 *  getbool			получает из строки булевую
	 *  checknumber		проверяет номер телефона
	 * */

	header('Content-Type: text/html; charset=UTF-8', true);
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/plain; charset=UTF-8' . "\r\n";
	$headers .= 'From: Promocity' . "\r\n";

	//очищает строку от инъекций кода
	function escape_chars($strinput){
		if(is_array($strinput))
			return "";
		if(!empty($strinput) && is_string($strinput)) {
			$strinput = str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a",'<','>'), array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z','&gt;','&lt;'), $strinput);
			return htmlspecialchars(trim($strinput));
		}
	}
	//проверяет номер телефона
	function checknumber($num){
		$arrayreplace = array("-","(",")"," ");
		$num = str_replace($arrayreplace,"",$num);
		$result = preg_match('/^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/', $num, $res);
		if ($num == '')
			$result = 0;
		return $result;
	}
	
	function check_length($value = "", $min, $max) {
		$result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
		return !$result;
	}
	
	//действие получаемое из формы
	$action = escape_chars($_POST['action']);
	//емейл
	$contactsemail = escape_chars($_POST['contacts_email']);	
	
	if($action == 'orderform'){ //заказать звонок
		$name = escape_chars($_POST['order_name']);
		$tel = escape_chars($_POST['order_tel']);
		$email = escape_chars($_POST['order_email']);
		$service = escape_chars($_POST['order_service']);
		$packet = escape_chars($_POST['order_packet']);
		$comments = escape_chars($_POST['order_comments']);
		if ($name == '' || $tel == '' || checknumber($tel)==0 || $email == '' || check_length($name,2,50)==0 || check_length($tel,2,20)==0) {
				$errormessage = 'Неверные данные.';
		} else {
			$mail_message = "Заявка ";
			$mail_message .= "от ".$name."\n";
			$mail_message .= "тел. ".$tel."\n";
			if ($email){$mail_message .= "email: ".$email."\n";}
			if ($service){$mail_message .= "Выбранный сервис: ".$service."\n";}
			if ($packet){$mail_message .= "Выбранный пакет услуг: ".$packet."\n";}
			if ($comments){$mail_message .= "Комментарии: ".$comments."\n";}
			mail($contactsemail, 'Заявка', $mail_message, $headers);
			$errormessage = "Заявка успешно отправлена.".$mail_message.$contactsemail;
		}
	} elseif($action == 'calcformzakaz_1'){ //заявка
		$name = escape_chars($_POST['zakaz_name']);
		$tel = escape_chars($_POST['zakaz_tel']);
		$email = escape_chars($_POST['zakaz_email']);
		$uslugi = escape_chars($_POST['zakaz_uslugi']);
		$price = escape_chars($_POST['zakaz_price']);
		$sitetype = escape_chars($_POST['zakaz_sitetype']);
		if ($uslugi){
			$uslugi_ar = split(';',$uslugi);
			$uslugi = '';
			foreach($uslugi_ar as $u){
				if ($u != '')	$uslugi .= ' • '.$u."\n";
			}
		}
		if ($name == '' || $tel == '' || checknumber($tel)==0 || $email == '' || check_length($name,2,50)==0 || check_length($tel,2,20)==0) {
				$errormessage = 'Неверные данные.';
		} else {
			$mail_message = "Заявка ";
			$mail_message .= "от ".$name."\n";
			$mail_message .= "тел. ".$tel."\n";
			if ($email){$mail_message .= "email: ".$email."\n";}
			if ($sitetype){$mail_message .= "Тип сайта: ".$sitetype."\n";}
			if ($price){$mail_message .= "Цена: ".$price."\n";}
			if ($uslugi){$mail_message .= "Доп. услуги: \n".$uslugi."\n";}
			mail($contactsemail, 'Заявка', $mail_message, $headers);
			$errormessage = "Заявка успешно отправлена.".$mail_message.$contactsemail;
		} 
	}elseif($action == 'calcformzakaz_2'){ //заказ
		$name = escape_chars($_POST['zakaz_name']);
		$tel = escape_chars($_POST['zakaz_tel']);
		$email = escape_chars($_POST['zakaz_email']);
		$uslugi = escape_chars($_POST['zakaz_uslugi']);
		$price = escape_chars($_POST['zakaz_price']);
		$sitetype = escape_chars($_POST['zakaz_sitetype']);
		if ($uslugi){
			$uslugi_ar = split(';',$uslugi);
			$uslugi = '';
			foreach($uslugi_ar as $u){
				if ($u != '')	$uslugi .= ' • '.$u."\n";
			}
		}
		if ($name == '' || $tel == '' || checknumber($tel)==0 || $email == '' || check_length($name,2,50)==0 || check_length($tel,2,20)==0) {
				$errormessage = 'Неверные данные.';
		} else {
			$mail_message = "Заявка ";
			$mail_message .= "от ".$name."\n";
			$mail_message .= "тел. ".$tel."\n";
			if ($email){$mail_message .= "email: ".$email."\n";}
			if ($sitetype){$mail_message .= "Тип сайта: ".$sitetype."\n";}
			if ($price){$mail_message .= "Цена: ".$price."\n";}
			if ($uslugi){$mail_message .= "Доп. услуги: \n".$uslugi."\n";}
			mail($contactsemail, 'Заказ', $mail_message, $headers);
			$errormessage = "Заявка успешно отправлена.".$mail_message.$contactsemail;
		} 
	} else {
		$errormessage = "Неверное действие.";
	}
	
	echo $errormessage;
?>