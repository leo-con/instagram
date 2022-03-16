window.onload = function () {
  Prueba1();
};

function Prueba1() {
  console.log("Hi %s, my name is %s", "world", "Joe");
  var name = "Brendan";
  console.log(`Yo, ${name}!`);

  console.info("document.currentScript : %s", document.currentScript);
  console.info("getScriptName : %s , %s", getScriptName(), getFuncName());

  console.log(" -----   ---");
  let Msg = "prioridad:99";
  console.log(Msg.substring(0, 10));
  console.log(Length(Msg));
  console.log(Substring(Msg, 10, 2));
  console.log(ToInt(Substring(Msg, 10, Length(Msg) - 10)));
  document.getElementById("").innerHTML;
  function Length(cadena) {
    return cadena.length;
  }
  function Substring(cadena, p1, p2) {
    p2 = p1 + p2;
    return cadena.substring(p1, p2);
  }

  function ToInt(cadena) {
    return Number(cadena);
  }

  function getScriptName() {
    var error = new Error(),
      source,
      lastStackFrameRegex = new RegExp(/.+\/(.*?):\d+(:\d+)*$/),
      currentStackFrameRegex = new RegExp(/getScriptName \(.+\/(.*):\d+:\d+\)/);

    if ((source = lastStackFrameRegex.exec(error.stack.trim())) && source[1] != "")
      return source[1];
    else if ((source = currentStackFrameRegex.exec(error.stack.trim()))) return source[1];
    else if (error.fileName != undefined) return error.fileName;
  }
}

function btnClick() {
  console.log(getFuncName());
}

function getFuncName() {
  return getFuncName.caller.name;
}
