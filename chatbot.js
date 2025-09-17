/*chatbot*/
 function sendMessage() {
  var input = document.getElementById("user-input").value;
  var chatLog = document.getElementById("chat-log");

  if (input == "") {
    return;
  }

  var userMsg = document.createElement("p");
  userMsg.innerHTML = "You: " + input;
  chatLog.appendChild(userMsg);

  var botMsg = document.createElement("p");
  if (input == "hello") {
    botMsg.innerHTML = "Bot: hi";
  } else if (input == "how are you") {
    botMsg.innerHTML = "Bot: I am fine";
  } else {
    botMsg.innerHTML = "Bot: I don't understand";
  }
  chatLog.appendChild(botMsg);

  document.getElementById("user-input").value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}

 