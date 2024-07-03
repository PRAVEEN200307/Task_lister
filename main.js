// closeBtn

const closeBtn = document.querySelector("#closeBtn");
const navTitle =document.querySelector('#headerTile');

const handleToggle = ()=>{
   navTitle.classList.toggle('hidden');
   navTitle.style.transition = "all ease 5s";   
}

closeBtn.addEventListener('click',handleToggle)