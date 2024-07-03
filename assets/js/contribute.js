import data from '../../data.json';


const userCotainer =document.querySelector('#contributers');

data.forEach(user=>{
  const userdetail =
   `
     <div className=" p-4  shadow-2xl">
       <img src="${user.github}.png" alt="" name="" width="230px" class=" rounded-lg ">
       <h1> ${user.name}</h1>
      </div>
   `
  userCotainer.innerHTML += userdetail
})
