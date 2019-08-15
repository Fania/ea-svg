
// responsive svg display
const dia = document.getElementById("diagram");
const mql = window.matchMedia('(min-width: 600px)');
function screenTest(e) {
  const size = e.matches ? 'desktop' : 'mobile';
  console.log(size);
  dia.data = e.matches ? "horizontal.svg" : "vertical.svg";
}
mql.addListener(screenTest);
screenTest(mql);



// needs same origin so run local web server
// needs to be run after page has finished loading
// see https://svgontheweb.com/#javascript
window.onload = () => {
  const obje = document.getElementById("diagram");
  const svgDoc = obje.contentDocument;
  svgDoc.querySelector("[class*='sun']").style.fill = "yellow";
};


let rays = document.querySelectorAll("[class*='text']");
let planets = document.querySelectorAll("[class*='sacred']");
let nonsacreds = document.querySelectorAll("[class*='non']");

// console.log(rays);
// console.log(planets);
// console.log(nonsacreds);

// const choicesForm = document.getElementById("choices");
// const radios = document.getElementsByClassName("mapChoice");

// for (r in radios) {
//   radios[r].addEventListener("change", () => {
//     console.log("changed");
//   });
// }



const rad = document.choices.mapChoice;
// console.log(rad);
// console.log(rad.length);

[...rad].forEach(r => {
  // console.log(r);
  r.addEventListener("change", () => {
    console.log("changed");
    
  });
});




// var prev = null;
// for(var i = 0; i < rad.length; i++) {
//   rad[i].onchange = function() {
//     (prev)? console.log(prev.value):null;
//     if(this !== prev) {
//       prev = this;
//     }
//     console.log(this.value)
//   };
// }


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
