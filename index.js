function initChoixCraft(dico){
	var lstCraft = dico._craft,
		select = $('#craft');
	for(var i=0;i<lstCraft.length;i++){
		var nom = lstCraft[i].getNom();
		var lib = lstCraft[i].getLibelle();
		var opt =$('<option>').attr('value',nom).text(lib);
		select.append(opt);
	}
}
window.MCC_LANGAGE = 'fr';
var dico = new DicoCraft('craft_MC.xml');
dico.importXML('craft_IC2.xml');
dico.importXML('craft_IC2_advSP.xml');
$(function(){
	initChoixCraft(dico);
	$('#run').on('click', function(){
		var nomElem = $('#craft').val();
		var qteElem = $('#nbCraft').val();
		var result = dico.getRessourceFor(nomElem, qteElem);
		var strResult = '';
		for(var i=0;i<result.length; i++){
			strResult += '<p>' + result[i][0] + ' ' + result[i][1].getLibelle() + '</p>';
		}
		$('#result').html(strResult);
	});
});