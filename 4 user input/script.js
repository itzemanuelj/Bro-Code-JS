///user input

let user;

document.getElementById("myButton").onclick = function () {
  user = document.getElementById("myText").value;
  console.log(user);
};

let username = promt("enter name");
console.log(username);
