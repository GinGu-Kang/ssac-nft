'use strict';

let img= $("#img-1");
let nft_img=$('.nft-img')
let galleryImgs=$('.gallery-img')
let shiftValue=0
let changedValue=0
let imgWidth=333+60 //margin포함 한 width

let imgNum=2
let imgQuanty=6

let countValue=0



function imgLoop(interval) {
    galleryImgs=$('.gallery-img')
    
    galleryImgs.css("transform", "translateX(" + shiftValue + "px)")
    shiftValue-=10
    if (Math.abs(shiftValue) - Math.abs(changedValue) > imgWidth){
        nft_img.append("<img class='gallery-img'src='/images/nft0"+imgNum+".png'>");
        imgNum+=1;
        if (imgNum==7){
            imgNum=1;
        }
        changedValue=shiftValue;
    }
  }
  setInterval(function() {
    imgLoop(0);
  }, 100);
function resetImg(){
    nft_img.append(img);
    setInterval(function() {
            resetImg();
          }, );
}

function changeAngle(e){
  // $("svg").css({'transform':'rotate(360deg)'})
  if(!$("#"+e).prop("checked")){
    $("#"+e+"-svg").css({'transform':'rotate(360deg)'});
    $("#"+e+"-answer").css("display","flex");
  }else{
    $("#"+e+"-svg").css({'transform':'rotate(180deg)'})
    $("#"+e+"-answer").css("display","none");
  }
  
}

  // $( '.main-img' ).animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
  // $( '.main-img' ).slideUp( 1000 );

  function moveContainer(containerName){
    $('html, body').animate({
      scrollTop: $("."+containerName).offset().top
  }, 2000);
  }

