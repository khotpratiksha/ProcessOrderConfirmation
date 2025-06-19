sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict";
    return Controller.extend("com.demo.processorder.controller.Order", {
        onInit: function(){
            var oModel = new JSONModel({valid:false});
            this.getView().setModel(oModel, "order");
        },
        onInputChange: function(oEvent){
            var val = oEvent.getParameter("value");
            this.getView().getModel("order").setProperty("/valid", !!val);
        },
        onContinue: function(){
            var order = this.getView().byId("orderInput").getValue();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Confirm", {order: order});
        },
        onNavBack: function(){
            this.getOwnerComponent().getRouter().navTo("Resource");
        }
    });
});
