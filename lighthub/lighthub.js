module.exports = function(RED) {

  function lighthub(config) {
    var node = this;

    // Create our node and event handler
    RED.nodes.createNode(this, config);

    node.on('input', function(msg, send, done)) {
    msg.payload = msg.payload.toLowerCase();
    node.send(msg);
    done();
});
}




  // Map actionflows with `action in` assocations on scope settings
  function onStart() {
  this.status({fill:"red",shape:"ring",text:"disconnected"});
  }




  RED.nodes.registerType("lighthub", lighthub){
    settings: {
        config: {
            value: "red",
            exportable: true
        }
    }
};

  RED.events.on("nodes-started", runtimeMap);
}
