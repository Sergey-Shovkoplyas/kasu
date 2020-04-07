$(document).ready(function () {

  let mySwiper = new Swiper('.kasu__community-slider', {
		slidesPerView: 2,
		spaceBetween: 20,
		breakpoints: {
			768: {
        slidesPerView: 4,
				spaceBetween: 40
			}
		}
  });

	mySwiper.slideTo(1, 0, false);
	

	// ------------------------ kalc -------------------------------

	$(function(){
    settlement();

    $('#field1').rangeslider({
        polyfill:false,
        onInit: function(){

						let input1Value = $('input[type="range"][name="field1"]').val();
						$('#input1').val( input1Value );
						
        },
        onSlide:function(position, value){
            //console.log('onSlide');
            //console.log('position: ' + position, 'value: ' + value);
            $('.content #input1').val(value);
        },
        onSlideEnd:function(position, value){
            //console.log('onSlideEnd');
            //console.log('position: ' + position, 'value: ' + value);
        }
    });
    // Change the value of input field when slider changes
    $('#field1').on('input', function() {
        $('#input1').val(this.value);
        settlement();
    });

    // Change the value of slider field when input changes
    $('#input1').on('input', function() {
        if (this.value.length == 0) $('#field1').val(0).change();

        $('#field1').val(this.value).change();
    });
  
  
    $('#field2').rangeslider({
        polyfill:false,
        onInit:function(){

						let input2Value = $('input[type="range"][name="field2"]').val();
        
            $('#input2').val (input2Value );
        },
        onSlide:function(position, value){
            $('.content #input2').val(value);
        },
        onSlideEnd:function(position, value){
        }
    });
    // Change the value of input field when slider changes
    $('#field2').on('input', function() {
        $('#input2').val(this.value);
        console.log('$'+$('#input2').val());
        settlement();
    });
    // Change the value of slider field when input changes
    $('#input2').on('input', function() {
        if (this.value.length == 0) $('#field2').val(0).change();
        
        $('#field2').val(this.value).change();
        
    });

});

function settlement(){
  
  damages=parseFloat($('#field1').val())*parseFloat($('#field2').val());
  
  totalDamages=damages;
  
  $('#sum').text("$"+totalDamages.toLocaleString());
  
}




});

