console.log('started script');

window.$crisp = [];
window.CRISP_WEBSITE_ID = "97c1be79-e705-4e31-be7c-e6eb68067d8c";
// (function() {
//     d = document;
//     s = d.createElement("script");
//     s.src = "https://client.crisp.chat/l.js";
//     s.async = 1;
//     d.getElementsByTagName("head")[0].appendChild(s);
// })();

$.getScript("https://client.crisp.chat/l.js")

console.log('ended script');
