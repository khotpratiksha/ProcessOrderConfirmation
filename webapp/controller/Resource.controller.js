sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict";
    return Controller.extend("com.demo.processorder.controller.Resource", {
        onInit: function(){
            var oModel = new JSONModel({valid:false});
            this.getView().setModel(oModel, "resource");
        },
        onInputChange: function(oEvent){
            var val = oEvent.getParameter("value");
            this.getView().getModel("resource").setProperty("/valid", !!val);
        },
        onContinue: function(){
            var res = this.getView().byId("resourceInput").getValue();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Order", {resource: res});
        }
    });
});
