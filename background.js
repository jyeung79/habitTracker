chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log('In webRequest');
        return {cancel: true};
    }, {
        urls: ["https://www.youtube.com/*", "https://www.facebook.com/*"]
    }, ["blocking"]
);