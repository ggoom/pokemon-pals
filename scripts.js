$(".navigation tr").click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');   
    displayGym(this.rowIndex) 
 });
 
//  $('.ok').on('click', function(e){
//      alert($("#table tr.selected td:first").html());
//  });


 function displayGym(idx) {
    // $(".overlay-route").prepend('<img src="gamepath1.png" />')
    const i = String(idx)
    $(".route").css("display", "none");
    $(".route-"+i).css("display", "inline");
 }