function EnumTest() {
  const PrintMedia = Object.freeze({
    Newspaper: "NEWSPAPER",
    Newsletter: "NEWSLETTER",
    Magazine: "MAGAZINE",
    Book: "BOOK",
  });

  const var1 = document.getElementById("input1").value;
  console.log("Ingresado %s", var1);
  if (var1 === PrintMedia.Newspaper) {
    console.log("Igual a %", PrintMedia.Newspaper);
  }
}
