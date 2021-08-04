// ==UserScript==
// @name         Gats Chat App
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @author       LightLord
// @match        https://gats.io/
// @icon         https://www.google.com/s2/favicons?domain=gats.io
// @description  A chat application thats web based
// ==/UserScript==

document.getElementById("announcementMessage").innerHTML = "Click here to join the Gats Chat App"
var newP = document.getElementById("announcementMessage")
newP.addEventListener("click", () => {
if (window.confirm('Press Ok to go to gats chat app(it will send in new tab)'))
{
window.open("https://gats-chat-app.lightdarkhole.repl.co/","_blank")
}
else
{
alert("press ok to continue to game")}
});
