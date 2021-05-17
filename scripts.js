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
    $(".route-"+i).addClass('route-selected').siblings().removeClass('route-selected');  
 }


$(".sprite").mouseenter(function() {
    const className = this.className.split(" ")[1] + "-card";
    $("." + className).addClass('card-show');
})
.mouseleave(function() {
    const className = this.className.split(" ")[1] + "-card";
    $("." + className).removeClass('card-show');
})


// function showCard() {

// }