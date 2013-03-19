<!DOCTYPE HTML>
<html lang="fr-FR">
<head>
	<meta charset="UTF-8">
	<title>Recipe Editor</title>
	<script type="text/javascript" src="jQuery.js"></script>
</head>
<body>
<form action="?action=save">
<label for="fichier">Fichier de destination :</label><input type="select" name="fichier" id="fichier">
	<option value="craft_MC">carft_MC</option>
	<option value="craft_IC2">carft_IC2</option>
	<option value="craft_IC2_advSP">craft_IC2_advSP</option>
</input>
<label for="nom">nom du craft :</label><input type="text" name="nom" id="nom"/>
<label for="qte">qte par craft :</label><input type="text" name="qte" id="qte"/>
<p>
<label for="bt_plus"></label><input type="button" id="bt_plus"/>
</p>
</form>
</body>
</html>