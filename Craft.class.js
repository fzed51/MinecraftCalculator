Craft = (function(global){
	var Craft = function(/*string*/ nom, /*string*/libelle){
		this._nom = nom;
		if(libelle == null || libelle == ''){
			this._libelle = nom;
		}else{			
			this._libelle = libelle;
		}
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
	Craft.prototype.getLibelle = function()
	{
		var loc= ""+this._libelle;
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
		if(element == this) return qte;
		var totalQte = 0;
		for(var i=0; i<liste.length; i++){
			var elem = liste[i],
				qteIngr,
				qteCraft,
				qteElem,
				qteDem,
				coef,
				trace;
			qteCraft = elem.getQte();
			if(qteCraft>0){
				trace = elem._nom + " a " + this._nom + " comme ingedient?";
				if(elem.ingredientExiste(this)){
					qteIngr = elem.getQteIngredient(this);
					qteElem = elem.getQteFor(liste, element, qte);
					coef = Math.ceil(qteElem/qteCraft);
					totalQte += coef*qteIngr;
				}
			}
		}
		return totalQte;
	}
	Craft.prototype.getQteIngredient =function(element)
	{
		var ingrs = this._recipe, qte = 0;
		for(var i =0; ingrs.length; i++){
			var ingr = ingrs[i];
			if(ingr[1] == element) return ingr[0];
		}
		return 0;
	}
	return Craft;
})(window)
