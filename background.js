chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log('In webRequest');
        return {
            redirectUrl: chrome.extension.getURL('timer.html') 
        };
    }, {
        urls: ["https://www.youtube.com/*", "https://www.facebook.com/*"]
    }, ["blocking"]
);