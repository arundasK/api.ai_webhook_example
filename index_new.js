"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";
  
 return res.json(
{
"speech": "",
"messages": [{"type": 0,"speech": ""},
{
"type": 4,
"payload": {
"facebook": {
"attachment": {
"type": "template",
"payload": {
"template_type": "button",
"text": "Hello, I am Sys bot, your intelligent virtual assistant. I was developed by AI team at SysG Soft. I can help you to know more about us.",
"buttons": [{"type": "postback", "title": "let's chat", "payload": "let's chat"}]
}
}
}
}
}
]

});
});



restService.listen(process.env.PORT || 8082, function() {
  console.log("Server up and listening");
});
