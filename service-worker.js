chrome.action.onClicked.addListener((tab) => {
    const url = new URL(tab.url)
    url.protocol = "http:"
    url.host = "localhost:9001"
    chrome.tabs.update({
        url: url.toString(),
    });
});
