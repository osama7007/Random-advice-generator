//set variables
let adviceNumber =  document.querySelector(".advice .advice-number");
let adviceText  = document.querySelector(".container .advice-text");
let dice  = document.querySelector("[name = dice]");

adviceText.innerHTML = "Click the dice to generate advice";
dice.addEventListener("click",()=>{
  fetchApi('https://api.adviceslip.com/advice');
})
function randomAdvice (){
  return  Math.round( Math.random()*100);
}

// fetch API
let fetchApi = (url)=>{
  fetch(url)
		.then((response) => response.json())
		.then((data) =>{ 
      adviceText.innerHTML = data.slip.advice;
      adviceNumber.innerHTML = data.slip.id;
    })
		.catch((err) => console.error(err));
}