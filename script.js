function addMessage() {
    let profileInput = document.getElementById("profilePic");
    let profilePic = profileInput.files[0] ? URL.createObjectURL(profileInput.files[0]) : "default.png"; // Default image
    let username = document.getElementById("username").value || "Unknown User";
    let message = document.getElementById("message").value;

    if (!message.trim()) {
        alert("Please enter a message!");
        return;
    }

    let chatBox = document.getElementById("chatBox");

    let chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message");

    chatMessage.innerHTML = `
        <img src="${profilePic}" alt="Profile">
        <p><strong>${username}:</strong> ${message}</p>
    `;

    chatBox.appendChild(chatMessage);

    document.getElementById("message").value = "";
}

function downloadChat() {
    html2canvas(document.getElementById("chatBox")).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "fake_chat.png";
        link.click();
    });
}

// Load HTML2Canvas for image download
let script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
document.body.appendChild(script);
