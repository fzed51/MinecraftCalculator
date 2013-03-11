DicoCraft = (function(global){	
	var DicoCraft = function(/*string*/ fichierXML){
		this._liste = Array();
		this._strListe = '';
		this._ressource = Array();
		this._craft = Array();
		var that = this;
		if(jQuery){
			$.ajax({
				async: false,
				type: "GET",
				url: fichierXML,
				dataType: "xml",
				success: function(xml){
					$(xml).find('ELEMENT').each(
						function(){
							var elem;
							var nom = $(this).attr('nom');
							var qte = parseInt($(this).find('QTE').text());
							if(!that.craftExiste(nom)){
								elem = new Craft(nom);
								elem.setQte(qte);
								$(this).find('RECIPE').find('INGEDIENT').each(
									function(){
										var nom = $(this).attr('nom');
										var qte = parseInt($(this).attr('qte'));
										if(that.craftExiste(nom)){
											elem.addIngedient(that.getCraft(nom), qte);
										}else{
											console.warn('Recette incomplète pour "'+elem.getNom()+'", "'+nom+'" n\'existe pas!');
										}
									}
								);
								that.addCraft(elem);
							}else{
								console.warn('Attention : "'+ nom +'" existe déjà!');
							}
						}
					);					
				}
			});
		}
	};
	DicoCraft.prototype.constructor = "DicoCraft";
	DicoCraft.prototype.craftExiste = function(element)
	{
		return (this._strListe.indexOf(('['+element+']')) >= 0);
	};
	DicoCraft.prototype.getCraft = function(nom)
	{
		for(var i=0; i< this._liste.length; i++){
			var elem = this._liste[i];
			if(elem.getNom() == nom)return elem;
		}
		return null;
	}
	DicoCraft.prototype.addCraft = function(craft)
	{	
		if(!this.craftExiste(craft.getNom())){
			this._liste.push(craft);
			if(craft.getQte() == 0){
				this._ressource.push(craft); 
			}else{
				this._craft.push(craft);
			}
			this._strListe += '['+craft.getNom()+']';
		} else {
			console.warn('Attention : "'+ nom +'" existe déjà!');
		}
	}
	DicoCraft.prototype.getRessourceFor = function(/*string*/ nomCraft, /*number*/ qte)
	{
		var element = this.getCraft(nomCraft),
			listeRessource = Array();
		for(var i=0; i<this._ressource.length; i++){
			var ressource = this._ressource[i];
			var qteRessource = ressource.getQteFor(this._liste, element, qte);
			if(qteRessource>0)listeRessource.push(Array(qteRessource, ressource));
		}
		return listeRessource;
	}
	DicoCraft.prototype.getListe = function()
	{
		return this._liste;
	}
	return DicoCraft;
})(window)