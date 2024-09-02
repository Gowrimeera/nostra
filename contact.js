var cancel = document.getElementById("Cancel");
var head1 = document.querySelector(".head1")

cancel.addEventListener('click',function(){
   head1.style.display = "none"  
})
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

