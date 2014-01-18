function processData(data,sender,sendResponse){
    console.log(data.who,data.msg);
    var notif = webkitNotifications.createNotification('icon.png',data.who,data.msg);
    notif.onclick = function(e) {
	chrome.tabs.query(
	    {url: "https://www.facebook.com/*"},
            function(tabs) {
                chrome.tabs.update(tabs[0].id,
                                   {selected:true});
            });
	this.close();
    };
    notif.show();
}

chrome.runtime.onMessage.addListener(processData);
