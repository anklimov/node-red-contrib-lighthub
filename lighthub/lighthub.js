module.exports = function(RED) {

  function lighthub(config) {
    var node = this;

    // Create our node and event handler
    RED.nodes.createNode(this, config);

    node.on('input', function(msg) {
    msg.payload = msg.payload.toLowerCase();
    node.send(msg);
});
}




  // Map actionflows with `action in` assocations on scope settings
  function runtimeMap() {
  }


  RED.nodes.registerType("lighthub", lighthub);
  RED.events.on("nodes-started", runtimeMap);
}
