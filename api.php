<?php

//Aqui já realizava o processo baseado no banco mysql para tornar dinamico, diferente do arquivo base criado xml.

$db = new PDO('mysql:host=localhost;dbname=ajaxdata','root','');

$page = isset($_GET['p'])?$_GET['p']:'';

if($page=='add'){
	$marca = $_POST['marca'];
	$modelo = $_POST['modelo'];
	$ano = $_POST['ano'];

	$stmt = $db->prepare("insert into crud values('',?, ?, ?)");
	$stmt->binParam(1,$marca);
	$stmt->binParam(2,$modelo);
	$stmt->binParam(3,$ano);

	if($stmt->execute()) {
		echo "Carro adicionado com sucesso.";
	} else {
		echo "Falha na inclusão!";
	}

} elseif ($page=='edit') {
	

} elseif ($page=='del') {
	

} else {

}
?>