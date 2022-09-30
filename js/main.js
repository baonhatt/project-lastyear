let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav');
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const icon = document.getElementsByClassName('icon')[0]

toggleButton.addEventListener('click', () => {
  icon.classList.toggle('active')
})
menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();