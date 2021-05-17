$(".navigation tr").click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');    
 });
 
 $('.ok').on('click', function(e){
     alert($("#table tr.selected td:first").html());
 });