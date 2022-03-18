function getParameterByName(parameter) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const value = urlParams.get(parameter);
  console.log(`code :: ${value}`);
  return value;
}

function getToken() {
  const vcode = getParameterByName("code");

  postData = {
    client_id: "1288968731596687",
    client_secret: "5391836b14e83ca53d5470a2c521778b",
    grant_type: "authorization_code",
    redirect_uri: "https://leo-con.github.io/instagram/index.html",
    code: vcode,
  };

  const v_url = "https://api.instagram.com/oauth/access_token";
  $.ajax({
    type: "POST",
    url: v_url,
    data: postData,
    success: successfn,
    error: function (e) {
      console.log(e);
      document.getElementById("error").value = JSON.stringify(e);
    },
  });
}

function successfn(data) {
  console.log(data);
  document.getElementById("success").value = JSON.stringify(data);
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

getToken();
