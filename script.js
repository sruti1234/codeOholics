var path="M 10 100 Q 750 100 1490 100"

var finalPath="M 10 100 Q 750 100 1490 100"

var string= document.querySelector("#string")
var string1= document.querySelector("#string1")
var string2= document.querySelector("#string2")
var string3= document.querySelector("#string3")

string.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q ${dets.x} ${dets.y} 1490 100`
    gsap.to("svg path",{
        attr:{d:path},
        duration:1.5,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})

string1.addEventListener("mousemove",function(dets){
  path=`M 10 100 Q ${dets.x} ${dets.y} 1490 100`
  
  gsap.to("svg path",{
      attr:{d:path},
      duration:1.5,
      ease:"power3.out"
  })
})
string1.addEventListener("mouseleave",function(){
  gsap.to("svg path",{
      attr:{d:finalPath},
      duration:1.5,
      ease:"elastic.out(1,0.2)"
  })
})

string3.addEventListener("mousemove",function(dets){
  path=`M 10 100 Q ${dets.x} ${dets.y} 1490 100`
  
  gsap.to("svg path",{
      attr:{d:path},
      duration:1.5,
      ease:"power3.out"
  })
})
string3.addEventListener("mouseleave",function(){
  gsap.to("svg path",{
      attr:{d:finalPath},
      duration:1.5,
      ease:"elastic.out(1,0.2)"
  })
})

string2.addEventListener("mousemove",function(dets){
  path=`M 10 100 Q ${dets.x} ${dets.y} 1490 100`
  
  gsap.to("svg path",{
      attr:{d:path},
      duration:1.5,
      ease:"power3.out"
  })
})
string2.addEventListener("mouseleave",function(){
  gsap.to("svg path",{
      attr:{d:finalPath},
      duration:1.5,
      ease:"elastic.out(1,0.2)"
  })
})


gsap.from("#page1",{
  duration:5,
  delay:3,
  stagger:0.5,
  opacity:0,
  y:100,
  //scrollTrigger:"#page2 #box",// it always executes when the page is at front
  scrollTrigger:{
      trigger:"#page1",//trigger means start point
      scroller:"body" ,//maximum we'll write body only
      start:"top 60%",
      end:"top 50%",
      scrub:2,
      pin:true,
      
  }
})

gsap.from("#page2",{
  duration:5,
  delay:3,
  stagger:0.5,
  opacity:0,
  y:100,
  //scrollTrigger:"#page2 #box",// it always executes when the page is at front
  scrollTrigger:{
      trigger:"#page2",//trigger means start point
      scroller:"body" ,//maximum we'll write body only
      start:"top 60%",
      end:"top 30%",
      scrub:2,
      pin:true,
      
  }
})

gsap.from("#page3",{
  duration:5,
  delay:3,
  stagger:0.5,
  opacity:0,
  y:100,
  //scrollTrigger:"#page2 #box",// it always executes when the page is at front
  scrollTrigger:{
      trigger:"#page3",//trigger means start point
      scroller:"body" ,//maximum we'll write body only
      start:"top 90%",
      end:"top 60%",
      scrub:2,
      pin:true,
      
  }
})

gsap.from("#page4",{
  duration:5,
  delay:3,
  stagger:0.5,

  opacity:0,
  y:100,
  //scrollTrigger:"#page2 #box",// it always executes when the page is at front
  scrollTrigger:{
      trigger:"#page4",//trigger means start point
      scroller:"body" ,//maximum we'll write body only
      start:"top 90%",
      end:"top 60%",
      scrub:2,
      pin:true,
      
  }
})

function BreakTheText(){
  var h1= document.querySelector("h1");
  var h1Text=h1.textContent
  var splittedText = h1Text.split("")

  var halfValue= Math.floor(splittedText.length/2)
  var clutter=""
  splittedText.forEach(function(e,index){
    if(index<halfValue){
      clutter+=`<span class="A">${e}</span>`
    }
    else{
      clutter+=`<span class="B">${e}</span>`
    }
  })
  h1.innerHTML=clutter
}
BreakTheText()
gsap.from("h1 .A",{
  y:150,
  duration:0.5,
  opacity:0,
  stagger:0.15,
  delay:1,

})
gsap.from("h1 .B",{
  y:150,
  duration:0.5,
  opacity:0,
  stagger:-0.15,
  delay:1,
})
function BreakTheText2(){
  var h2= document.querySelector("h2")
  var h2Text=h2.textContent
  var splittedText2 = h2Text.split("")
  var clutter2=""

  splittedText2.forEach(function(e,index){
 
    clutter2+=`<span class="C">${e}</span>`
    
  })
  h2.innerHTML=clutter2
}
BreakTheText2()

gsap.from("h2 .C",{
  y:150,
  duration:2.5,
  opacity:0,
  stagger:0.1,
  delay:1,
})
// Select all "Read More" buttons and add click event listeners
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.event-card');
    card.classList.add('flipped');
  });
});

// Select all "Go Back" buttons and add click event listeners
document.querySelectorAll('.go-back').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.event-card');
    card.classList.remove('flipped');
  });
});

// Hover animations for cards
document.querySelectorAll('.event-card').forEach(card => {
  // Hover in animation
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.1, // Slightly increase the card size
      duration: 0.3, // Animation duration
      boxShadow: "0 4px 8px rgba(255, 105, 180, 0.3), 0 0 20px rgba(255, 182, 193, 0.5), 0 0 20px rgba(255, 20, 147, 0.7)", // Add a glowing effect
      borderRadius: "30px",
      ease: "power1.out",
    });
  });

  // Hover out animation
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1, // Reset the card size
      duration: 0.3,
      boxShadow: "0 0 15px purple",
      borderRadius: "30px", // Restore the original shadow
      ease: "power1.in",
    });
  });
});

document.querySelectorAll('.image-carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('.carousel-image');
  const leftArrow = carousel.querySelector('.left-arrow');
  const rightArrow = carousel.querySelector('.right-arrow');
  let currentIndex = 0;

  // Show the current image
  const showImage = (index) => {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  };

  // Navigate to the previous image
  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  // Navigate to the next image
  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Initialize the first image
  showImage(currentIndex);
});
