function remove(document) {
    document.documentElement.innerHTML = "";
}
addEventListener("DOMContentLoaded", function() {
    document.getElementById("Btn").addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
            const currentPageUrl = tabs[0].url;

            chrome.storage.local.set({ page: currentPageUrl}, function() {
                alert(currentPageUrl);
            })
        })
      });
      
})

addEventListener("DOMContentLoaded", function() {
    document.getElementById("Btn-remove").addEventListener("click", () => {
        chrome.storage.local.remove('page', function() {
            alert('removed');
        })
    })
})

function getPageUrl(callback)  {
    chrome.storage.local.get(['page'], function(result) {
        const currentPageUrl = result.page

        callback(currentPageUrl)
    })
}
getPageUrl(function(url) {
    if(window.location.href.includes(url)) {
    

        document.documentElement.innerHTML = '';
    
        const blocked = `
        
          
        
        <body style="display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 24px; background-color: #0d0d15;font-family: 'Segoe UI'"> 
        <div style="display: block;margin:72px auto; position: relative; width: 600px; padding: 48px; border-radius: 8px; box-shadow: 0 2px 8px 0 rgba(0,0,0,0.16); box-sizing: border-box;background: #1d1c28">
            <span style="color: white;"> Website Blocked <span/>
        <div/>
        <body/>`
        document.documentElement.innerHTML = blocked;
    }
})
