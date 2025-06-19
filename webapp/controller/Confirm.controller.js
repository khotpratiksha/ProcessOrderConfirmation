sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
    "use strict";
    return Controller.extend("com.demo.processorder.controller.Confirm", {
        onInit: function(){
            var oModel = new JSONModel({
                orderNo:"",
                material:"",
                remaining:0,
                quantity:0,
                sample:0,
                final:true,
                timeVisible:false
            });
            this.getView().setModel(oModel);
        },
        onNavBack: function(){
            this.getOwnerComponent().getRouter().navTo("Order");
        },
        onPost: function(){
            MessageToast.show("Posting not implemented in demo.");
        }
    });
});
