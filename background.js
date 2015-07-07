var isFullscreen = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {
    code: 'ykfullscreen_toggleFullsreen(' + isFullscreen + ')'
  }, function() {
    var title = isFullscreen ? '点击进入网页全屏模式' : '点击退出网页全屏模式';
    chrome.browserAction.setTitle({
      title: title
    });
    isFullscreen = !isFullscreen;
  });
});
