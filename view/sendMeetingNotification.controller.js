sap.ui.controller("test1.view.sendMeetingNotification", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf test1.view.sendMeetingNotification
	 */
	onInit: function() {
	        // set mock model
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.getData("./emailID.json");
        this.getView().setModel(oModel);
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf test1.view.sendMeetingNotification
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf test1.view.sendMeetingNotification
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf test1.view.sendMeetingNotification
	 */
	//	onExit: function() {
	//
	//	}
	
	 onNavBack: function(){
        window.history.go(-1);
    },
    
     	// ____ Handler method for open Menu
    handlePressOpenMenu: function(oEvent) {
        this.getOwnerComponent().handlePressOpenMenu(oEvent);
    },
    
    handleInformAllMembers: function(){
        
        //var emailIDs = {EmailIDs};
        var sBodyText = "";
        var textField = this.getView().byId("emailBody");
        if (textField) {
            sBodyText = textField.getValue();
        }
        
         sap.m.URLHelper.triggerEmail("harini.gunabalan@sap.com, george.mcnally@sap.com, deirdre.commins@sap.com", "SAP Innojam - Meeting Notification", sBodyText);
    }

});