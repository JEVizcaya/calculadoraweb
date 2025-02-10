//$(".btn").click(function(){}); //funcion anonima
//$(".btn").click(()=>{}) esto es lo mismo
$(".btn").click(function(){

    $("#pantalla").val($(this).html())
});