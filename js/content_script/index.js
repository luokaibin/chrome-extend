const images = document.querySelectorAll('img');

const imgUrls = [];

images.forEach(img => imgUrls.push(img.src));

const reqParam = {
  eventName: "storageImg",
  data: {
    host: window.location.host,
    imgUrls
  }
}

chrome.runtime.sendMessage(reqParam, function(response) {
  console.log(response);
});
