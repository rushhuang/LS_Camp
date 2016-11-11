var main = function() {
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentInd = $('.active-Ind');
    var nextInd = currentInd.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextInd = $('.Ind').first();
    }
    
    currentSlide.removeClass('active-slide');
    nextSlide.addClass('active-slide');

    currentInd.removeClass('active-Ind');
    nextInd.addClass('active-Ind');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentInd = $('.active-Ind');
    var prevInd = currentInd.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevInd = $('.Ind').last();
    }
    
    currentSlide.removeClass('active-slide');
    prevSlide.addClass('active-slide');

    currentInd.removeClass('active-Ind');
    prevInd.addClass('active-Ind');
  });

  $('.Ind').click(function(){
    var currentSlide = $('.active-slide');
    var currentInd = $('.active-Ind');
    var newSlide = $(this).index();
    currentSlide.removeClass('active-slide');
    currentInd.removeClass('active-Ind');

    $('.slide').eq(newSlide-1).addClass('active-slide');
    $(this).addClass('active-Ind');
  });
}
$(document).ready(main);