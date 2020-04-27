$(document).ready(()=>{
    $('#car').carousel({ interval:1500});
    $('#cButton').click(()=>{
        if ($('#cButton').children('span').hasClass('fa-pause')){
            $('#car').carousel('pause');
            $('#cButton').children('span').removeClass('fa-pause');
            $('#cButton').children('span').addClass('fa-play');
        }else {
            $('#car').carousel('cycle');
            $('#cButton').children('span').removeClass('fa-play');
            $('#cButton').children('span').addClass('fa-pause');
        }
        
    });
    
});
$('#table').click(()=>{
    $('#reservation').modal('show');
});
$('#lModal').click(()=>{
    $('#loginM').modal('show');
});