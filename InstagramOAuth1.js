config = {
  clientId: "1288968731596687",
  redirectUri: "https://leo-con.github.io/instagram/index.html",
};

function iniciarOAuth() {
  const client_id = document.getElementById("client_id").value;
  const redirect_uri = document.getElementById("redirect_uri").value;
  let sURL = `https://api.instagram.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user_profile,user_media&response_type=code`;
  window.location.href = sURL;
}

function getParameterByName(name, data) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\#&?]" + name + "=([^&#?]*)"),
    results = regex.exec(data);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getToken() {
  if (window.location.hash) {
    const v_url = `"https://api.instagram.com/oauth/access_token"`;
    $.ajax({
      type: "POST",
      url: v_url,
      data: data,
      success: success,
      dataType: dataType,
    });

    token = getParameterByName("access_token", window.location.hash);
    location.hash = "";

    console.log(token, "token");

    $.ajax({
      url: "https://api.instagram.com/v13.0/users/self/media/recent/?access_token=" + token,
      type: "GET",
      success: showMedia,
    });
  } else {
    var queryStringData = {
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      scope: "user_profile,user_media",
      response_type: "code",
    };

    window.location.replace(
      "https://api.instagram.com/oauth/authorize/?" + jQuery.param(queryStringData)
    );
  }
}

function showMedia(data) {
  var titleInfo = $("<h2></h2>").text("Media");

  var media = $("<lu></lu>");
  $.each(data.data, function (index, value) {
    media.append($("<li></li>").text(value.id));
  });
  $("body").append(titleInfo, media);
  console.log(data);
}
//getToken();
