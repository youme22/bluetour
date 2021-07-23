
// const config = {
// 		dateFormat: 'yy-mm-dd'	
// 	}
// $(document).ready(function(){
//     $("#datepicker").datepicker(config);
// });


// 달력
$( function() {
    $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+1M" });
  } );

// 슬라이드
$(function() {
    $('.slide_gallery').bxSlider({
        auto : true,
        autoControls : true,
        // stopAutoOnClick : true,
        pager : true
    })
});

// 수량, 금액
Number.prototype.format = function(){ 
    if(this==0) return 0; 

    var reg = /(^[+-]?\d+)(\d{3})/; 
    var n = (this + ''); 
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
    return n; }; 
    
String.prototype.format = function(){ 
    var num = parseFloat(this); 
    if( isNaN(num) ) return "0"; 
    return num.format(); }; 
    
    var basic_amount = parseInt('250000'); 
    
    function change_qty2(t){ //var min_qty = '수량버튼'*1; 
    var min_qty = 1; 
    var this_qty = $("#ct_qty").val()*1; 
    var max_qty = '5';  // 현재 재고 
    if(t=="m"){ this_qty -= 1; 
        if(this_qty<min_qty){ 
            alert("수량은 1개 이상 입력해 주십시오."); 
            return; } } 
        else if(t=="p"){ 
            this_qty += 1; 
            if(this_qty>max_qty){ 
                alert("6개 이상 구매시 문의 부탁드립니다."); 
                return; } } 

    var show_total_amount = basic_amount * this_qty; 
    //$("#ct_qty_txt").text(this_qty); 
    $("#ct_qty").val(this_qty); 
    $("#it_pay").val(show_total_amount); 
    $("#total_amount").html(show_total_amount.format()); }


// 상세 메뉴 tab
$(function(){
  $('.tabcontent > div').hide();
  $('.tabnav a').click(function () {
    $('.tabcontent > div').hide().filter(this.hash).fadeIn();
    $('.tabnav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
  });