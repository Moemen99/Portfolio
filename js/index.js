
// let clock = document.getElementById("timer")


// function getTime(){
// let date = new Date()
// let hours = date.getHours();
// let mins = date.getMinutes();
// let secs = date.getSeconds();

// if(mins < 10){
//     mins = `0${mins}`
// }

// secs = secs < 10 ? secs = `0${secs}`: secs;
// clock.innerText =`${hours}:${mins}:${secs}`
// setTimeout(getTime,1000);
// }
// getTime();

// $("section").fadeIn(2000 ,function () {
//     $("section").animate({width: '100%' },2000 ,function () {
//         $("section").animate({height: '100vh'},2000 ,function () {
//             $("h2").fadeIn(1000, function () {
//                 $(".test1").slideDown(1500, function () {
//                     $(".test2").show(1500, function() {
//                         $(".test3").fadeIn(1500)
//                     })
//                 })
                
//             })
            
//         })
//     })


// })

// console.log(!(20 == 30) && !(20 == 30) && !(20 == 10) && !(20 == 10));
// console.log((20 != 30));

// a[href^='#']


$(".navigation-menu a").click(function(e){
    let sectionId = $(e.target).attr("href")
    let sectionOffset = $(sectionId).offset().top
    $(e.target).parent().siblings().find("a").removeClass("active")
    console.log($(e.target).parent());
    console.log($(e.target).parent().siblings());
    console.log( $(e.target).parent().siblings().find("a"));
    console.log($(e.target).parent().siblings().find("a").removeClass("active"));
    $(e.target).addClass("active")
    $("html, body").animate({scrollTop : sectionOffset}, 1000)
})


$(window).scroll(function(){
    let aboutOffset = $("#about").offset().top
    let scrollpos = $(window).scrollTop()
    let navheight = $(".navigation").height()
    
    if(scrollpos >= aboutOffset - navheight){
        $(".navigation").addClass("dark")
        $("#backTop").fadeIn(200)
    }else{
        $(".navigation").removeClass("dark")
        $("#backTop").fadeOut(200)

    }
   
})
$("#backTop").click(function(){
    $("html, body").animate({scrollTop : 0}, 1000)
})

$(document).ready(function(){
    $(".loadingio-spinner-pulse-2mpcehixs0f").fadeOut(1000,function(){
        $("#loader").fadeOut(1100,function(){
        $("body").css("overflow", "visible") })
                                                }) 
                                                    })


// $(document).ready(function(){
//     $("#spinner2").fadeOut(300,function(){
//         $(".loader").fadeOut(600)
//     }) 
//     $("body").css("overflow","visible")
//     $(".loader2").fadeOut(500)
    
    
//     })




