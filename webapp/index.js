//-----------------------------------------------------------------------------------//
// *--------------Program No :2--------------* 
// *----Now here we are going to use the SAP UI5 Controls----* 
// So we will use the Text and we will create the object for the same use the Text property and then  
// place it in the content.
//-----------------------------------------------------------------------------------//

// sap.ui.define([
//     "sap/m/Text"
// ], function(Text) {
// 	"use strict";
// new Text({
//     text : "Purchase order Report"
// }).placeAt("content");
// });



//------Program No:3 --------------------------------------------------------------------//
// To create XML View from index.js file 
// Here we use the create method of XMl and use viewName as a property of method
// then we use the promise which is return of xml and then place it in the content.
// Actually this will return a view and same we will place it in the content.
//---------------------------------------------------------------------------------------//

sap.ui.define([
"sap/ui/core/mvc/XMLView"
],function(XMLView){
    "use strict";

    XMLView.create({
        viewName : "Search.po.view.App"
    }).then(function(oView){
        oView.placeAt("content");
    });
});