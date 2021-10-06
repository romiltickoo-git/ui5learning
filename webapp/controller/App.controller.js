// sap.ui.define([
// 	"sap/ui/core/mvc/Controller"
// ], function(
// 	Controller
// ) {
// 	"use strict";
// 	return Controller.extend("Search.po.controller.App", {
//         onPress: function()
//         {
//             alert("Hello Ui5");
//         }
        
//     });
// });


// ----------------------------------------------------------------------------------//
// Here you can see we have created a local json model file inside the onInit function
// Same model we set that model in the view and if you can see the App.view.xml file
// there we have done the Property binding : with the use of /<modelname>/fieldname
// ----------------------------------------------------------------------------------//


sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
	Controller,JSONModel
) {
	"use strict";
	return Controller.extend("Search.po.controller.App", {
        onInit : function()
        {
// -----------Local Model in the JSON Format--------------------//
            var poinput = {
                            poinput : {
                                            ponumber : "RogerModel"
                                      }
                          };
//--------------------------------------------------------------//

//----------Create object of JSON Model with parameter variable of above one.
           var oModel = new JSONModel(poinput); 
//----------Set the same model in the view which is current view this.getView()          
           this.getView().setModel(oModel,);              
        },


        onPress: function()
        {
            alert("Hello Ui5");
        }
        
    });
});