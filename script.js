const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
  function myplay(){
      var vid=document.querySelector("#videoc");
  var play = document.querySelector("#play");
  vid.addEventListener("mouseenter" , function(){
    gsap.to(play,{
      scale: 1,
      opacity: 1
    })
  })
  vid.addEventListener("mouseleave" , function(){
      gsap.to(play,{
        scale: 0,
        opacity: 0
      })
    })
    vid.addEventListener("mousemove" , function(magic){
      gsap.to(play,{
        left: magic.x-70,
        top: magic.y-10
      })
    })
  }
  myplay()
  function loading(){
      gsap.from("#page1 h1 ",{
          opacity: 0,
          delay: 0.3,
          duration: 0.9,
          y: 100.65,
          stagger: 0.5
      })
      gsap.from("#page1 #videoc",{
          opacity: 0,
          delay: 1.3,
          duration: 0.3,
          scale: 0.65
      })
  }
  loading()
  /*document.addEventListener("mousemove" , function(dets){
    gsap.to("#cursor",{
      left: dets.x,
      top: dets.y
    })
  })
  document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mousemove" , function(){
      gsap.to("cursor",{
        transform: "transform(-50%,-50%)scale(1)"
      })
    })
  })*/
  function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    // document.querySelector("#child1").addEventListener("mouseenter",function(){
  
    // })
  
    // document.querySelector("#child1").addEventListener("mouseleave",function(){
    //   gsap.to("#cursor",{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //   })
    // })
    document.querySelectorAll(".child").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
  cursorAnimation();