const io = require("socket.io-client");

const TOKEN1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NzM3NDgwMjgsImV4cCI6MTc3Mzc0ODkyOH0.a2nQ3LXjhyBy487_OxVZTjrKy_UyvFyfFe3uce7-KSk";
const TOKEN2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NzM3NDgwMjgsImV4cCI6MTc3Mzc0ODkyOH0.AO974YtOCjBR67NUlWLQ5OfEdPD75Oz4NNJB8sJw6Oo";

const url = "https://api.chhattisgarhshadi.com";

const socket1 = io(url, { auth: { token: TOKEN1 } });
const socket2 = io(url, { auth: { token: TOKEN2 } });

let promisesCompleted = 0;

const finish = () => {
    promisesCompleted++;
    if(promisesCompleted === 2) {
        console.log("TEST COMPLETED");
        process.exit(0);
    }
}

socket2.on("connect", () => {
    console.log("Socket 2 (User 2) connected!");
    
    socket2.on("message:receive", (msg) => {
        console.log("=== USER 2 RECEIVED MESSAGE ===", msg);
        
        // Emulate sending read receipt
        socket2.emit("message:read", { userId: 1 });
        finish();
    });
});

socket1.on("connect", () => {
    console.log("Socket 1 (User 1) connected!");
    
    setTimeout(() => {
        console.log("User 1 typing...");
        socket1.emit("typing:start", { receiverId: 2 });
        
        setTimeout(() => {
            console.log("User 1 sending message...");
            socket1.emit("message:send", { receiverId: 2, content: "Hello from test script! " + Date.now() }, (res) => {
                console.log("Message send ack:", res);
                if (res.success) finish();
                else {
                    console.log("FAILED TO SEND:", res);
                    finish();
                }
            });
            socket1.emit("typing:stop", { receiverId: 2 });
        }, 1000);
    }, 1000);
});

socket1.on("error", console.error);
socket2.on("error", console.error);
socket1.on("connect_error", console.error);
socket2.on("connect_error", console.error);

setTimeout(() => {
    console.log("Timeout reached");
    process.exit(1);
}, 5000);
