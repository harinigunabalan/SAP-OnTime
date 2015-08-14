// define a root UI component that exposes the main view
jQuery.sap.declare("test1.Component");
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

sap.ui.core.UIComponent.extend("test1.Component", {
	metadata: {
		"name": "test1",
		"version": "1.1.0-SNAPSHOT",
		"library": "test1",
		"includes": ["css/fullScreenStyles.css"],
		"dependencies": {
			"libs": ["sap.m", "sap.ui.layout"],
			"components": []
		},
		"config": {
			resourceBundle: "i18n/messageBundle.properties",
			serviceConfig: {
				name: "",
				serviceUrl: ""
			}
		},
		routing: {
			// The default values for routes
			config: {
				"viewType": "XML",
				"viewPath": "test1.view",
				"targetControl": "fioriContent", // This is the control in which new views are placed
				"targetAggregation": "pages", // This is the aggregation in which the new views will be placed
				"clearTarget": false
			},
			routes: [
				{
					pattern: "",
					name: "main",
					view: "Master"
				},
				{   
					pattern: "/notify",
					name: "notify",
					view: "notify"
				},
			
				{   
					pattern: "/sendMeetingNotification",
					name: "sendMeetingNotification",
					view: "sendMeetingNotification"
				},
				{   
					pattern: "/InformColleagues",
					name: "InformColleagues",
					view: "InformColleagues"
				},
				{   
					pattern: "/InformMeetingOrganiser",
					name: "InformMeetingOrganiser",
					view: "InformMeetingOrganiser"
				},
					{   
					pattern: "/LateArrivalMsg",
					name: "LateArrivalMsg",
					view: "LateArrivalMsg"
				},
				{   
					pattern: "/Settings",
					name: "Settings",
					view: "Settings"
				},
				
				{   
					pattern: "/ScheduleAMeeting",
					name: "ScheduleAMeeting",
					view: "ScheduleAMeeting"
				},
				
				{   
					pattern: "/ChooseAttendees",
					name: "ChooseAttendees",
					view: "ChooseAttendees"
				}
				
			]
		}
	},

	/**
	 * Initialize the application
	 *
	 * @returns {sap.ui.core.Control} the content
	 */
	createContent: function() {
		var oViewData = {
			component: this
		};

		return sap.ui.view({
			viewName: "test1.view.Main",
			type: sap.ui.core.mvc.ViewType.XML,
			viewData: oViewData
		});
	},

	init: function() {
		// call super init (will call function "create content")
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		// always use absolute paths relative to our own component
		// (relative paths will fail if running in the Fiori Launchpad)
		var sRootPath = jQuery.sap.getModulePath("test1");

		// The service URL for the oData model 
		var oServiceConfig = this.getMetadata().getConfig().serviceConfig;
		var sServiceUrl = oServiceConfig.serviceUrl;

		// the metadata is read to get the location of the i18n language files later
		var mConfig = this.getMetadata().getConfig();
		this._routeMatchedHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter(), this._bRouterCloseDialogs);

		// create oData model
		this._initODataModel(sServiceUrl);

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: [sRootPath, mConfig.resourceBundle].join("/")
		});
		this.setModel(i18nModel, "i18n");

		// initialize router and navigate to the first page
		this.getRouter().initialize();

	},
	
	 handleMenuItemSettingsPress: function(){
       this.getRouter().navTo("Settings");
    },
    
    // ____ Handler method for open Menu
    handlePressOpenMenu: function(oEvent) {
        var oButton = oEvent.getSource();

        // create menu only once
        if (!this._menu) {
          this._menu = sap.ui.xmlfragment(
            "test1.view.MenuItemEventing",
            this
          );
          //this.getView().addDependent(this._menu);
        }
        var eDock = sap.ui.core.Popup.Dock;
        this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
    },

	exit: function() {
		this._routeMatchedHandler.destroy();
	},

	// This method lets the app can decide if a navigation closes all open dialogs
	setRouterSetCloseDialogs: function(bCloseDialogs) {
		this._bRouterCloseDialogs = bCloseDialogs;
		if (this._routeMatchedHandler) {
			this._routeMatchedHandler.setCloseDialogs(bCloseDialogs);
		}
	},

	// creation and setup of the oData model
	_initODataModel: function(sServiceUrl) {
		jQuery.sap.require("test1.util.messages");
		var oConfig = {
			metadataUrlParams: {},
			json: true,
			// loadMetadataAsync : true,
			defaultBindingMode: "TwoWay",
			defaultCountMode: "Inline",
			useBatch: true
		};
		var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, oConfig);
		oModel.attachRequestFailed(null, test1.util.messages.showErrorMessage);
		this.setModel(oModel);
	}
});