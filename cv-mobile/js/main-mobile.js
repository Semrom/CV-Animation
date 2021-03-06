$(document).ready(function() {		

	//Permet de déterminer si on peut cliquer sur "A Propos" ou non.	
	var afficherAPropos = true; 	
	//Permet de déterminer si on peut cliquer sur "Accueil" ou non.	
	var afficherAccueil = false;		
	//Permet de déterminer si on peut cliquer sur une rubrique ou non.	
	var afficherRubrique = true;		

	//On attend une seconde et on affiche les rubriques	
	//grâce à la fonction "afficherMenu()".	
	setTimeout(afficherMenu, 1000);	

	function afficherMenu(){		
		
		$("#leftSide").animate({left: "-60%"}, 900, function() {			
			$(this).remove();		
		});	  	

		$("#rightSide").animate({left: "+60%"}, 900, function () {	  		
			$(this).remove();	  		
			$("#rubriques").show(1000, "linear");	  	
		});	
	}		

	//Quand on clique sur une rubrique du CV.	
	$('.boutonRubriques').click(function() {		

		if (!afficherRubrique) {			
			return false;		
		}
		
		var identifiant = $(this).attr('id');
				
		if (identifiant == "contact") {
			
			window.open("http://semrom.fr/contact.php", '_blank');
		
		} else {		

			afficherRubrique = false;		
			var identifiant = $(this).attr('id');		
			$(this).css({"background-color": "#2ad"});		
			$("#rubriques").animate({left: "-150%"}, 700, function() {					
	
				//On va chercher le contenu de la rubrique 			
				//dans le fichier PHP avec un appel Ajax.			
				$.ajax({				
					url : "../php/cv-content.php",				
					method : 'POST',				
					data : "id=" + identifiant, //$_POST['id'] en PHP				
					success: function(data) {					
					
						creerRubrique(data, identifiant);									
					}			
				});		
			});	
		}
	});		

	//Création du formulaire de contact.	
	function creerFormulaireContact(data, identifiant) {		

		$('section').prepend(			
			$('<div />')				
				.attr('id', 'content')				
				.html(data)				
				.fadeIn(1000)				
				.append(					
					$('<p />')
						.attr("id", "result"),					
					$('<form />')
						.attr("action", "../php/contact.php")						
						.attr("method", "POST")						
						.attr("id", "contact-form")						
						.css("padding", "15px")						
						.prepend(							
							$('<div />')								
								.attr("class", "ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset ui-input-has-clear")	
								.prepend(									
									$('<input />')										
										.attr('type', 'text')										
										.attr('name', 'completeName')										
										.attr('placeholder', 'Nom et/ou Prénom')							
								),							
							$('<div />')								
								.attr("class", "ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset ui-input-has-clear")
								.prepend(									
									$('<input />')										
										.attr('type', 'email')										
										.attr('name', 'mail')										
										.attr('placeholder', 'Email')							
								),							
							$('<textarea />')										
								.attr('name', 'message')										
								.attr('placeholder', 'Votre message...')										
								.attr('class', 'ui-input-text ui-shadow-inset ui-body-inherit ui-corner-all ui-textinput-autogrow')
								.attr('rows', '5')										
								.attr('cols', '50')										
								.css("resize", "none"),														
							$('<button />')										
								.attr("class", "ui-btn ui-btn-b ui-icon-mail ui-btn-icon-left ui-shadow-icon")
								.attr("type", "submit")										
								.text("Envoyer")						
						)//prepend						
						.submit(onSubmit),							

					//Bouton de retour.							
					$('<button />')								
						.attr("id", "close")								
						.attr("class", "ui-btn ui-btn-b ui-icon-carat-l ui-btn-icon-left ui-shadow-icon")
						.text("Retour")								
						.click(function(){									
							$(this).css({"background-color": "#2ad"});
							$("#content").animate({left: "150%"}, 700, function(){										
								$(this).remove();										
								$("#rubriques").animate({left: "0px"}, 700);										
								$("#" + identifiant).css({"background-color": ""});										
								afficherRubrique = true;									
							});								
						})					
				)//append		
		);//prepend	
	}		

	//Création d'une rubrique et de son contenu.	
	function creerRubrique(data, identifiant) {		

		$('section').prepend(			
			$('<div />')				
				.attr('id', 'content')				
				.html(data)				
				.fadeIn(1000)				
				.append(					
					//Bouton de retour.					
					$('<button />')						
						.attr("class", "ui-btn ui-btn-b ui-icon-carat-l ui-btn-icon-left ui-shadow-icon")						
						.text("Retour")						
						.click(function(){							
							$(this).css({"background-color": "#2ad"});							
							$("#content").animate({left: "150%"}, 700, function(){								
								$(this).remove();								
								$("#rubriques").animate({left: "0px"}, 700);								
								$("#" + identifiant).css({"background-color": ""});								
								afficherRubrique = true;							
							});						
						})				
				)		
		);	
	}		

	//Quand on envoie le formulaire de contact.	
	function onSubmit() {		

		var donnees = $("#contact-form").serialize();		
		$("#contact-form").find(":input").attr("disabled", "disabled");		
		$("#close").fadeOut();		
		$("#result").fadeOut();		
		$("#contact-form").fadeOut(function(){				
			$(this).find(":input").removeAttr("disabled");				
			$.ajax({					
				url: $("#contact-form").attr("action"),			       
				type: $("#contact-form").attr("method"),					
				data: donnees,					
				success: function(data) {						
					if(data.success) {							
						$("#result").css({
							"background-color": "green",								
							"font-size": "25px",								
							"color": "white"							
						});						
					} else {							
						$("#result").css({								
							"background-color": "red",								
							"font-size": "18px"							
						});							

						$("#contact-form").fadeIn();						
					}						

					$("#close").fadeIn();						
					$("#result").fadeIn().text(data.message);					
				},					
				error: function(data) {						
					alert("Erreur lors de l'envoi des données en Ajax.");						
					$("#contact-form").fadeIn();					
				}			    
			});			
		});				

		return false;	
	}			

	//Quand on clique sur le bouton "Accueil" du menu.	
	$("#home").click(function() {		
		//Éviter l'action de plusieurs clics d'affilés		
		if (!afficherAccueil) {			
			return false;		
		}				

		afficherAccueil = false;		
		afficherAPropos = true;		
		$("#description").fadeOut(600, function(){			
			$("section").fadeIn(600);		
		});	
	});	

	//Quand on clique sur le bouton "A Propos" du menu.	
	$("#about").click(function() {		
		//Eviter l'action de plusieurs clics d'affilés.		
		if (!afficherAPropos) {			
			return false;		
		}		

		//$(".boutonRubriques").attr("disabled", "disabled");		
		afficherAPropos = false;		
		afficherAccueil = true;		
		$("section").fadeOut(600, function(){			
			$("#description").fadeIn(600);		
		});	
	});	
});//DOM