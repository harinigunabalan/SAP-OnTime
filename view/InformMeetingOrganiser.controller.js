sap.ui.controller("test1.view.InformMeetingOrganiser", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf test1.view.InformMeetingOrganiser
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf test1.view.InformMeetingOrganiser
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf test1.view.InformMeetingOrganiser
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf test1.view.InformMeetingOrganiser
	 */
	//	onExit: function() {
	//
	//	}

	onNavBack: function() {
		window.history.go(-1);
	},
	
		// ____ Handler method for open Menu
    handlePressOpenMenu: function(oEvent) {
        this.getOwnerComponent().handlePressOpenMenu(oEvent);
    },

	handleLateArrivalMsg: function() {
		sap.ui.core.UIComponent.getRouterFor(this).navTo("LateArrivalMsg");
	},

	handleTelPress: function() {
		sap.m.URLHelper.triggerTel("+4917641637817");
	}

});