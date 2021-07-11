function setupTwitter() {
  var encodedBT = Utilities.base64Encode(encodeURIComponent("[Consumer Key]")+":"+encodeURIComponent("[Consumer Secret]"));
  var params = {
    "method" : "POST",
    "headers" : {
      "Authorization" : "Basic " +encodedBT ,
      "Content-Type" : "application/x-www-form-urlencoded;charset=UTF-8",
      "Accept-Encoding" : "gzip"
    },
    "payload" : {
      "grant_type" : "client_credentials"
    }
  };
  var response = UrlFetchApp.fetch('https://api.twitter.com/oauth2/token', params);
  var data = JSON.parse(response.getContentText());
  Logger.log(data);
}