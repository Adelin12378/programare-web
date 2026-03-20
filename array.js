const list = document.querySelector("list");
const items = list.querySelectorAll("li");
const arr = Array.from(items).map(li => li.textContent.trim());
console.log(arr);

const modeButtons = arr.filter(str => str.includes("Mode"));
console.log(modeButtons);

const educationElements = document.querySelectorAll("#education p");
const educationFirstWords = Array.from(educationElements).map(el => {return el.textContent.trim().split(/\s+/)[0];});
console.log(educationFirstWords);

