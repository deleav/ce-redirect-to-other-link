const ORIGINAL_URL_REGEX = /https?:\/\/www\.google\.com/;
const STRING_TO_BE_REPLCED = '';
const TARGET_STRING = '';

chrome.tabs.onCreated.addListener(function(tab) {
  if (ORIGINAL_URL_REGEX.test(tab.pendingUrl)) {
    chrome.tabs.update(tab.id, {
      url: tab.pendingUrl.replace(STRING_TO_BE_REPLCED, TARGET_STRING),
    });
  }
});