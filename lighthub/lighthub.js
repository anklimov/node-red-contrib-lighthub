module.exports = function(RED) {

  RED.nodes.registerType("lighthub", lighthub);
  function lighthub(config) {
    var node = this;

    // Create our node and event handler
    RED.nodes.createNode(this, config);
}




  // Map actionflows with `action in` assocations on scope settings
  function runtimeMap() {
  }


  RED.events.on("nodes-started", runtimeMap);
}
