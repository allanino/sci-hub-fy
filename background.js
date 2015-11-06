// Copyright (c) 2014 Allan Costa.

chrome.browserAction.onClicked.addListener(function(tab) {
  var arr = tab.url.split('/');
  arr[2] = arr[2] + ".sci-hub.io";
  var new_url = arr.join('/');

  console.log('Redirecting ' + tab.url + ' to ' + new_url);

  chrome.tabs.update(tab.id, {url: new_url});
});
