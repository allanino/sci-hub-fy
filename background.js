// Copyright (c) 2014 Allan Costa.

function appendSciHub(tab, link){
  // Tab is the tab to be redirected and link is the link to append sci-hub.io
  var arr = link.split('/');
  arr[2] = arr[2] + ".sci-hub.io";
  var new_url = arr.join('/');

  console.log('Redirecting ' + tab.url + ' to ' + new_url);

  chrome.tabs.update(tab.id, {url: new_url});
}

// Setup extension click action
chrome.browserAction.onClicked.addListener(function(tab) {
  appendSciHub(tab, tab.url);
});

// Setup context menu actions
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'Sci-Hub-Fy',
        id: 'page', // you'll use this in the handler function to identify this context menu item
        contexts: ['page'],
    });
    chrome.contextMenus.create({
        title: 'Sci-Hub-Fy',
        id: 'link', // you'll use this in the handler function to identify this context menu item
        contexts: ['link'],
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "page") { // here's where you'll need the ID
      appendSciHub(tab, tab.url);
    } else if (info.menuItemId === "link") {
      appendSciHub(tab, info.linkUrl);
    };
});
