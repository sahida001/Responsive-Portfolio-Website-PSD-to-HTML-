$(document).ready(function(){

$(".js--services-section").waypoint(function(direction){
  if(direction=="down"){
    $("nav") .addclass=("sticky");
  }else{
    $("nav") .removeclass=("sticky");
  }
});

  var mixer = mixitup(".container");
});