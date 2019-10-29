/* File: content.js
 * -----------------------
 * This is the javascript file that we will be using to manipulate the DOM to change all the images on the page to an image
 * of VandyHacks co-president Matt Leon.
 */

// Converts a relative path within an app/extension install directory to a fully-qualified URL.
// This is how we're "importing" the picture into our code so that we can use it
// later on to replace the images we find.
let picture = chrome.runtime.getURL("src/mattify.jpg");

// Here we're getting all the images on the page by tag name
// You can also get elements by using other indicators
// such as: id, class name, CSS selectors, or HTML Object collections
// The purpose of getting the images here is so that we have everything we will be manipulating later on.
var images = document.getElementsByTagName("img");

/* Method 1: Programmatic Injection
This method will replace the images on the page is by changing the source that the image tags
are using to retrieve their image. By changing the image sources to our picture variable, all the image tags
on the page will now call upon the mattify.jpg relative path to retrieve an image. 
The code from this method will also be used later on in other methods.
*/
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", picture);
}

/* If you're using message passing then you need to comment out the other methods' code and uncomment this section.
Method 2: Message Passing
We are waiting for the the message 'executeCode' to be passed in then we will go ahead and change all the images. 
*/
// chrome.runtime.onMessage.addListener(function(request) {
//     if (request.action === "executeCode") {
//         for (let i = 0; i < images.length; i++) {
//             images[i].setAttribute("src", picture);
//         }
//     }
// });

/* Uncomment this section if you're using method 3 and comment the other methods
Method 3: Storage
We are going to read the local storage to retrieve the action that was stored by popup.js. 
*/
// chrome.storage.onChanged.addListener(function(changes) {
//     var action = changes["action"];
//     if (action.newValue === "executeCode") {
//         for (let i = 0; i < images.length; i++) {
//             images[i].setAttribute("src", picture);
//         }
//     }
// });
