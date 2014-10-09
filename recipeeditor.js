function initChoixCraft(select, dico){
	var lstCraft = dico.getListe();
	for(var i=0;i<lstCraft.length;i++){
		var nom = lstCraft[i].getNom();
		var lib = lstCraft[i].getLibelle();
		var opt =$('<option>').attr('value',nom).text(lib);
		select.append(opt);
	}
}

$(document).ready(function(){
	// Bouton +
	$('#bt_plus').on('click', function(){
		var formIngredient = $("#tpt").clone(),
			formulaire =$(this.form);
		formIngredient
			.removeAttr('id')
			.addClass('ingredient')
			.show()
			.appendTo(formulaire);
		$('input', formIngredient)
			.removeAttr('disabled');
		$('select', formIngredient)
			.removeAttr('disabled');
		// Bouton -	
		$('.bt_moins', formIngredient)
			.on('click', function(){
				$(formIngredient).remove();
			});
	});
	// TODO : Submit AJAX
	//
	
	// Init COMBO
	window.MCC_LANGAGE = 'fr';
	var dico = new DicoCraft('craft_MC.xml');
	dico.importXML('craft_IC2.xml');
	dico.importXML('craft_IC2_advSP.xml');
	initChoixCraft($('#tpt select'), dico);
});