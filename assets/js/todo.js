// //check off when the item is clicked
// $("ul").click(function(event){
// 	$(this).toggleClass("completed");
// });

//toggle striketrougg
$("ul").on("click","li",function(event){
	$(this).toggleClass("completed");
});

//remove element
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropogation();
});

//add new tolod list
$("input[text='text']").keypress(function(event){
	if(event.which === 13){
		var todoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></span>" + todoText+"</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});