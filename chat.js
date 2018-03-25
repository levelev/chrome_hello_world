console.log('started script');



(function() {
    d = document;
    s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);

    s2 = d.createElement("script");
    s2.text = `
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "97c1be79-e705-4e31-be7c-e6eb68067d8c";
    `;
    d.getElementsByTagName("head")[0].appendChild(s2);
    d.getElementsByTagName("head")[0].appendChild(s);

})();


console.log('ended script');
