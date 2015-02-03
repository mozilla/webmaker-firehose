var FirehoseDispatcher = require("../dispatcher/FirehoseDispatcher");
var FirehoseConstants = require("./FirehoseConstants");
var EventEmitter = require("events").EventEmitter;

var FirehoseActions = Object.assign({}, EventEmitter.prototype, {
  toggleFeature: function() {
    FirehoseDispatcher.dispatch({
      actionType: FirehoseConstants.TOGGLE_FEATURE
    });
  },
  trash: function() {
    FirehoseDispatcher.dispatch({
      actionType: FirehoseConstants.TRASH
    });
  },
  navigate: function(delta) {
    FirehoseDispatcher.dispatch({
      actionType: FirehoseConstants.NAVIGATE,
      delta: delta
    });
  },
  addListener: function(actionType, callback) {
    this.on(actionType, callback);
  },
  removeListener: function(actionType, callback) {
    this.removeListener(actionType, callback);
  },
  emitEvent: function(actionType, data) {
    this.emit(actionType, data);
  }
});

FirehoseDispatcher.register(function(payload) {
  switch(payload.actionType) {
    case FirehoseConstants.TOGGLE_FEATURE:
      FirehoseActions.emitEvent(FirehoseConstants.TOGGLE_FEATURE);
      break;

    case FirehoseConstants.TRASH:
      FirehoseActions.emitEvent(FirehoseConstants.TRASH);
      break;

    case FirehoseConstants.NAVIGATE:
      FirehoseActions.emitEvent(FirehoseConstants.NAVIGATE, payload.delta);
      break;
    default:
      // no op
  }
})

module.exports = FirehoseActions;
