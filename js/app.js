document.addEventListener('DOMContentLoaded', function() {
    const parallax_el = document.querySelectorAll(".parallax");
    let xValue = 0, yValue = 0;
  
    window.addEventListener("mousemove", (evt) => {
      xValue = evt.clientX - window.innerWidth / 2;
      yValue = evt.clientY - window.innerHeight / 2;

      
      parallax_el.forEach((el) => {  
        let speedx = el.dataset.speedx
        let speedy = el.dataset.speedy
        let speedz = el.dataset.speedz
        
        let isInLeft = evt.clientX - parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1
        let zValue = (evt.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1
        
        
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
      });
    });
  });
  