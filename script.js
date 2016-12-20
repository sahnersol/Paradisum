function init() {
  //Look, ma! A jQuery easter egg!
  $("#solarcar").click(function(){
    $("#solarcar").animate({left:"200px"},10000);
  });
}
window.addEventListener("load", init, false);