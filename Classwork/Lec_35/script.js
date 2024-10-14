//Callback
function DownloadFile(url, download) {
  //url file:download process:making url ready for zip conversion
  console.log("Started Download");
  setTimeout(() => {
    let path = url.split("/").pop();
    download(path);
  }, 2000);
}
function compressFile(path, compress) {
  //compress:path:zip convert
  console.log("File ready for compress,Compress started");
  setTimeout(() => {
    const comp = path.split(".")[0] + "zip";
    compress(comp);
  }, 2000);
}
function uploadFile(comp, upload) {
  console.log("File started Uploading");
  setTimeout(() => {
    const upl = "http://LocalStorage" + comp;
    upload(upl);
  }, 2000);
}
DownloadFile("https://www.facebook.com/abc.mp3", function (upload) {
  console.log(`File downloaded successfully ${path}`);
});
