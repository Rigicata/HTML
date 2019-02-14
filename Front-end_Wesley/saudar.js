	function saudar(){
		var nome = document.getElementById("nome").value;
		var idade = parseInt(document.getElementById("idade").value);

		if(idade>=18){
			/*alert("Olá "+ nome+", você é de maior");*/
			document.getElementById("resultado").innerHTML = "Olá "+ nome+", você é de maior";
		
		}else{
			
			/*alert("Olá "+ nome+", você é de menor");*/	
			document.getElementById("resultado").innerHTML = "Olá "+ nome+", você é de menor";
		

		}

		


function frutas (){
			var frutas = document.getElementsByName("frutas");
			for (var i = frutas.length - 1; i >= 0; i--) {
	    document.getElementById("resultado").innerHTML+= frutas[i];
	}
		}

	}
