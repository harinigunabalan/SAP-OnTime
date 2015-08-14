sap.ui.controller("test1.view.ScheduleAMeeting", {
             /**
                * Called when a controller is instantiated and its View controls (if available) are already created.
                * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
                * @memberOf view.ScheduleAMeeting
                */
                //            onInit: function() {
                //
                //            },

                /**
                * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
                * (NOT before the first rendering! onInit() is used for that one!).
                * @memberOf view.ScheduleAMeeting
                */
                //            onBeforeRendering: function() {
                //
                //            },

                /**
                * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
                * This hook is the same one that SAPUI5 controls get after being rendered.
                * @memberOf view.ScheduleAMeeting
                */
                //            onAfterRendering: function() {
                //
                //            },

                /**
                * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
                * @memberOf view.ScheduleAMeeting
                */
                //            onExit: function() {
                //
                //            }
                
                onPress: function() {
                    sap.ui.core.UIComponent.getRouterFor(this).navTo("ChooseAttendees");
                },
                
                onNavBack: function() {
                                window.history.go(-1);
                },
                
                handleSelectDialogPress: function (oEvent) {
    if (! this._oDialog) {
      this._oDialog = sap.ui.xmlfragment("Test1.Dialog", this);
      this._oDialog.setModel(this.getView().getModel());
    }

    // Multi-select if required
    var bMultiSelect = !!oEvent.getSource().data("multi");
    this._oDialog.setMultiSelect(bMultiSelect);

    // Remember selections if required
    var bRemember = !!oEvent.getSource().data("remember");
    this._oDialog.setRememberSelections(bRemember);

    // clear the old search filter
    this._oDialog.getBinding("items").filter([]);

    // toggle compact style
    jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
    this._oDialog.open();
  },
 
 	// ____ Handler method for open Menu
    handlePressOpenMenu: function(oEvent) {
        this.getOwnerComponent().handlePressOpenMenu(oEvent);
    },
    
    onSchedule: function(){
       
        window.history.go(-1);
         sap.m.MessageToast.show("Meeting Scheduled/Rescheduled");
    }

});