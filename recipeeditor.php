<?php

	print_r($_GET);
	print_r($_POST);
	
if(isset($_GET['act'])){
	switch($_GET['act']){
		case 'add':
			$options = array(
				'fichier'		=> FILTER_SANITIZE_SPECIAL_CHARS,
				'nom'			=> FILTER_SANITIZE_SPECIAL_CHARS,
				'qte'			=> FILTER_VALIDATE_INT,
				'ingredient'	=> array(
					'filter'    => FILTER_SANITIZE_SPECIAL_CHARS,
					'flags'     => FILTER_REQUIRE_ARRAY
				),
				'qteIng'		=> array(
					'filter'	=> FILTER_VALIDATE_INT,
					'flags'		=> FILTER_REQUIRE_ARRAY
				)
			);
			$myinputs = filter_input_array(INPUT_POST, $args);
			var_dump($myinputs);
			break;
		default :
			//rien
			echo "rien";
	}
}

?>
<!DOCTYPE HTML>
<html lang="fr-FR">
<head>
	<meta charset="UTF-8">
	<title>Recipe Editor</title>
	<script type="text/javascript" src="jQuery.js"></script>
	<script type="text/javascript" src="DicoCraft.class.js"></script>
	<script type="text/javascript" src="Craft.class.js"></script>
	<script type="text/javascript" src="recipeeditor.js"></script>
</head>
<body>
<form action="?act=add" method="POST">
<label for="fichier">Fichier de destination :</label>
<select name="fichier" id="fichier">
	<option value="craft_MC">carft_MC</option>
	<option value="craft_IC2">carft_IC2</option>
	<option value="craft_IC2_advSP">craft_IC2_advSP</option>
</select>
<label for="nom">nom du craft :</label><input type="text" name="nom" id="nom"/>
<label for="qte">qte par craft :</label><input type="text" name="qte" id="qte"/>
<input type="submit" />
<p>
<label for="bt_plus">ajouter un ingredient à la recette : </label><input type="button" id="bt_plus" value="+"/>
<div id="tpt" style="display:none;">
	<label>nom : 
	<select name="ingredient[]" disabled="disabled"></select></label>
	<label>qte par craft :
	<input type="text" name="qteIng[]" disabled="disabled"/></label>
	<input type="button" class="bt_moins" value="-"/>
</div>
</p>
</form>
</body>
</html>