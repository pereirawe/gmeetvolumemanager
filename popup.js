// https://developer.chrome.com/docs/extensions/mv3/getstarted/

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       function: setPageBackgroundColor,
//     });
// });

// function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//         document.body.style.backgroundColor = color;
//     });
// }


// volumeValue.addEventListener("change", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: changerVolume,
//     });
// });



volumeValue_0.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: changerVolume_0,
    });
});

volumeValue_25.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: changerVolume_25,
    });
});

volumeValue_50.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: changerVolume_50,
    });
});

volumeValue_75.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: changerVolume_75,
    });
});

volumeValue_100.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: changerVolume_100,
    });
});

function changerVolume_0(volume) {
    a = document.getElementsByTagName('audio');
    for(i=0;i<a.length;i++){
        a[i].volume=0;
    }
    console.log('Volume: 0%')
}

function changerVolume_25(volume) {
    a = document.getElementsByTagName('audio');
    for(i=0;i<a.length;i++){
        a[i].volume=.25;
    }
    console.log('Volume: 25%')
}
function changerVolume_50(volume) {
    a = document.getElementsByTagName('audio');
    for(i=0;i<a.length;i++){
        a[i].volume=.50;
    }
    console.log('Volume: 50%')
}

function changerVolume_75(volume) {
    a = document.getElementsByTagName('audio');
    for(i=0;i<a.length;i++){
        a[i].volume=.75;
    }
    console.log('Volume: 75%')
}

function changerVolume_100(volume) {
    a = document.getElementsByTagName('audio');
    for(i=0;i<a.length;i++){
        a[i].volume=1;
    }
    console.log('Volume: 100%')
}
