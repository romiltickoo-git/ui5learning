sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";
	return Controller.extend("Search.po.controller.App", {
        onPress: function()
        {
            alert("Hello Ui5");
        }
        
    });
});