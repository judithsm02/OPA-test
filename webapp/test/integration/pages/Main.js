sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "Main";
	
	Opa5.createPageObjects({
		onTheViewPage: {

			actions: {},

			assertions: {

				iShouldSeeThePageView: function () {
					return this.waitFor({
						id: "page",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				},
				iShouldFindAButton: function () {
						return this.waitFor({ //aixo fa que l'entorn de proves s'esperi a que el botó estigui disponible en la vista espcifica. 
							id:"helloButton", //busca el ID hellobutton en un view en concreto. 
							viewName:sViewName, //aixo es una variable local definida més a dalt. fa referència al view.
							success: function(oButton){ // la variable oButton representa el botó que s'ha trobat
								oButton.$().trigger("press"); //Esto activa el evento “press” en el botón. En otras palabras, simula que alguien hizo clic en el botón. 
																//El $() se utiliza para acceder al elemento jQuery del botón.
								Opa5.assert.ok(oButton.getId(), "Button with the given ID found");	//						
							},
							errorMessage:"Did not found this ID button",
							timeout:"3"
						});						
					
				}
			}
		}
	});

});
