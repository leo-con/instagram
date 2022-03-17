if (window.location.hash) {
  const urlParam = $.param(queryStringData);
  console.log(urlParam);
  token = getParameterByName("access_token");
  location.hash = "";
} else {
  var queryStringData = {
    response_type: "token",
    client_id: "clientId",
    redirect_uri: "RedirectURL",
  };
  const urlParam = $.param(queryStringData);
  console.log(urlParam);
  document.getElementById("token").innerHTML = urlParam;
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\#&]" + name + "=([^&#]*)"),
    results = regex.exec(location.hash);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getUrlVars() {
  var vars = {};
  var parts = decodeURIComponent(window.location.href).replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None;Secure";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
