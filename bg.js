function processData(data,sender,sendResponse){
    var notif = webkitNotifications.createNotification('icon.png',data.who,data.msg);
    notif.onclick = function(e) {
	chrome.tabs.query(
	    {url: "https://www.facebook.com/*"},
            function(tabs) {
                chrome.tabs.update(tabs[0].id,{selected:true});
		chrome.windows.update(tabs[0].windowId,{focused:true});
            });
	this.close();
    };
    notif.show();
}

chrome.runtime.onMessage.addListener(processData);
