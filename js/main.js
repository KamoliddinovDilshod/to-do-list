var elForm = document.querySelector(".hero__form");
var elBtn = document.querySelector(".hero__btn");
var elText = document.querySelector(".hero__title");
var elTask = document.querySelector(".task__form");
var elList = document.querySelector(".task__list");

var texts = prompt("Write your name ");
elText.textContent ="What is your main focus for today , " + texts.trim() + " ?";

elForm.addEventListener("submit" ,function(evt){
  evt.preventDefault();
  var newinput = document.createElement("input");
  newinput.style.display="inline-block";
  newinput.style.color = "blue";
  newinput.style.borderColor = "blue";
  newinput.style.borderRadius = "10px";
  newinput.style.width = "500px";
  newinput.style.padding = "15px 5px";
  newinput.style.marginLeft="150px";
  newinput.value = " ";
  elTask.appendChild(newinput);
  
  var newBtn = document.createElement("button");
  elTask.appendChild(newBtn);
  newBtn.textContent = "Apply";
  newBtn.style.display="inline-block";
  newBtn.style.padding="15px";
  newBtn.style.marginLeft="15px";
  newBtn.style.backgroundColor= "green";
  newBtn.style.borderRadius= "10px";
  
  var newEl = document.createElement("li");
  elList.appendChild(newEl);
  newEl.textContent = newinput;

});

elTask.addEventListener("submit",function(sub){
  sub.preventDefault();
});