// Get dom elemtents
const gameContainer=document.querySelector(".container"),
userResult=document.querySelector(".user_result img"),
cpuResult=document.querySelector(".cpu_result img"),
result=document.querySelector(".result"),
optionImages=document.querySelectorAll(".option_image");

//console.log(gameContainer,userResult,cpuResult,result,optionImages)
// loop through each option image element
optionImages.forEach((image,index)=>{
  image.addEventListener("click",(e)=>{
    image.classList.add("active");
    userResult.src = cpuResult.src= "images/paper.png";
    result.textContent="Wait..."
   
    //loop through each option image again
    optionImages.forEach((image2,index2)=>{
      //console.log(index,index2)
      //if current index not match the clicked index
      //remove "active" class from other option images 
      index !== index2 && image2.classList.remove("active");

  });
  gameContainer.classList.add("start")
  
  //set timeout delay for result calculation

  let time= setTimeout(()=>{
    gameContainer.classList.remove("start")
    //get the source of the clicked open image
    let imagesrc= e.target.querySelector("img").src;
    userResult.src=imagesrc;
    //console.log(imagesrc);
    //generte random num between 0 and 2
    let randomNum= Math.floor(Math.random()*3);
    //create array of cpu image options
    let cpuImage=["images/stone.png","images/paper.png","images/scissors.png"]
    cpuResult.src=cpuImage[randomNum];
    
    //assign letter value to cpu option (S for scissor, p for paper, r for stone)
    let cpuValue=["R","P","S"][randomNum]
    //assign lettr value to clicked option (based on index)
    let userValue=["R","P","S"][index];

    //create object for all possible outcomes
    let outComes={
      RR: "Draw",
      RP:"User",
      RS:"User",
      PR:"Cpu",
      PP:"Draw",
      PS:"Cpu",
      SS: "Draw",
      SR:"Cpu",
      SP:"User"
    };

    // outcome value based on user and cpu options
     let outComesValue= outComes[userValue + cpuValue];

     //display result
     result.textContent=userValue === cpuValue ? "Match Draw" :`${outComesValue} Won!`

  },2500)
});
});