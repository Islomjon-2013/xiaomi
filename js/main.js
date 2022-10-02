$(function(){
    $('.bike-slider, .slider__items').slick({
        arrows:false,
        dots:true,
        fade:false,
        autoplay:true,
        autoplaySpeed: 2000
    });
});

var orderButton = document.getElementById('orderBtn');

function alertBox(){
    // window.alert('danger')
    orderButton.style.display = 'inline-block'
}
function log(){
    console.log('abror')
    orderButton.style.display = 'none'
}