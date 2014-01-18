
function updatePoller() {
    if (Number(document.getElementById("mercurymessagesCountValue").innerText) > 0) {
	document.querySelector("[name=mercurymessages]").click();
    }
    var newmsgs = document.querySelectorAll(".jewelItemNew");
    if (newmsgs.length > 0) {
	for (i =0; i < newmsgs.length; i++) {
	    var el = newmsgs[i].querySelector(".content");
	    var who = el.querySelector(".author strong").innerText;
	    var msg = el.querySelector(".snippet>span").innerText;
	    newmsgs[i].querySelector(".messagesContent").click();
	    chrome.runtime.sendMessage({"who":who,"msg":msg});
	}
    }
}

var checker = setInterval(updatePoller,500);
