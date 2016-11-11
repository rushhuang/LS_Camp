var main = function() {
  $('.arrow-next').click(NextSlide);

  $('.arrow-prev').click(PrevSlide);

  $('.Ind').click(Indicate);

  AutoSlideShow();
}

function NextSlide(){
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
  }

  function PrevSlide(){
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
  }

  function Indicate(){
    var currentSlide = $('.active-slide');
    var currentInd = $('.active-Ind');
    var newSlide = $(this).index();
    currentSlide.removeClass('active-slide');
    currentInd.removeClass('active-Ind');

    $('.slide').eq(newSlide-1).addClass('active-slide');
    $(this).addClass('active-Ind');
  }

  function AutoSlideShow(){
    NextSlide();
    setTimeout(AutoSlideShow, 1800);
  }

$(document).ready(main);