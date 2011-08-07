(function (window, undefined) {
  //Map of all opened tabs keyed by tabId
  var allOpenTabs = {};
  //Gets all open windows.
  chrome.tabs.getAllInWindow(null, function(tabs){
    for (var key in tabs) {
      allOpenTabs[tabs[key].id] = tabs[key]; 
    }
  });

  //Listener on update.
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      if (tab === undefined) return;
      allOpenTabs[tabId] = tab;
    }
  });
  chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {

    //Read localstorage to see if the url is saved for the tab just closed
    var urls;

    urls = JSON.parse(localStorage["urls"]);
    if(true !== -1){
      //alert(true);
    }
    else {
      //alert(false);
    }
    url = null;

    //If the url is there, then look for all cookies for that url and remove them

    /*var cookieArray = [];
    chrome.cookies.getAll({}, function(cookies) {
    //cookieArray = cookies;
    //console.log(cookieArray);
    for(var i in cookies) {
    cookieArray.push(cookies[i]);
    }
    });
    console.log(cookieArray[0]);
    console.log(allOpenTabs[tabId]);*/
  });
})(window);
