sap.ui.controller("test1.view.InformColleagues", {

                /**
                * Called when a controller is instantiated and its View controls (if available) are already created.
                * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
                * @memberOf SAP.view.InformMeetingOrganiser
                */
                //            onInit: function() {
                //
                //            },

                /**
                * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
                * (NOT before the first rendering! onInit() is used for that one!).
                * @memberOf SAP.view.InformMeetingOrganiser
                */
                //            onBeforeRendering: function() {
                //
                //            },

                /**
                * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
                * This hook is the same one that SAPUI5 controls get after being rendered.
                * @memberOf SAP.view.InformMeetingOrganiser
                */
                //            onAfterRendering: function() {
                //
                //            },

                /**
                * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
                * @memberOf SAP.view.InformMeetingOrganiser
                */
                //            onExit: function() {
                //
                //            }
                
    onNavBack: function() {
        window.history.go(-1);
    },
    
    
    handleInformMeetingOrganiser: function() {
        sap.ui.core.UIComponent.getRouterFor(this).navTo("InformMeetingOrganiser");
    },

     	// ____ Handler method for open Menu
    handlePressOpenMenu: function(oEvent) {
        this.getOwnerComponent().handlePressOpenMenu(oEvent);
    },

            
    handleInformNewAll: function(){
	    var sBodyText = "";
        var textField = this.getView().byId("emailBody");
        if (textField) {
            sBodyText = textField.getValue();
        }
        if(sBodyText === ""){
            sBodyText = " I will be approximately 10 minutes late for this meeting. Sorry for any inconvenience caused.";
        }
	    sap.m.URLHelper.triggerEmail("test1@abc.com, test2@abc.com, test3@abc.com", "SAP Innojam - Late Arrival Email Notification", sBodyText); 
	}
});
