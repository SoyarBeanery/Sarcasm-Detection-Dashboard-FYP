function onOpen() {
    var ui  = SpreadsheetApp.getUi();
    ui.createMenu('Options').addItem('Search', 'firstFunction').addToUi();
  }
  
  function tSearcher(){
    var ss = SpreadsheetApp.openById('****');
    var sheet = ss.getSheetByName("output");
    var sinceId = sheet.getRange(sheet.getLastRow(), 1).getValue();
    var newcontent = search('#Google',sinceId);
    for(var t = 0; t< newcontent.length; t++){
      var tweet = newcontent[t];
      sheet.appendRow([tweet.id,tweet.text,JSON.stringify(tweet.user)]);
    }
  }
  
  function firstFunction() {
    var ui  = SpreadsheetApp.getUi();
    var response = ui.prompt("Twitter Search", "What Term do you want to search for?", ui.ButtonSet.OK_CANCEL);
    if(response.getSelectedButton() ==  ui.Button.OK){
      var newcontent = search(response.getResponseText(),'');
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getActiveSheet();
      for(var t = 0; t< newcontent.length; t++){
        var tweet = newcontent[t];
        sheet.appendRow([tweet.id,tweet.text,JSON.stringify(tweet.user)]);
      }
    } 
  }
  
  function setupTwitter() {
    var encodedBT = Utilities.base64Encode(encodeURIComponent("*****")+":"+encodeURIComponent("*****"));
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
    if(data.access_token){
      PropertiesService.getScriptProperties().setProperty("TATOKEN", data.access_token);
    }
    return data.access_token;
  }
  
  function search(q,s) {
    var token =  PropertiesService.getScriptProperties().getProperty("TATOKEN");
    if(token === null){
      token = setupTwitter();
    }
    var sinceID = (s != '') ? '&since_id='+s : '';
    var url = 'https://api.twitter.com/1.1/search/tweets.json?q='+encodeURIComponent(q)+'&count=5'+sinceID ;
    Logger.log(url);
    var params = {
      "method" : "GET",
      "headers" : {
        "Authorization" : "Bearer " +token  ,
        "Content-Type" : "application/x-www-form-urlencoded;charset=UTF-8",
        "Accept-Encoding" : "gzip"
      },
      "followRedirects" : true,
      "muteHttpExceptions" : true
    };
    var response = UrlFetchApp.fetch(url, params);
    var data = JSON.parse(response.getContentText());
    var tweetO = data.statuses;
    return tweetO;
  }