const sendAjaxRequest = function(method,url,callBack,reqBody){
  let ajax = new XMLHttpRequest();
  ajax.onload=callBack;
  ajax.open(method,url);
  if(reqBody){
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    return ajax.send(reqBody);
  }
  ajax.send();
};

const getElement = function(selector) {
  return document.querySelector(selector);
};

const getValueOf = function(selector) {
  let element = getElement(selector);
  if(element){
    return element.value;
  }
}