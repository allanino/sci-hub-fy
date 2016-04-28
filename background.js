// Copyright (c) 2014 Allan Costa.

function sciHubFy(link) {
  // Append sci-hub.io to link's domain
  let arr = link.split('/');
  arr[2] = arr[2] + ".sci-hub.io";
  return arr.join('/');
}

function newTabSciHubFy(tab, link) {
  // Tab is the current tab and link is the link to append sci-hub.io
  chrome.tabs.query({
      active: true
    }, tabs => {
      let index = tabs[0].index;
      chrome.tabs.create({index: index + 1, url: sciHubFy(link)});
    }
  );
}

function sameTabSciHubFy(tab, link) {
  // Tab is the current tab and link is the link to append sci-hub.io
  chrome.tabs.update(tab.id, {url: sciHubFy(link)});
}

// Setup extension click action
chrome.browserAction.onClicked.addListener(function(tab) {
  sameTabSciHubFy(tab, tab.url);
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
      sameTabSciHubFy(tab, tab.url);
    } else if (info.menuItemId === "link") {
      newTabSciHubFy(tab, info.linkUrl);
    };
});
