Sci-Hub-Fy
==========

Chrome extension that passes URLs to Sci-Hub, allowing free access to scientific articles.

The hard work is done by [Sci-Hub].

**Note:** The extension got removed from Chrome Store as they "don't allow products or services that facilitate unauthorized access to content on websites, such as circumventing paywalls or logins restrictions.". Of course you can just manually prepend "http://sci-hub.tw/" to the URL, but if you still want to automate this, the instructions below should make it work.

## Installation

You can load it as an unpacked extension in developer mode on Chrome. Follow this instructions:

1. Clone this repo: `git clone https://github.com/allanino/sci-hub-fy.git`. Take note where you cloned it.
2. Open Chrome and access `chrome://extensions`, or just open the menu -> settings -> extensions.
3. Check the developer mode in upper right.
4. Click "Load unpacked extension" button
5. Select the folder into which you cloned **Sci-Hub-Fy** and click "Open".
6. We're done. The extension should be available as if installed from Chrome store.

## Context menu

Another way of using this extension is through the context menu (right-click):

- Link context: if you right-click a link and select Sci-Hub-Fy, we prepend "http://sci-hub.tw/" to the link and redirect you to it.
- Page context: if you right-click anywhere but a link in a page, we prepend "http://sci-hub.tw/" to the page's URL and redirect you to it (the same as clicking in the extension icon).

[Sci-Hub]:http://sci-hub.tw
