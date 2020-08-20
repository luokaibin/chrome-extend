const handleStorageImg = async (data) => {
  let imgUrls = await localforage.getItem(data.host)
  if(imgUrls) {
    imgUrls = new Set(imgUrls);
    data.imgUrls.forEach(img => imgUrls.add(img))
    await localforage.setItem(data.host, Array.from(imgUrls));
  }
  imgUrls = new Set(data.imgUrls);
  await localforage.setItem(data.host, Array.from(imgUrls));
}

const eventMap = {
  storageImg: handleStorageImg,
}

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log(request,sender);
    chrome.pageAction.show(sender.tab.id);
    sendResponse({code: 1, message: 'success'})
    const {eventName, data} = request;
    eventMap[eventName] && eventMap[eventName](data);
  }
);