<?php
$route = $_GET['route'];

require 'templates/header.php';

switch ($route) {
	case '':
		require 'templates/main.php';
		break;
	case 'cart':
		require 'templates/cart.php';
		break;
	
	default:
		# code...
		break;
}

require 'templates/footer.php';
// print_r($_GET);
