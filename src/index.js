// console.log("🌎");

// fetch(" http://localhost:3000/ramens")
//   .then((res) => res.json())
//   .then((data) => showRamenMenu(data))
//   .catch((error) => console.error("ERROR️‍ 🔥:", error));

// //display all ramen images in menu
// function showRamenMenu(ramenArr) {
//   const menu = document.getElementById("ramen-menu");

//   for (let i = 0; i < ramenArr.length; i++) {
//     const ramen = ramenArr[i];
//     const img = document.createElement("img");

//     img.src = ramen.image;
//     img.setAttribute("ramen-id", ramen.id);
//     img.addEventListener("click", handleShowDetail);
//     menu.appendChild(img);
//     img.style.border = "black solid 11px";
//   }
// }

// //display ramen info
// function handleShowDetail(e) {
//   const img = e.target;
//   const id = img.getAttribute("ramen-id");

//   fetch(`http://localhost:3000/ramens/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       showRamenDetails(data);
//     })
//     .catch((error) => console.error("ERROR️‍ ❌:", error));
// }

// function showRamenDetails(data) {
//   const img = document.querySelector(".detail-image");
//   img.src = data.image;
//   img.alt = data.name;

//   document.querySelector(".name").textContent = data.name;
//   document.querySelector(".restaurant").textContent = data.restaurant;
//   document.querySelector("#rating-display").textContent = data.rating;
//   document.querySelector("#comment-display").textContent = data.comment;
// }

// //form
// const form = document.querySelector("#new-ramen");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const url = event.target[2].value;

//   const img = document.createElement("img");
//   img.src = url;
//   img.alt = event.target[0].value;

//   const menu = document.querySelector("#ramen-menu");

//   menu.appendChild(img);
//   form.reset();
// });

const ramenAPI = "http://localhost:3000/ramens";
const ramenMenu = document.querySelector("#ramen-menu");

fetch(ramenAPI) //goes to api
  .then((res) => res.json()) //access json data
  .then(displayRamenImgs) //display that data with CB Fxn (create later)
  .catch((error) => console.log("ERROR️‍🔥:", error));

//fxn used in fetch ^^^
//goes through ramen Array (how data was store in JSON)
// for each item in arr add the image to the page using CB fxn
function displayRamenImgs(ramenArr) {
  ramenArr.forEach(addRamenImgToPage);
}

//fxn used in displayRamenImgs ^^^
//goes through ramenArr(input of fxn above)
function addRamenImgToPage(ramen) {
  const ramenImg = document.createElement("img"); // creates new img el called ramenImg
  ramenImg.src = ramen.image; // gives that el a src image from the json
  ramenMenu.append(ramenImg); //adds this image to the ramenMenu (put in specific place)
  //the 1st class fxn above (displayRamenImgs) will run this fxn for every item in array
}
