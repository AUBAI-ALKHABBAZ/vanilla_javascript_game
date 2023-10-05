// Get to Dom object 
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult= document.querySelector(".cpu_result img"),
result= document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");
console.log(gameContainer ,userResult,cpuResult,result,optionImages);

// loop through each option image element
optionImages.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");
        userResult.src = cpuResult.src="images/rock.png";
        result.textContent="Wait......";
    // loop through each option image again
    optionImages.forEach((image2,index2)=>{
        //console.log(index,index2);
        // if the current index  dosen't match the clicked index
        // Remove the "Active" class from the other option images
        index !== index2 && image2.classList.remove("active");
    });
    gameContainer.classList.add("start");
    
    // set a time out to delay the result calculation
        let time = setTimeout(()=>{
        gameContainer.classList.remove("start");
        // Get the source of the clicked option image
        let imageSrc = e.target.querySelector("img").src;
        // set the user image to the clicked option image
        userResult.src= imageSrc;
        //console.log(imageSrc);
        // Generate a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3);
        //console.log(randomNumber);
        let cpuImages = ["images/rock.png","images/paper.png","images/scissors.png"];
        cpuResult.src = cpuImages[randomNumber];
        //Assign a letter value to the CPU option (R for rock , P for paper , S for scissiors)
        let cpuValue=["R","P","S"][randomNumber];
        //Assign a letter value to the clicked option (based on index)
        let userValue=["R","P","S"][index];
        //console.log(cpuValue,userValue);
        // Creat an object with all possible outcomes
        let outcomes ={
            RR: "Draw",
            RP: "Cpu",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "Cpu",
            SS: "Draw",
            SR: "Cpu",
            SP: "User",
        };

        // lool up the outcome value based on user and CPU options
        let outComeValue = outcomes[userValue + cpuValue];
        // display the result 
        result.textContent = userValue === cpuValue ? "Match Draw": `${outComeValue} Won!!`;


        },2500);
 
    });
});