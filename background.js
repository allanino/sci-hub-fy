// Copyright (c) 2014 Allan Costa.

function sciHubFy(link, sciHubDomain) {
  // Use the link to search on Sci-Hub
  return "http://" + sciHubDomain + '/' + link;
}

function newTabSciHubFy(tab, link) {
  // Tab is the current tab and link is the link to append sci-hub.io
  chrome.storage.sync.get({
    domain: 'sci-hub.se' // Updated default domain ( As of DEC 03 - 2017 )
  }, function(items) {
    chrome.tabs.query({
        active: true
      }, tabs => {
        let index = tabs[0].index;
        chrome.tabs.create({index: index + 1, url: sciHubFy(link, items.domain)});
      }
    );
  });
}

function sameTabSciHubFy(tab, link) {
  // Tab is the current tab and link is the link to append sci-hub.io
  chrome.storage.sync.get({
    domain: 'sci-hub.se' // Updated default domain ( As of DEC 03 - 2017 )
  }, function(items) {
    chrome.tabs.update(tab.id, {url: sciHubFy(link, items.domain)});
  });
}

function openOptions(){
  if (chrome.runtime.openOptionsPage) {
  // New way to open options pages, if supported (Chrome 42+).
  chrome.runtime.openOptionsPage();
  } else {
    // Reasonable fallback.
    window.open(chrome.runtime.getURL('options.html'));
  }
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
    }
});
