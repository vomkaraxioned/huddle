/* Author: 

*/
//for bubbling demonstration 
let parent = document.querySelector(".bubbling .parent");
let child = document.querySelector(".bubbling .child");
// let body = document.querySelector("body");
parent.addEventListener('click', () => {
    alert("parent clicked");
});

child.addEventListener('click', () => {
    alert("child clicked");
});

// body.addEventListener('click', () => {
//     alert("body clicked");
// });

//bubbling demonstration ends here

//event target 
parent = document.querySelector(".event-target .parent");
child = document.querySelector(".event-target .child");

parent.addEventListener('click', (e) => {
    alert("target = " + e.target.className + ", this=" + e.currentTarget.className);
});

child.addEventListener('click', (e) => {;
    alert("target = " + e.target.className + ", this=" + e.currentTarget.className);
});

//event target ends here

//stop bubbling
parent = document.querySelector(".stop-bubbling .parent");
child = document.querySelector(".stop-bubbling  .child");

parent.addEventListener('click', (e) => {
    alert("parent clicked");
    e.stopPropagation();
});

child.addEventListener('click', (e) => {
    alert("child clicked");
    e.stopPropagation();
});

// stop immediate propagation
// child.addEventListener('click', (e) => {
//     alert("child clicked");
//     e.stopImmediatePropagation();
// });
// child.addEventListener('click', () => {
//     alert("child clicked 2");
// })

//bubbling ends here


//-----Delegation-----

let fruits = document.querySelector(".fruits");

fruits.addEventListener('click', (e) => {
    // alert(e.target.dataset.apple);
    if (e.target.dataset.apple != undefined) {
        alert("apple a day keep doctor away");
    } else {
        alert(e.target.innerHTML);
    }
});

//delegation ends here

//debouncing start here

let inputField = document.querySelector("#user-input");
let timer, input, count = 0;
inputField.addEventListener("keyup", () => {
    clearTimeout(timer);
    timer = setTimeout(dataShow, 300);
});

function dataShow() {
    console.log("Getting data....." + count);
    count++;
}