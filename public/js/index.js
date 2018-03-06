const getFormResponse = function() {
  let host = getValueOf('input[name="host"]');
  let db = getValueOf('input[name="db"]');
  let password = getValueOf('input[name="password"]');
  let port = getValueOf('input[name="port"]');
  return `host=${host}&db=${db}&password=${password}&port=${port}`;
}

const showConnectionStatus = function() {
  alert(this.statusCode);
}

const sendDbConnectionReq = function() {
  let formQuery = getFormResponse();
  console.log(formQuery)
  sendAjaxRequest('POST','/connect',showConnectionStatus,formQuery);
}

const setEventListener = function() {
  getElement('button[value="submit"]').onclick = sendDbConnectionReq;
}


window.onload = setEventListener;