function getParameterByName(parameter) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const value = urlParams.get(parameter);
  console.log(`code :: ${value}`);
  return value;
}

function getToken() {
  const v_url = "https://api.instagram.com/oauth/access_token";
  $.ajax({
    type: "POST",
    url: v_url,
    data: postData,
    success: test,
  });
}

function test(data) {
  console.log(data);
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

const vcode = getParameterByName("code");

postData = {
  clientId: "1288968731596687",
  client_secret: "5391836b14e83ca53d5470a2c521778b",
  grant_type: "authorization_code",
  redirectUri: "https://leo-con.github.io/instagram/index.html",
  code: vcode,
};
getToken();
