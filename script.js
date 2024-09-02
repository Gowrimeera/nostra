var cancel = document.getElementById("Cancel");
var head1 = document.querySelector(".head1")

cancel.addEventListener('click',function(){
   head1.style.display = "none"  
})


const slider = document.querySelector('.slide');
let currentSlide = 0;

document.getElementById('slider-left-activate').addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 0;
  }
  slider.scrollLeft = currentSlide * slider.offsetWidth;
});

document.getElementById('slider-right-activate').addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= slider.childElementCount) {
    currentSlide = slider.childElementCount - 1;
  }
  slider.scrollLeft = currentSlide * slider.offsetWidth;
});

document.querySelectorAll('.heart-icon').forEach(heart => {
  heart.addEventListener('click', function() {
      this.classList.toggle('liked');
  });
});

const menuButton = document.getElementById('menu');
const navigationList = document.querySelector('.head2-1');


menuButton.addEventListener('click', () => {
  navigationList.classList.toggle('active');
});

document.querySelectorAll('.head2-1 a').forEach((link) => {
  link.addEventListener('click', () => {
    navigationList.classList.remove('active');
  });
});


