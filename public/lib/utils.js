

window.appendScriptToHead = function(scriptUrl) {
    if(!scriptUrl) {
        console.error("linkUrl is required!");
        return;
    }

    var script = window.document.createElement('script');
    script.id = scriptUrl;
    script.src = scriptUrl;
    window.document.head.appendChild(script);
}

window.appendLinkToHead = function(linkUrl, relType) {
    if(!linkUrl) {
        console.error("linkUrl is required!");
        return;
    }

    if(!window.document.getElementById(linkUrl)) {
        var link = window.document.createElement('link');
        link.id = linkUrl;
        link.rel = relType || 'import';
        link.href = linkUrl;

        console.log(window.document.head);
        window.document.head.appendChild(link);
        console.log(window.document.head);
    }
}