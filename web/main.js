(function(wHandle) {
    var socket = new WebSocket("ws://127.0.0.1:3000");
    console.log("Attempting Connection...");

    function init() {
        console.log("helloworld!");

        socket.onopen = () => {
            console.log("Successfully Connected");
            socket.send("Hi From the Client!")
        };
        
        socket.onclose = event => {
            console.log("Socket Closed Connection: ", event);
            socket.send("Client Closed!")
        };

        socket.onerror = error => {
            console.log("Socket Error: ", error);
        };
    }

    wHandle.onload = init;
})(window);