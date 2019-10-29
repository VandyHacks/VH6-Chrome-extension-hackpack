/* File: popup.js
 * -----------------------
 * This javascript file restores settings when the DOM loads.
 * You shouldn't have to change this file unless you also
 * change the corresponding popup.html file.
 */

// Here we are connecting the button in the extension popup to the current page DOM.
// Included are 3 different ways to go about this.

/* Method 1: Programmatic Injection
We are adding an event-listener to the popup to wait for the page's DOM to load in.
Once that is done, we add an event-listener to the button in the popup to inject and execute the code from
content.js. 
*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("matt").addEventListener("click", function() {
        // We are executing the content script that will manipulate the page's DOM.
        chrome.tabs.executeScript(null, { file: "src/content.js" });
    });
});

/* Method 2: Message Passing
We will implement a message passing mechanism to communicate when to run the code from content.js.
Here we are sending a JSON object as a message with the value for action being 'executeCode'.
Go to content.js to see the rest of this method. 
*/
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("matt").addEventListener("click", function() {
//         chrome.tabs.query({ active: true, currentWindow: true }, function(
//             activeTabs
//         ) {
//             chrome.tabs.sendMessage(activeTabs[0].id, {
//                 action: "executeCode"
//             });
//         });
//     });
// });

/* Method 3: Storage
We will do something similar to what we did with method 2, but instead of passing it as a message, we will
store the action and then read it in the content.js file.
Go to content.js to see the rest of this method. 
*/
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("matt").addEventListener("click", function() {
//         // We are storing the action locally which will be read by the content.js file.
//         chrome.storage.local.set({ action: "executeCode" });
//     });
// });
