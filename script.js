
 let rating = 0
 
 let inpcontainer = document.querySelector(".inpcontainer")
 let container = document.querySelector(".container")
const ratingBtns = document.querySelectorAll('.rating-btn')
const ratingContent  = document.querySelector('.ratingContent')

ratingBtns.forEach((ratingBtn)=>{
  ratingBtn.addEventListener('click',(e)=>{
      // console.log(ratingBtn.innerText);
      rating =  ratingBtn.innerText
      console.log(rating,"this is rating value from rating button ");
      ratingContent.innerText = rating
  })
})
function sub(){
  if(rating != 0){
    // ratingBtn.innerHTML = rating;
  inpcontainer.classList.add("hide")
  container.classList.remove("hide")
  }
}
    