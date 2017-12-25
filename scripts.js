(function(){

  let raysButton = document.getElementById("rays-button");
  let planetsButton = document.getElementById("planets-button");
  let nonsacredsButton = document.getElementById("nonsacred-button");

  let rays = document.getElementsByClassName("ray");
  let planets = document.getElementsByClassName("planet");
  let nonsacreds = document.getElementsByClassName("nonsacred");

  let choicesForm = document.getElementById("choices");
  let radios = document.getElementsByClassName("choice");


  raysButton.addEventListener("change", function(){
    
    console.log("changed");


  });




  // if (raysButton.checked) {
  //   console.log("raysButton");
  //   for (let r in rays) {
  //     r.classList.remove("hide");
  //   }
  //   for (let p in planets) {
  //     p.classList.add("hide");
  //   }
  //   for (let r in nonsacreds) {
  //     r.classList.add("hide");
  //   }
  // }

  // if (planetsButton.checked) {
  //   console.log("planetsButton");
  //   for (let r in rays) {
  //     r.classList.add("hide");
  //   }
  //   for (let p in planets) {
  //     p.classList.remove("hide");
  //   }
  //   for (let r in nonsacreds) {
  //     r.classList.add("hide");
  //   }
  // }

  // if (nonsacredsButton.checked) {
  //   console.log("nonsacredsButton");
  //   for (let r in rays) {
  //     r.classList.add("hide");
  //   }
  //   for (let p in planets) {
  //     p.classList.add("hide");
  //   }
  //   for (let r in nonsacreds) {
  //     r.classList.remove("hide");
  //   }
  // }






})();