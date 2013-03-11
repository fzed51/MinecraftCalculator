Craft = (function(global){
	var Craft = function(/*string*/ nom){
		this._nom = nom;
		this._qte = 0;
		this._recipe = Array();
		this._strRecipe = '';
	};
	
	Craft.prototype.constructor = "Craft";
	Craft.prototype.toString = function()
	{
		var strRetour = 'nom : ' + this._nom;
		if(this._qte > 0){
			strRetour += ' [craft : ' + this._qte +' pour ';
			for(var i=0;i<this._recipe.length;i++){
				var ing = this._recipe[i];
				if(i>0) strRetour += ', ';
				if(ing[0] > 0) strRetour += ing[0] + ' '
				strRetour += ing[1].getNom();
			}
			strRetour += ']';
		}
		return strRetour;
	};
	Craft.prototype.getNom = function()
	{
		var loc = ""+this._nom;
		return loc;
	}
	Craft.prototype.getQte = function()
	{
		var x = 0 + this._qte;
		return x;
	}
	Craft.prototype.setQte = function(/*number*/ qte)
	{
		this._qte = qte;
		return this;
	};
	Craft.prototype.addIngedient = function(/*Craft*/ element, /*number*/ qte)
	{
		var ingredient = Array(qte, element);
		if(!this.ingredientExiste(element)){
			this._recipe.push(ingredient);
			this._strRecipe += '['+element.getNom()+']'
		}else{
			console.warn('Ingredient "'+ element.getNom() +'" en doublon dans "'+ this._nom +'"!');
		}
		return this;
	};
	Craft.prototype.ingredientExiste = function(/*Craft*/ element)
	{
		return (this._strRecipe.indexOf(('['+element.getNom()+']'))>=0);
	};
	Craft.prototype.getQteFor = function(liste, element, qte)
	{
		var ressources = Array();
		for(var i=0; i<liste.length; i){
			var ressource = liste[i],
				qteCraft = ressource.getQte();
			if(qteCraft>0){
				
			}
		}
	}
	return Craft;
})(window)